---
name: calm-ds
description: The calm design system — the look and the words for every surface built the calm way. Use whenever building or restyling anything visual or written-for-reading: an artifact, HTML page, mockup, wireframe, poster, UI, component, chart, dashboard, README, slide, wallpaper, or CSS. Also use when choosing colours, type, or spacing, when writing microcopy, empty states or error text, and when a bundled or generic design skill (artifact-design, frontend-design, high-end-visual-design, dataviz) would otherwise set the aesthetic. Monochrome ink-on-paper, one clay accent, four locked faces, hand-made not templated.
---

# calm-ds

The calm suite has one identity across every app and surface. It is not the un-calm default look, and it
is not generic good design. When a bundled design skill is also loaded, this one wins on aesthetics:
those skills know craft in general, this file knows calm in particular.

Canonical sources, all in the calm repo (`~/.claude/calm-live` when installed):

| What | Where |
| --- | --- |
| The look (locked) | `docs/identity.md` |
| The words | `docs/calm-language.md` |
| Tokens | `tokens.css` |
| Fonts, base64 | `calm-fonts.css` |
| Governing law | `CONSTITUTION.md` (Articles VI, IX, XI) |

Read `identity.md` before any substantial visual work. What follows is the part you must not get wrong
even if you read nothing else.

## Palette

Monochrome. Hierarchy comes from space, weight and type, never from colour-coding.

- Warm off-white paper and near-black ink in light; soft off-black and bone-white ink in dark. Never pure
  `#000` or `#fff`, so it reads as paper rather than screen.
- Always build both themes. Light-only is not finished work.
- One exception: a single muted clay accent (`--calm-accent`) for the rare genuinely time-bound thing.
  Never alarm-red. Most time-sensitivity is carried by position and weight instead.
- Build on the token variables. Never hard-code a colour.

Scoped departures, already documented, do not generalise: terminal and code surfaces use the warm pastel
ANSI palette (`assets/terminal/`), and `calm-wallpapers` may use research-earned low-saturation colour.

## Type does all the work

Four faces, locked on specimens 2026-06-25. Each has one job.

- **Atkinson Hyperlegible** — body, UI, almost all the words. Built for maximum letter distinction.
- **Yrsa** — display serif. Headlines and leads, the serious work-facing voice.
- **Shantell Sans** — the hand. Wordmark, a desk note, a sign-off. Short, large, low-stakes text only.
- **IBM Plex Mono** — code, terminal, eyebrows and labels.

In artifacts the sandbox CSP blocks font CDNs, so inline `calm-fonts.css` into the page's `<style>`. It is
self-contained base64 covering all four faces, roughly 157 KB. Without it the page falls back to stand-in
system fonts, which is the templated look Article XI rules out.

## Motion

Almost none. No autoplay, no loops, nothing that grabs attention. What moves is slow and ambient, and
`prefers-reduced-motion` is always honoured.

## The hand-made test (Article XI)

Every surface answers one question before it ships: does this look hand-made, or does it look like a default?

**The tell to avoid.** Letter-spaced uppercase labels stacked over machine-perfect hairline rules, evenly
spaced everything, stand-in system fonts. It reads templated and corporate. Explicitly out.

**What to reach for.** Real lettering in the hand rather than tracked-out sans. Rules and marks with some
irregularity rather than a perfect 1px line. Single-ink line work, Peanuts-gentle, huge feeling from few
marks. Type, space and ink chosen rather than defaulted.

No gradients, no 3D, no stock-illustration gloss.

## Words on the surface

Type is a design decision and so is the sentence set in it. Labels, empty states, errors and button text are
part of the look, so they answer here. Full patterns in `calm-language.md`.

Lean toward: "when you're ready", "that's allowed", "nothing's waiting on you", "this'll keep", "no rush".
Avoid: "you should / must", "don't forget", "overdue / behind", `!` and ALL-CAPS alarm, streak framing,
urgency where there is no real deadline, anything that makes absence feel like debt.

The general don't-read-as-generated rules are not scoped to surfaces, so they live in the always-loaded
register in `~/.claude/CLAUDE.md` rather than here. Read the copy aloud once at pace; if it trips or ends on
a closer, fix it.

## Building it

Own the whole look in calm's own tokens and CSS. No styled component library, it would impose someone
else's aesthetic. Rent only interaction and accessibility, via a headless primitive, and only when a real
component needs it. Keep specs target-neutral: tokens plus plain-language behaviour contracts, not
framework code.

---
Canonical here in the calm repo. Reachable from every project via `~/.claude/skills/calm-ds`, a symlink
into `~/.claude/calm-live` — a detached git worktree pinned to `origin/main`. One source of truth in git,
independent of whichever branch the primary checkout sits on, and what loads globally is always the
*published* skill rather than local work in progress. Absolute paths only, so it resolves outside the repo.

Refresh after pushing to `main`:
`git -C ~/.claude/calm-live fetch origin` then `git -C ~/.claude/calm-live reset --hard origin/main`
