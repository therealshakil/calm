# Spec — The Subtraction Ladder
<!-- filename: 010-subtraction-ladder.md — numbered per collection, in introduction order -->

**Status:** locked — co-authored with Shakil · **Date:** 2026-07-05 · **Scope:** suite-wide

An ordered procedure for *not* writing code: before building anything, stop at the first rung that
already solves the task. Turns "subtract by default" (Article VIII) from a value we assert into a step we
can run and check. Pairs with [`007-cli-conventions.md`](./007-cli-conventions.md) (how we reach the dev
surface) — this is how we decide what reaches the code.

## Why

Articles VIII (subtract by default) and IX (stays small & simple) already say *less is the default*. But a
value is easy to nod at and skip; a procedure is not. The calm register is loose with the human and strict
with the machine — the strict, exhausting discipline of resisting over-build belongs to the assistant, run
the same way every time, not left to mood or momentum. This spec gives it the ladder.

Provenance: researched 2026-07-05 from the *ponytail* skill (decision ladder, YAGNI-first) and the Karpathy
behavioural skill (simplicity-first, non-destructive). We take the *ordered procedure*; we deliberately
leave behind their intensity modes, slash commands, impact metrics, and loud framing — none of which are
calm (see *Not this*).

## What it does

Before writing code for any non-trivial task, walk the rungs top-down and stop at the first that satisfies
the need:

1. **Necessity.** Does this need to exist at all? Skip speculative scope; build what was asked, not what
   might be wanted. (Article VIII.)
2. **Reuse.** Does a helper, util, type, or pattern already live in this repo? Use it before writing a new
   one.
3. **Standard library & platform.** Reach for the language's stdlib, then native platform features (browser
   APIs, CSS, database constraints) before any library.
4. **Installed dependency.** Use a dependency that's already here before adding a new one. A new dep is its
   own decision (Article IX — essential, responsibly-sourced only).
5. **Minimal build.** Only now write code, and write the fewest lines that do the job — one line before
   fifty, the shortest viable diff, the fewest files.

Then, in at most three lines, name what was skipped and why — enough for a future reader to trust the
smallness was chosen, not missed.

- **Happy:** an earlier rung solves it — the task closes with little or no new code, and the note says so.
- **Quiet & empty:** the task genuinely needs new code (rung 5). That's allowed; the ladder isn't a
  refusal, it's an order of preference. Build the minimum, plainly.
- **When it fails:** if honouring the ladder would force a hack that undermines a guardrail below, the
  ladder yields — say so and build it properly. Correctness outranks brevity.

## The guardrails (never on the chopping block)

Subtraction stops where safety and calm begin. These are never trimmed to save lines:

- **Validation at trust boundaries**, error and failure handling.
- **Security & privacy** (Articles VII, X) — never simplified away.
- **Accessibility and the calm states** (Articles VI, XI) — `prefers-reduced-motion`, the quiet-empty
  state, the honest failure path. A calm state is required behaviour, not optional polish.
- **Explicitly requested features** — the ladder questions *speculative* scope, never what the person
  actually asked for.

Lazy, not negligent.

## Not this (non-goals)

- **No intensity modes, no toggle.** No `lite|full|ultra`, no on/off command. Calm runs one steady setting,
  always-on; a knob to manage is more surface, not less (Article I, VIII).
- **No metrics or scorekeeping.** No "54% less code", no impact dashboard. Counting lines saved is the loud,
  cheerleading register calm is defined against (Article VI; `CLAUDE.md` — no cheerleading).
- **No marker-comment ceremony.** Don't litter the code with a bespoke `subtract:` tag on every choice.
  Annotate a subtraction only when it's genuinely non-obvious and would confuse a future reader; otherwise
  leave the code reading like its neighbours (Article XI).
- **Not a communication style.** This governs *what gets built*, not *how the assistant speaks* — the
  register lives in [`CLAUDE.md`](../../CLAUDE.md) ("Be calm") and stays separate.
- **Not destructive.** Notice unrelated dead code? Mention it; don't delete it in passing. Subtraction is a
  deliberate, scoped act, not a drive-by (Article VII — recommend, don't execute).

## Requirements

- **R1 (Ubiquitous).** Before writing code for a non-trivial task, the assistant shall walk the five rungs
  top-down and stop at the first that satisfies the need.
- **R2 (Event).** WHEN new code is written, the assistant shall add at most three lines naming what was
  skipped and why.
- **R3 (Unwanted).** IF honouring a rung would weaken a guardrail (validation, security, privacy,
  accessibility, a calm state, or an explicitly requested feature), THEN the assistant shall build it
  properly and say so.
- **R4 (Ubiquitous).** The ladder shall govern what is built, not how the assistant communicates; register
  stays in `CLAUDE.md`.
- **R5 (Optional).** WHERE unrelated dead code is noticed, the assistant shall mention it rather than delete
  it.

## How it's inherited

Suite-wide, inherited by reference like the other convention specs. Wiring (to add on lock): a line in
calm's [`CLAUDE.md`](../../CLAUDE.md) *Build calm* pointing here, the specs [`README.md`](./README.md)
index entry, and the adoption kit reference so a new sibling carries the ladder too.

## Decided (was open at draft)

- **Wording home.** A one-line ladder summary lives in `CLAUDE.md` *Build calm* + a pointer here (as CLI
  conventions do). Wired on lock.
- **No Constitution amendment.** This *operationalises* Articles VIII/IX rather than adding new law, so no
  Amendment is needed. (Shakil, 2026-07-05.)

## Constitution Check

1. **Serves:** VIII (subtract by default — made procedural), IX (stays small & simple), and the working
   principle *loose human / strict machine* (the assistant owns the strict discipline).
2. **Violates:** none — a convention doc, no machinery, no dependency; guardrails protect VI, VII, X, XI.
3. **Subtracts:** the whole point — less speculative code, fewer new deps, shorter diffs; and it *removes*
   ponytail's modes/metrics/ceremony rather than importing them.
4. **Calm:** honest states (happy / quiet-empty / fail) specified; no metrics, no urgency; governs build,
   not voice.
