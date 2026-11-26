# CLI conventions

**Status:** locked — co-authored with Shakil · **Date:** 2026-06-25 · **Scope:** suite-wide

How calm reaches the command line and the dev surfaces — the conventions an assistant (or a person)
follows so the CLI feels as calm as the apps. These lived only in private memory and scattered notes;
gathered here, they belong to the project and are inherited alongside the identity and voice. Pairs with
[`identity.md`](../identity.md) §6 (craft on the dev surfaces) and the Constitution's working principles.

## Talking to the human

- **Calm clickable links.** Reference any file/doc/URL as a labelled Markdown link — never a bare path.
  The label *is* the link (compact — one thing to read), with a trailing `↗` for the open affordance:
  `[Warm near-black ↗](url)`. The glyph is a small delight, not decoration.
- **Show design decisions, don't describe them.** For any visual choice, render the real options and show
  them — montaged into one Figma-like board (light/dark, surfaces side by side) so they're glanceable at
  once, not narrated in prose or shown one page at a time. Default to this for design specs.
- **Minimal yes.** Every yes — a question, a confirmation, a permission prompt — is an attention tax.
  Proceed on sensible defaults; ask only on a genuine fork, a one-way door, or a pending spec.
- **Progress and a rough ETA** on long tasks; never silence-then-dump.
- **Plain, calm replies.** No cheerleading, no yes-inducing closers; state what is true, then stop
  ([`calm-language.md`](../calm-language.md)).

## Running commands (so the CLI stays quiet)

- **Absolute paths and tool dir-flags** (`git -C`, `-p`) — never `cd`.
- **One operation per command** — no `&&` / `;` / pipe-into-loop chains.
- **No command substitution `$(…)`, backticks, or shell variables** — the CLI can't statically analyse
  them and forces an approval prompt every time. Use literal paths and repeated `-m` flags.
- **Push after every commit.**

## Commits

- **`main` = live; human-lock first.** `main` is the source of truth — always pushed, and what adopters
  inherit *live* (by reference), so it must never carry half-done work; nothing reaches `main` until the
  **person locks**. Work on a **feature branch** (auto-pushed — frequent checkpoints, safe stopping points,
  nothing lost). On **lock**, squash the branch into a single clean feature commit on `main` and push. WIP
  may be piecemeal; `main` stays larger feature-based and glanceable. Never rewrite already-merged `main`
  history. (Single-concern changes can go straight to `main` once locked.)
- **Closed type list** (decide once — no per-commit choice): `feat · fix · docs · spec · research · calm ·
  chore`. Subject `type(scope): imperative summary`, ≤ ~50 chars, no full stop.
- **Body — why, not what.** Grouped bullets wrapped ~72, only when there's a reason worth keeping; trivial
  changes stay subject-only. The diff already shows *what* changed; the message carries *why*.
- **Clean trail:** review the README, index, and docs for staleness before committing.
- **Trailer:** `Co-Authored-By` on agent-authored commits.

Backed by research ([`research.md`](../research.md), 2026-06-28): Conventional Commits, atomic-commit +
checkpoint patterns, and ND decision-fatigue / cognitive-load sources.

## Docs on the dev surface

- **calm-Markdown** (the eight rules, [`002-calm-markdown.md`](./002-calm-markdown.md)) for everything.
- One voice across README / CLI / docs; a `humans.txt`; ASCII display headers (identity §6).
- **Judge type and design specimens locally** (`open` → `file://`) — the remote Artifact CSP blocks fonts,
  base64 data URIs included.
- **Verify visual work headlessly before showing it** — render new/changed layouts at ~3 widths
  (desktop / mid / mobile), in light and dark. *Caveat:* headless `--window-size` does **not** drive the
  layout viewport for a `width=device-width` page — it lays out wide and crops, so narrow `@media` rules
  never match and CSS edits look inert. For true sub-breakpoint widths use device-metrics emulation
  (CDP / Playwright), not `--window-size`; a blatant debug rule inside the media query confirms whether it
  is even matching.
- **Diagnose before iterating.** When a check gives a surprising result, find the cause — suspect the
  tooling, not only the code — and confirm it with one decisive test before changing anything. Speculative
  edit-and-re-run loops are not calm (Article VI).

## How it's inherited

The adoption kit points here, so a new sibling carries these conventions too. Wired: calm's own
[`CLAUDE.md`](../../CLAUDE.md) mechanics, [`ADOPTING.md`](../../ADOPTING.md), and the `CLAUDE.md` pointer
template inside it all reference this doc.

## Decided (was open in the spike)

- **Home:** this doc, in `docs/specs/` with the other convention specs; referenced from the `CLAUDE.md`
  mechanics rather than duplicated there.
- **Inheritance:** yes — the adoption kit references it, so adopters inherit the CLI conventions.
- **Self-citing:** cite each convention's Article / origin lightly here; fuller self-citing pairs with the
  *self-citing working docs* seed, not blocking.

## Constitution Check

1. **Serves:** VI (calm, low-arousal on the dev surface), IX (subtract — fewer prompts, atomic commands, a
   clean trail), the working principles (minimal-yes, specs-first), and identity §6 (craft on the dev
   surfaces).
2. **Violates:** none — a convention doc, no machinery, no dependency.
3. **Subtracts:** fewer permission prompts (no un-analyzable commands), fewer yeses, less doc noise.
4. **Calm:** the whole doc is about keeping the CLI quiet; honest and glanceable, nothing to operate.
