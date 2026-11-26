# Spec — drift · calm generative ASCII (logo · banner · texture · generator)

**Status:** locked — co-authored with Shakil · **Date:** 2026-06-24 · **Scope:** suite identity / dev-surface tooling (not a roster calm-tool)

**drift** — the calm suite's identity / dev-surface tooling (kin to the terminal foundation, not a roster
calm-tool — see the Decisions note). A calm, code-made visual language: a deterministic engine that generates quiet ASCII art
(clouds, trees, a Hokusai-style wave, and the textures underneath them), sets text into it without shouting,
and can drop a calm piece into any Markdown. Grounded in [research](../../../../docs/research/calm-generative-art.md).

## Why

The suite needs a visual identity — a logo, a "welcome to calm" banner, texture — but the obvious ASCII
moves (figlet wordmarks, fullwidth unicode, block gradients) all read *loud*, not calm. The references that
felt right were natural and flowing: clouds, trees, and Hokusai's wave.

Research found why, and how. Calm code-made art is **deterministic** (a seed is a written instruction, like a
LeWitt score), built from **few thin glyphs and negative space** (crafted ASCII, not stamped figlet), with
**coherence over weight** (density organised into flow reads as a breeze, not noise), kept in the **soothing
zone** (low contrast, organic spacing, mid density — bold dots are fine; rigid high-contrast pattern is the
real risk). Text is set by **reserving a clearing** and letting the word rest in it, plain. It is decorative
and accessible — never the sole carrier of meaning.

Generated-not-drawn is also the calm-tooling fit: one small deterministic engine, reproducible, that anyone
(or any poem) can seed — and that can place a calm piece into any Markdown file.

## What it does

- **A deterministic engine** — `seed → calm ASCII`. Same seed, same piece (re-realisable, frugal, stdlib-only).
- **Three motifs**, all from the same flow-and-density toolkit:
  - **wave / breeze** — a flow field (Perlin angle grid, low turbulence) advecting dots into a drift or a curl
  - **clouds** — soft Gaussian masses, light and well separated
  - **trees** — thin trunks under soft dappled canopies (a calm grove)
- **A logo** — `calm` set plain, with a hairline rule or a small upper-left cartouche (Hokusai-style) + seal.
- **A banner** — a motif with the wordmark or a short poem resting in a cleared *ma*.
- **A generator skill** — text → calm ASCII, art/image → calm ASCII (via `chafa`), and **insert a calm piece
  into any Markdown** file (fenced, decorative, with a text alternative).

## Not this (non-goals)

- No figlet wordmarks, fullwidth unicode, or block gradients (all read loud).
- No heavy bold (`●`) or high contrast; no rigid grid (pattern-glare / migraine risk).
- No animation by default — motion is *implied* by a still frame; any real drift is opt-in + reduced-motion.
- ASCII is never the sole carrier of meaning — always a plain-text equivalent alongside.
- Never a silent edit — drift previews the piece and asks before inserting into any Markdown.
- No standalone CLI for now (one host = Claude Code); the engine is a plain script the skill drives.
- Not a sprawling toolkit — fewest glyphs and the smallest engine that does the job.

## Research

- [*Calm generative art*](../../../../docs/research/calm-generative-art.md) (2026-06-24) — the lineage, flow fields,
  fractal-fluency texture, and text integration; the 7 principles this spec encodes. First real run of the
  research-flow.

## How — the look (canonical, preserved)

