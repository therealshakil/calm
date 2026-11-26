# Spec 007 — Calm states (the sad paths)
<!-- filename: 007-calm-states.md — numbered per collection, in introduction order -->

**Status:** ready (locked 2026-07-03) · **Date:** 2026-07-03 · **App:** margin

The worked-up design of the three calm states — a quiet day, defending rest, telling you to stop — where
006 only made the page hold together when thin. The edition inherits these; this is where the sad paths
become as considered as the happy one.

## Why
006 guarantees the page structurally survives a thin day, a quiet hero, a degraded build — but it defers the
*treatment* of the calm states to here. This is the spec where Margin honours the Articles that make it more
than a to-do list: Article II (it defends rest), Article V (it tells you to stop), Article IV (a quiet day
reads as calm, not failure) — all inside Article I (finite, glanceable) and Article X (it watches your work,
never you). Grounded in the charter (the edition form, From the Desk as where the guardrail speaks), the
[edition-v3 mockup](../mockups/edition-v3.html), and 006's state flag. Depends on 006 (the page these layer
onto) and reads the 003 calendar + local clock for context.

The vision, settled with the person (2026-07-03): **inform, never withhold; use the calendar and the clock,
never watch how you use Margin.** Defending rest is a warm note, not a locked screen. Telling you to stop is
the clock, not a re-open tracker.

## What it does
• **Quiet / thin day:** a light edition still renders as a whole, warm, finite page. From the Desk names the
quiet day kindly ("a lighter edition today — that's allowed"), the lead may read "nothing needs you first
today" (005 null hero), empty columns simply aren't there (006 R8). From the Desk and the sign-off are always
present — they're the warmth that holds a light day together. Never a "0", a hole, or an empty-state nag.
• **Defends rest:** opening Margin inside protected time (a calendar focus/busy block, lunch, the evening, or
a weekend) shows the *complete* edition with one warm line atop, in the From-the-Desk voice — "it's the
evening; none of this needs you now." It informs and steps back; it never withholds the edition or gates it
behind a resting screen. Protected time is read from your own calendar (003) and the local clock — never from
watching how you use Margin.
• **Tells you to stop:** opening late (local clock only, no re-open counting) carries one kind line — "it's
late; this keeps — nothing's waiting on you." Reaching the foot of the edition, the sign-off closes it plainly
("that's the edition") so completion is felt and stopping is easy. Margin keeps no record of how often you
open it; the deliberate limit on Article V is that it uses the clock, never surveillance.
• **When it can't tell:** if there's no calendar signal to judge protected time, Margin renders the plain
edition with no rest-note rather than guess or manufacture one. Honest states, never invented.

## Requirements
These layer onto 006 (they do not restate it). R1–R3 the quiet day; R4–R6 defending rest; R7–R8 telling you
to stop; R9–R12 the cross-cutting floors that keep every state calm.

• **R1 (Event)** — WHEN 004 serves a thin edition, the system shall render the full page as a whole, warm,
finite thing — empty columns omitted (006 R8), never a "0", a hole, or an empty-state nag (Article IV — a
quiet day is not a failure).
• **R2 (Ubiquitous)** — From the Desk and the sign-off shall be present on every edition, however thin — they
are the warmth that holds a light day together (resolves the 006 open question: always present).
• **R3 (Event)** — WHEN 005 returns no hero, From the Desk shall frame the quiet day as intentional rest
("a lighter edition today — that's allowed") and the lead shall read the calm "nothing needs you first today"
(builds on 006 R7) — the day reads as offered rest, not absence.
• **R4 (State)** — WHILE the reader opens Margin inside protected time (a calendar focus/busy block, lunch,
the evening, or a weekend), the system shall render the complete edition with a single warm note atop, in the
From-the-Desk voice, naming the time and that nothing needs them now — it shall never withhold, dim away, or
gate the edition behind a resting screen (Article II; charter — inform, glanceable not operable).
• **R5 (Ubiquitous)** — Protected time shall be determined only from the reader's own calendar (003) and the
local clock — never from Margin usage — and its windows (in-hours per 004, lunch, evening, weekend) shall be a
single-user config with calm defaults (Article X; Article II).
• **R6 (Unwanted)** — IF protected time cannot be determined (no calendar signal), THEN the system shall fall
back to the plain edition with no rest-note rather than guess or manufacture one (Article VI — honest states,
never invented urgency, and never invented calm).
• **R7 (Event)** — WHEN the reader opens Margin late (local clock only, past a configured hour), From the Desk
shall carry one kind line — "it's late; this keeps — nothing's waiting on you" — and the edition shall
otherwise render normally (Article V).
• **R8 (Event)** — WHEN the reader reaches the foot of the edition, the sign-off shall close it plainly
("that's the edition") — no "next", no more-to-load, no re-engagement prompt — so completion is felt and
stopping is easy (Articles I, V; 006 R1).
• **R9 (Ubiquitous)** — Every calm-state note shall be carried in text in the editorial hand (Shantell Sans;
006 R13), monochrome, with no colour, no alarm, no interrupting modal, and no badge — an honest state, never
manufactured urgency (Article VI; 006 R2).
• **R10 (Ubiquitous)** — The calm states shall add no operable control — no dismiss, snooze, "remind me", or
settings gear on the page; the note simply is, and the reader glances and leaves (charter — glanceable, not
operable).
• **R11 (State)** — WHILE prefers-reduced-motion is set, any transition into a calm state shall be instant or
absent; what little may otherwise move shall be slow, ambient, and fully removable (identity §5; Article VI;
006 R10).
• **R12 (Ubiquitous)** — Margin shall keep no record of when or how often the reader opens it beyond what a
single render needs — no re-open counter, no obsessive-checking detection, no usage history (Article X; the
deliberate limit on Article V — the clock, never surveillance).

