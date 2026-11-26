#!/usr/bin/env node
// Run the study feed fetcher against the real feeds.toml and report.
// Usage:  node apps/study/bin/fetch.mjs [windowDays]   (default 14 for a fuller glance)
// A calm summary goes to stderr; the full Signal[] goes to stdout as JSON (for the composer).

import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { loadFeeds } from '../src/lib/feeds.mjs'
import { fetchFeeds } from '../src/lib/fetcher.mjs'

const here = dirname(fileURLToPath(import.meta.url))
const feeds = loadFeeds(join(here, '..', 'feeds.toml'))
const windowDays = Number(process.argv[2]) || 14

const { signals, absent } = await fetchFeeds({ feeds, windowDays })

const bySource = new Map()
for (const s of signals) {
  if (!bySource.has(s.source)) bySource.set(s.source, [])
  bySource.get(s.source).push(s)
}

console.error(`\n${signals.length} signals · ${feeds.length - absent.length}/${feeds.length} feeds · last ${windowDays} days\n`)
for (const [source, items] of bySource) console.error(`  ${String(items.length).padStart(2)}  ${source}`)
if (absent.length) {
  console.error('\n  absent this run (isolated, not fatal):')
  for (const a of absent) console.error(`   -  ${a.feed}: ${a.error}`)
}
console.error('')

process.stdout.write(JSON.stringify(signals, null, 2) + '\n')
