// The study feed fetcher — spec 003's `SourceFetcher`: fetch(window) -> Signal[].
// Read-only (no write path exists). Per-feed failures are isolated: a bad feed is *absent*
// this run, logged, never fatal (spec 001/003). `fetchImpl` and `now` are injected so the
// whole thing is testable offline.

import { parseFeed } from './parse.mjs'
import { inferKind } from './signal.mjs'

const DAY_MS = 86_400_000

/**
 * Fetch the curated feeds and return normalised, windowed, deduped study Signals.
 * @param {Object} opts
 * @param {Array<{title:string,url:string,section?:string,why?:string}>} opts.feeds
 * @param {number} [opts.windowDays=7]  keep items published within this window
 * @param {Date}   [opts.now=new Date()]
 * @param {Function} [opts.fetchImpl=fetch]
 * @returns {Promise<{signals: import('./signal.mjs').Signal[], absent: Array<{feed:string,error:string}>}>}
 */
export async function fetchFeeds({ feeds, windowDays = 7, now = new Date(), fetchImpl = fetch } = {}) {
  const cutoff = now.getTime() - windowDays * DAY_MS
  const results = await Promise.all(feeds.map((f) => fetchOne(f, fetchImpl)))

  const absent = []
  const collected = []
  results.forEach((r, i) => {
    if (r.error) absent.push({ feed: feeds[i].title, error: r.error })
    else collected.push(...r.signals)
  })

  // Window: keep undated items too — an absent date is not a reason to drop reading.
  const windowed = collected.filter((s) => !s.when || Date.parse(s.when) >= cutoff)

  // Dedupe across feeds by link (fallback: id, then source+title).
  const seen = new Set()
  const signals = []
  for (const s of windowed) {
    const key = s.link || s.raw?.id || `${s.source}::${s.title}`
    if (seen.has(key)) continue
    seen.add(key)
    signals.push(s)
  }
  return { signals, absent }
}

async function fetchOne(feed, fetchImpl) {
  try {
    const res = await fetchImpl(feed.url, {
      headers: { 'user-agent': 'calm-study/0.1 (+feed reader; single-user)' },
      redirect: 'follow',
    })
    if (!res.ok) return { error: `HTTP ${res.status}` }
    const xml = await res.text()
    const signals = parseFeed(xml)
      .map((e) => ({
        source: feed.title,
        kind: inferKind(e.link, e.kindHints),
        title: e.title,
        who: e.who || feed.title,
        when: e.when || '',
        link: e.link,
        why: feed.why,
        raw: e.raw,
      }))
      .filter((s) => s.title && s.link)
    return { signals }
  } catch (err) {
    return { error: String((err && err.message) || err) }
  }
}
