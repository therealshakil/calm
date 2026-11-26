# Spec 001 — Architecture & ingest

**Status:** locked — co-authored with Shakil · **Date:** 2026-07-14 · **App:** study

How study is built and how reading gets *in*: the runtime, the item shape, and the boundary with Margin —
so every later spec plugs into a settled foundation. Resolves the charter's locked ingest decision (*reuse
the shape, not the engine*) into a concrete architecture, and closes the calm-council verify-queue.

## Why
The [charter](../charter.md) §4 pins the direction in one line — installable PWA, pre-fetched content, its
own ingest borrowing Margin's `Signal` shape. A spec set needs that foundation written once, explicitly, so
002–008 don't each re-decide it. Serves Article IX (small, few moving parts) and X (private, single-user),
and honours the locked charter rule that study stays **uncoupled** from Margin.

## What it does
study prepares a **finite reading edition on a quiet schedule** and serves it as a complete, dated thing to
read at your pace — never a live, refreshing feed (Article I). The architecture's job is to make that calm
and reliable:
- **Happy:** on a quiet cadence, study's own scheduled fetcher pulls the curated feed list, normalises each
  entry to a study `Signal`, and an edition is composed, stored, and **waits quietly**. The reader opens the
  installed PWA and reads a complete, offline-capable edition.
- **Quiet & empty:** the feeds return little or nothing new → the edition still builds, as a quiet-day
  edition (spec 007). Nothing new to read is a first-class state, never an error, never a nag.
- **When it fails:** a feed or the build fails → that source is simply **absent** this edition (logged);
  the edition builds from what resolved, or yesterday's holds with a quiet note. Never an alarm, never a
  refresh-now prompt — it self-heals next cadence.

## Not this (non-goals)
- **No shared engine with Margin.** study does not import, call, or depend on Margin's fetchers, Worker, or
  store. The two apps share a *convention*, not a runtime (locked charter decision).
- No live fetch from the reader, no CORS path, no streaming — content is pre-fetched; the reader only reads.
- No writes to any source (Article VII) — study reflects, never posts.
- No ai-scout in v1 (deferred — spec map fork settled feed-list-first, 2026-07-14).

## The study `Signal` (borrowed shape, study's payload)
study reuses Margin's `Signal` **skeleton** so the siblings read as family, but carries reading's payload,
not work's. A media item is an **invitation**, not an obligation — so the work-urgency fields are dropped.

`{ source, kind, title, who, when, link, why?, raw }`
- `kind` = `article | video | talk | podcast | post` (study's kinds — not Margin's blocker/commitment/…).
- `who` = author / channel; `when` = published; `link` opens the item at source; `raw` keeps the original.
- `why?` = the curation reason (why this item is here) — study's analogue, replacing Margin's
  `urgencyHints`. There is **no urgency field**: reading never inherits work's deadline gradient.

## How (the plan)
**Stack.** Same Cloudflare spine as Margin, but a **separate deployment**: study's own **Worker + Cron**
(its own trigger), **Cloudflare Access** as the only door (spec 002). study borrows Margin's *patterns*
(edition-as-artifact, `SourceAdapter`-shaped fetch) by reference — no shared code.

**Ingest seam.** A `SourceFetcher` is a tiny, uniform interface — `fetch(window) → Signal[]` — and nothing
else (read-only is structural: no write method exists). v1 has **one** fetcher: the **curated feed list**
(RSS/Atom/JSON feeds). Each fetcher is study-local; the composer consumes them source-agnostically.

**Edition as a pre-built artifact.** Like Margin, the edition is composed once per cadence, so the reader is
**mostly static / prerendered per edition** over a thin Worker API — nothing computes while you read
(Article I), and offline falls out for free.

**Own Cron Worker (verify-queue, resolved).** study runs its **own** scheduled Worker, not Margin's — the
uncoupling is the point. Same Cloudflare account, separate binding.

**Video-watching skill (verify-queue, resolved).** In v1 it is a **read-time helper**, not an ingest source
— it can enrich an item on open (transcript/keyframes) but does not pull the reading list. (Re-open as a
fast-follow source if wanted.)

**Data location (calmest-when-forced).** study's store (**EU-pinned D1**, per *Decided* below) is **pinned
to the EU jurisdiction** at creation;
any config-only flags may sit in KV (no residency control), never item content; single-user, his own data,
no telemetry (Article X). Follows Margin's rule ([`../../../margin/docs/specs/002-auth-privacy.md`](../../../margin/docs/specs/002-auth-privacy.md)).

## Requirements
- **R1 (Ubiquitous).** study shall run its own Worker + Cron, sharing no runtime, store, or fetcher with
  Margin.
- **R2 (Event).** WHEN the scheduled build runs, each `SourceFetcher` shall fetch a bounded recent window
  and return study `Signal[]`; the composer shall consume them source-agnostically.
- **R3 (Ubiquitous).** A `SourceFetcher` shall expose fetch/read only — no write method shall exist on the
  seam.
- **R4 (Event).** WHEN a fetcher returns empty or errors, THEN the edition shall still build (quiet-day or
  source-absent), logged, with no alarm and no refresh prompt.
- **R5 (Ubiquitous).** The study `Signal` shall carry no urgency field; curation intent lives in `why?`.
- **R6 (Ubiquitous).** The reader shall perform no live fetch; it reads a pre-built, prerendered edition and
  works offline.
- **R7 (Ubiquitous).** Item content shall live in an EU-pinned store; KV (if used) shall hold config/flags
  only; no telemetry.

## Decided (was open at draft)
- **Store: EU-pinned D1 + a prerendered static edition (locked 2026-07-14).** Consistent with Margin's
  pattern and the calmest-data rule, and keeps "works offline, no CORS". The literal static-files-in-repo
  route was considered and set aside as off-pattern. (Shakil, 2026-07-14.)

## Deferred (settle in later specs)
- Feed-list home: where the curated list of feeds is defined (a repo file vs a small config) — settle with
  003.
- Build cadence + window size (e.g. daily, last N days) — settle with 004.

## Constitution Check
1. **Serves:** IX (one small stack, few moving parts; inherits Margin by reference), X (single-user,
   private, EU-pinned, no telemetry), I (finite pre-built edition, nothing computes while reading).
2. **Violates:** none — confirmed vs Articles + Margin's budgets; no live path, no writes, no shared engine.
3. **Subtracts:** reuses Margin's *patterns* not its *code* (no new shared surface); v1 has one fetcher and
   no ai-scout; the `Signal` sheds work's urgency fields rather than carrying them over.
4. **Calm:** empty and failure are first-class (quiet-day / source-absent); no alarms, no refresh prompts;
   reading carries no urgency by construction.
