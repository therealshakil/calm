# Spec — The reader UI
<!-- filename: 003-reader-ui.md -->

**Status:** draft · **Date:** 2026-07-22 · **App:** gutter

The reading surface: how a page fills the screen, how you turn it, how the controls stay out of the way, and
how the shell wears the suite identity.

## Why
This is where the charter's promise lives or dies: *the page is the whole screen; the app gets out of the
way* (charter §2), and the honest resolution of the operable-not-glanceable tension (§3a) — deep is fine,
sticky is not. Serves Article I (finite, calm, nothing computing at you) and VI (the suite identity — ink on
paper, one accent, near-zero motion). Consumes the ordered `Page[]` from [001](./001-architecture.md) /
[002](./002-local-cbz.md).

## What it does
- **Happy:** a page fills the viewport on a quiet backdrop. You move with a click/tap or an arrow key; the
  page changes without fuss. Controls are hidden until you ask for them, then fade back. A hairline shows
  where you are. That's the whole interface.
- **Quiet & empty:** before a book is open, the reader isn't shown — the open screen is (005). The reader has
  no empty state of its own; it always has a page.
- **When it fails:** a single page image won't decode → its slot shows a plain placeholder ("this page
  couldn't be read") and you can keep turning; one bad page never blocks the book (001 R6). The last page is
  not a failure — it's a full stop (below, detailed in 005).

## The surface
- **The page owns the pixels.** The image sits on a neutral, glare-free backdrop — `--calm-bg` (warm paper in
  light, true-dark in dark), theme-aware. gutter never recolours, filters, or "enhances" the art.
- **Fit modes**, the reader's choice, remembered as a UI pref (`localStorage`, per 001):
  - **Fit screen** (default) — the whole page visible, no scrolling; the calm default.
  - **Fit width** — page spans the width; long/tall pages scroll vertically.
  - **Spread** — two facing pages, for double-page art (bounded memory: only the visible pair + neighbours).
- **Quiet navigation.** Left/right **tap-or-click zones** turn the page; **arrow keys** and **space** do too;
  the **centre** zone toggles the chrome. Reading direction is left-to-right in v1 (RTL/manga is deferred —
  Open questions). Turning is instant by default — no page-flip skeuomorphism, no slide.
- **Chrome that hides.** No persistent toolbar. Controls appear on centre-tap or pointer movement and
  **auto-fade** after a moment of stillness. They hold only the few glanceable things: position (page x of n),
  the fit toggle, and a way back to the open screen. Nothing to fiddle with, nothing that accrues.
- **Progress is a hairline.** A thin position mark along one edge — *where you are in a finite thing* — not a
  percentage, not "x left," nothing that reads as a target to hit.

## Identity (the shell)
The shell — open screen, controls, position, end state — wears calm-ds: `--calm-fg` ink, `--calm-dim` for
labels, `--calm-line` hairlines, `--calm-font-mono` for the small page/label text, `--calm-font-serif` for any
title. The **one clay accent** (`--calm-accent`) is used **once at most** and never for alarm — e.g. the
resume affordance — otherwise the shell is monochrome. The reading backdrop is `--calm-bg`; the art is left
untouched.

## Requirements
- **R1 (Ubiquitous).** A page shall fill the viewport on the `--calm-bg` backdrop, theme-aware; gutter shall
  not recolour, filter, or upscale the artwork.
- **R2 (Ubiquitous).** The reader shall offer fit-screen (default), fit-width, and spread modes, and shall
  remember the chosen mode as a local UI preference.
- **R3 (Event).** WHEN the user taps/clicks a side zone, or presses an arrow/space, THEN the reader shall move
  one page (or spread) in that direction; WHEN they tap the centre, THEN it shall toggle the chrome.
- **R4 (Ubiquitous).** Controls shall be hidden by default, summonable, and shall auto-fade after inactivity;
  they shall expose only position, fit mode, and return-to-open.
- **R5 (Ubiquitous).** Progress shall be shown as a hairline position indicator, never a percentage or
  remaining-count.
- **R6 (State).** WHILE `prefers-reduced-motion` is set, page changes and chrome fades shall be instant (no
  slide, no animated flip).
- **R7 (Event).** WHEN the user advances past the last page, THEN the reader shall show a quiet end state and
  stop — no autoplay, no "next issue," no loop (detail in 005).
- **R8 (Unwanted).** IF a single page image fails to decode, THEN its slot shall show a plain placeholder and
  navigation shall continue; one bad page shall not block the book.
- **R9 (State).** WHILE a book is open, the reader shall keep only the current page (and its immediate
  neighbours / the visible spread) in memory, releasing the rest (001 R8).
- **R10 (Ubiquitous).** The shell shall use calm-ds tokens; the clay accent shall appear at most once and
  never signal alarm (Article VI).

## Not this (non-goals)
- **No reading stats, timer, or auto-advance** — nothing that turns reading into a metered task.
- **No page-flip animation / skeuomorphism** — quiet and instant, motion-safe.
- **No image filters, recolouring, or AI upscaling** in v1 — the art is the art.
- **No thumbnail-grid scrubber** in v1 (Open questions) — position is a hairline, movement is turn-by-turn.
- **No RTL/manga mode** in v1 (deferred — Open questions).

## Research
Reasoned-not-sourced. Verify-queue before build:
- **V-ui-a.** Confirm smooth display via `img.decode()` (or equivalent) before swap, so a turn shows a ready
  page rather than a flash — without adding a dependency.
- **V-ui-b.** Confirm object-URL lifecycle for R9 (create on show, `revokeObjectURL` on release) keeps memory
  bounded on a large book across all fit modes.

## Open questions
- **RTL / manga mode** — a per-book reading-direction toggle. Deferred to a fast-follow unless wanted in v1.
- **Zoom / pan** — pinch-zoom and double-tap-to-zoom for detail. v1 could ship fit-modes only and add zoom
  next; decide at build.
- **Thumbnail scrubber** — a quick way to jump. Tension with "glance, don't operate"; leaning *out* for v1.

## Tasks
(Filled at build time — smallest increments; each cites the requirement it satisfies.)

## Constitution Check
1. **Serves:** I (finite, calm, nothing computes at you; a full stop at the end), VI (ink-on-paper shell, one
   accent, near-zero motion).
2. **Violates:** none — no engagement mechanics, no stats, no urgency, no manufactured motion.
3. **Subtracts:** no toolbar (chrome hides), no stats/scrubber/animation/filters; controls hold only three
   glanceable things.
4. **Calm:** reduced-motion is a first-class path (R6); a failed page degrades to a placeholder (R8); the end
   is a gentle full stop, never an autoplay pull (R7 → 005).
