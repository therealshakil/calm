# Spec — Calm README standard

**Status:** locked — co-authored with Shakil · **Date:** 2026-06-24 · **Scope:** suite-wide

The calm form every tool's README follows: glanceable, honest, the same shape each time. Builds on
[`002-calm-markdown.md`](./002-calm-markdown.md) (READMEs *are* Markdown) — this adds the README-specific structure,
order, and cuts. The copy skeleton is [`../readme-template.md`](../readme-template.md).

## Why

A README is the first thing a reader meets, and across a suite it should feel like one hand. The established
guides agree on a spine (title → what → install → use → licence) and on front-loading the essentials. The
calm version keeps that spine, **subtracts** the clutter that creates noise or status-anxiety (badges,
roadmaps, marketing), and holds a quiet, capacity-framed voice. A reader who has seen one calm README can
predict the next — which, for an ND reader, lowers the load directly.

## The standard

**The spine, in this order:**

1. **Title** — a single `# tool-name`.
2. **One line** — what it is, in plain words; who it's for if that isn't obvious. Not a pitch.
3. **Why / when** — optional; one or two clauses, or folded into the one line.
4. **Install** — the fewest steps; one command or one copy for a small tool.
5. **Use** — one runnable example and what to expect. The highest-value section.
6. **Settings** — only if it has any; a short list or a narrow table.
7. **Licence** — one line.

**Optional, only if real:** a single screenshot for a visual tool; a one-line "part of the calm suite" link.

**Consistency:** the same heading words everywhere — **Install · Use · Settings · Licence** — so a reader
can predict each section.

**Voice:** the first sentence says what it is, plainly ("A small terminal theme. Warm, low-contrast, easy on
tired eyes."), never a sell ("The ultimate…!"). No superlatives — *powerful, blazing, seamless, delightful*.
State what it is and what it does, then stop. Capacity-framed, calm-Markdown throughout (no `!`, no emphasis
italics, short blocks).

## Not this (the calm cuts)

- **No badges / shields** — clutter and status-anxiety.
- **No table of contents** — a calm README never gets long enough to need one.
- **No roadmap, project status, changelog, FAQ, or support ladder** — drop, or one line, or link out.
- **No per-tool contributing section** — link once to the suite [`CONSTITUTION.md`](../../CONSTITUTION.md)
  rather than repeating.
- **No long install or troubleshooting for a finite tool** — link out; the README is not the manual.
- A long README on a small tool is a smell — the tool isn't finite, or the doc is doing the manual's job.

## Research

- Logged in [`research.md`](../research.md) (2026-06-24). Sources: standard-readme, makeareadme.com, Art of
  README, GitHub docs, W3C clear-content + plain-language. One deliberate divergence: where makeareadme says
  "too long is better than too short", we take Art of README's brevity for finite calm tools.

## Decisions

- **Conformance: published tools only.** The shipped tools — **terminal** and **warden** — conformed
  2026-06-24. drift (not built), mail (notes only), and margin (unbuilt) take the shape when they ship or are
  next touched. (Chosen by Shakil.)

## Tasks

- [x] Write the copy skeleton at [`../readme-template.md`](../readme-template.md).
- [x] Conform published tools — terminal + warden (2026-06-24).
- [ ] Conform drift, mail, margin when they ship or are next touched.

## Constitution Check

1. **Serves:** I (glanceable), VI (low-arousal), the ND-readability floor; the *subtract by default* and
   *signature-craft* working principles; consistency across the suite.
2. **Violates:** none — a writing standard, no deps, no machinery.
3. **Subtracts:** cuts badges, ToC, roadmaps, per-tool contributing, long install — restraint over addition.
4. **Calm:** honest, scannable, predictable shape; says what a tool is and stops; nothing that shouts or sells.
