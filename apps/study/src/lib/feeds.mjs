// Reader for study's feeds.toml — a controlled, self-authored schema: repeated [[feeds]]
// tables of `key = "value"` string pairs (spec 003). Deliberately NOT a general TOML parser —
// the format is ours and fixed, so a ~15-line reader beats a dependency (Subtraction Ladder).

import { readFileSync } from 'node:fs'

/** Parse feeds.toml text into [{ title, url, section, why }]. */
export function parseFeedsToml(toml) {
  const feeds = []
  let cur = null
  for (const raw of String(toml).split('\n')) {
    const line = raw.trim()
    if (!line || line.startsWith('#')) continue
    if (line === '[[feeds]]') { cur = {}; feeds.push(cur); continue }
    const m = line.match(/^([a-zA-Z0-9_]+)\s*=\s*"([\s\S]*)"$/)
    if (m && cur) cur[m[1]] = m[2]
  }
  return feeds.filter((f) => f.url && f.title)
}

/** Load + parse the feed list from a path. */
export function loadFeeds(path) {
  return parseFeedsToml(readFileSync(path, 'utf8'))
}
