# Spec — Release flow (a calm release skill)

**Status:** locked — co-authored with Shakil · **Date:** 2026-06-24 · **Scope:** suite-wide

A consistent, low-effort way to ship a calm product: a Claude Code skill that keeps the front door — the
READMEs and their screenshots — the same shape every time, so a glance tells you what's ready and what it
looks like.

## Why
As the suite grows I'll ship calm products again and again, so releasing has to be **consistent and
low-effort** — the same shape every time, mostly itself. The point of it is a **simple, calm README**:
someone glancing should see at once *what's ready to use* and *what it looks like*. **Screenshots carry
that** — software always used to have them, and a screenshot is calm: a picture lands quieter and faster
than a paragraph (see the *screenshots-are-calm* seed in `Calm.md`, the private idea-space). The release flow
keeps that front door consistent and current, without it becoming a chore. Serves **Article I** (glanceable),
**IX** (small, low-effort), and the ND show-don't-tell register.

## What it does

A skill you run when a product is ready.
It does the release the same way every time,
and ends with a glanceable summary.
These parts are equal partners:

- **Per-product README** — ensure or refresh it: what it is, ready-state, install, screenshots.
- **Top-level suite README** — a simple list: each product, one line, ready-state, a screenshot; a glance tells you what's ready and what it looks like.
- **Screenshots, captured not grabbed by hand** — `screencapture` of the real terminal window (genuine macOS chrome + shadow), composited onto a calm backdrop; light and dark come from toggling system appearance (the theme auto-switches). Web products use Playwright. You set the on-screen content once; the machine repeats it forever.
- **Checks** — the Constitution Check plus the product's verify gates (e.g. contrast); reports pass or fail.
- **What changed** — a short, plain line; then a version and tag, and a `humans.txt` refresh.
- **Happy** — one command, mostly itself, ending "shipped: X — ready; here's the README and shots."
- **Quiet and empty** — nothing changed, so it says so and does nothing.
- **When it fails** — a check fails, or a fixture or font is missing: it stops calmly, says what's needed, never half-ships, and never publishes without your confirm (Article VII).

## Not this (non-goals)

- **Not auto-publish** — it prepares and recommends; you confirm the actual release (Article VII).
- **Not a CI bot yet** — running on GitHub Actions is parked (the *remote calm automation* drop).
- **Not staging real content** — you set the on-screen state once; the skill regenerates it, it doesn't invent it.
- **Not a heavyweight pipeline** — only what a solo calm release needs (Article IX); no ceremony.
- **Not app/web scenes yet** — the scene mechanism is general, but only the terminal theme's scene is built now; app scenes are parked.

