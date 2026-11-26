# Spec — Skill hygiene & the skill Check
<!-- filename: 012-skill-hygiene.md — numbered per collection, in introduction order -->

**Status:** draft · **Date:** 2026-07-14 · **App:** suite-wide

A four-line Check every calm skill passes, plus a glanceable, read-only hygiene pass over the whole skill
set — so skills stay lean, one-job, and cheap to load, without a grader-as-a-service.

## Why

The industry scan ([`../research/industry-convergence.md`](../research/industry-convergence.md)) found the
authoring craft has consolidated on subtraction — progressive disclosure, "one skill, one verb",
description-as-routing-rule, deterministic work in scripts — and that tools now grade a `SKILL.md` in CI
(Tessl) and audit skill/plugin context cost (`/doctor`). Calm already owns the pattern that answers this: the
four-line Constitution Check. This spec applies that pattern to skills, and adds a peripheral hygiene glance.
Every skill description loads at every startup, so drift here is a quiet, compounding attention/token tax.
Advances Article I (finite, glanceable), Articles VIII/IX (subtract; small) via
[`./010-subtraction-ladder.md`](./010-subtraction-ladder.md), and the open-standard adoption in
[`../../ADOPTING.md`](../../ADOPTING.md).

## What it does

A calm skill carries a **skill Check** (below), and — on request — a **hygiene glance** reports the health of
the whole set. Read-only; it recommends, never edits a skill.

- **Happy:** the glance lists skills whose descriptions cost the most at startup, flags one-job violations
  and unused skills, and names the two or three worth trimming — nothing more.
- **Quiet & empty:** when every skill passes, the glance says so in one line and stops. Nothing to fix is a
  good result, not a blank screen.
- **When it fails:** if a skill can't be read or parsed, the glance names it and continues — it never blocks
  on one bad file, and never guesses.

## The skill Check (the four lines)

Every calm skill answers these before it's considered ready. Same shape as the Constitution Check.

1. **One job.** One trigger shape, one output. If the `SKILL.md` has sections that only apply to some
   triggers, split it (one skill, one verb).
2. **Lean body.** `SKILL.md` is short (progressive disclosure); depth lives in `references/` (one level
   deep), fragile or repetitive operations in `scripts/` — not improvised in prose.
3. **Routing-rule description.** The description states triggers (phrases the person actually says) + inputs
   + output — not a summary. It loads at every startup, so it is kept tight.
4. **Portable & honest.** Conforms to the `SKILL.md` open standard (agentskills.io); a calm tool recommends,
   never executes without confirmation (glanceable, not operable).

## Requirements

- **R1** — `The system shall define a four-line skill Check (one job, lean body, routing-rule description,
  portable & honest) that every calm skill satisfies before it is considered ready.`
- **R2** — `WHEN a skill's SKILL.md description or body is edited, the author shall re-run the skill Check.`
- **R3** — `WHERE a hygiene glance is run, the system shall report, read-only, each skill's startup
  description cost, one-job violations, and unused skills — recommending, never applying, any change.`
- **R4** — `WHILE every skill passes, the hygiene glance shall report that in one line and stop.`
- **R5** — `IF a skill cannot be read or parsed, THEN the glance shall name it and continue without
  blocking.`
- **R6** — `The system shall not rank skills with a score, shame absence, or frame a lean skill set as
  incomplete.`

## Not this (non-goals)

No score/percentage grade (R6). No auto-editing or auto-splitting skills. No publishing skills to a public
catalogue (calm is single-dev/private — deferred). No grader-as-a-service dependency. No CI gate at MVP —
the Check is a discipline first; automation is earned later.

## Research

- [`../research/industry-convergence.md`](../research/industry-convergence.md) — the 30-day scan (authoring
  craft consolidation; `/doctor`; Tessl skill review).
- [`../../ADOPTING.md`](../../ADOPTING.md) — the open-standard skills convention this Check backs.
- Agent Skills best practices (agentskills.io / Claude Platform docs) — external, cited in the scan.

## How (the plan)

MVP is **the Check as a convention** (this doc) plus a **manual hygiene glance** an assistant runs on request
by reading each `~/.claude/skills/*/SKILL.md` frontmatter (description length, body line count, dir layout)
and reporting per the requirements. A built `skill-doctor` tool is deferred until the manual pass proves the
shape and earns the automation (Subtraction Ladder: don't build the SaaS).

## Open questions

1. Does the hygiene glance stay a manual assistant pass, or graduate to a small read-only skill?
2. Startup-cost metric: raw description characters, or measured tokens?
3. Does a downstream adopter's spec-flow skill inherit this Check by reference, or restate it locally?

## Tasks

(fill in at build time)
- Adopt the four-line skill Check in skill authoring (cite R1). 
- Run a first manual hygiene glance over the current ~19 skills; act on the two or three worst offenders,
  starting with the one skill doing two jobs and the longest descriptions (cite R3).

## Constitution Check

1. **Serves:** Article I (finite, glanceable, peripheral), Articles VIII/IX (subtract, small).
2. **Violates:** none — read-only, recommend-never-execute, no score-shaming (confirmed vs Articles + Banned
   patterns).
3. **Subtracts:** it removes skill bloat (description cost, multi-job skills) and explicitly refuses to add a
   grader service, a CI gate, or a public-catalogue dependency at MVP.
4. **Calm:** honest quiet-and-empty state (one line when all pass) and failure path (name the unreadable
   skill, continue) both specified; no motion surface.
