# Spec — The Calm Council
<!-- filename: 011-calm-council.md — numbered per collection, in introduction order -->

**Status:** locked — co-authored with Shakil · **Date:** 2026-07-14 · **Scope:** suite-wide

A convened panel of independent advisor personas — each on a different model, each with a distinct lens —
that reason a **one-way-door decision** from genuinely diverse angles, cross-review each other
anonymously, and hand back a glanceable synthesis with blind spots and a verify-queue. It is **advisory:
it recommends, the person locks.** Turns "get an honest second opinion before a decision you can't easily
undo" from a good intention into a step you can run and check. Operationalises
[`research-method.md`](../../research-method.md) (verify-first, qualified voice, the human keeps the
judgement) and the Build Gate ([`CONSTITUTION.md`](../../CONSTITUTION.md) Amendment 2 — classify before
building), the same way [`010-subtraction-ladder.md`](./010-subtraction-ladder.md) operationalises
"subtract by default".

## Why

A single model answering from its weights is fluent, fast, confident — and opaque. One voice, no
friction; it converges and it flatters. A one-way door (new surface the suite inherits, hard to reverse,
a spec fork, a spike's direction) deserves adversarial friction and *visible* trade-offs before the
person commits. Asking one model to "debate itself" gives diversity of *framing*, not of *judgement* —
five personas on one model still share its blind spots. Real diversity comes from real model variety plus
real role conflict plus verify-first grounding.

Provenance: researched 2026-07-14 from the "LLM council / debate skill" pattern (Karpathy's `llm-council`
and its community Claude-skill clones). We take the *council shape* — independent voices → anonymised
peer-review → chair synthesis. We deliberately leave behind (see *Not this*): single-model persona
theatre, unlicensed clone code, a paid multi-vendor API dependency, prompts leaking to third-party
aggregators, and the loud "top 1%" framing — none of which are calm or private.

## What it does

For a one-way-door decision, convene a panel and synthesise:

1. **Frame.** State the decision in one neutral line: the question, the real options, the constraints,
   what "right" looks like. If any is missing, ask the person first (reqs before research).
2. **Convene.** Spawn the personas as subagents **in parallel, in independent contexts** (no cross-talk
   yet), each on a **different model** for real diversity. Default lenses: **Subtractor · Contrarian ·
   First-principles · ND/User · Executor.** A **Chair** synthesises — it does not vote.
3. **Ground, don't assert.** Every persona cites a source or *flags* the claim for the verify-queue;
   confidence + source, never flat certainty.
4. **Anonymised cross-review.** Each persona sees the others' takes with names stripped and says what it
   would change — the argument, not the author.
5. **Chair synthesis.** The Chair reads the debate (does not average votes) and returns the glanceable
   output: decision · where each lens landed · the real fault line · blind spots · recommendation with
   confidence · verify-queue · **you lock**.

- **Happy:** the panel surfaces the true trade-off and a grounded recommendation; the person decides.
- **Quiet & empty:** it's a two-way door — skip the council and just decide. The council is a tax, spent
  only where the door opens once.
- **When it fails:** consensus comes too easily → the synthesis flags weak friction as a *risk*, not a
  result (easy agreement on a one-way door is a warning). A persona can't ground a claim → it goes to the
  verify-queue, never into the recommendation as fact.

## The guardrails (never on the chopping block)

- **Advisory only.** The council recommends; it never executes, files, commits, or auto-applies a
  decision. The person locks (Article VII; Amendment 3).
- **No false certainty.** Confidence is stated and sourced; disagreement is reported, not smoothed
  (research-method, qualified voice).
- **Private by construction.** Runs on the person's own decision context via the Agent tool — no
  third-party data services, no data egress, no telemetry (Article X). (The external clones need paid
  data APIs or relay prompts through an aggregator; the calm council does neither.)
- **No cheerleading, no yes-closers.** State what's true, then stop (`CLAUDE.md`).

## Not this (non-goals)

- **No single-model persona theatre.** Different models per seat, or it isn't a council — one model
  wearing five hats is framing-diversity, not judgement-diversity.
- **No external / unlicensed clone code, no paid multi-vendor API.** Built on the Agent tool already here
  (Subtraction Ladder rungs 2 & 4); adds no dependency.
- **No auto-decide.** It never acts on its own verdict — no filing, no building, no committing.
- **No scorekeeping.** The answer is the Chair reading the debate, not a vote tally or an "N of 5 agree"
  count.
- **Not for two-way doors.** Reversible calls just get made; spending a panel on them is more surface,
  not less (Article I, VIII).
- **Not a communication style.** Governs a decision procedure, not the register; voice stays in
  [`CLAUDE.md`](../../CLAUDE.md).

## Requirements

- **R1 (Ubiquitous).** For a one-way-door decision, the assistant shall convene ≥3 independent persona
  advisors, each in its own context and, where models allow, on a distinct model.
- **R2 (Event).** WHEN a persona makes a factual or technical claim, it shall cite a source or add the
  claim to the verify-queue; it shall not present an unverified claim as fact.
- **R3 (Ubiquitous).** The council shall be advisory only — it shall not execute, file, commit, or
  auto-apply a decision; the person locks.
- **R4 (Event).** WHEN the panel reaches easy consensus on a one-way door, the synthesis shall flag the
  weak friction as a risk rather than report it as confirmation.
- **R5 (Unwanted).** IF the decision is two-way / reversible, THEN the assistant shall skip the council
  and decide directly.
- **R6 (Ubiquitous).** The council shall run on the person's own context with no third-party data service
  and no data egress (Article X), and shall add no dependency beyond the Agent tool already present.
- **R7 (State-driven).** WHILE synthesising, the assistant shall return the glanceable format (decision ·
  lenses · fault line · blind spots · recommendation + confidence · verify-queue · you-lock), with no
  cheerleading and no yes-closer.

## How it's inherited

Suite-wide, inherited by reference like the other convention specs. The skill is canonical at
[`.claude/skills/calm-council/SKILL.md`](../../.claude/skills/calm-council/SKILL.md) and symlinked into
`~/.claude/skills/calm-council` for cross-project reach — **one source of truth**, no divergent copies.
Wiring (to add on lock): a pointer from calm's [`CLAUDE.md`](../../CLAUDE.md) (*How we work*), the specs
[`README.md`](./README.md) index entry, and the adoption-kit reference so a new sibling carries the
council too.

## Decided / open

- **Home & reach.** Canonical in the calm repo (`.claude/skills/calm-council`), symlinked global for
  cross-project use. (Shakil, 2026-07-14.)
- **Default lenses & model spread.** Subtractor / Contrarian / First-principles / ND-User / Executor on
  `haiku` / `sonnet` / `fable`, heavier models on higher-stakes seats; Chair on `opus`. Tunable per call.
- **No Constitution amendment.** Operationalises research-method + Articles VII/X + Amendment 3; adds no
  new law.
- **Open (revisit after use).** Whether the anonymised cross-review round stays always-on or becomes
  optional for smaller calls. Default: on.

## Constitution Check

1. **Serves:** the research-method (verify-first, qualified voice, the human keeps the judgement), the
   Build Gate (friction before a one-way door — Amendment 2), Amendment 3 (the person locks), and *loose
   human / strict machine* (the assistant owns the disciplined stress-test).
2. **Violates:** none — advisory, no machinery beyond the Agent tool, no dependency, no egress; guardrails
   protect VII and X.
3. **Subtracts:** builds on the Agent tool already here — no new dep, no external skill — and leaves
   behind the clones' single-model theatre, paid APIs, unlicensed code, and loud framing.
4. **Calm:** honest states specified (happy / two-way-skip / easy-consensus-warning); advisory only; no
   cheerleading, no urgency; governs a decision, not the voice.
