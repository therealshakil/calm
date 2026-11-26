# calm terminal theme

A warm, low-arousal terminal theme for an all-CLI working style — two palettes and one font
that follow your Mac's light/dark setting, so the place you work all day reads as calm.
Part of the [calm suite](../../CONSTITUTION.md); contract in [spec 001](./001-terminal-foundation.md).

- **calm-paper** (light) — warm off-white ground, deeper accents
- **calm-ink** (dark) — warm near-black ground, soft pastels
- **IBM Plex Mono** — calm, humanist, evenly spaced

Every text colour clears WCAG AA (≥4.5:1) on its ground.

## See it

| Light — calm-paper | Dark — calm-ink |
| --- | --- |
| ![calm-paper](./screenshots/calm-paper.png) | ![calm-ink](./screenshots/calm-ink.png) |

## Install

The calm look is two independent theme systems — set both, or one stays light-on-light mush.

1 · Ghostty palette — copy the themes in, then point your config at them:

```
cp assets/terminal/ghostty/calm-paper ~/.config/ghostty/themes/calm-paper
cp assets/terminal/ghostty/calm-ink   ~/.config/ghostty/themes/calm-ink
```

In `~/.config/ghostty/config`:

```
theme = light:calm-paper,dark:calm-ink
font-family = IBM Plex Mono
minimum-contrast = 1.1
window-theme = system
```

2 · Claude Code TUI — follow the OS too, in `~/.claude/settings.json`:

```
"theme": "auto"
```

## Use

Toggle macOS Appearance and both layers flip together — paper in Light, ink in Dark.

- Ghostty: reload an open window with ⌘ + Shift + , (or quit and reopen).
- Claude Code: picks up `auto` on next start, or instantly via `/config`.

## Licence

Part of the calm suite — see [`CONSTITUTION.md`](../../CONSTITUTION.md). Full contract and the
colour/contrast rationale: [`001-terminal-foundation.md`](./001-terminal-foundation.md).
