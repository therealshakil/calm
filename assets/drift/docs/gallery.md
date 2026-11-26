# drift — gallery (the preserved look)

The canonical pieces — the **aesthetic north-star**: the register the engine is tuned toward (low contrast,
light glyphs, generous *ma*).

A note on "golden", reconciled when the engine landed (2026-06-29): these pieces are hand-drawn, so a
general flow field won't reproduce them glyph-for-glyph from a seed. So the render-check
(`engine/check.py`) guards **determinism** — same seed, same bytes — against frozen baselines captured
*from the engine itself* (`engine/golden/`). These hand-drawn pieces stay the look to aim at; the frozen
baselines are what catches a silent regression.

Canonical seed: **7** · grid **66×14** · ramp `·∙•` (no heavy `●`), monochrome, paper/ink. Reseeding gives
sibling compositions in the same calm register.

## Motifs

**wave** — a flow-field swell rising and curling, foam off the crest, wide *ma* below.
*Recipe: flow field, curl eye ≈ (0.7w, 0.32h), low turbulence, ~70 particles × 110 steps; light foam at the crest.*
```
                                 ······∙∙∙∙·········
                              ·····∙·∙∙∙····       ···
                          ··········∙∙·∙···       · ····
                       ···········∙∙∙····· ·  ·  · ·   ···
                 ···············∙∙········· ·     ·      ·····
           ··················∙·∙········ ··  ·               ·····
    ······················∙∙∙∙···········      ·
 ·······················∙∙···········
  · ················∙∙··············
 ·································
  ······························
  ·····  ··················
               ····
```

**clouds** — soft Gaussian masses, light and well separated, breathing.
*Recipe: 3 soft centres (wide ellipses), low-contrast ramp, generous negative space.*
```
             ··  ··∙··  ····  ····
       ·· ∙∙··∙·∙····∙·∙···∙∙···
     · ·∙∙∙··∙·····∙∙·······∙∙∙∙ ··
       ·······∙···∙∙·∙∙∙···∙· ·
     ····∙···∙·∙··∙··∙∙ ·····
       ······∙·∙···  · ·
```

**trees** — a calm grove: thin trunks under soft dappled canopies.
*Recipe: trunk (`|`) + a rounded dot-canopy per tree; 3 trees at varied heights.*
```
              ··                ···  · ∙           ·
            ···∙···              ∙· ∙·∙∙∙        ·    ··
           ··· ∙∙  ·           ··· ∙|··         · ∙∙∙∙···
           ·· ·|·∙··             ···|···          ·∙·|∙
             ··|···                 |              ··|··
               |                    |                |
```

## Text into art

The art reserves a clearing (knockout + one-cell halo); the type stays plain.

**cleared-*ma* wordmark**
```
 ···· calm ·······················
  ··· ──── ·····················
```

**Hokusai cartouche + seal** (upper-left, the quiet region)
```
  ╭──────╮
  │ calm │
  ╰──────╯
   ▫
```

**haiku in the negative space** (straight, uncrowded)
```
  · ················∙∙··············              slow water —
 ·································                the same wave
  ······························                  always arriving
```

*(The haiku is a placeholder — drift's real words live in [`poems.md`](./poems.md).)*
