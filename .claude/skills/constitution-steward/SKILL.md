---
name: constitution-steward
description: >-
  Run calm's Constitution Check with a second pair of eyes: a fresh subagent reads a spec, a branch's
  changes, or a proposed tool or dependency against the Articles, Banned patterns and Budgets, and returns
  one short report of typed findings. Report-only. Use when the user says "steward this" or "check this
  against the Constitution", and always before the person locks a spec or a one-way branch merges into
  main (calm and calm-* repos only).
---

# Constitution steward

The four-line Check, run by someone who didn't write the work. Governed by
[`docs/specs/015-constitution-steward.md`](../../../docs/specs/015-constitution-steward.md) (locked).

## When

- On request ("steward this").
- Without being asked, at two moments (R7): just before the person locks a spec, and just before a one-way
  branch merges into `main`. Show the report; the person decides. A finding never stops anything by itself.
- Only in calm and `calm-*` repos. The Constitution governs calm itself, not adopters.

## How

1. Name the target in one line: a spec path, a branch (diff against `main`), or a proposed tool or dep.
2. Spawn **one** subagent with the Agent tool (R2). Never review in the context that wrote the work.
   Pick a model different from the one running this session (Opus session → `sonnet` or `fable`).
3. Give it: the target, `CONSTITUTION.md`, and the Budgets of any app the target touches
   (`apps/<app>/...`). Tell it to read them itself; don't summarise them for it. Include this brief:

   > Check the target against calm's Constitution: every Article, the Banned patterns, and the Budgets of
   > any app it touches. Report only gaps, each as one of: **breakage** (contradicts an Article, Banned
   > pattern or Budget), **slippage** (leans toward a breach), **unrequested** (in the change but no spec
   > asked for it), **missing** (the spec promised it and it isn't there; a Check that's present but wrong
   > counts). Treat the spec's own written Check as a claim to verify, never as evidence. For each: the
   > kind, the Article, the file and line, the smallest fix. Breakages first. At most a handful; merge
   > duplicates. If nothing is found, reply only "Holds to the Constitution." If you can't read the target
   > or the Constitution, say which in one line and stop; never report clean by default. Don't edit
   > anything. Bash hygiene: one op per command, literal absolute paths, `git -C`, no `cd`, chaining,
   > substitution or `$var`.

4. Relay the report verbatim. Don't pad a clean result, soften a breakage into a slippage, or add findings
   of your own. You may say afterwards, separately, where you'd disagree; the person decides.

## The report

- **Findings:** one line each, ranked: `breakage · Article X · path:line — smallest fix`.
- **Clean:** "Holds to the Constitution." Nothing else.
- **Couldn't read:** one plain line naming what, and no verdict.

## Never

Edit a file, block a lock or merge, open an issue or PR, keep a score, or frame a finding as a failing.
Surfaced, never shamed (Article IV).
