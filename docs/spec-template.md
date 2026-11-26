# How we spec (and the template)

> We borrow the *thinking* of spec-driven development (GitHub Spec Kit, Kiro): settle **what** before
> **how**, gate everything on the [Constitution](./CONSTITUTION.md), build in small increments. We **skip the
> ceremony** — one lean doc per spec, not a spec/plan/tasks file each. Split a spec only if it genuinely
> outgrows one page (Article IX). Specs must be readable by a neurodivergent mind (R10): short, plain,
> low cognitive load, no wall-of-text.
>
> The **what** is pinned as a short set of testable **EARS** requirements (below) — enough to be
> unambiguous and to map to tasks and tests, never enough to become ceremony. The rigour **scales to the
> change** (the Build Gate): a small / two-way spec needs a handful of requirements; a foundational /
> one-way spec needs the fuller set. Why this shape: [`research/calm-spec-loop.md`](./research/calm-spec-loop.md).

**Where specs live:** a spec lives **with what it governs** — apps keep them in `apps/<app>/docs/specs/`;
a foundation's or tool's spec sits with it (the terminal's in `assets/terminal/`, drift's in
`assets/drift/docs/specs/`); suite-wide specs live in `docs/specs/`, which also holds the cross-suite index
+ the spec-drops not tied to one tool. **Each collection is numbered per-collection** — a zero-padded
filename prefix in introduction order: `001-<slug>.md`, `002-<slug>.md`… (a single-spec foundation is just
`001-…`). The number lives in the filename, not the title. Every spec is backed by research per
[`research-method.md`](./research-method.md), links each research reference to its `research.md` entry, and
ends with the Constitution Check.

**Flow per spec:** *Specify* (what + why + the testable EARS requirements, no how) → *Plan* (how, once what
is settled) → *Tasks* (ordered, testable, each citing the requirement it satisfies; tests first where it
helps) → *Implement* (small increments). A spec isn't ready to build until its Constitution Check passes.

**The assistant drafts; you lock.** Specs are co-authored (Constitution Amendment 3): the assistant drafts
the requirements from a loose description and surfaces only the genuine gaps or forks it can't resolve — one
neutral question at a time, never a menu, never a silent guess. You lock. This keeps elicitation light, not
an interrogation.

**Specs are living, not frozen.** When building teaches you the spec was wrong, write it back the same
session — or mark the spec disposable. A frozen up-front spec "encodes the assumption that you aren't going
to learn anything during implementation" (Beck), which rarely holds. Small increments over a big bang.

---

## Template — copy this

```markdown
# Spec — <Title>
<!-- filename: NNN-<slug>.md — numbered per collection, in introduction order -->

**Status:** draft | ready | building | shipped · **Date:** YYYY-MM-DD · **App:** <margin|quiet>

<One plain sentence: what this is.>

## Why
The real need it serves (lived-need, not a hunch), and which Article(s) it advances.

## What it does
User-facing behaviour, in plain words — no implementation here. Both paths, always:
- **Happy:** when there's plenty / it works.
- **Quiet & empty:** the calm, nothing-to-show state (this is a feature, not an edge case).
- **When it fails:** honest, kind, recoverable — never alarm.

## Requirements
The load-bearing behaviours as testable EARS sentences — the contract a build must satisfy and a test can
check. Pin only what matters; don't restate every line above. **Scale to the change:** a small / two-way
spec needs a handful; a foundational / one-way spec needs the fuller set. Number them (R1, R2…) so tasks
and tests can cite them. A calm state is a requirement too — spec the quiet-and-empty and the failure path
here, not just the happy one.

Patterns (constrained natural language — a keyword, then `the system shall <response>`):
- **Ubiquitous** — `The system shall <response>.` *(an always-true property)*
- **Event** — `WHEN <trigger>, the system shall <response>.`
- **State** — `WHILE <state>, the system shall <response>.`
- **Optional** — `WHERE <feature included>, the system shall <response>.`
- **Unwanted** — `IF <condition>, THEN the system shall <response>.`

## Not this (non-goals)
What it deliberately does **not** do. Subtraction is the default.

## Research
Links to the `research.md` entries backing the calls here. (Reasoned-not-sourced? Say so, mark to verify.)

## How (the plan)
Only once *What* + *Requirements* are settled. The approach / architecture, briefly. Split to a `plan.md`
only if it grows.

## Open questions
The things still genuinely undecided.

## Tasks
Ordered, testable steps (fill in at build time; smallest increments that ship). Cite the requirement each
task satisfies (R1, R2…) so the spec stays traceable to the build.

## Constitution Check
1. **Serves:** which Article(s) this advances.
2. **Violates:** none — confirmed vs Articles + the app's Budgets + Banned patterns (or it doesn't ship).
3. **Subtracts:** what this removes, or one line on why nothing was removed.
4. **Calm:** honest states + `prefers-reduced-motion`; happy **and** sad paths specified.
```