## Research
- [*Release flow → a reproducible calm skill*](../research.md#2026-06-23--release-flow--a-reproducible-calm-skill-reasoned--medium-bar) (2026-06-23) — form: a Claude Code skill
- [*Screenshot capture → native `screencapture` of the real window + composite*](../research.md#2026-06-24--screenshot-capture--native-screencapture-of-the-real-window--composite) (2026-06-24)
- *screenshots-are-calm* seed (`Calm.md`, the private idea-space); the glanceable / show-don't-tell principle

## How (the plan)

Form: a Claude Code skill (per the research), invoked when a product is ready.
Tools are declared in `mise.toml` — `getwindowid` (a window id for `screencapture`), an image tool for the
backdrop composite (native `sips`, or ImageMagick), and `playwright` for web; `CLAUDE.md` points to it.
The terminal path is macOS-native (`screencapture` + AppleScript).

**Content is defined per product as a *scene*.**
A scene is the content a screenshot renders — for a web app, a Playwright fixture (route + state).
For the **terminal theme**, the scene will be a **"welcome to calm" launch banner** — the calm wordmark/message
shown when Claude opens (the *calm-mode-announces-itself-on-launch* + *calm ASCII art* seeds in
`Calm.md`, the private idea-space). That's the perfect, on-identity shot — so the terminal scene **depends on the
ASCII work and is parked until it exists.** Capture is via `screencapture` of the real window (below).

The skill runs, in order:

1. **Checks first** — the Constitution Check plus the product's verify gates (e.g. the contrast script); stop on any fail.
2. **Screenshots** — for the product's scene: size the window, show the content, capture the window (real chrome + shadow), switch to the other appearance and capture again, then frame each on the calm backdrop → light + dark in `screenshots/`. Web uses Playwright. Fail loud on a missing window, permission, or content. *(Terminal scene parked pending the welcome-to-calm banner + ASCII work.)*
3. **READMEs** — refresh the per-product README; update the top-level index row (product, one line, ready-state, screenshot).
4. **Record** — a short "what changed" line, a version and tag, a `humans.txt` refresh.
5. **Summary** — one glanceable report: what shipped, what's ready, the links.
6. **Confirm gate** — nothing is published (tag pushed, release cut) without your explicit yes (Article VII).

A small `mise run check` fail-loud verifier confirms the tools are present.
**Prerequisite (one-time, yours):** the terminal path needs macOS Screen Recording, Accessibility, and
Automation granted once — an agent can't click TCC dialogs. Not headless: it captures a real, visible window.
Running this remotely on GitHub is parked (the *remote calm automation* drop).

### Implementation — two layers (target-neutral, per `identity.md` §7)

The steps above are the **portable recipe**: plain-language instructions an AI or a human can follow, bound
to no OS or tool — *resize the window, show the content, capture, toggle appearance, capture, frame.*
Beneath them sits **one OS-specific realization**. **Target = macOS Apple Silicon only, for now.**

macOS (Apple Silicon) realization of the screenshot step:

- size / position / focus the window, toggle appearance → **AppleScript** via System Events
  (`set size of window 1 …`, `set dark mode to true|false`).
- show the content → run the scene's command in the terminal.
- window id → **`getwindowid`**.
- capture (real chrome + shadow) → **`screencapture -l <id>`** (`-o` drops the shadow; `-c` → clipboard).
- frame on the calm backdrop → **`sips`** (or ImageMagick).

## Open questions

- Enforce deps with a `mise run check`, or trust `mise install`? (Leaning: a light fail-loud check.)
- Where the skill lives — a repo skill vs `~/.claude/skills/` — a build detail for when we build it.
- The "what changed" source — a `CHANGELOG` file vs a commit summary.
- Composite tool — native `sips` (zero-dep) or ImageMagick (richer)?
- The terminal scene (welcome-to-calm banner) is **blocked on the ASCII work** — build screenshots after it lands.
- Terminal capture is macOS-only + not headless — fine under the one-host (macOS) assumption; revisit for CI / cross-platform.

## Tasks

Filled at build time; building re-trips the Build Gate (new surface).

- [ ] `mise.toml` (getwindowid, image tool, playwright) + `CLAUDE.md` pointer
- [ ] capture script: AppleScript resize + dark toggle + `screencapture -l` (getwindowid) → light/dark PNGs
- [ ] composite step: window shot → calm backdrop (background, padding)
- [ ] **blocked:** the *welcome-to-calm* banner scene (needs the ASCII work)
- [ ] top-level README index format + per-product template
- [ ] the skill orchestration: checks → screenshots → READMEs → record → summary → confirm
- [ ] one-time: grant Screen Recording / Accessibility / Automation
- [ ] dogfood: re-release the terminal theme through it

## Constitution Check

1. **Serves:** I (a glanceable front door), IX (small, low-effort, consistent), VII (recommends; confirm to publish); realises the *screenshots-are-calm* seed.
2. **Violates:** none — dev/release-only deps (essential + responsibly-sourced, via mise), no auto-publish, no telemetry.
3. **Subtracts:** one repeatable flow replaces ad-hoc per-release effort; a simple index over per-product chrome; no CI ceremony.
4. **Calm:** honest states (fail-loud, never half-ship), a quiet empty path, a confirm gate; nothing auto-sent.
