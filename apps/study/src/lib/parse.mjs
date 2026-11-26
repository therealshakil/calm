// Minimal RSS / Atom reader — no dependency, native only (Subtraction Ladder: native
// before a parser dep). Good for well-formed feeds; if real feeds prove it fragile, this is
// the one place to swap in a parser dep. Returns raw entries; the fetcher normalises them.

import { text, toIso } from './signal.mjs'

function blocks(xml, tag) {
  const re = new RegExp(`<${tag}[\\s>][\\s\\S]*?</${tag}>`, 'gi')
  return xml.match(re) || []
}

function first(xml, tag) {
  const re = new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`, 'i')
  const m = xml.match(re)
  return m ? m[1] : ''
}

function attr(tagStr, name) {
  const m = String(tagStr).match(new RegExp(`${name}\\s*=\\s*"([^"]*)"`, 'i'))
  return m ? m[1] : ''
}

/** Parse feed XML into raw entries. Detects Atom vs RSS. */
export function parseFeed(xml) {
  const isAtom = /<feed[\s>]/i.test(xml) && !/<rss[\s>]/i.test(xml)
  return isAtom ? parseAtom(xml) : parseRss(xml)
}

function parseRss(xml) {
  return blocks(xml, 'item').map((item) => {
    const enclosure = (item.match(/<enclosure\b[^>]*>/i) || [''])[0]
    return {
      title: text(first(item, 'title')),
      link: text(first(item, 'link')) || attr((item.match(/<link\b[^>]*>/i) || [''])[0], 'href'),
      when: toIso(first(item, 'pubDate') || first(item, 'dc:date') || first(item, 'date')),
      who: text(first(item, 'dc:creator') || first(item, 'author')),
      id: text(first(item, 'guid')) || null,
      kindHints: { enclosureType: attr(enclosure, 'type') },
      raw: { xml: item },
    }
  })
}

function parseAtom(xml) {
  return blocks(xml, 'entry').map((entry) => {
    const links = entry.match(/<link\b[^>]*>/gi) || []
    let href = ''
    for (const l of links) {
      if (/rel\s*=\s*"alternate"/i.test(l)) { href = attr(l, 'href'); break }
    }
    if (!href && links.length) href = attr(links[0], 'href')
    const author = first(entry, 'author')
    return {
      title: text(first(entry, 'title')),
      link: href,
      when: toIso(first(entry, 'published') || first(entry, 'updated')),
      who: text(first(author, 'name')),
      id: text(first(entry, 'id')) || null,
      kindHints: {},
      raw: { xml: entry },
    }
  })
}
