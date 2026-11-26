// The edition composer — specs 004 (the reading-room edition) + 005 (curation & ordering).
// A pure transform: Signal[] -> a finite, dated, sectioned Edition. No unread counts, no urgency.
// v1 ordering is deterministic (section order taken from the feed list; published newest-first within
// a section — spec 005, no AI ranking). Read-state, continuity, and retention are the store's job
// (the next brick) — kept out of here on purpose (Subtraction Ladder: build the transform, not the DB).

/**
 * @typedef {Object} EditionSection
 * @property {string} name
 * @property {import('./signal.mjs').Signal[]} items  newest-first
 *
 * @typedef {Object} Edition
 * @property {number} number
 * @property {string} date      ISO date (YYYY-MM-DD) — the edition's dateline
 * @property {EditionSection[]} sections  feed-list section order; empty sections dropped
 * @property {number} total     internal tally — never rendered as an unread nag (spec 004)
 * @property {boolean} quiet    true when nothing new — a first-class quiet day (spec 007)
 */

/** Unique sections in the order they first appear in the feed list. */
import { clusterEdition } from './cluster.mjs'

function sectionOrder(feeds) {
  const order = []
  for (const f of feeds) {
    const s = f.section || 'Other'
    if (!order.includes(s)) order.push(s)
  }
  return order
}

const byWhenDesc = (a, b) => (Date.parse(b.when) || 0) - (Date.parse(a.when) || 0)

const dateline = (now) => new Date(now).toISOString().slice(0, 10)

/**
 * Compose a finite, dated, sectioned edition from fetched Signals.
 * @param {{signals?: import('./signal.mjs').Signal[], feeds?: Array<{title:string,section?:string}>, number?: number, now?: Date}} opts
 * @returns {Edition}
 */
function groupIntoEdition({ items = [], feeds = [], number = 1, now = new Date() }) {
  const sourceSection = new Map(feeds.map((f) => [f.title, f.section || 'Other']))
  const order = sectionOrder(feeds)
  const buckets = new Map(order.map((s) => [s, []]))

  for (const it of items) {
    const section = sourceSection.get(it.source) || 'Other'
    if (!buckets.has(section)) { buckets.set(section, []); order.push(section) }
    buckets.get(section).push(it)
  }

  const sections = order
    .map((name) => ({ name, items: (buckets.get(name) || []).slice().sort(byWhenDesc) }))
    .filter((s) => s.items.length > 0)

  return { number, date: dateline(now), sections, total: items.length, quiet: items.length === 0 }
}

export function composeEdition({ signals = [], feeds = [], number = 1, now = new Date() } = {}) {
  return groupIntoEdition({ items: signals, feeds, number, now })
}

/**
 * v2 (spec 009) — opt-in AI clustering layered over the deterministic 005 edition.
 * Falls back to the 005 edition on any cluster failure (R6), flagged with `degraded: true`.
 * @param {{signals?: import('./signal.mjs').Signal[], feeds?: Array, clusterImpl?: Function, number?: number, now?: Date}} opts
 * @returns {Promise<Edition & {degraded: boolean}>}
 */
export async function composeEditionV2({ signals = [], feeds = [], clusterImpl, number = 1, now = new Date() } = {}) {
  const entries = clusterImpl ? await clusterEdition({ signals, clusterImpl }) : null
  if (!entries) return { ...composeEdition({ signals, feeds, number, now }), degraded: true }
  const items = entries.map((e) => ({
    ...e.representative,
    alsoSources: e.sources.filter((s) => s !== e.representative.source),
    note: e.note,
  }))
  return { ...groupIntoEdition({ items, feeds, number, now }), degraded: false }
}

/** Render an edition as calm plain text for a glance. No counts; quiet day is affirming (spec 007). */
export function renderEditionText(edition) {
  const out = [`study · edition ${edition.number} · ${edition.date}`, '']
  if (edition.quiet) {
    out.push("Nothing new to read today — that's a fine kind of day.")
    return out.join('\n')
  }
  for (const section of edition.sections) {
    out.push(section.name)
    for (const item of section.items) {
      const when = item.when ? `  (${item.when.slice(0, 10)})` : ''
      const who = item.who ? `  — ${item.who}` : ''
      const also = item.alsoSources && item.alsoSources.length ? `  · also in ${item.alsoSources.join(', ')}` : ''
      out.push(`  · ${item.title}${who}${when}${also}`)
      out.push(`    ${item.link}`)
      if (item.note && item.note.text) out.push(`    ${item.note.kind}: ${item.note.text}`)
    }
    out.push('')
  }
  return out.join('\n').trimEnd()
}
