#!/usr/bin/env node
// Compose today's study edition end-to-end: loadFeeds -> fetchFeeds(window) -> composeEdition -> render.
// Usage:  node apps/study/bin/edition.mjs [windowDays]   (default 7, per spec 004)

import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { readFileSync, existsSync } from 'node:fs'
import { loadFeeds } from '../src/lib/feeds.mjs'
import { fetchFeeds } from '../src/lib/fetcher.mjs'
import { composeEdition, composeEditionV2, renderEditionText } from '../src/lib/edition.mjs'
import { claudeClusterer } from '../src/lib/cluster-claude.mjs'

const here = dirname(fileURLToPath(import.meta.url))

// Load local secrets from apps/study/.dev.vars (gitignored) into the environment, if present.
const devVars = join(here, '..', '.dev.vars')
if (existsSync(devVars)) {
  for (const line of readFileSync(devVars, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)$/)
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim()
  }
}

const feeds = loadFeeds(join(here, '..', 'feeds.toml'))
const windowDays = Number(process.argv[2]) || 7

const v2 = process.argv.includes('--v2') // spec 009: opt-in AI clustering (needs ANTHROPIC_API_KEY)

const { signals, absent } = await fetchFeeds({ feeds, windowDays })
const edition = v2
  ? await composeEditionV2({ signals, feeds, number: 1, clusterImpl: claudeClusterer() })
  : composeEdition({ signals, feeds, number: 1 })

console.log(renderEditionText(edition))
if (v2 && edition.degraded) {
  console.error('\n(v2 requested, but clustering was unavailable — showing the plain 005 edition)')
}
if (absent.length) {
  const s = absent.length > 1 ? 's' : ''
  console.error(`\n(${absent.length} source${s} couldn't be reached this edition — that's okay, it self-heals next time)`)
}