Built from the seven [principles](../../../../docs/research/calm-generative-art.md#synthesis--the-calm-generative-art-principles).
Glyph ramp is light only: `·` `∙` `•` (no heavy `●`); monochrome, in the paper/ink theme.

**wave** — a flow-field swell rising and curling, foam off the crest, wide empty *ma* below:
```
                                 ······∙∙∙∙·········
                          ··········∙∙·∙···       · ····
                 ···············∙∙········· ·     ·      ·····
    ······················∙∙∙∙···········      ·
  · ················∙∙··············
 ·································
 ·····  ··················
               ····
```

**clouds** — soft drifting masses, breathing space:
```
             ··  ··∙··  ····  ····
       ·· ∙∙··∙·∙····∙·∙···∙∙···
     · ·∙∙∙··∙·····∙∙·······∙∙∙∙ ··
       ·······∙···∙∙·∙∙∙···∙· ·
     ····∙···∙·∙··∙··∙∙ ·····
```

**trees** — a calm grove, thin trunks under dappled canopies:
```
              ··                ···  · ∙           ·
            ···∙···              ∙· ∙·∙∙∙        ·    ··
           ··· ∙∙  ·           ··· ∙|··         · ∙∙∙∙···
           ·· ·|·∙··             ···|···          ·∙·|∙
             ··|···                 |              ··|··
               |                    |                |
```

**Text into art** — the art reserves a clearing (knockout + one-cell halo); type stays plain.

Cleared-*ma* wordmark:
```
 ···· calm ·······················
  ··· ──── ·····················
```
Hokusai cartouche + seal (upper-left, the quiet region):
```
  ╭──────╮
  │ calm │
  ╰──────╯
   ▫
```
Haiku in the negative space (straight, uncrowded — readability over cleverness):
```
  · ················∙∙··············              slow water —
 ·································                the same wave
  ······························                  always arriving
```

## Decisions & open questions

- **Name:** **drift** (chosen 2026-06-24 — the breeze and the drifting dots; soft, legible, calm).
- **Home / category:** **suite identity tooling** at `assets/drift/` (reframed 2026-06-28), kin to the
  terminal foundation — *not* a roster calm-tool. Interrogated against the Constitution entry gate and it
  strains it (additive craft, not a net subtraction from life-chaos; partly ideated), so the gate — which
  governs *roster* tools, not how the suite is built/presented — doesn't apply, and no Amendment is needed.
  The engine, motifs and this spec live here; drift is reached through a Claude Code skill, and outputs the
  suite logo/banner as assets. (Was briefly framed as an app at `apps/drift/`.)
- **Poems.** The haiku above is placeholder; the real words are Shakil's to choose. Home created at
  [`poems.md`](../poems.md) — open for the words (drift falls back to the wordmark alone if empty).
- **Form:** a stdlib Python **engine** (arg-driven — motif, seed, text, width — deterministic, golden-seed
  tested) at `assets/drift/`, driven by a Claude Code **skill** for the calm tasks (banner, texture,
  insert-into-Markdown). No standalone CLI (one host = Claude Code). drift **previews and asks before
  writing** into any Markdown — never a silent edit. (chosen 2026-06-24)
- **Verify-queue.** The fractal-D and "60%" figures stay qualitative until the primary sources are checked.

## Tasks

- [x] Build the deterministic engine (stdlib only), arg-driven (motif, seed, text, width): flow field,
  Gaussian masses, grove; light ramp `·∙•`. — `engine/drift.py`.
- [x] The three motifs (wave/breeze, clouds, trees), each seeded and reproducible.
- [x] Text integration: cleared-*ma* knockout + halo, cartouche + seal. *(poem-in-*ma* waits on
  [`poems.md`](../poems.md) — the engine clears the *ma*; the words are Shakil's.)*
- [ ] The Claude Code skill that drives the engine: text→ASCII, image→ASCII (`chafa`),
  insert-into-Markdown (fenced + text alt) — previewing and confirming before any write.
- [~] Accessibility guard: static by default (engine emits one still frame, light ramp, no animation). The
  plain-text-equivalent rule lands with the skill (it does the inserting).
- [x] A few golden seeds + a render check so the look can't silently drift — `engine/check.py` +
  `engine/golden/`. Determinism is the guarantee (same seed, same bytes); see the gallery note on the
  hand-drawn references vs the engine's frozen baseline.

## Constitution Check

1. **Serves:** the suite's calm identity; VI (low-arousal) + ND-safety (fractal-soothing, no pattern-glare,
   reduced-motion); IX (one small stdlib engine, fewest glyphs); the calm-tooling + research-backed mandates.
2. **Violates:** none — stdlib engine, one optional dep (`chafa`) only for image→ASCII; decorative, opt-in.
3. **Subtracts:** rejects figlet/fullwidth/gradients/heavy-bold/animation; the smallest engine, light glyphs,
   negative space by default.
4. **Calm:** deterministic, static, low-contrast, breathing; the art frames the word and never competes with
   it; never the sole carrier of meaning.
