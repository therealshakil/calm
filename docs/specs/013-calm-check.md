# 013 — calm-check: the tokens, held by a machine

> **Status: drafted 2026-08-22, implemented on Shakil's go-ahead.** Mark it locked when you're happy with
> it; until then it's a proposal that happens to run. Council debate and the measurement behind it are
> summarised in §2.

Two artefacts, in this order: a **scaffold** so the canon is the obvious thing to copy, and a **checker**
so what slips past it gets caught while the model is still holding the file. Neither speaks to the person.

- `assets/scaffold/starter.html` — the plumbing, and nothing else.
- `scripts/calm-check.py` — four rules, stdlib only, wired to `PostToolUse`.

## 1. Why, in one line

The design system was written down and nothing was checking it, so every session re-taught it from prose
and the surfaces drifted anyway.

## 2. What was actually measured

Before building, the four mockups in `apps/margin/docs/mockups` were checked against `tokens.css`:

- Canonical `--calm-*` names appear **zero** times across all four. They run a parallel vocabulary:
  `--ground`, `--ink`, `--ink-2`, `--rule`, and `html.dark` rather than `[data-theme="dark"]`.
- Three of six colour values are near-misses rather than matches: `#6E6757` against `#6B6456`,
  `#E9E4D8` against `#ECE6D8`, `#948D7E` against `#9A9080`.
- None of the four locked faces are used. They set Iowan Old Style, Avenir Next and Bradley Hand.
- Every colour literal sits *inside* a token block, so the obvious rule — ban hex outside `tokens.css` —
  would have caught none of it, while flagging `&#10003;`, a checkmark entity, as a colour.

**Direction of canon matters and it cuts the other way.** `edition-v3.html` was committed 2026-06-23;
`tokens.css` on 06-27; the faces were locked on 06-25. The mockups **predate the canon**. They are the
source material it was distilled from, not a drift away from it.

So the risk is not that old files are wrong. It is that the next surface copies whichever file it finds
first and inherits a vocabulary that was correct when it was written. That is what the scaffold answers,
and it is why the checker never sweeps.

## 3. The scaffold

Carries only what has exactly one correct answer: the body background and ink from tokens, the four faces
each in its one job, `prefers-reduced-motion` already honoured, a horizontal-scroll box, and a marked line
where `calm-fonts.css` and `tokens.css` get spliced in.

Deliberately absent: layout, any spacing scale beyond the tokens, component markup, sample content, a
demo card. **Templated evenness lives in composition, so the scaffold contains no composition.** The body
starts empty under one comment: *everything below is made by hand*. That is how it removes the recall
burden without becoming the default look Article XI rules out.

It does not copy the tokens. A second copy is a second thing to drift.

## 4. The checker — four rules, and only four

| Rule | Catches | Note |
| --- | --- | --- |
| colour literal in a normal declaration | `color: #fff`, `border: … rgba(…)` | `var(--calm-…)` belongs here |
| non-canonical colour or type token | `--ground: #F7F4EC`, `--serif: Georgia, serif` | one vocabulary, `--calm-*` |
| `--calm-*` value ≠ `tokens.css` | `--calm-accent: #FF0000` | reports what the canon says |
| wrong dark selector | `html.dark`, `.dark`, `[data-dark]` | `[data-theme="dark"]` + the light guard |

Plus one guard: **a suppression annotation is itself a violation** (`calm-check: ignore`,
`stylelint-disable`, `eslint-disable`). There is no syntax for silencing it. If a rule is wrong, the rule
comes out of this spec — it doesn't get muted in a file.

Rules are ordered, and a name violation short-circuits the value check on the same declaration: fix the
name first, then the value rule applies.

**Not in scope, on purpose.** The voice, and Article XI's hand-made test. Both are judgement, and a machine
that scores judgement replaces it with the proxy. `calm-language.md` argues against mechanising the first
in its own words — keep the list small and capped, a growing blocklist goes stale and reads mechanical, the
em-dash is the weakest of the tells. Also out for now, as separate decisions rather than refusals: contrast
maths and anything needing a render.

**How it reads a file.** It looks only inside `<style>` blocks for HTML, blanks comments while keeping
offsets so line numbers stay true, and matches declarations rather than raw text. That last part is what
keeps `&#10003;` out of the results. `tokens.css` and `calm-fonts.css` are skipped as circular.

## 5. Where it runs

`PostToolUse`, matching `Write|Edit`, in the **checked-in** `.claude/settings.json` — not the local one, so
removing it is a visible diff. On a violation it exits 2, which shows stderr to the model and lets it fix
the file in the same turn (verified against the hooks documentation; a `PostToolUse` hook cannot block,
because the write already happened).

- **It addresses the model, never the person.** A mistake is absorbed, not announced (Article IV). This is
  loose human, strict machine: the strict, tiring part belongs to the assistant.
- **Changed files only.** It never sweeps the repo and never reports a backlog. Fifteen findings in a file
  someone opened to fix one line reads as an accusation, and a style backlog is exactly the debt the suite
  refuses to manufacture.
- **It never blocks a commit.** No pre-commit hook. Style is never urgent enough to stop someone reaching
  a safe stopping point, and a calm tool doesn't gate progress.
- **Clean runs are silent.** Nothing printed, nothing logged. Violations append one line to
  `~/.claude/calm-check/log.md`, outside the repo, glanceable when wanted.
- **Any internal error exits 0.** A checker must never be the reason a session breaks.

## 6. The mockups — decided

The four mockups would have failed this the moment one was edited. Shakil's call (2026-11-26): bring them
in line. Done in one deliberate pass: each now imports `tokens.css` and `calm-fonts.css` instead of
carrying its own vocabulary, uses the `--calm-*` names and the four faces in their jobs, and switches theme
with `[data-theme]`. v2's serif/hand toggle became a `[data-face]` attribute with plain selector overrides.
All four pass the checker; the pre-reconcile versions stay in git history as the record of where the
identity came from.

## 7. Removing it

Delete the second `PostToolUse` block from `.claude/settings.json`. The script is inert unwired, and the
scaffold is a file nobody has to open. Two-way door.

---

## The Constitution Check

1. **Serves:** XI (the hand-made test gets a floor under it, and the tell is what the rules describe), IX
   (stdlib only, zero dependencies, ~150 lines), IV (a mistake is absorbed — the model is told, the person
   isn't), VI (nothing blocks, nothing alarms, clean runs are silent).
2. **Violates:** none — confirmed against the Articles, the banned patterns, and the Budgets. Article VII
   holds: it reports and never edits a file itself. No nag, no gate, no countdown.
3. **Subtracts:** the per-session re-teaching of the token vocabulary, and one whole category of review
   attention. It also removes three candidate tools that were on the table: a prose linter for the voice
   (refused), a hand-made-test checker (refused — a regularity detector manufactures the evenness Article
   XI bans), and `stylelint` plus its npm tree in a repo with no JS toolchain (refused under Article IX).
4. **Calm:** honest states both ways — silence on a clean file, a plain note to the model on a bad one,
   and an exit 0 on any internal error so a broken checker is never the thing that interrupts. Sad path is
   specified: unreadable file, missing `tokens.css`, malformed payload, all silent no-ops.
