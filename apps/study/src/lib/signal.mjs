// The study Signal — spec 001 (borrowed shape, study's payload).
//   { source, kind, title, who, when, link, why?, raw }
// A media item is an *invitation*, not an obligation — so there is no urgency field.

/**
 * @typedef {Object} Signal
 * @property {string} source  the feed title
 * @property {'article'|'video'|'talk'|'podcast'|'post'} kind
 * @property {string} title
 * @property {string} who     author / channel (falls back to source)
 * @property {string} when    ISO 8601 published date ('' if undated)
 * @property {string} link    canonical item URL
 * @property {string} [why]   curation reason, carried from the feed list
 * @property {*} raw          the original parsed entry, for audit
 */

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' }

/** Decode the handful of XML/HTML entities that show up in feed titles. */
export function decodeEntities(s) {
  return String(s).replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z][a-zA-Z0-9]*);/g, (m, e) => {
    if (e[0] === '#') {
      const code = e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10)
      return Number.isFinite(code) ? String.fromCodePoint(code) : m
    }
    return ENTITIES[e] ?? m
  })
}

/** Read a text node: literal CDATA content, or entity-decoded plain text. */
export function text(s) {
  if (s == null) return ''
  const m = String(s).match(/<!\[CDATA\[([\s\S]*?)\]\]>/)
  if (m) return m[1].trim()
  return decodeEntities(String(s)).replace(/\s+/g, ' ').trim()
}

/** Normalise any parseable date to ISO 8601; '' when absent or unparseable (not an error). */
export function toIso(dateStr) {
  if (!dateStr) return ''
  const d = new Date(String(dateStr).trim())
  return Number.isNaN(d.getTime()) ? '' : d.toISOString()
}

/** Infer the study `kind` from the link and any enclosure hint. Defaults to 'article'. */
export function inferKind(link, hints = {}) {
  const url = String(link || '')
  if (/(?:youtube\.com|youtu\.be|vimeo\.com)/i.test(url)) return 'video'
  const enc = String(hints.enclosureType || '')
  if (/^audio\//i.test(enc)) return 'podcast'
  if (/^video\//i.test(enc)) return 'video'
  return 'article'
}
