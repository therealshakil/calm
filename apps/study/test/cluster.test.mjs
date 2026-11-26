// Offline tests for v2 cross-source curation (spec 009) — node:test, no network, fake clusterImpl.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { clusterEdition } from '../src/lib/cluster.mjs'
import { composeEditionV2 } from '../src/lib/edition.mjs'

const sig = (source, title, when) => ({
  source, kind: 'article', title, who: source, when, link: `https://x/${source}/${title}`, why: 'w', raw: {},
})

// Prolific source "A" (2 items) + "B" (1). A story links one A item with the B item.
const signals = [
  sig('A', 'story-a', '2026-07-10T00:00:00Z'),
  sig('A', 'solo-a', '2026-07-09T00:00:00Z'),
  sig('B', 'story-b', '2026-07-11T00:00:00Z'),
]
const feeds = [{ title: 'A', section: 'S1' }, { title: 'B', section: 'S1' }]

const fakeCluster = async () => ({
  clusters: [
    { links: ['https://x/A/story-a', 'https://x/B/story-b'], note: { kind: 'dissent', text: 'they disagree' } },
    { links: ['https://x/A/solo-a'] }, // <2 items -> ignored, stays a singleton
  ],
})

test('clusterEdition groups multi-source clusters, leads with the least-represented source, keeps singletons', async () => {
  const entries = await clusterEdition({ signals, clusterImpl: fakeCluster })
  const cluster = entries.find((e) => e.items.length > 1)
  assert.ok(cluster, 'a multi-source cluster exists')
  assert.deepEqual(cluster.sources.sort(), ['A', 'B'])
  assert.equal(cluster.representative.source, 'B', 'leads with the quieter source (B has 1 item, A has 2)')
  assert.deepEqual(cluster.note, { kind: 'dissent', text: 'they disagree' })
  // solo-a is a singleton (its 1-link cluster was ignored); nothing is hidden
  const links = entries.flatMap((e) => e.items.map((i) => i.link)).sort()
  assert.deepEqual(links, signals.map((s) => s.link).sort())
})

test('clusterEdition returns null when the AI layer throws (caller falls back to 005)', async () => {
  const entries = await clusterEdition({ signals, clusterImpl: async () => { throw new Error('down') } })
  assert.equal(entries, null)
})

test('composeEditionV2 renders clustered representative with note + also-in, no item hidden', async () => {
  const ed = await composeEditionV2({ signals, feeds, clusterImpl: fakeCluster, now: new Date('2026-07-15T00:00:00Z') })
  assert.equal(ed.degraded, false)
  const all = ed.sections.flatMap((s) => s.items)
  // 3 signals -> 1 cluster (represented once) + 1 singleton = 2 rendered entries
  assert.equal(all.length, 2)
  const rep = all.find((i) => i.note)
  assert.equal(rep.source, 'B')
  assert.deepEqual(rep.alsoSources, ['A'])
})

test('composeEditionV2 degrades to the 005 edition when clustering fails', async () => {
  const ed = await composeEditionV2({ signals, feeds, clusterImpl: async () => { throw new Error('x') }, now: new Date('2026-07-15T00:00:00Z') })
  assert.equal(ed.degraded, true)
  assert.equal(ed.total, 3) // all three signals, ungrouped (005 behaviour)
})

test('composeEditionV2 with no clusterImpl is a degraded 005 edition (opt-in off)', async () => {
  const ed = await composeEditionV2({ signals, feeds, now: new Date('2026-07-15T00:00:00Z') })
  assert.equal(ed.degraded, true)
  assert.equal(ed.total, 3)
})
