# study

The calm reading room — Margin's sibling. See [`docs/charter.md`](./docs/charter.md) and the
locked [spec set](./docs/specs/). In the build phase now; specs 001–008 are locked.

## Feed list

The sources study gathers live in [`feeds.toml`](./feeds.toml) — a versioned, hand-editable list
(spec 003). Adding or removing a feed is a one-line edit + commit.

## The feed fetcher (first build brick)

`SourceFetcher` (spec 003): read the feed list, fetch each feed, return normalised study
`Signal[]` — read-only, per-feed failures isolated. Zero dependencies (native `fetch` + a small
RSS/Atom reader — Subtraction Ladder: native before a parser dep).

- `src/lib/feeds.mjs` — read `feeds.toml`
- `src/lib/parse.mjs` — minimal RSS/Atom reader
- `src/lib/signal.mjs` — the `Signal` shape + helpers
- `src/lib/fetcher.mjs` — `fetchFeeds({ feeds, windowDays, now, fetchImpl }) -> { signals, absent }`
- `src/lib/edition.mjs` — `composeEdition(...)` (deterministic, spec 004/005) + `composeEditionV2(...)`
  (opt-in AI clustering, spec 009; falls back to 005) + `renderEditionText(edition)`
- `src/lib/cluster.mjs` — v2 clustering logic; the AI is an injected `clusterImpl` (spec 009)
- `src/lib/cluster-claude.mjs` — the real `clusterImpl` via the Claude API (native fetch, zero-dep; needs
  `ANTHROPIC_API_KEY`)

Run the fetcher against the real feeds (summary to stderr, `Signal[]` JSON to stdout):

    node apps/study/bin/fetch.mjs 14

Compose today's edition end-to-end (fetch → compose → calm text):

    node apps/study/bin/edition.mjs 7

Opt into v2 cross-source clustering (spec 009; needs `ANTHROPIC_API_KEY`, else degrades to 005):

    node apps/study/bin/edition.mjs 7 --v2

Test offline (no network):

    node --test apps/study/test/

Not yet built: the **store** (read-state, continuity, retention — spec 004), the Cloudflare Worker +
Cron, and the reader UI (spec 006). Both the fetcher and the composer are plain modules, so the
Worker can import them unchanged.
