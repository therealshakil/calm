# Spec — Downstream contributions (author calm upstream mid-flow)

**Status:** locked — co-authored with Shakil · **Date:** 2026-06-28 · **Scope:** suite-wide

How a calm-worthy pattern spotted while working in a downstream repo becomes part of calm — authored once in
calm (the true source) and read back live downstream — without losing the downstream thread.

## Why

Working in a downstream repo (reverie), you notice a pattern calm itself would benefit from. Today there's no
calm way to fold it upstream and keep going — and integration issues have nowhere to flow (reverie's
`CLAUDE.md` pointer broke when calm renamed `cli-conventions.md` → `007-…`, with no channel back).

The realisation that makes this simple: calm is the **local true source**, and downstream inherits **by
reference** (the pointer reads live calm). So there is no "send a contribution" step — you **author once in
calm**, and downstream reads it back live. The contribution *is* the inheritance. This serves the suite's
single-source model (no divergent copies — Article IX) and protects flow (the excursion returns you cleanly).

## What it does

Two modes — pick by whether you want to leave the downstream thread.

**Primary — live promote (author upstream mid-flow):**
1. **Notice**, mid-downstream, a pattern calm would benefit from.
2. **Commit the downstream WIP** — a safe stopping point, clean to return from.
3. **Cross to calm + its register** — work in local `~/Projects/calm` (true source) under calm's *own* `CLAUDE.md`
   and Build Gate, not the downstream repo's. Co-author the calm spec, **you lock**, implement, commit + push
   (`main` = live, human-lock first).
4. **Read it back** — downstream sees the new convention/spec automatically (inherit-by-reference). No copy,
   no divergence. (Copied artifacts like `tokens.css` are the exception → [[calm-sync]] re-pulls those.)
5. **Resume** the downstream work where you left off.

**Fallback — report-drop (no context-switch):** if you'd rather not leave the thread, the agent drafts **one**
calm report (what broke / which inherited file / a suggested fix or inline patch) and writes it to the
private inbox (`inbox.md` in the private notes repo). You triage and apply it in calm later. It becomes a
public `gh issue` on `therealshakil/calm` only on your say, once it holds no private detail from the
downstream project (spec 014, R9).

## Not this (non-goals)

- **No PR / fork ceremony.** Single-user; authoring in the true source replaces the PR.
- **No external contributors here.** This spec is the maintainer's own loop. calm opened up on 2026-11-26;
  how others reach it (issues on, no promises) is [`014-calm-in-the-open.md`](./014-calm-in-the-open.md).
- **Never skips calm's governance.** The upstream change still runs Build Gate → co-author → lock → Check.
- **Never auto-files or auto-merges** (Article VII) — the agent recommends; you approve the send and the lock.
- Not a noisy channel — one report, never a stream.

## Research

- [[calm-sync]] research ([`research.md`](../research.md), 2026-06-28) — inherit-by-reference is what makes
  read-back automatic; renames break it (the reverie case).
- [`007-cli-conventions.md`](./007-cli-conventions.md) — `main` = live, human-lock first (the lock both ends
  rest on).
- [`006-adopting-calm.md`](./006-adopting-calm.md) — the convention-not-machinery lesson.
- Reasoned, single-user (built on the above; no new pass needed to promote).

## How (the plan)

- **Register-switch.** While in calm, obey calm's `CLAUDE.md`/Constitution; back to the downstream repo's
  register after. (A [[Calm agents]] concern.)
- **WIP-safety.** Commit the downstream thread first; the excursion is bounded and resumable.
- **Read-back nuance.** Referenced files (Constitution, identity, conventions) update live — automatic.
  Copied artifacts (`tokens.css`) need calm-sync — defer that path to the calm-sync seed.
- **Mechanism = a convention first; a skill if it earns it.** Mostly enabled already (calm local + true
  source + by-reference). Start with a one-line convention in the adopter pointer + calm's `CLAUDE.md`; a
  `calm-promote` skill can later run the excursion on rails (save WIP → cross + register → co-author / lock /
  implement / push → confirm read-back → resume) so it's one step that never loses your place.

## Decisions & open questions

- **Convention first** (chosen 2026-06-28): run the flow by convention — a line in calm's `CLAUDE.md` and the
  adopter pointer — and build a `calm-promote` skill only if the manual excursion proves fiddly (Article IX,
  don't pre-build).
- **Open — fallback transport:** `gh issue` (tracked, decoupled) vs a local `inbox` file (zero-GitHub).
  Decide when the fallback is first used; doesn't block the primary flow.

## Tasks

- [x] Add the convention to the adopter pointer template ([`../../ADOPTING.md`](../../ADOPTING.md)) and calm's
  [`CLAUDE.md`](../../CLAUDE.md): how to promote a pattern upstream mid-flow (+ the report-drop fallback line).
- [ ] (If earned) a `calm-promote` skill that runs the excursion on rails.
- [ ] (If chosen) wire the report-drop fallback (`gh issue` template or a local `inbox`).

## Constitution Check

1. **Serves:** IX (one true source — no divergent copies), VII (recommend-never-execute — agent drafts, you
   lock/send), and the working principles (co-authored specs, `main` = live human-lock-first, calm tooling).
2. **Violates:** none — a workflow convention; no new dependency, no machinery until a skill is earned.
3. **Subtracts:** removes the PR/fork ceremony and the copy-and-diverge problem — author once, read back live.
4. **Calm:** protects flow (bounded, resumable excursion); recommends, never auto-acts; one report, no stream.
