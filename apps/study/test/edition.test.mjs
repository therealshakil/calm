// Offline tests for the edition composer — node:test, no dependency.
//   run:  node --test apps/study/test/
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { composeEdition, renderEditionText } from '../src/lib/edition.mjs'

const feeds = [
  { title: 'A', section: 'First' },
  { title: 'B', section: 'Second' },
  { title: 'C', section: 'First' },
]
const sig = (source, title, when) => ({
  source, kind: 'article', title, who: source, when, link: `https://x/${title}`, why: 'w', raw: {},
})

test('groups by section (feed order), orders items newest-first, drops empty sections', () => {
  const signals = [
    sig('A', 'a-old', '2026-07-01T00:00:00Z'),
    sig('C', 'c-new', '2026-07-10T00:00:00Z'),
    sig('B', 'b-mid', '2026-07-05T00:00:00Z'),
  ]
  const ed = composeEdition({ signals, feeds, number: 3, now: new Date('2026-07-15T09:00:00Z') })
  assert.equal(ed.number, 3)
  assert.equal(ed.date, '2026-07-15')
  assert.equal(ed.quiet, false)
  assert.equal(ed.total, 3)
  assert.deepEqual(ed.sections.map((s) => s.name), ['First', 'Second'])
  assert.deepEqual(ed.sections[0].items.map((i) => i.title), ['c-new', 'a-old'])
  assert.deepEqual(ed.sections[1].items.map((i) => i.title), ['b-mid'])
})

test('a quiet day is first-class (no signals -> quiet, no sections, affirming copy)', () => {
  const ed = composeEdition({ signals: [], feeds, now: new Date('2026-07-15T00:00:00Z') })
  assert.equal(ed.quiet, true)
  assert.equal(ed.sections.length, 0)
  assert.match(renderEditionText(ed), /fine kind of day/)
})

test('unknown-source items fall into Other', () => {
  const ed = composeEdition({ signals: [sig('Z', 'z1', '2026-07-10T00:00:00Z')], feeds })
  assert.deepEqual(ed.sections.map((s) => s.name), ['Other'])
})

test('render shows the dateline and never an unread count', () => {
  const ed = composeEdition({ signals: [sig('A', 'a1', '2026-07-10T00:00:00Z')], feeds, number: 2, now: new Date('2026-07-15T00:00:00Z') })
  const txt = renderEditionText(ed)
  assert.match(txt, /edition 2 · 2026-07-15/)
  assert.doesNotMatch(txt, /unread/i)
  assert.doesNotMatch(txt, /\b\d+ (new|items)\b/)
})