## Not this (non-goals)
• No withholding or gating the edition to defend rest — the defence is a note, never a locked or dimmed-away
screen (the settled fork: inform, don't withhold).
• No re-open or obsessive-checking detection, and no usage tracking of any kind — Margin tells you it's late
by the clock; it never watches how often you come back (Article X; the settled limit on Article V).
• No colour, alarm, interrupting modal, or notification for any state — that would be push / alarm (banned;
Article VI).
• No worked-up degraded / last-good design — that is 006 R9; 007 layers only the calm-time states on top.
• No illustration craft — the Spot and Cartoon slots stay placeholders (008); a quiet day still shows them.
• No new operable controls (dismiss / snooze / on-page config) — window config is out-of-band, single-user.

## Research
• The three calm states descend directly from Articles II, IV, V — the Constitution is the primary source;
this spec is their worked-up UI.
• Calendar as the protected-time source — the 003 [source adapters](./003-source-adapters.md) seam
(read-only); in-hours window defined by 004 [the edition model](./004-edition-model.md).
• Watches your work, never you — Article X; the anti-surveillance stance is the ND-friendly, trust-earning
choice ([`research.md`](../../../../docs/research.md), least-privilege / read-only).
• Voice for the notes — the From-the-Desk editorial register ([`calm-language`](../../../../docs/calm-language.md));
"that's allowed", "this keeps", "nothing's waiting on you".
• Low-arousal / prefers-reduced-motion — identity §5; Article VI.

## How (the plan)
• **State model:** extend 006's state flag (normal / quiet / degraded) with an orthogonal *time context*
(in-hours / resting / late), computed server-side at render from the 003 calendar + a config'd clock window.
A small flag on the composed record; no client logic.
• **Protected-time function:** a pure, server-side function over (calendar events, local time, config) →
context — testable with fixtures. Config carries in-hours (from 004), lunch, evening start, weekend days,
with calm defaults; single-user, so tuning is cheap.
• **The notes:** reuse the existing From-the-Desk slot (006) — swap copy by context, no new component. Copy is
a small, fixed, hand-written pool per context (not generated per render) — deterministic, honest, and
token-free; a light rotation so it isn't identical daily. No Claude call for a note.
• **Precedence:** late wins over evening (one note, not stacked); a focus/busy block wins over a plain in-hours
open. One line at a time — the states never pile up.
• **Fallbacks:** no calendar → plain edition, no rest-note (R6). Never guess a state.
• **Defers:** the quiet-day Spot illustration (008); how the resting/late states behave offline / installed
(010); any on-page window-config UI (single-user, out-of-band for now).

## Open questions
• Exact windows — evening start, lunch span, weekend days. Lean: in-hours per 004; lunch 12:00–13:00; evening
= after in-hours; weekend = Sat–Sun. Settle at build / first config.
• Does a plain *meeting* (calendar-busy, not a focus block) count as protected, or only focus blocks +
off-hours + lunch? Lean: off-hours + lunch + focus blocks — a meeting you're in, you can still glance and
leave. Confirm at build.
• Small fixed copy pool per context vs a single fixed line — lean small pool (a little humanity). Settle at
build.

## Tasks
*(fill at build time — smallest first; each cites the requirement it satisfies)*

[ ] Pure server function: (calendar fixture, clock, config) → time context (in-hours / resting / late), tested; precedence late > evening > focus-block (R4, R5, R7).
[ ] Thin-edition render: whole warm page, From the Desk + sign-off always present, empty columns omitted, no "0" / hole / nag (R1, R2, R3).
[ ] Rest-note: full edition + one From-the-Desk line during protected time, never withheld; no-calendar fallback = plain edition, no note (R4, R6).
[ ] Late line by clock only; sign-off closes the edition plainly, no re-engagement (R7, R8).
[ ] All notes in the hand, monochrome, no on-page control, no alarm / modal / badge (R9, R10).
[ ] prefers-reduced-motion: state transitions instant / absent (R11); test asserts no re-open counter or usage record anywhere in the render path (R12).

## Constitution Check
1. **Serves:** II (defends rest — a warm note during protected time), V (tells you to stop — late by the
clock, and the sign-off close), IV (a quiet day reads as calm, not failure); supports I (finite, glanceable)
and X (defence + stop read the calendar and clock only, never Margin usage).
2. **Violates:** none — confirmed vs Articles + Budgets + Banned patterns (no push, no badge/unread, no
interrupting modal, no colour/alarm, no manual-refresh, no usage telemetry; no new operable control; client
JS within the 006 budget — copy + a flag, no new client logic).
3. **Subtracts:** chooses the smallest form of each defence — a note not a gate, a clock not a tracker —
reuses 006's editorial slot rather than adding UI, and adds no operable control.
4. **Calm:** honest states (real calendar + clock, never manufactured), fixed hand-written copy (no
per-render LLM), prefers-reduced-motion covered; the happy path is 006, these are the sad paths fully
designed — and the one deliberate limit (no re-open surveillance) is stated in the open, not hidden.
