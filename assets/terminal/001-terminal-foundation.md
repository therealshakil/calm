# Spec 001 — Terminal foundation (the calm terminal theme)

**Status:** locked — co-authored with Shakil; implementation shipped · **Date:** 2026-06-23 · **Scope:** foundation (suite-wide)

The calm terminal: two OS-following palettes and one font that make any calm CLI — and the
Claude Code host itself — read as calm.

> Honesty note: this spec was **back-filled** after the work was built (palette tuned, installed,
> host themed) ahead of being specced. The research underneath was sound (validated below, no rework),
> so the cost was small — but it's exactly the slip the **Build Gate** spec-drop exists to prevent. Logged,
> not hidden (Article IV: a mistake is absorbed, not announced; research-method: say what's reasoned vs sourced).

## Why
The CLI is my main tool — where I work all day, and now where I build the calm suite itself. Default
terminals are *cramped, over-contrasted, colours all over the place — built to display output, not to be
read.* But an agentic CLI is a **reading** surface: I'm reading the work. So that noise is a constant, low
tax on the one place I can't step away from.

It also has to **follow the day on its own** — paper in daylight, ink at night — because reading comfort
tracks the light around me, and toggling by hand would just be another tax. The calm is in never having to
think about the switch.

Two reasons it must be calm. First, **calm has to start in the main tool** — if the place I work isn't
calm, nothing downstream is. Second, **you can't build calm tools from inside a stressful one** — the
substrate has to embody what the suite is for. Build calm *with* calm.

So: a terminal built for *reading* — warm, low-arousal, legible, colour that *means* something instead of
shouting, and that quietly matches the time of day. Serves **Article VI** (low-arousal over alarm), the
**ND-readability floor**, and **Article I** (a calm, glanceable substrate the tools inherit).

## What it does
- Two palettes — **calm-paper** (light), **calm-ink** (dark) — and **IBM Plex Mono**, all tuned for
  *reading*: warm grounds (never pure white/black), even spacing, and colour that's hue-separated and
  *means* something rather than decorates.
- **Follows the day on its own** — Light → paper, Dark → ink — live, no manual toggle.
- **Two layers, both follow the OS** (the load-bearing contract — miss one and it's mush):
  1. **Ghostty** — terminal palette + ground.
  2. **Claude Code** — its own TUI colours (`"theme": "auto"`), a separate system it paints itself.
- **Happy:** in either mode it's calm and readable — every text colour clears WCAG AA (≥4.5:1), off-neon,
  nothing shouts.
- **Quiet & empty:** no chrome, no badge, no colour-for-its-own-sake — a bare prompt is calm.
- **When it fails:** a too-low colour gets bumped by Ghostty's `minimum-contrast` backstop; if the two
  layers drift (one switched, one didn't) it reads as mush → fixed by a reload, honest and recoverable,
  never silently broken; an unthemed host degrades to plain readable text, never alarm.

## Not this (non-goals)
- **Not operable** — no in-app theme picker or knobs (Article I: glanceable, not operable). The only
  control is the OS light/dark switch you already use.
- **Not multi-terminal** yet — assume Ghostty + the Claude Code host (one-host principle). Other emulators
  are a later port, not now.
- **Not a custom Claude Code palette** yet — the `*-ansi` route (host borrows the calm palette directly)
  is parked (see Open questions).
- **Not a density / power-user terminal** — optimised for calm *reading*, not maximum info-per-screen.
- No motion, no decoration.

## Research
Backed by [`research.md`](../../docs/research.md):
- [*Terminal palette → bright pastel, contrast-safe*](../../docs/research.md#2026-06-23--terminal-palette--bright-pastel-contrast-safe-nd--cli) (2026-06-23)
- [*Terminal font → IBM Plex Mono*](../../docs/research.md#2026-06-23--terminal-font-for-the-calm-terminal-foundation--ibm-plex-mono) (2026-06-23)
- [*Paper & ink colour — warm, not white/black*](../../docs/research.md#2026-06-23--paper--ink-colour--warm-not-whiteblack) (2026-06-23)
- [*Terminal theme decisions validated — no restart*](../../docs/research.md#2026-06-23--terminal-theme-decisions-validated--no-restart-needed) (2026-06-23) — 6/6 hold on current evidence
- [*"Read-only" is also an interaction stance*](../../docs/research.md#2026-06-23--read-only-is-also-an-interaction-stance-calm-technology) (2026-06-23)

## How (the plan — already done)
- Files: `assets/terminal/ghostty/calm-paper`, `…/calm-ink` (Ghostty palette format).
- Install: copied into `~/.config/ghostty/themes/`; a repo `PostToolUse` hook auto-syncs on edit
  (`.claude/settings.json`).
- Ghostty config: `theme = light:calm-paper,dark:calm-ink`, `font-family = IBM Plex Mono`,
  `minimum-contrast = 1.1`, `window-theme = system`.
- Claude Code: `"theme": "auto"` (global settings) — binds at startup.
- Contrast rule: WCAG ratio per colour vs its ground, target ≥4.5:1. On the light ground the bright row
  is the **deeper emphasis row** (~6.5:1), not a lighter pastel (a colour can't be both lighter and
  higher-contrast). Method + the enable steps live in `assets/terminal/README.md`.

## Open questions
- **Unify the host under the calm palette?** `light-ansi`/`dark-ansi` make Claude Code borrow the terminal
  palette (fully on-brand, already contrast-verified) — but there's no `auto` variant. Tradeoff parked.
- **Light-mode optical thinning — resolved (won't fix).** The same mono reads narrower/cramped in light
  mode (irradiation illusion — validated, confirmed by lived use). `font-thicken` would counter it but is
  global; Shakil acclimatised and prefers it as-is, so we leave it. (2026-06-23)
- **Multi-terminal ports** — deferred under the one-host principle.

## Tasks
- [x] Palette (paper + ink), contrast-verified
- [x] Install + auto-sync hook + host theme (auto)
- [x] Enable doc (`assets/terminal/README.md`)
- [x] Commit + push the set
- [x] Light-mode thinning decided — leave as-is (font-thicken not needed)
- [ ] Decide ansi-vs-auto host palette (only if it earns it)

## Constitution Check
1. **Serves:** VI (low-arousal, no alarm), the ND-readability floor (built for *reading*), I (a glanceable
   calm-tech substrate the tools inherit), IX (small, no knobs); working principle "one host — assume
   Claude Code".
2. **Violates:** none — no operability, no telemetry, essential-only (uses the host's own theme systems,
   no new deps). The build-first *process* slip is logged above and addressed by the Build Gate.
3. **Subtracts:** no theme picker, no per-app themes, no multi-terminal scaffolding — one OS switch drives
   everything.
4. **Calm:** honest states (contrast backstop, graceful degrade); no motion; happy **and** empty paths
   specified.
