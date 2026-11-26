# Spec 006 — The reader UI

**Status:** locked — co-authored with Shakil · **Date:** 2026-07-14 · **App:** study

study's face: a **Reader-shaped** interface — sources/sections · item list · reading pane — evoking Google
Reader and the 90s newsboard, rendered calm. Inherits Margin's
[edition UI](../../../margin/docs/specs/006-edition-ui.md) identity and is anchored on Margin's
[mockups](../../../margin/docs/mockups/) so study reads as family.

## Why
The charter fixes the form (§2–3): a reading room, Reader-shaped, wearing the suite identity as Margin's
sibling. This spec makes the happy-path UI concrete (Articles I glanceable, VI calm). The calm/quiet states
are 007; this is what it looks like when there's reading to do.

## What it does
- **Happy:** three regions — **sources/sections** nav · **item list** · **reading pane**. Pick a section,
  scan the finite list, read in the pane. On narrow screens the regions **stack** (responsive), never a
  cramped desktop grid.
- Video/podcast items render calmly in the pane; a video item can invoke the read-time **video-watching
  helper** (001) for transcript/keyframes on open.

## Not this (non-goals)
- No infinite scroll, no unread badges or counts (004/007), no engagement chrome, no notifications, no ads.
- No heavy motion or animation for its own sake.

## How (the plan)
- **Identity:** monochrome **ink on paper**, the one **clay accent**, **type carries the hierarchy**, light
  + dark following the OS, **almost no motion**. Full system in [`identity.md`](../../../../docs/identity.md);
  visual family anchored on Margin's mockups.
- **Layout:** the three-region Reader shape; a finite item list (the edition, 004); a calm reading pane.
- **Accessibility:** `prefers-reduced-motion` honoured; legible type; keyboard-navigable list/pane.
- **Nostalgic in feel, not decoration** — Reader/newsboard evocation through layout and type, never skeuomorphic chrome.

## Requirements
- **R1 (Ubiquitous).** The reader shall present three regions (sources/sections · item list · reading pane)
  and shall stack responsively on narrow screens.
- **R2 (Ubiquitous).** The UI shall wear the suite identity — monochrome + one accent, type-led hierarchy,
  light + dark.
- **R3 (Ubiquitous).** `prefers-reduced-motion` shall be honoured; motion shall be minimal.
- **R4 (Ubiquitous).** The UI shall show no unread badges/counts, engagement chrome, or notifications.
- **R5 (Event).** WHEN a video item is opened, the reader may invoke the read-time video helper (001) to
  render transcript/keyframes.

## Open questions
- Item-list grouping default (by source vs by kind) — settles the 004 open question here.

## Constitution Check
1. **Serves:** I (glanceable, finite list), VI (calm, monochrome, minimal motion), XI (made-by-a-hand feel).
2. **Violates:** none — no engagement chrome, no notifications; a11y protected.
3. **Subtracts:** reuses the suite identity and Margin's mockups rather than a new design language; three
   plain regions, no dashboard.
4. **Calm:** almost no motion, reduced-motion honoured; nothing badges or nags; a room to read in.
