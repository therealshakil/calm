# Spec 009 — calm-sync (keep adopters in step)
<!-- filename: 009-calm-sync.md — numbered per collection, in introduction order -->

**Status:** draft · **Date:** 2026-06-30 · **Scope:** suite-wide (tooling)

An on-demand skill that checks a calm adopter against upstream's inherited surface and **writes back the
safe reconciliations** for the person to review and commit — never a PR, never a merge, silent when in step.

## Why
calm inherits mostly **by reference**: an adopter's `CLAUDE.md` pointer names upstream's governing files and
reads them live, so most upstream change needs **no sync at all** (Article XI reached reverie and
calm-wallpapers the moment Amendment 5 landed — nothing to do). But two things genuinely drift, and reference
can't fix them: a **broken pointer link** when upstream renames / moves / removes a governing file (this has
already happened — the `007-cli-conventions` rename broke reverie's link, fixed by hand), and a **copied
file** going stale (calm-wallpapers copies `tokens.css`). calm-sync catches exactly that residue — calmly.
It serves Article IX (frugal — acts rarely), VII (writes locally, never merges), VI (silent, no nag), and the
"loose human, strict machine" principle (the person never hand-diffs). Design researched 2026-06-28
([`research.md`](../research.md)).

## What it does
- **Happy (drift found):** run on demand against an adopter repo. It diffs the adopter's inherited surface
  (its pointer's link set + any copied files) against the upstream **manifest**. If a linked governing file
  was renamed or moved, it rewrites the pointer link; if a copied file drifted, it refreshes the local copy
  (respecting declared exceptions). It writes the changes to the **working tree** plus a one-glance summary
  (what changed upstream and why), then stops — the person reviews and commits.
- **Quiet & empty (in step):** silent. Nothing on the watched surface differs → one line, "in step", no
  writes. A content-only upstream change in an un-renamed linked file is correctly a **non-event** (inherited
  live) — Amendment 5 is the worked example.
- **When it fails:** if upstream can't be reached, or a divergence can't be safely reconciled (a hand-edit, a
  scoped exception, an ambiguous case), it **reports the drift honestly and leaves the files untouched** —
  never a force-write, never a guess.

## Requirements
Suite tooling, one-way, so a moderate set. R1–R6 the core loop; R7–R9 the calm states; R10–R12 the floors.

- **R1 (Event)** — WHEN run against an adopter repo, the system shall compare that repo's inherited surface
  (its pointer's link set + any copied files) against the upstream manifest and report whether it is in step.
- **R2 (Unwanted)** — IF an upstream governing file named by the pointer has been renamed, moved, or removed,
  THEN the system shall rewrite the adopter's pointer link to the new path (or flag the removal) — reconciling
  **links**, not just copies.
- **R3 (Unwanted)** — IF a file the adopter copies (e.g. `tokens.css`) has drifted from upstream, THEN the
  system shall refresh the local copy to match — unless it is a declared scoped exception (R8).
- **R4 (Ubiquitous)** — The system shall write all changes to the **working tree only**; it shall never
  commit, push, open a PR, or merge — the person reviews and commits (Article VII; the chosen write-back scope).
- **R5 (Ubiquitous)** — On any write, the system shall produce a single glanceable summary — what changed
  upstream and why (the Amendment / commit) — so the person reviews with context, not a blind diff.
- **R6 (Ubiquitous)** — The watched surface shall be defined by a single canonical **manifest** in the
  upstream repo — the one source of "what adopters depend on"; calm-sync reads it, and it doubles as
  documentation.
- **R7 (State)** — WHILE the adopter is in step (nothing on the watched surface differs), the system shall
  write nothing and report "in step" in one line — silent, no PR, no noise (Articles VI, IX).
- **R8 (State)** — WHILE a copied file carries an in-file `calm-sync: ours — <reason>` marker (e.g.
  calm-wallpapers' colour-excepted `tokens.css`), the system shall treat the local version as canonical and
  never overwrite it. A file an adopter simply doesn't copy (reverie's `tokens.css`) is **self-exempting** —
  no marker needed. Exceptions are respected, not reverted.
- **R9 (Event)** — WHEN an upstream change is content-only inside an already-linked, un-renamed file
  (inherited live by reference), the system shall treat it as a **non-event** and stay silent — reference
  needs no sync (Article IX — act only on the residue reference can't cover).
- **R10 (Ubiquitous)** — The system shall run **only on demand** (a pull, never a schedule or a bot) and shall
  never notify — being behind is never surfaced as debt (Article VI; the anti-calm pitfall the research named).
- **R11 (Unwanted)** — IF upstream can't be reached, or a change can't be safely reconciled, THEN the system
  shall report the drift honestly and leave the files untouched — never force-write, never guess.
- **R12 (Ubiquitous)** — `ADOPTING.md` shall stay consistent with the manifest: the manifest is canonical, and
  the inherited surface described in `ADOPTING.md` is verified against it — calm-sync flags any file
  `ADOPTING.md` lists that the manifest omits, or omits that the manifest lists. The human-facing narrative
  never silently diverges from the watch-list.

## Not this (non-goals)
- Not a scheduled bot or update-PR spammer (the anti-calm pitfall) — on-demand pull only.
- Not a PR opener or merger (this cut) — write-back to the working tree, local; PR mode was considered and deferred.
- Not a **compliance auditor** — it reconciles the *inherited surface* (links + copies); it does **not** check
  whether an adopter's own work satisfies a new Article (e.g. does reverie's UI meet Article XI). That's human
  review, possibly a separate future thing.
- Not push-from-upstream — calm never reaches into adopters; the adopter pulls.
- Doesn't touch off-surface churn (research, `Calm.md`, internal specs, the warden) — silent on the ~90% of
  upstream commits that don't change the watched surface.

## Research
- The whole design — [`research.md`](../research.md) 2026-06-28 (calm-sync / "Renovate for calm"): inherit by
  reference, pointer-link drift, one source of truth, recommend-never-merge, silent-when-clean — corrected by
  the real reverie adopter (its link broke on the `007` rename).
- The inherited surface itself — [`ADOPTING.md`](../../ADOPTING.md) (the kit) + the two real adopters' pointers.
- Authored via the EARS-lite loop — [`research.md`](../research.md) 2026-06-30, [`calm-spec-loop`](../research/calm-spec-loop.md).

## How (the plan)
- **Form:** a Claude Code skill, on-demand (kin to release-flow / drift), invoked in or pointed at an adopter
  repo. Lives **upstream** (one source) and is pointed at an adopter dir — adopters keep zero machinery
  (ADOPTING's promise).
- **The manifest:** a canonical **Markdown table** upstream — `docs/inherited-surface.md`, columns
  `path | role | note` — each entry a `path` + a `role` (**link** vs **copy** vs **kit**). Human-readable
  (calm-Markdown, one hand on the dev surface) and the skill parses the table:
  - *link:* `CONSTITUTION.md`, `docs/identity.md`, `docs/calm-language.md`, `CLAUDE.md`, and the referenced
    convention specs (`spec-template.md`, `002-calm-markdown`, `004-readme-standard`, `readme-template`,
    `007-cli-conventions`).
  - *copy:* `tokens.css`.
  - *kit:* `ADOPTING.md`, `CALMED.md`.
  It is the watch-list **and** the documentation of "what adopters depend on" (today implicit in ADOPTING.md).
- **Detection:** compare the adopter's `CLAUDE.md` pointer link set against the manifest's link paths →
  rename / move / remove = link drift. For copy entries, diff the adopter's local file vs upstream content →
  copy drift. Content changes in un-renamed linked files are ignored (R9). Verify `ADOPTING.md`'s listed
  surface against the manifest (R12).
- **Write-back:** rewrite broken links in the adopter's `CLAUDE.md`; refresh copied files **unless** they
  carry a `calm-sync: ours` marker (R8). Print the summary; stop. No commit (R4).
- **Frugal:** `command`/script-shaped where possible (git diffs + path checks ≈ 0 tokens); reasoning only for
  the "why" summary (Amendment 4 — calm tooling, frugal). Mechanics per `007-cli-conventions` (literal paths,
  `git -C`, one op per command).

## Open questions
Resolved with Shakil (2026-06-30): **exceptions** = an in-file `calm-sync: ours — <reason>` marker, with
absence-of-copy self-exempting (R8); **manifest** = a Markdown table (`docs/inherited-surface.md`,
`path | role | note`); **ADOPTING.md** = *verified* against the manifest, not generated (R12).

- The **compliance gap** is deliberately out of this cut: calm-sync reconciles the inherited *surface* (links
  + copies), not whether an adopter's own work satisfies a new Article (e.g. reverie's UI vs Article XI).
  Parked as a future seed — *calm-review* — in [`Calm.md`](../../Calm.md): a human review, never an auto-audit.

## Tasks
*(fill at build time — smallest first; each cites the requirement it satisfies)*
- [ ] Author the inherited-surface manifest upstream (path + role: link / copy / kit) (R6).
- [ ] Verify `ADOPTING.md`'s described surface against the manifest; flag divergence (R12).
- [ ] Detect link drift: diff adopter pointer links vs manifest paths; flag rename / move / remove (R1, R2).
- [ ] Detect copy drift: diff adopter copied files vs upstream; honour exceptions (R1, R3, R8).
- [ ] Write-back to the working tree + the glanceable why-summary; never commit / PR (R4, R5).
- [ ] Silent-when-in-step + content-only-is-a-non-event paths; assert no writes (R7, R9).
- [ ] On-demand only, no notify; offline / unsafe divergence → report, leave untouched (R10, R11).
- [ ] Dry-run against the two real adopters (reverie, calm-wallpapers): confirm Amendment 5 reads as a
  non-event (inherited live), and the bounds hold.

## Constitution Check
1. **Serves:** IX (frugal — acts only on the residue reference can't cover, silent otherwise), VII
   (writes-local, never executes / merges), VI (silent, no nag — being-behind is never debt); pull-not-push
   keeps calm out of adopters' repos; realises the "loose human, strict machine" principle (no hand-diffing).
2. **Violates:** none — confirmed vs Articles + Banned patterns (no scheduled bot, no notifications, no
   auto-merge, no nag). Adds **no** runtime dependency to adopters (zero-machinery inheritance preserved).
3. **Subtracts:** removes the hand-reconciliation tax and the temptation of a spammy update bot; one manifest
   replaces the implicit, scatter-able "what adopters depend on".
4. **Calm:** silent when in step; honest report when it can't safely reconcile; writes for review, never
   acts; on-demand, never interrupts. Happy (drift → write-back), quiet (in step → silent), fail (offline /
   unsafe → report) all specified.
