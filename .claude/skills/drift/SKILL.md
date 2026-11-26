---
name: drift
description: Generate calm ASCII art (logo, banner, texture) with the drift engine and, on confirmation, drop it into any Markdown. Use when the user wants a calm ASCII wordmark / banner / texture, a "welcome to calm" header, or to place calm ASCII into a doc or README.
---

# drift — calm generative ASCII

drift is the calm suite's generative-ASCII tooling — a deterministic, stdlib engine. A seed is a written
instruction: same seed, same art. Low contrast, organic, breathing, static. The art frames the word; it
never competes with it. Spec: `assets/drift/docs/specs/001-drift.md` · golden look: `assets/drift/docs/gallery.md`.

## Run the engine

```
python3 assets/drift/engine/drift.py --motif {wave|clouds|trees} \
  [--seed N] [--width W] [--height H] \
  [--text WORD]            # rest WORD in a cleared ma (a quiet wordmark)

python3 assets/drift/engine/drift.py --cartouche WORD   # a small Hokusai-style title block + seal
```

Defaults are the canonical seed 7 / 66×14. Reseed (`--seed`) for a sibling composition in the same register.

## Image / art → ASCII

The engine is text-only. For a photo or drawing → calm ASCII, use **`chafa`** (`brew install chafa`) with a
restrained symbol set (dots / low contrast), then treat the output like any drift piece below. Keep it light;
don't let it shout.

## The calm rules (always)

- **Preview first, never silent.** Show the rendered piece in chat. Only write it into a file on the
  person's confirmation (Article VII — recommend, never execute).
- **Decorative, never the sole carrier.** When inserting into Markdown, put it in a fenced block and keep the
  real meaning in plain text nearby — a screen reader must not need the glyphs. ND-first.
- **Low and quiet.** The engine holds the calm dials (light ramp, no heavy fills, static). Don't post-process
  it louder. One piece, not a wall.

## Insert into Markdown (the common task)

1. Generate the piece and **show it**.
2. Propose where it goes; confirm with the person.
3. On confirmation, edit the target file: the art in a fenced ```` ``` ```` block, plus a short plain-text
   line if it carries meaning. Commit per `docs/specs/007-cli-conventions.md`.

## Don't drift the look

`assets/drift/engine/check.py` re-renders the frozen seeds and compares to the goldens in
`assets/drift/engine/golden/` — run it after engine changes; `check.py --freeze` re-baselines on purpose.
The hand-drawn north-star pieces live in `assets/drift/docs/gallery.md`.
