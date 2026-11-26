# Spec — calm in the open
<!-- filename: 014-calm-in-the-open.md -->

**Status:** draft — to lock · **Date:** 2026-11-26 · **Scope:** suite-wide (calm itself)

How calm is developed now that it's a public repo: what guards a push, how changes land, and how other
people can reach it.

## Why

calm went public on 2026-11-26 (Amendment 6). Three things changed with it.
Every commit is published within seconds, because calm pushes after every commit.
`main` became a release channel: ONBOARDING tells others to follow `origin/main`.
And strangers can now open issues and pull requests.
The working habits were built for a private, single-user repo; this spec fits them to an open one
without adding ceremony. Advances X (private — the person's private life stays out), IX (stays small),
I and IV (nothing becomes an inbox that accuses).

## What it does

**A privacy guard on every push.** Before calm is pushed, a small script reads what's about to go out —
the changes and the commit messages — and checks them against a private list of words: names, family,
the employer, health. The list lives in the maintainer's private notes repo, never in calm.

- **Happy:** nothing matches. The push goes ahead and the guard says nothing.
- **Quiet & empty:** on anyone else's machine there is no list, so the guard does nothing at all.
- **When it catches something:** the push is stopped with one plain note to the model — which file or
  message, which line, which word — so it can fix the commit before trying again. Nothing is published.

**Changes land by the Build Gate.** Two-way doors (a typo, a value, a small doc fix) go straight to
`main`. One-way doors — the Constitution, a new skill, a new tool, anything adopters inherit — go on a
branch and merge into `main` only when the person locks them. A branch is deleted once merged.

**Issues on, no promises.** Issues are open, with one calm template. The maintainer glances at them when
they choose, and nothing promises a reply. Pull requests are welcome to read; some may be taken, most may
not, and that's fine. A short `CONTRIBUTING.md` says this plainly. calm is shared to read and to fork.

**Report-drops go private first.** Spec 008's fallback (a calm report from a downstream repo) goes to a
local inbox in the private notes repo, because a report can carry another project's private detail.
It becomes a public issue only when it's free of that.

## Requirements

- **R1 (Event).** WHEN a `git push` is run in calm, the guard shall check every outgoing commit's diff
  and message against the private term list.
- **R2 (Unwanted).** IF any term matches, THEN the guard shall stop the push and tell the model the file
  or commit, the line, and the term, in one plain note.
- **R3 (Ubiquitous).** The term list shall live outside calm (in the private notes repo) and never be
  committed to calm.
- **R4 (Unwanted).** IF the term list is not present, THEN the guard shall do nothing and stay silent.
- **R5 (State).** WHILE nothing matches, the guard shall be silent.
- **R6 (Ubiquitous).** A one-way change shall reach `main` only by a merge after the person locks it;
  a two-way change may be committed to `main` directly.
- **R7 (Event).** WHEN a branch is merged into `main`, it shall be deleted, locally and on GitHub.
- **R8 (Ubiquitous).** calm shall carry a `CONTRIBUTING.md` and one issue template that state there is
  no promise of a reply or a merge.
- **R9 (Ubiquitous).** A downstream report-drop shall be written to the private inbox; it shall be filed
  as a public issue only on the person's say, once it holds no private detail.

## Not this (non-goals)

- **No CI, no required reviews, no branch protection.** One maintainer; the Build Gate is the review.
- **No version tags or releases** until someone besides the maintainer actually depends on calm.
- **No triage rota, labels, bots or response targets.** An issue waits without a sound.
- **Not a scanner for everyone.** The guard protects one person's private life on their own machine;
  it isn't a general secrets scanner and doesn't pretend to be.
- **No notifications by default.** The maintainer's watch setting for calm is "participating and
  @mentions" or quieter; glancing at issues is a choice, not a ping.

## Research

Reasoned, not sourced — a working-practice call from the 2026-11-26 debate (this session), mark to verify:
whether GitHub now allows a public repo to turn pull requests off (if so, R8's stance could go further).
Related: Amendment 4 (calm tooling — silent, frugal, a `command` hook over an agent),
[`008-downstream-contributions.md`](./008-downstream-contributions.md), [`013-calm-check.md`](./013-calm-check.md)
(the same hook pattern, applied to tokens).

## How (the plan)

- **The guard:** `scripts/privacy-guard.py`, stdlib only, run by a Claude Code `PreToolUse` hook on Bash
  commands that are a `git push` in calm (checked-in `.claude/settings.json`). It reads the term list
  from `~/Projects/calm-private/privacy-terms.txt` (one term per line; `#` comments), diffs
  `@{upstream}..HEAD` (or all of `HEAD` for a new branch), and exits 2 with the note on a match.
  Any internal error exits 0 — except a match, which always blocks.
- **The landing rule:** written into calm's `CLAUDE.md` beside "always autopush".
- **Others:** `CONTRIBUTING.md` (a few lines) and `.github/ISSUE_TEMPLATE/note.md`.
- **Spec 008:** its non-goal "no external contributors" and its report-drop fallback are updated to point
  here.

## Open questions

- **The term list itself.** The assistant drafts it from what the go-public scrub removed; the person
  reads and approves it before the guard is switched on.
- **Watch setting.** "Participating and @mentions", or "Ignore" with a glance when you choose.

## Tasks

Filled at build time, after lock. Order: the term list (R3) → the guard (R1, R2, R4, R5) and its hook →
CONTRIBUTING + template (R8) → the landing rule in CLAUDE.md (R6, R7) → spec 008 (R9).

## Constitution Check

1. **Serves:** X (the private life stays private, by machine not by memory), IX (no CI, no ceremony, one
   stdlib script), I and IV (issues never become an accusing inbox; no promise means no debt), VII (the
   guard blocks and explains; it never rewrites a commit itself).
2. **Violates:** none — confirmed against the Articles and banned patterns. No notifications, no counts.
3. **Subtracts:** the per-commit worry of "did that just publish something private"; the expectation that
   an issue is owed a reply; spec 008's public-issue default.
4. **Calm:** silent when clean, silent on machines without the list, one plain note when it catches
   something; the quiet path (no issues, no reports) is the normal one.
