# Spec 007 — Calm states

**Status:** locked — co-authored with Shakil · **Date:** 2026-07-14 · **App:** study

The quiet paths — where study's calm actually lives: a quiet day is **affirming, not empty**; absence is
**never debt**; it never nags; and finishing an edition is a clean **stop**. Inherits Margin's
[calm states](../../../margin/docs/specs/007-calm-states.md) near-wholesale, tuned for reading.

## Why
A feed reader's default failure mode is to make *not reading* feel bad — unread piles, streaks, "you
missed…". study exists against exactly that (charter §1, §5; Articles I, II, V, X). The quiet states are
therefore first-class behaviour, specified here, not left to chance.

## What it does
- **Quiet day (nothing new):** a warm quiet-day edition — "nothing new today; that's a fine kind of day" —
  never an error, never an empty-and-broken screen.
- **Absence is not debt:** step away for a week and nothing accuses you on return. No streaks, no
  "unread since…", no counts (004).
- **The stop:** finishing the edition is *done* — no "up next", no infinite pull to keep going.
- **Source absent (fail):** a feed didn't resolve → a quiet one-liner or silence (001/003), never an alarm.

## Not this (non-goals)
- No streaks, no re-engagement nudges, no "come back" notifications, no badges, no "you missed N".
- No guilt copy, no urgency, no manufactured FOMO.

## How (the plan)
- **Quiet-day edition:** a first-class composed state with affirming copy (calm-language voice), not an
  empty list.
- **Return-friendly:** on return after absence, the current edition is simply there; nothing tallies the gap.
- **Finish cleanly:** the end of an edition reads as a gentle full-stop; no auto-advance, no next-up bait.
- **Honest failure:** source-absent degrades quietly (inherits 001/003).

## Requirements
- **R1 (Event).** WHEN there is nothing new in-window, THEN study shall present an affirming quiet-day
  edition, never an error or broken-empty state.
- **R2 (Ubiquitous).** study shall show no streaks, counts, re-engagement nudges, or "you missed" copy.
- **R3 (Ubiquitous).** Absence shall never be rendered as debt; returning after any gap shall carry no
  penalty or tally.
- **R4 (Event).** WHEN an edition is finished, study shall end cleanly with no up-next pull.
- **R5 (Event).** WHEN a source is absent, THEN study shall degrade quietly (no alarm), per 001/003.

## Constitution Check
1. **Serves:** I, II, V, X — the calm/quiet paths that are the app's reason to exist.
2. **Violates:** none — the anti-engagement stance is the point; confirmed vs Banned patterns.
3. **Subtracts:** removes streaks, nudges, notifications, and guilt copy a reader would ship by default.
4. **Calm:** quiet day is affirming and first-class; absence never debt; finishing is a real stop.
