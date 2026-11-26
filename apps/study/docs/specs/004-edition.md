# Spec 004 — The reading-room edition

**Status:** locked — co-authored with Shakil · **Date:** 2026-07-14 · **App:** study

The unit study serves: a prepared, finite, dated **edition** of reading — and the stance that makes it
calm, chiefly **read/unread without unread-count dread**. Inherits Margin's
[edition-model](../../../margin/docs/specs/004-edition-model.md) shape, tuned for reading.

## Why
study's charter form is "a prepared thing, presented finite, not a live feed" (§2). The edition is how that
becomes concrete — and the one place study most easily slips into the anxiety it exists to remove (the
unread pile). The stance has to be set here, once (Articles I finite, II, IV).

## What it does
- **Happy:** once per cadence, the day's `Signal`s (003) are composed into a dated edition — grouped into
  sections, ordered by 005 — and it **waits quietly**. You open it, read at your pace, and it's complete.
- **Quiet & empty:** nothing new in-window → a quiet-day edition still builds (the affirming path is
  spec 007). Emptiness is normal.
- **When it fails:** a source was absent (001/003) → the edition composes from what resolved; no alarm.

## Not this (non-goals)
- **No unread count, badge, or "X unread".** No streaks. No "you haven't read since…". Nothing that turns
  reading into a backlog or absence into debt.
- No infinite scroll, no live-appending feed — the edition is the finite unit.
- No auto-mark-read pressure games.

## How (the plan)
- **The edition record:** numbered + dated, referencing its `Signal` items; **sections** group items (by
  feed/source, or by `kind`). Composed once per cadence, stored (EU-pinned D1, per 001), prerendered.
- **Read state without dread:** read/unread is tracked **quietly** so you can pick up where you left off —
  but it is **never surfaced as a count, badge, or pressure**. Unread simply means "still here to read if
  you want", not a debt.
- **Continuity:** items live in their dated edition; an unread item may carry a gentle "still here" into the
  next edition, never a nag. Old editions **age out finitely** (retention below).
- **Cadence & window (settles the 001 deferral):** a **daily, out-of-hours** build (Margin's out-of-hours
  points here — charter §2), window = **last 7 days**, deduped (003). Numbers tunable at build time.
- **Retention:** keep a finite number of recent editions (e.g. last 14); older ones fall away — finite by
  nature.

## Requirements
- **R1 (Event).** WHEN the cadence fires, study shall compose one dated, finite edition from the in-window
  `Signal`s and store it prerendered.
- **R2 (Ubiquitous).** study shall never display an unread count, badge, "X unread", or streak.
- **R3 (Ubiquitous).** Read state shall be tracked for continuity only, never surfaced as debt or pressure.
- **R4 (Event).** WHEN no new items are in-window, THEN a quiet-day edition shall still build (states: 007).
- **R5 (Ubiquitous).** Editions shall be retained finitely; older editions age out.

## Open questions
- Grouping default: by source/feed vs by `kind` — settle in 006 with the reader layout.
- Exact cadence / window / retention numbers — build-time.

## Constitution Check
1. **Serves:** I (finite edition as the unit), II, IV, and the charter's anti-backlog stance.
2. **Violates:** none — no counters, no live feed; confirmed vs Articles + Banned patterns.
3. **Subtracts:** removes the unread-count, streaks, and infinite scroll a feed reader would carry by
   default — a whole class of engagement machinery, deliberately absent.
4. **Calm:** empty is first-class (007); absence is never debt; nothing appends while you read.
