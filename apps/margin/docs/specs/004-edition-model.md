# Spec 004 — The edition model

**Status:** ready (locked 2026-06-23) · **Date:** 2026-06-23 · **App:** margin

How an edition is composed, numbered, stored, and served — and **what happens to done / undone / let-go
work between editions**. This is where "finite by default" and "no guilt" become concrete.

## Why
The daily edition *is* how Margin honours Article I (finite — completion is the product) and Article II
(it defends rest — waits quietly, never interrupts). The continuity rules are where Article IV (no guilt;
undone things roll gently) and Article III (capacity, not obligation) live or die.

## What it does
- **Happy:** on the in-hours Cron cadence, an edition is composed from the ranked Signals (005), **numbered
  and dated**, stored, and **waits quietly** — no push, no interruption (004 is the "newspaper, not
  dashboard" mechanics). Opening Margin shows today's complete edition.
- **Quiet & empty:** a light edition still builds — the quiet-day state (007). Emptiness is normal.
- **When it fails:** **serve the last good edition** with an honest one-line note; never a blank or an
  alarm (Article VI; ties to 001's graceful-degrade).

## Continuity — done / undone / leftover (the baked-in answer)

**Margin is a mirror, not a task store** (read-only — see charter). Each edition re-derives from the live
sources; there is **no backlog list Margin maintains and you must clear.** From that, each case falls out:

- **Completed** → you did it in the source, so it drops off the plate, and gets a moment in **Settled**
  (done + let-go). Completion is made visible and satisfying (Article I) — it leaves honestly, not
  silently.
- **Incomplete / leftover** → the source still shows it, so it **quietly reappears** next edition,
  re-ranked by the rubric. **Never "overdue", never a red debt count, never a "skipped N times"
  counter** (Article IV). Staleness may nudge a rank gently (005) but is never shamed. The voice is
  "this'll keep," not "you're behind."
- **Finite & disposable** → yesterday's edition is **not** a backlog to work down; today's is simply
  today's complete read. Nothing accumulates into a guilt pile. Past editions are kept briefly as
  *archives* (a record), never as an open to-do list.

## Not this (non-goals)
- No carry-over backlog, no "cleared / outstanding" counts, no streaks across editions.
- No writing to sources to mark things done/won't-do (read-only — charter).
- No manual refresh / pull-to-refresh; the edition is the unit, prepared on cadence.

## How (the plan)
- **Edition record:** number, date, and the composed contents — the hero (005), the ranked rest, Settled,
  the Forecast, and refs to the Spot / Cartoon assets (R2). Stored in **D1** (lean: a composed edition
  record + rows for the items it references — resolves the D1-vs-KV question carried from 001).
- **Build:** Cron (in-hours) → pull Signals (003) → rank (005) → compose → store → mark "ready". It
  **waits**; it never notifies or interrupts (Article II).
- **Settled derivation:** what closed in the sources since the last edition (done) — surfaced read-only.
- **Leftover handling:** simply re-derive + re-rank from live Signals; the build path carries **no**
  debt/overdue/counter state anywhere.

## Open questions
- **The "set aside for today" gesture + how "won't-do" reaches Settled.** Strict read-only means a
  let-go only shows in Settled if you declined it in the source — *unless* we add a tiny **local-only**
  one-day "set aside" (a soft snooze: no permanence, no counter, never a list). **Lean: ship without it
  first** — the gentle-reappear default is probably enough; add the snooze only if living with it shows a
  real need (subtract-by-default, Article VIII).
- Edition retention — how many past editions to keep (finite by nature; how finite?).
- Cadence specifics (build times, the in-hours window) — settle with 009.

## Tasks
*(fill at build time — smallest first)*
- [ ] Define the edition record shape (number, date, hero, ranked rest, Settled, Forecast, asset refs).
- [ ] Cron build → compose → store → "ready, waits quietly" (no push/interrupt).
- [ ] Settled derivation from source state since the last edition (read-only).
- [ ] Leftover path: re-derive + re-rank with **no** debt/overdue/counter anywhere — assert this in tests.
- [ ] Serve-last-good-edition on build failure, with an honest note.
- [ ] (Only if adopted) the local-only one-day "set aside" state.

## Constitution Check
1. **Serves:** I (finite edition is the unit), II (waits quietly), III (capacity-framed continuity), IV (leftovers roll gently — no guilt).
2. **Violates:** none — confirmed vs Articles + Budgets + Banned patterns (no manual refresh, no debt/streak counters, no writes to sources).
3. **Subtracts:** removes the backlog list, carry-over guilt, and any source writes; keeps local state minimal-or-none.
4. **Calm:** completed → Settled (celebrated); leftover → gentle reappear, never overdue; failed build → last good edition, never alarm; happy + quiet + fail paths all specified.
