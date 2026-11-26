# study — Spec Map

The ordered set of specs that take study from [charter](../charter.md) to build. Each follows the suite
[spec template](../../../../docs/spec-template.md), is backed by [research](../../../../docs/research.md),
and passes the [Constitution](../../../../CONSTITUTION.md) Check. We write and **lock** specs before
building (waterfall), one at a time.

Grounded in: the locked [charter](../charter.md) (one job, the reading-room form, pre-fetched spine, the
locked *reuse-the-shape-not-the-engine* ingest decision) and, by reference, [Margin's spec
set](../../../margin/docs/specs/) — study is Margin's sibling on the same spine, so it **inherits Margin's
patterns by reference** rather than re-deciding them.

**Locked 2026-07-15 (co-authored).** The set is settled; individual specs still change only by deliberate
revision (noted at the foot of this map).

**Status:** ▢ planned · ◐ drafting · ✓ locked · ⬛ shipped

| # | Spec | Covers | Inherits from Margin | Serves | Status |
|---|---|---|---|---|---|
| 001 | **[Architecture & ingest](./001-architecture.md)** | study's own fetchers + runtime; borrows Margin's `Signal` shape; uncoupled from Margin (the locked charter decision); EU-pinned D1 + prerendered edition | 001 spine (Cloudflare/PWA) by reference | IX, X | ✓ |
| 002 | **[Auth & privacy](./002-auth-privacy.md)** | Cloudflare Access, single-user, secrets off client/git — study deltas only | 002 near-wholesale | X | ✓ |
| 003 | **[Sources & the feed list](./003-sources.md)** | v1 source: the curated feed list (RSS/JSON); the fetcher; the quiet cadence; ai-scout deferred | 003 `SourceAdapter` shape | VII, X | ✓ |
| 004 | **[The reading-room edition](./004-edition.md)** | prepared, finite, dated; sections/items; read/unread **without** unread-count dread; continuity | 004 edition-model shape | I, II, IV | ✓ |
| 005 | **[Curation & ordering](./005-curation.md)** | ordered by provenance + recency (not urgency); no AI ranking in v1; north-star archetype feed deferred | 005 ranking (re-tuned) | III, VII | ✓ |
| 006 | **[The reader UI](./006-reader-ui.md)** | Reader-shaped (sources/sections · item list · reading pane); Google-Reader / newsboard feel; monochrome identity | 006 UI + Margin mockups | I, VI | ✓ |
| 007 | **[Calm states](./007-calm-states.md)** | a quiet day (nothing new is fine); absence-not-debt; no unread nagging; the stop | 007 near-wholesale | I, II, V, X | ✓ |
| 008 | **[PWA & install](./008-pwa-install.md)** | installable, offline-graceful (pre-fetched suits this) | Margin PWA/install | I, VI | ✓ |
| 009 | **[Cross-source curation (v2)](./009-cross-source-curation.md)** | opt-in AI layer over 005: topic-cluster across sources → one item + all sources + consensus/dissent; un-defers the content-relevance north star | — (study-specific) | III, VII | ✓ |

**Sources fork — settled 2026-07-14: feed-list-first.** v1 ingests only the curated feed list (RSS/JSON);
the ai-scout weekly digest is deferred to a fast-follow (it doesn't exist yet). See
[`spec-ideas.md`](./spec-ideas.md).

**Next:** build **009** (locked 2026-07-15). Core bricks shipping (feeds → fetcher → composer); the v2
clustering pass, store, Worker, and reader UI remain.

*This map can change by deliberate revision; if the order or set shifts, say why here.*
