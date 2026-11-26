# Spec — Constitution steward
<!-- filename: 015-constitution-steward.md — numbered per collection, in introduction order -->

**Status:** draft — to lock · **Date:** 2026-11-26 · **Scope:** calm and `calm-*` repos

The Constitution Check, run by a second pair of eyes instead of the author.

## Why

Every spec and PR ends with the four-line Check, but the author runs it on their own work.
That's honest effort, and it still misses things.
The 2026-07-05 tooling audit found Composio breaching Article X inside three locked Margin specs,
months after each was checked and locked.
A reader who didn't write the work would have caught it at lock.

Checking every change against every Article is exactly the tiring, repetitive part
that loose-human / strict-machine says the machine should carry.
Advances VII (it recommends, never executes), VIII and IX (it finds what crept in uninvited),
and the Periodic review, which today has no helper.

The shape is borrowed from Spec Kit's `converge`, which reached it independently:
intent is the only source of truth, findings are typed, it only reports, and a clean result is quiet.

## What it does

The steward reads a target and checks it against calm's Constitution:
the Articles, the Banned patterns, and the Budgets of any app it touches.
A target is a spec, a branch's changes, or a proposed tool or dependency.

It runs in a fresh context, never the one that wrote the work, so it isn't grading itself.
It returns one short report. It never edits, never blocks, never opens anything.

Each finding is one of four kinds, most serious first:

- **Breakage** — it contradicts an Article, a Banned pattern, or a Budget.
- **Slippage** — it isn't a breach yet, but it leans toward one (a nag-shaped notice, a dep that grows).
- **Unrequested** — it's in the change but no spec asked for it. The Subtraction Ladder's finding.
- **Missing** — something the spec promised isn't there, including its own Check.
  A Check that's present but wrong counts too: a written Check is a claim, not evidence.

Every finding cites the Article and the line it came from, and names the smallest fix.

- **Happy:** two or three findings, ranked, each with its source and a fix. Read in a minute.
- **Quiet & empty:** nothing found. One line: "Holds to the Constitution." Nothing else.
- **When it fails:** if it can't read the target or the Constitution, it says which, in one plain line,
  and stops. It never guesses a clean result.

**When it runs.** On request ("steward this"). And at the two moments that matter,
the assistant runs it without being asked, so the person never has to remember:

- before the person locks a spec, so the lock is informed;
- before a one-way branch merges into `main` (spec 014's landing rule).

The report is shown, the person decides. A finding never stops a lock or a merge on its own.

## Requirements

- **R1 (Event).** WHEN asked to steward a target, the steward shall check it against the Articles,
  the Banned patterns, and the Budgets of any app it touches.
- **R2 (Ubiquitous).** The steward shall run in a fresh context that did not write the target.
- **R3 (Ubiquitous).** Each finding shall be typed breakage, slippage, unrequested or missing,
  cite the Article and source line, and name the smallest fix; breakages come first.
- **R4 (Ubiquitous).** The steward shall never edit a file, block an action, or open an issue or PR.
- **R5 (Unwanted).** IF nothing is found, THEN the report shall be one line and nothing else.
- **R6 (Unwanted).** IF the target or the Constitution can't be read, THEN the steward shall say which,
  in one line, and shall not report a clean result.
- **R7 (Event).** WHEN the person is about to lock a spec, or a one-way branch is about to merge into
  `main`, the assistant shall run the steward first and show the report.
- **R8 (Ubiquitous).** The steward shall treat a spec's written Check as a claim to verify, not as evidence.

## Not this (non-goals)

- **Not a guard.** No blocking, no gate that fails a merge, no red. It's a helper (Article IV).
- **Not a hook in v1.** It runs at lock and merge because the landing rule says so, not because a script
  fires. Add a hook only if that ritual is shown to slip.
- **Not a linter.** calm-check (spec 013) holds the tokens; the steward reads meaning, not values.
- **Not for adopters' repos.** The Constitution governs calm itself (research, 2026-07-06).
- **No score, no history, no dashboard.** One report, then it's gone.

## Research

- 2026-11-26 · *Spec Kit, five months on* (`docs/research.md`): converge's typed, append-only, quiet-when-clean shape.
- 2026-07-06 · *Spec Kit lately*: converge named as the one borrow worth promoting.
- 2026-07-05 · the tooling audit (Composio vs Article X), the evidence for an independent reader.
- 2026-07-06 · *The Constitution governs calm itself*: the scope.

## How (the plan)

A skill at `.claude/skills/constitution-steward/SKILL.md`. Not named `steward`: Claude Code already
ships a `/steward` skill for watching PRs, and two of the same name would misroute.

The skill tells the assistant to spawn one subagent (R2) with the target, `CONSTITUTION.md`, and any app's
Budgets, and to return the report in the shape above. `CLAUDE.md`'s "How we work" gains one line:
run the steward before a lock and before a one-way merge (R7).

## Open questions

- **Periodic review.** The Constitution asks for one at least monthly. Lean: leave it out of v1; once the
  steward has earned trust at lock and merge, a monthly cloud run (public in, public out) could carry it.
- **Model.** Lean: the subagent runs on a different model from the author's, for a genuinely second view.

## Tasks

Filled at build time (after lock); each cites its requirement.

## Constitution Check

1. **Serves:** VII (report-only), VIII and IX (catches what crept in), the Periodic review, and
   loose-human / strict-machine.
2. **Violates:** none. No deps, no hook, no new surface for adopters; it reads and reports.
3. **Subtracts:** the author self-grading the Check; the person remembering to ask.
4. **Calm:** a clean result is one quiet line; findings are surfaced, never shamed; nothing blocks.
