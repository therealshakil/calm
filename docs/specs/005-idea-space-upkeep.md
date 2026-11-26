# Spec — Idea-space upkeep (keeping Calm.md current)

**Status:** locked — co-authored with Shakil · **Date:** 2026-06-25 · **Scope:** suite-wide

A calm way to keep [`Calm.md`](../../Calm.md) honest: a card's status tracks reality, shipped ideas
become pointers, and seeds that no longer earn their place are gently pruned — without the board ever
becoming a chore or a nag.

## Why
`Calm.md` is the idea-space — parked ≠ forgotten. But an idea-space that isn't tended **drifts**, and drift
is quietly un-calm: a board you can't trust is a low hum of doubt every time you glance at it. The drift is
already visible — the terminal theme is marked ✅ *shipped* at the top of its card yet still says "Seed only
— not in development" at the bottom. Stale statuses, shipped things still reading as seeds, and seeds piling
up past their welcome all erode the one thing the board is for: that a glance tells you the truth.

This graduates the **Idea prune** seed and pairs it with the **assets-earn-their-place** principle — the
same subtract-by-default, applied to ideas. The point isn't tidiness for its own sake; it's that *a board
you can trust doesn't nag*, the same reason a traceable decision doesn't.

## What it does
Two mechanisms — one cheap and constant, one a periodic safety-net.

**1. Inline upkeep (the default).** A card's status moves *when its reality moves*. Graduating an idea
(giving it a charter/spec, starting to build, shipping) or letting it go **includes** updating its line —
the same reflex as logging a decision in `research.md`. The card line is the single source of truth; the
status key (🌱 → 🔭 → 🚧 → ✅ / 💤) is the whole vocabulary. So the board stays current as a side-effect
of the work, not as a separate task.

**2. Reconciliation pass (the safety-net).** On demand, or piggy-backed on the release flow when something
ships, a calm sub-agent (see [[Calm agents]]) reconciles the board against reality — it reads `Calm.md`, the
specs index, the git log, and the app/foundation states, then:
- flags **drift** (status vs reality) and **contradictions** (the ✅/seed clash),
- **graduates** shipped or now-building cards out of seed status; where an idea has earned its own
  repo/spec, it leaves a **one-line pointer**, not the full text,
- proposes **prune candidates** — seeds that no longer earn their place,
- hands back **one small batch diff** for a single approval (minimal-yes), never item-by-item.

- **Happy:** a glance at the board is true — statuses match reality, shipped ideas are pointers, and what's
  left is few and meaningful.
- **Quiet & empty:** nothing to reconcile. The pass says "the board's already current" and stops — no
  make-work, no manufactured tidying.
- **When it fails / when unsure:** it never alarms and never deletes silently. Unsure whether to prune? It
  **keeps** — bias to keep, because parked ≠ forgotten. A prune removes a card from the *active board*, not
  the idea from existence: shipped → a pointer; abandoned → git history (which remembers for free).

## Not this (non-goals)
- **Not a scheduled nag.** No cron, no cadence, no "the board is overdue" — that's manufactured urgency.
  On-demand and ship-triggered only.
- **Not a backlog / task tracker / project manager.** The board stays an idea-space, not a to-do list.
- **Not silent auto-editing.** The reconciliation *proposes*; the human approves the batch. (Inline status
  bumps made *while doing the work* are fine — they're part of the act, not a behind-your-back edit.)
- **Not a purge.** Pruning is gentle and reversible; the bias is to keep.

## Research
Reasoned from already-locked principles rather than new research (nothing to verify):
- **Idea prune** + **Calm-by-default, assets earn their place** — the two `Calm.md` seeds this graduates
  (subtract-by-default, applied to ideas).
- **Calm technology — glanceable, not operable** ([`research.md`](../research.md), 2026-06-23): the board's
  job is a trustworthy glance; drift breaks that.
- **Minimal-yes** ([`CLAUDE.md`](../../CLAUDE.md)): reconciliation asks for one batched approval, not many.
- **Research/release flow shape** ([`003-research-flow.md`](./003-research-flow.md), [`001-release-flow.md`](./001-release-flow.md)):
  this borrows their inline-discipline-plus-bounded-pass form and ND-safe framing.

## How (the plan)
- **Status vocabulary = the existing key** (🌱 🔭 🚧 💤 ✅), one per card; the line is the source of truth.
- **Inline upkeep** is a one-line addition to the spec/charter/release disciplines: "when a card's reality
  changes, change its line." No machinery.
- **The pass is a calm-agent** — it inherits `CLAUDE.md` (calm register, minimal-yes, subtract). It reads
  Calm.md + specs index + git log + tool states, emits a single proposed diff (status bumps · graduations to
  pointers · prune candidates with a one-line reason), and waits for one approval.
- **Where shipped cards go:** collapse to a one-line pointer (name · one line · link to its repo/spec), so
  the board shows the *family* without carrying the detail. (Pairs with the **listing of apps with added
  calm** seed.)
- **Where pruned cards go:** nowhere special — git history is the archive. Optionally a `CALM-ARCHIVE.md`
  later only if we ever miss them, not by default (subtract).

## Decided
- **Trigger:** on-demand + on-ship. **No time-schedule** — that would be the nag this spec exists to avoid.
  CI is the eventual on-ship mechanization: cross-reference landed commits/specs against the board and
  **propose** updates (a bot PR or soft warning), **non-blocking** (a blocking failure would be the alarm we
  avoid). Event-driven, not time-scheduled, so it fits. Built later, not now.
- **Pointer vs removal:** collapse shipped cards to a one-line **pointer** by default; full **removal** only
  if even the pointer stops earning its place (the project is truly abandoned and nothing references it).
  Bias to keep.

## Tasks
- [ ] Add the one-line **inline-upkeep** rule to the spec/charter/release disciplines (and a nod in
  `CLAUDE.md` mechanics).
- [ ] First reconciliation pass as the tracer: fix the terminal-theme ✅/seed contradiction, graduate this
  **Idea prune** card to a pointer at this spec, and collapse shipped cards (terminal foundation, Prompt
  Warden) to pointers — feel whether one-batch-approval holds.
- [ ] Decide pointer-vs-removal threshold from that first run.

## Constitution Check
1. **Serves:** Article I (finite by default — glanceable, not operable: a board you can trust at a glance);
   subtract-by-default; the asset-hygiene / idea-prune principle; minimal-yes.
2. **Violates:** none — no new deps, no machinery; a one-line discipline plus a calm-agent pass that
   proposes and waits.
3. **Subtracts:** its whole purpose is removal — stale cards, contradictions, and seeds past their welcome
   leave the active board; shipped ideas shrink to pointers.
4. **Calm:** on-demand not scheduled; never alarms; parked ≠ forgotten preserved (bias to keep, git is the
   archive); one batched approval; happy **and** empty states specified.
