// v2 cross-source curation — spec 009. The AI layer is injected as `clusterImpl`; this module builds
// the edition deterministically from what it returns. The AI's job is narrow and inspectable: group item
// links into clusters and, only where sources genuinely diverge, attach a note. It never ranks, hides, or
// reorders (the calm-council Skeptic's line). On any failure the caller falls back to the 005 edition.

/**
 * @typedef {Object} ClusterEntry
 * @property {import('./signal.mjs').Signal} representative
 * @property {import('./signal.mjs').Signal[]} items   all items in the cluster (>=1)
 * @property {string[]} sources                        unique source names
 * @property {{kind:'consensus'|'dissent', text:string}} [note]  only when sources genuinely diverge
 */

// Representative = the item from the LEAST-represented source (counters one-voice domination),
// tie-broken by newest. So a cluster leads with the quieter voice, not the prolific one.
function pickRepresentative(items, sourceCounts) {
  return items.slice().sort((a, b) => {
    const ca = sourceCounts.get(a.source) || 0
    const cb = sourceCounts.get(b.source) || 0
    if (ca !== cb) return ca - cb
    return (Date.parse(b.when) || 0) - (Date.parse(a.when) || 0)
  })[0]
}

/**
 * Turn Signals + an injected clusterImpl into cluster entries (multi-source clusters + singletons).
 * @param {{signals: import('./signal.mjs').Signal[], clusterImpl: (s:any[])=>Promise<{clusters:Array<{links:string[], note?:{kind:string,text:string}}>}>}} opts
 * @returns {Promise<ClusterEntry[]|null>} null when clustering failed (caller falls back to 005)
 */
export async function clusterEdition({ signals, clusterImpl }) {
  const byLink = new Map(signals.map((s) => [s.link, s]))
  const sourceCounts = new Map()
  for (const s of signals) sourceCounts.set(s.source, (sourceCounts.get(s.source) || 0) + 1)

  let clusters
  try {
    const out = await clusterImpl(signals)
    clusters = out && Array.isArray(out.clusters) ? out.clusters : null
  } catch {
    clusters = null
  }
  if (!clusters) return null

  const claimed = new Set()
  const entries = []
  for (const c of clusters) {
    const items = (c.links || []).map((l) => byLink.get(l)).filter(Boolean)
    if (items.length < 2) continue // a cluster needs >=2 real items; else it's a singleton
    for (const it of items) claimed.add(it.link)
    const note = c.note && c.note.text
      ? { kind: c.note.kind === 'consensus' ? 'consensus' : 'dissent', text: c.note.text }
      : undefined
    entries.push({
      representative: pickRepresentative(items, sourceCounts),
      items,
      sources: [...new Set(items.map((i) => i.source))],
      note,
    })
  }
  // Singletons pass through unchanged — nothing is hidden (spec 009 R4).
  for (const s of signals) {
    if (!claimed.has(s.link)) entries.push({ representative: s, items: [s], sources: [s.source] })
  }
  return entries
}
