# Spec — Skill hygiene & the skill Check
<!-- filename: 012-skill-hygiene.md — numbered per collection, in introduction order -->

**Status:** locked — co-authored with the maintainer (2026-11-26: "y"); in force · **Date:** 2026-07-14, redrafted 2026-11-26 · **Scope:** calm and `calm-*` repos

A four-line Check every calm skill passes, plus a read-only hygiene glance over the set,
so skills stay one-job, lean, and cheap to carry.

## Why

Every model-invoked skill's description loads at every session start, whether or not it's used.
That's a quiet tax that grows with the set.
The industry has settled on subtraction for skills: one skill, one verb; descriptions written as routing
rules; depth in references and scripts ([`../research/industry-convergence.md`](../research/industry-convergence.md)).
Spec Kit added a sharper tool in 1.2 and 1.3: call-only commands that load only when someone asks
(`research.md`, 2026-11-26).

calm already owns the pattern that answers this: the four-line Check.
This spec applies it to skills.
Advances Article I (finite, glanceable), VIII and IX (subtract; stays small), via the Subtraction Ladder
([`./010-subtraction-ladder.md`](./010-subtraction-ladder.md)).

**Where the set stands (2026-11-26).** Five skills, all healthy. ai-scout passes line 4 by its own locked
design: digests go to its own repo, and its one PR into calm is a draft it never merges, so the person's
merge is the confirmation (calm-research spec 001, R4).

| Skill | Description | Body | Who starts it |
|---|---|---|---|
| calm-ds | 612 chars | 109 lines | the model, unasked |
| calm-council | 558 | 101 | the person, in plain words |
| constitution-steward | 442 | 57 | the model, unasked (spec 015) |
| ai-scout (calm-research) | 338 | 119 | a scheduled run, or the person in plain words |
| drift | 257 | 50 | the person, in plain words |

## What it does

A calm skill passes the **skill Check** before it's ready.
On request, a **hygiene glance** reports on the whole set. It recommends; it never edits a skill.

- **Happy:** the glance names the two or three skills worth trimming, and why. Nothing more.
- **Quiet & empty:** every skill passes. One line: "The skills are in good shape." Then it stops.
- **When it fails:** a skill that can't be read is named, and the glance carries on. It never guesses.

## The skill Check (the four lines)

1. **One job.** One trigger shape, one output. Sections that apply only to some triggers mean it's two
   skills.
2. **Lean body.** `SKILL.md` stays short; depth lives one level down in `references/`, repetitive or
   fragile steps in `scripts/`.
3. **Routing rule, or call-only.** If the model needs to find it, the description is a routing rule:
   the phrases the person says, the input, the output. If only the person starts it, it's **call-only**
   (`disable-model-invocation: true`): no description loads at startup, and it runs as `/name`.
4. **Portable & honest.** Conforms to the `SKILL.md` open standard; recommends, never executes without
   confirmation.

**Call-only, applied to today's set: none.** calm-ds and the steward have to run unasked.
calm-council, drift and ai-scout are started in plain words ("council this", "make me a calm banner",
"run the scout"); call-only would make the person type a slash command instead, which goes against
loose-human / strict-machine. The rule is here for the next skill that only the person starts on purpose.
(The steward's first review of this draft caught that an earlier version made drift call-only, against R3.)

## Requirements

- **R1 (Ubiquitous).** Every calm skill shall pass the four-line skill Check before it's considered ready.
- **R2 (Event).** WHEN a skill's description or body is edited, the author shall re-run the skill Check.
- **R3 (Ubiquitous).** A skill that only the person starts shall be call-only; a skill the model must
  start unasked, or that the person starts in plain words, shall keep a routing-rule description.
- **R4 (Event).** WHEN asked for a hygiene glance, the assistant shall report, read-only, each skill's
  description length, body length, one-job problems, and call-only candidates, recommending and never
  applying a change.
- **R5 (Unwanted).** IF every skill passes, THEN the glance shall say so in one line and stop.
- **R6 (Unwanted).** IF a skill can't be read, THEN the glance shall name it and continue.
- **R7 (Ubiquitous).** The glance shall not score skills, rank them as failing, or frame a small set as
  incomplete.

## Not this (non-goals)

- **No score, no grade, no CI gate.** The Check is a discipline first.
- **No built tool yet.** The glance is a manual assistant pass; a `skill-doctor` is deferred until the
  manual pass proves it's needed.
- **No auto-editing or auto-splitting.**
- **Not for adopters' skills.** They can borrow the Check by reference (`ADOPTING.md`); calm doesn't
  check them.

## Research

- [`../research/industry-convergence.md`](../research/industry-convergence.md): the authoring craft
  consolidating on subtraction.
- `research.md`, 2026-11-26, *Spec Kit, five months on*: call-only commands.

## How (the plan)

The Check is this document. The glance is a manual pass: the assistant reads each `SKILL.md` frontmatter
and body in `calm/.claude/skills` and any `calm-*` repo, and reports per R4. Startup cost is measured in
description characters: cheap, stdlib, and good enough to rank five skills.

Build: nothing to change today. Every current skill passes the Check, and none qualifies for call-only (R3).

## Decided (at lock)

- **The glance stays manual** until the set is large enough to need a tool.
- **Characters, not tokens.** It's a ranking, not a bill.
- **Adopters inherit by reference**, the way they take everything else from calm.

## Tasks

- [x] First hygiene glance over the set (R4): all five pass; none qualifies for call-only (R3). Table above.

## Constitution Check

1. **Serves:** I (finite, glanceable), VIII and IX (subtract, small).
2. **Violates:** none. Read-only, no score, no new dependency or tool.
3. **Subtracts:** future startup cost, by making call-only the rule for skills only the person starts;
   refuses a grader, a CI gate and a built tool.
4. **Calm:** the clean state is one line; an unreadable skill is named, never guessed at; no motion surface.
