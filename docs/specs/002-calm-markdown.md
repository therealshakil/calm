# Spec — Calm Markdown (authoring style)

**Status:** locked — you locked it (Amendment 3); the style is in force · **Date:** 2026-06-24 · **Scope:** suite-wide

How we write Markdown so it reads calm in every surface we read it in,
and stays readable as raw `.md` the way Markdown intends.
This is a style, not a format change — Markdown earns its place; we just write it with restraint.

## Why

We read our docs in three places:
rendered on GitHub,
rendered in the Claude Code terminal,
and raw in an editor.
The "cramped" feeling was never the format —
it was density (too much bold, too little whitespace)
and the terminal renderer flattening deep headings into a wall of bold.
So we author to the calmest common denominator of all three,
keep it ND-readable (low load, scannable, no visual stress),
and let structure do the work that emphasis was shouting.
Serves Article VI (low-arousal), the ND-readability floor, and Article I (glanceable).

## The rules

1. **One h1; structure with h2, h3 only when needed; never h4–h6.**
   Use ATX (`##`), and let the heading *wording* carry the structure —
   the terminal flattens depth to identical bold, so a deep tree is false structure there.
2. **One blank line between every block** — headings, paragraphs, lists, fences, tables.
   Never stack blocks; never double-blank. Whitespace is the cheapest calm.
3. **Semantic line breaks — one clause per line, always.**
   Break after `.?!` and after independent clauses at `,;:`/em-dash.
   Markdown renders a soft newline as a space, so output is unchanged but diffs stay tiny.
4. **Short sentences; ≤3-sentence paragraphs; point first.**
   Left-aligned ragged-right (the default — never justify). Aim for a ~60–70 character measure.
5. **Bold only for true keywords or labels; no italics for emphasis; no `!`.**
   Heavy emphasis reads as shouting and crowds the text.
6. **Bullets only for genuinely parallel, scannable items; one nesting level at most.**
   Write prose for connected reasoning. No load-bearing task-lists (they degrade in the terminal).
7. **Inline links with meaningful labels** — `[label](url)`.
   Avoid bare or reference-style links; they lose their label in the terminal.
8. **Fenced code with a language tag, short lines; tables only for true tabular data, kept narrow.**
   Avoid anything that forces horizontal scroll — the worst calm-reading failure in a narrow terminal.

## Not this (non-goals)

- **Not a format change** — Markdown stays (it [earns its place](../research.md#2026-06-24--doc-format--keep-markdown-it-earns-its-place-cramped-is-the-renderer)).
- **Not a linter** — enforcement is parked (see Open questions); this is a style we follow.
- **Not for PR/issue comments** — the rules govern committed `.md`; comment bodies break soft newlines, so don't paste semantic-line-break prose there.

## Research

- [*Calm Markdown authoring style (the rules)*](../research.md#2026-06-24--calm-markdown-authoring-style-the-rules) (2026-06-24)
- [*Doc format → keep Markdown*](../research.md#2026-06-24--doc-format--keep-markdown-it-earns-its-place-cramped-is-the-renderer) (2026-06-24)

## How (apply it)

This spec is written in the style, as its own exemplar.
New docs follow these rules.
Existing docs migrate opportunistically — when a doc is touched, not in a churn-everything sweep (Article IX).

## Open questions

- Enforce with a markdownlint config / a release-flow check, or keep it a followed convention?
- Migrate existing docs opportunistically (proposed), or in one pass?

## Constitution Check

1. **Serves:** VI (low-arousal), the ND-readability floor, I (glanceable docs); the *signature-craft* working principle.
2. **Violates:** none — no new deps, no tooling required; a writing discipline, not machinery.
3. **Subtracts:** less bold, fewer heading levels, fewer bullets, no `!` — restraint over addition.
4. **Calm:** honest, low-arousal, scannable; readable rendered and raw; nothing that shouts.
