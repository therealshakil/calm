# Spec 009 — Cross-source curation: clustering & consensus (v2)

**Status:** locked — co-authored with Shakil · **Date:** 2026-07-15 · **App:** study

An **opt-in AI layer** over the deterministic edition ([005](./005-curation.md)): when sources converge on a
story, or one voice dominates, cluster by topic and present **one representative item + all the sources
covering it + a terse consensus/dissent line** (only when they genuinely diverge) — so the reader gets
diversity of *view*, not a wall of one voice. Un-defers the **content-relevance** half of the north star
(charter §5); the behavioural "knows-you" personalisation stays deferred. Debated via the
[calm-council](../../../../docs/specs/011-calm-council.md) (2026-07-15).

## Why
The first live edition was dominated by one prolific source (23 of 33 items in a section). The deterministic
fix (005's fair rotation) stops the flood but gives *fairness*, not *relevance* — and the council's
first-principles read is that the real target is **diversity of view**, of which voice-dominance is only the
symptom. Diversity of view needs judgement over content, i.e. AI. Doing that **transparently, opt-in, at
build time** gets the benefit without becoming the opaque engagement feed study exists against (III, VII).

## What it does
- **Happy:** at build (after fetch, 003), in-window Signals are clustered by story/topic. Each multi-source
  cluster becomes one edition entry — a representative item, the other sources (each linked), and, *only
  where sources diverge*, a one-line consensus/dissent note. Single-source items pass through unchanged. The
  edition reads calmer and view-diverse; nothing is hidden.
- **Quiet & empty:** few items / no clusters → behaves exactly like the deterministic edition (005).
- **When it fails:** the AI pass errors, times out, or hits its cost cap → the edition **falls back to the
  005 deterministic order**, logged, no alarm. AI is an enhancement, never a dependency for an edition.

## Not this (non-goals)
- **No behavioural personalisation** — no "knows-you", no reader-behaviour signals. That half of the north
  star stays deferred.
- **No hiding or ranking-what-you-should-read** — clustering groups, it never buries; every source in a
  cluster is shown and linked. The raw items are always reachable.
- **No manufactured dissent** — a consensus/dissent line appears only when sources *genuinely* disagree;
  agreement is stated plainly, never dramatised into a fake debate.
- **Not default** — opt-in; the deterministic edition (005) stays the default.
- **No live inference** — one bounded pass at build time, like the rest of the edition.

## How (the plan)
- **Opt-in flag** (config) turns v2 on; off = pure 005.
- **One bounded Claude-API pass at build:** (1) cluster in-window Signals by story/topic; (2) for each
  multi-source cluster pick a representative item and, only where sources diverge, a ≤2-line consensus/dissent
  summary **grounded in the clustered items** (with confidence).
- **Transparent + additive:** every cluster lists all its sources + links; the AI layer never removes an
  item — it groups and annotates, inspectably.
- **Honest (research-method + council):** the summary cites the items it draws from and claims nothing beyond
  them; if it can't tell whether sources agree, it says so rather than inventing a split.
- **Degrade:** on error/timeout/cost-cap → deterministic 005 edition, logged, no alarm.
- **Cost/cadence:** build-time only (out-of-hours cron), bounded by a per-edition cost cap.
- **Optional (deferred within v2):** invoke the calm-council on a single genuinely contested claim to include
  a short debate result — kept optional, to avoid over-build (ND/User: embedded debate risks noise).

## Requirements
- **R1 (Ubiquitous).** v2 shall be opt-in; with it off, editions shall compose per spec 005 unchanged.
- **R2 (Event).** WHEN v2 is on and multiple sources cover one story, the composer shall present one
  representative item plus all contributing sources, each linked.
- **R3 (Event).** WHEN clustered sources genuinely diverge, the composer shall add a terse, grounded
  consensus/dissent line; WHEN they agree, it shall not manufacture a disagreement.
- **R4 (Ubiquitous).** The AI layer shall be additive and transparent — no item shall be hidden; every
  clustered source shall remain visible and linked.
- **R5 (Ubiquitous).** Clustering shall use item **content only**; no reader-behaviour signal shall be used.
- **R6 (Unwanted).** IF the AI pass errors, times out, or exceeds its cost cap, THEN the edition shall fall
  back to the deterministic 005 order, logged, with no alarm.
- **R7 (Ubiquitous).** The AI pass shall run at build time only (never live), bounded by a per-edition cost
  cap.

## Open questions
- Clustering method + model (Claude API; prompt-clustering vs embeddings) — build-time.
- Per-edition cost-cap value.
- Representative-item rule (earliest / most-complete / deliberately the *non-dominant* source, to counter
  domination?).
- Whether the optional calm-council-on-a-claim sub-feature is in v2 or a later increment (lean: later).

## Constitution Check
1. **Serves:** the charter's "informed, not fed"; III (transparent — sources shown, grounded summaries);
   VII (synthesises + recommends, never hides or decides); diversity of view.
2. **Violates:** none while the guardrails hold — the opaque-feed risk is fenced by opt-in + content-only +
   additive-transparent + no-behaviour + build-time + no-manufactured-dissent.
3. **Subtracts:** reuses 005 as floor *and* fallback; AI is one bounded, opt-in build pass; behavioural
   personalisation and the debate sub-feature stay deferred.
4. **Calm:** degrades to 005 on failure; quiet day fine; no live inference; no hidden ranking; no fake drama;
   the raw sources are always visible.
