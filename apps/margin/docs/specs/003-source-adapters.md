# Spec 003 — Source adapters

**Status:** ready (locked 2026-06-23) · **Date:** 2026-06-23 · **App:** margin

One uniform, **read-only** seam over the five sources (Jira, Fathom, Gmail, Google Calendar, Slack) via
Composio — so the edition builder gets normalised signals and never knows a source's specifics.

## Why
Margin's one job is **synthesis across silos** (charter §1) — weighing a blocked teammate, a meeting
commitment, an unanswered DM and a stale ticket against each other. That needs every source reduced to a
common shape. And it must be **read-only**: Margin recommends, it never executes (Article VII), and it
watches your work, never you (Article X).

## What it does
- **Happy:** at build time (the Cron Worker, spec 001/004), each adapter fetches a **bounded recent
  window** from its source via Composio and returns a list of normalised **Signals**. The builder
  consumes them source-agnostically; ranking happens later (005).
- **Empty:** a source has nothing in-window → an empty list. The edition still builds (quiet day, 007).
  Emptiness is normal, never an error.
- **When it fails:** a source or Composio call errors → that source's signals are simply **absent** this
  edition; it's logged, the build continues, and the edition may carry a calm one-liner ("couldn't reach
  Slack today") or stay silent. Never an alarm, never a retry-now prompt — it self-heals next cadence.

## Not this (non-goals)
- **No writes, ever.** No sending, posting, replying, creating, or status-changing from Margin. The seam
  has no write path (see below).
- No live polling / streaming — sources are read once per edition build.
- No deep semantic classification here — adapters stay "dumb"; judgement lives in ranking (005).

## How (the plan)

**The seam.** A `SourceAdapter` is a tiny, uniform interface — `fetch(window) → Signal[]` — and *nothing
else*. There is **no write method to call**, so read-only is structural, not just policy. Composio sits
behind the seam (swappable), and the builder depends only on the seam.

**The Signal shape (normalised).** Every adapter emits the same record so ranking is source-agnostic:
`{ source, kind, title, who, when, link, urgencyHints?, raw }` — e.g. *kind* = blocker / awaiting-reply /
commitment / meeting / mention; *link* opens the item in its source; *raw* keeps the original for audit.

**What each source contributes (the raw material):**

| Source | Read (in-window) | Feeds |
|---|---|---|
| **Jira** | My open/active issues, blockers, status changes, @-mentions, stale tickets | Work-on-next, the plate |
| **Fathom** | Recent meeting summaries + action items / commitments I made | Work-on-next, the plate |
| **Gmail** | Human mail awaiting a reply (light noise-filter only) | The plate |
| **Google Calendar** | Today + the week's meetings, focus blocks, working location | The Forecast |
| **Slack** | DMs, @-mentions, blocked teammates, unanswered threads | Work-on-next, the plate |

**Read-only enforcement.** Wire only the fetch/list/get Composio tools per source; never the
send/create/update/delete ones. Use read scopes on the connected accounts where the source allows.

**Auth boundary (vs spec 002).** The sources are read via **Composio connected accounts** authorised by
Shakil, used **server-side** by the Worker — this is separate from the user-facing **Google SSO / Access**
gate (002). Composio connection secrets live in Worker bindings (002), never on the client.

**Privacy.** Signals are processed in the Worker and stored only as needed to compose the edition (D1);
single-user, his own data, no telemetry (Article X).

## Research
Composio covers all five sources, **including Fathom** (it was the open question). Logged in
[`research.md`](../../../../docs/research.md). Exact tool slugs are a build detail.

## Open questions
- Exact Composio tool slugs + minimal scopes per source (build-time).
- Gmail "human mail vs noise" — how much pre-filter in the adapter vs leaving it to ranking (005)? Lean:
  adapter does only obvious noise-stripping; real judgement in 005 (reuse inbox-0 heuristics).
- Rate limits / caching of Composio calls within a single build.
- Window size per source (e.g. 7–14 days) — settle with 004/005.

## Tasks
*(fill at build time — smallest first)*
- [ ] Define the `SourceAdapter` interface + the `Signal` type (read-only, no write methods).
- [ ] One adapter end-to-end first: **Calendar** (simplest, feeds the Forecast) via Composio read tools.
- [ ] Empty-window + source-failure paths (return empty / absent, never throw the build).
- [ ] The remaining four adapters against the same interface.
- [ ] A fake/fixture adapter for local dev + tests (no live Composio needed to build an edition).

## Constitution Check
1. **Serves:** the charter's one job (synthesis across silos); VII (read-only, never executes); X (private, his own data, no telemetry).
2. **Violates:** none — confirmed vs Articles + Budgets + Banned patterns (no live polling, no writes).
3. **Subtracts:** the seam has no write path at all — a whole class of capability deliberately absent; adapters stay dumb (no classification creep).
4. **Calm:** a failed source degrades to absent-and-logged, never an alarm or a refresh prompt; empty is a first-class path.
