# Spec — Adopting calm (frictionless, decisive inheritance)

**Status:** locked — co-authored with Shakil · **Date:** 2026-06-25 · **Scope:** suite-wide

A small, static adoption kit so a new repo inherits calm by **point-and-copy** — no analysis pass — and an
agent can then build a sibling decisively with the person hands-off.

## Why

The lesson from the retired calm-dia build: "just point a `CLAUDE.md` at calm" is not yet frictionless.
To inherit faithfully, an adopter had to read the governing files, extract the tokens, re-derive the doc
conventions, and read the Constitution — a heavy analysis pass for "adopting is just pointing at it."
Shakil's bar: an adopter (agent or person) should inherit calm **and build decisively, hands-off**, from
what the source hands them at the start. This closes that gap with a handful of copyable files, not
machinery (Article IX).

## What it does

- **Happy:** a new repo adopts calm in minutes — drop in the `CLAUDE.md` pointer, import the token file,
  follow `ADOPTING.md`. From there an agent can build a sibling without round-trips.
- **Quiet & empty:** nothing to maintain. The kit is a few static files; no generator, no build step, no
  dependency. Once copied, there is nothing to tend.
- **When it only half-fits:** if a target can't consume the token file as-is (e.g. true-native), the
  values are plain and readable enough to transcribe by hand; `ADOPTING.md` says so rather than pretending.

## Not this (non-goals)

A generator, CLI, or scaffolding tool (machinery the Constitution resists). A build step. A styled
component library. Forcing every adopter to take everything — they take what fits. Restating calm's rules
in each repo — the pointer inherits them.

## Research

- **Decisive-inheritance lesson** — [`spec-ideas.md`](./spec-ideas.md) (the seed this promotes) + the
  calm-dia retrospective.
- **Palette decision** — monochrome + the one clay accent is canonical; the terminal pastels are a
  terminal-scoped exception ([`identity.md`](../identity.md) §1, 2026-06-25).
- **Typefaces** — locked ([`identity.md`](../identity.md) §2): Atkinson Hyperlegible · Yrsa · Shantell Sans
  · IBM Plex Mono.
- Design-tokens-as-single-source is standard practice (reasoned; not deeply sourced — the kit is small).

## How (the plan)

Four small, static artifacts — built after lock:

1. **`ADOPTING.md`** (calm root) — the ordered, copy-paste path: (a) drop in the `CLAUDE.md` pointer
   (template inline), (b) import the token file, (c) reuse the existing doc templates (spec-template,
   readme-template, calm-Markdown), (d) end claims with the four-line Constitution Check. One read, no
   spelunking.
2. **The `CLAUDE.md` pointer template** — the canonical boilerplate (names `github.com/therealshakil/calm`
   as governing law; the four governing files; the mechanics; the Build Gate; person-locks). Lives inline
   in `ADOPTING.md` as a copy block.
3. **The token file** — portable tokens: warm paper/ink grounds (light + dark), the clay accent
   (`#B5612F`), and the locked type stack. **Format: CSS custom properties (`tokens.css`)** — directly
   importable by the web/webview targets the suite leans toward, and plain enough to transcribe to any
   target. A JSON view is added only if a true-native sibling ever needs it (subtract — not built
   speculatively).
4. **`CALMED.md`** (calm root) — the registry of adopters: name · one line · link · what it borrows. First
   entry: calm-wallpapers. Graduates the existing `Calm.md` seed.

## Decided (was open)

- **Token format** — **CSS custom properties only** (`tokens.css`). JSON deferred — added only if a
  non-web sibling ever needs it (subtract).
- **Doc skeletons** — **point at the existing templates** (spec-template, readme-template, calm-Markdown);
  no new copyable stubs (no duplication).

## Tasks

- [x] Write `ADOPTING.md` with the `CLAUDE.md` pointer template inline.
- [x] Write `tokens.css` (monochrome grounds light/dark + clay + the four type families and roles).
- [x] Write `CALMED.md` (first entry: calm-wallpapers).
- [x] Collapse the `spec-ideas.md` inheritance seed to a pointer; index this spec in
  [`docs/specs/README.md`](./README.md).

## Constitution Check

1. **Serves:** the research-backed / decision-grounded mandate; Article IX (subtract — static files, no
   machinery); makes calm portable (it reaches new surfaces); minimal-yes + hands-off (decisive adoption).
2. **Violates:** none — no dependency, no build tool, no new runtime surface; static docs + one token file.
3. **Subtracts:** replaces the adoption analysis pass with point-and-copy; ships plain files, not a
   generator; reuses existing templates rather than duplicating them.
4. **Calm:** nothing to maintain after copying; honest about partial-fit (transcribe for non-web); docs
   only, so no motion concern; the happy path and the half-fit path are both stated.
