# drift

The calm suite's identity / dev-surface tooling — kin to the terminal foundation, not a roster calm-tool.
A small deterministic engine that makes quiet, code-made ASCII art — clouds, trees, a Hokusai-style wave,
and the breeze textures underneath — sets text and poetry into it by reserving negative space, and can drop
a calm piece into any Markdown.

Same seed, same art (a seed is a written instruction). Low contrast, organic, breathing — decorative, never
the sole carrier of meaning.

- **Engine:** [`engine/drift.py`](./engine/drift.py) — the deterministic engine (stdlib only).
- **Spec:** [`docs/specs/001-drift.md`](./docs/specs/001-drift.md) — *locked*.
- **Gallery:** [`docs/gallery.md`](./docs/gallery.md) — the canonical look (the aesthetic north-star).
- **Poems:** [`docs/poems.md`](./docs/poems.md) — drift's calm words (open for Shakil's set).
- **Research:** [`docs/research/calm-generative-art.md`](../../docs/research/calm-generative-art.md) — why it
  looks the way it does.

## Run it

```
python3 engine/drift.py --motif wave --seed 7 --text calm
python3 engine/drift.py --motif clouds --seed 7
python3 engine/drift.py --motif trees --seed 7
python3 engine/drift.py --cartouche calm
```

Motifs: `wave` · `clouds` · `trees`. A `--text` rests a word in a cleared *ma*. Same seed, same piece.

Determinism is guarded by `engine/check.py` (re-render and compare; `--freeze` to re-baseline on purpose).

## The `calm` command — the sit-down view

Sitting down to work on calm: run `calm`. It enters the repo and prints `engine/work.py` — drift's rotating
banner (a fresh seed each time, `calm` in the cleared *ma*) and a one-glance status (branch · last commit ·
clean/uncommitted). Plain terminal output you ran on purpose, so it always shows and costs **zero model
tokens**.

```
python3 engine/install-calm.py            # add the `calm` command to ~/.zshrc
python3 engine/install-calm.py --remove   # take it back out
```

Open a new shell, then run `calm`. (`engine/work.py` and `engine/welcome.py` also run standalone.)

### Why a command, not an auto-banner on Claude launch

The original idea — calm announcing itself when *Claude* opens — is **parked: Claude Code has no channel for
a clean ASCII startup banner** (verified 2026-06-29). A shell wrapper printing before `claude` is wiped when
the TUI clears the screen; a `SessionStart` hook is either invisible (stdout → model context only) or
token-costed and not real ASCII (`systemMessage`). Full finding + open upstream issues:
[`tuning-agents.md`](../../docs/research/tuning-agents.md). The `calm` command gives the same glance, on your
terms, today.

In Claude Code, the **drift skill** ([`.claude/skills/drift/`](../../.claude/skills/drift/SKILL.md)) drives
the engine and drops a previewed piece into any Markdown — never silent, always with a plain-text equivalent.
Image → ASCII via `chafa` when needed.
