// Offline tests for the feed fetcher — built-in node:test, no dependency.
//   run:  node --test apps/study/test/
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { parseFeed } from '../src/lib/parse.mjs'
import { parseFeedsToml } from '../src/lib/feeds.mjs'
import { fetchFeeds } from '../src/lib/fetcher.mjs'
import { inferKind, text, toIso } from '../src/lib/signal.mjs'

const RSS = `<?xml version="1.0"?><rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/">
<channel><title>Test Blog</title>
  <item>
    <title><![CDATA[First & foremost]]></title>
    <link>https://example.com/a</link>
    <pubDate>Tue, 15 Jul 2026 09:00:00 GMT</pubDate>
    <dc:creator>Ada</dc:creator>
    <guid>https://example.com/a</guid>
  </item>
  <item>
    <title>Second&#39;s post</title>
    <link>https://youtu.be/xyz</link>
    <pubDate>Mon, 01 Jan 2000 09:00:00 GMT</pubDate>
  </item>
</channel></rss>`

const ATOM = `<?xml version="1.0" encoding="utf-8"?><feed xmlns="http://www.w3.org/2005/Atom">
<title>Atom Blog</title>
  <entry>
    <title>Atom one</title>
    <link rel="edit" href="https://example.com/edit"/>
    <link rel="alternate" href="https://example.com/atom-1"/>
    <published>2026-07-14T10:00:00Z</published>
    <author><name>Grace</name></author>
    <id>tag:example.com,2026:1</id>
  </entry>
</feed>`

test('text decodes entities and strips CDATA', () => {
  assert.equal(text('<![CDATA[First & foremost]]>'), 'First & foremost')
  assert.equal(text('Second&#39;s post'), "Second's post")
})

test('toIso normalises RFC822 and returns empty on junk', () => {
  assert.equal(toIso('Tue, 15 Jul 2026 09:00:00 GMT'), '2026-07-15T09:00:00.000Z')
  assert.equal(toIso('not a date'), '')
})

test('parseFeed reads RSS items', () => {
  const items = parseFeed(RSS)
  assert.equal(items.length, 2)
  assert.equal(items[0].title, 'First & foremost')
  assert.equal(items[0].link, 'https://example.com/a')
  assert.equal(items[0].who, 'Ada')
})

test('parseFeed reads Atom entries, prefers alternate link + author name', () => {
  const items = parseFeed(ATOM)
  assert.equal(items.length, 1)
  assert.equal(items[0].link, 'https://example.com/atom-1')
  assert.equal(items[0].who, 'Grace')
})

test('inferKind spots video by URL', () => {
  assert.equal(inferKind('https://youtu.be/xyz'), 'video')
  assert.equal(inferKind('https://example.com/a'), 'article')
})

test('parseFeedsToml reads the [[feeds]] schema, ignores comments', () => {
  const feeds = parseFeedsToml('# c\n[[feeds]]\ntitle = "X"\nurl = "https://x/feed"\nsection = "S"\nwhy = "because"\n')
  assert.equal(feeds.length, 1)
  assert.deepEqual(feeds[0], { title: 'X', url: 'https://x/feed', section: 'S', why: 'because' })
})

test('fetchFeeds normalises, windows, dedupes, and isolates failures', async () => {
  const feeds = [
    { title: 'Test Blog', url: 'rss://', why: 'w1' },
    { title: 'Atom Blog', url: 'atom://', why: 'w2' },
    { title: 'Dupe', url: 'dupe://', why: 'w3' },
    { title: 'Broken', url: 'boom://', why: 'w4' },
  ]
  const fetchImpl = async (url) => {
    if (url === 'rss://') return { ok: true, text: async () => RSS }
    if (url === 'atom://') return { ok: true, text: async () => ATOM }
    if (url === 'dupe://') return { ok: true, text: async () => RSS } // same links as Test Blog
    throw new Error('network down')
  }
  const now = new Date('2026-07-16T00:00:00Z')
  const { signals, absent } = await fetchFeeds({ feeds, windowDays: 7, now, fetchImpl })

  // window drops the year-2000 item; dedupe drops the repeated links from 'Dupe'
  assert.equal(signals.length, 2, 'one in-window RSS item + one Atom item, deduped')
  const links = signals.map((s) => s.link).sort()
  assert.deepEqual(links, ['https://example.com/a', 'https://example.com/atom-1'])

  // the in-window RSS signal is fully normalised, carries its feed's why, no urgency field
  const a = signals.find((s) => s.link === 'https://example.com/a')
  assert.equal(a.source, 'Test Blog')
  assert.equal(a.kind, 'article')
  assert.equal(a.who, 'Ada')
  assert.equal(a.why, 'w1')
  assert.ok(!('urgency' in a) && !('urgencyHints' in a))

  // the broken feed is absent, not fatal
  assert.equal(absent.length, 1)
  assert.equal(absent[0].feed, 'Broken')
})
