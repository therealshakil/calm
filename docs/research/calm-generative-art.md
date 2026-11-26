# Calm generative art — a code-made visual language for the suite

**A research product** · 2026-06-24 · suite-wide
*Informs the [drift spec](../../assets/drift/docs/specs/001-drift.md) and extends [`research-method.md`](../research-method.md). A deliverable in itself.*

## Question

How do we make a genuinely **calm, ND-safe visual language** — logo, banner, texture — *from code*, and set
text into it without it shouting? The brief ruled out figlet wordmarks, fullwidth unicode and block
gradients as "not calm"; the references that *did* feel calm were clouds, trees, and Hokusai's wave.

## Method

Several frugal passes (one continued agent, to keep context), each budgeted as a reversible identity call —
one pass, graded by strength, building on the last. Findings marked confirmed vs uncertain; load-bearing
claims left in the verify-queue. Feasibility was proven with deterministic prototypes, not argued.

## Findings

### 1. The calm lineage — art as a written instruction

- **Sol LeWitt:** art as a short written rule executed like a musical score — deterministic, re-realisable.
- **Frieder Nake / Georg Nees / Vera Molnár:** "think the image, don't make it"; the *program* is the work;
  pseudo-randomness "stands for the intuition of the artist" — so a fixed seed feels hand-varied, not chaotic.
- **Crafted ASCII vs stamped figlet:** the oldschool scene hand-placed *few* glyphs into clean line. Amiga
  artist Michael Hischer: *"never more than ten characters… an excessive number distracts from the
  essentials."* This is why figlet wordmarks read loud and a thin crafted mark reads calm.

→ **Calm = a deterministic rule drawing few thin glyphs with generous negative space.** (Confirmed lineage.)

### 2. Motion as calm — flow fields

- **Flow fields** (Tyler Hobbs; *Fidenza*): particles advected along a Perlin-noise angle grid. With *smooth*
  noise the result is, in Hobbs' words, **"calm and orderly"**; with rough noise it's "maximum chaos."
- **Coherence, not weight, is the dial.** Density organised into one large-scale drift reads as a *breeze*;
  the same dots in random directions read as noise. (This confirmed the owner's instinct directly.)
- **A still frame already implies the motion** (density gradient + streamlines). Static is the calmest,
  ND-safest default. If ever animated: opt-in, very slow ("as ignorable as it is interesting" — Eno), and
  honouring `prefers-reduced-motion` (WCAG 2.2.2; motion can trigger vestibular distress).

### 3. Texture as soothing — and where it tips to agitating

- **Fractal fluency** (Taylor & Spehar): mid-complexity organic patterns (nature's ~D 1.3–1.5) ease the
  visual system and lower stress. Too sparse = boring; too dense = stressful; calm is the middle.
- **Biophilic** (Terrapin "14 Patterns"): natural textures — dappled light, ripples — restore attention.
- **Repetition regulates** (the ND/stimming link) — *but* high-contrast, rigid, high-frequency pattern hits
  a "pattern glare" zone (~3 cycles/degree) that triggers visual discomfort and migraine.

→ **Bold dots are not the risk. The dials are: low contrast, organic (non-grid) spacing, mid density with
breathing space.** (Confirmed; exact fractal bounds and the "60%" stress figure left in the verify-queue.)

### 4. Setting text into the art

- **Concrete poetry / calligrams** (Apollinaire): the page's space is as expressive as the words — but only
  when shape *reinforces* meaning, not when it fights legibility.
- **Ma (間)** — Japanese "active negative space": the clearing is not leftover, it's where the word belongs.
- **Hokusai's placement:** a small rectangular **title cartouche, upper-left**, signature/seal beside it —
  in the calm region, never over the wave's energy.
- **Legibility** (NN/g, WCAG): **knockout + halo** — blank the texture behind the glyphs plus a one-cell
  margin; keep type plain; hold the haiku to 4.5:1 contrast for ND readers.

→ **The art reserves a clearing; the type rests in it, plain, never overlapping.** Path-warped text is the
rare flourish (wordmark only) — it broke up in testing, exactly as the craft predicts.

## Synthesis — the calm generative-art principles

1. **Deterministic** — the seed is the instruction; same seed → same piece (LeWitt/Nake).
2. **Coherence over weight** — density organised into flow reads calm; random density reads as noise.
3. **The soothing dials** — low contrast, organic non-grid spacing, mid density, breathing space.
4. **Static by default** — motion is implied; any real animation is opt-in and reduced-motion-aware.
5. **The art frames the word** — cleared-*ma* knockout + halo; plain type; never overlapping.
6. **Decorative + accessible** — ASCII is never the sole carrier; real text sits alongside (screen-reader safe).
7. **Few glyphs, monochrome, in-theme** — paper/ink, no heavy bold, fewest marks that do the job.

## Reference — a hero render (the wave, haiku in the *ma*)

```
                                 ······∙∙∙∙·········
                              ·····∙·∙∙∙····       ···
                          ··········∙∙·∙···       · ····
                 ···············∙∙········· ·     ·      ·····
    ······················∙∙∙∙···········      ·
 ·······················∙∙···········
  · ················∙∙··············              slow water —
 ·································                the same wave
  ······························                  always arriving
  ···························
 ·····  ··················
```

The three motifs (clouds, trees, wave) and the text treatments live in the [drift spec](../../assets/drift/docs/specs/001-drift.md).

## Citations

- Lineage: [Frieder Nake — DAM](https://dam.org/museum/essays_ui/essays/frieder-nake-interview-lines-fiction/) · [LeWitt — SFMOMA](https://www.sfmoma.org/read/drawing-with-instructions/) · [Amiga ASCII — glyphdrawing.club](https://blog.glyphdrawing.club/amiga-ascii-art/)
- Flow / motion: [Flow Fields — Tyler Hobbs](https://tylerxhobbs.com/essays/2020/flow-fields) · [Eno / Music for Airports](https://www.udiscovermusic.com/stories/brian-eno-music-for-airports-feature/) · [prefers-reduced-motion — W3C C39](https://www.w3.org/WAI/WCAG22/Techniques/css/C39)
- Texture: [Fractal fluency — Taylor & Spehar (Springer)](https://link.springer.com/chapter/10.1007/978-1-4939-3995-4_30) · [14 Patterns of Biophilic Design — Terrapin](https://www.terrapinbrightgreen.com/reports/14-patterns/) · [Pattern glare / migraine — PMC](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8788433/)
- Text integration: [Calligrammes — Wikipedia](https://en.wikipedia.org/wiki/Calligrammes) · [Ma (negative space) — Wikipedia](https://en.wikipedia.org/wiki/Ma_(negative_space)) · [The Great Wave — Art Institute of Chicago](https://www.artic.edu/articles/1139/10-things-to-know-about-the-great-wave) · [Text over images — NN/g](https://www.nngroup.com/articles/text-over-images/)

## Confidence — verify-queue before quoting publicly

- Fractal "sweet spot" **D ≈ 1.3–1.5** and the **"reduces stress up to 60%"** figure — single-source headline
  claims; verify the primary Taylor/Spehar studies before quoting a number.
- **Pattern glare ~3 cycles/degree** threshold — confirm the exact figure.
- **Hokusai cartouche** exact wording/position — confirmed via secondary museum sources; the primary page was
  paywalled, so verify against a directly-viewable museum page if quoting.
- The aesthetic judgements ("reads calm") are design calls grounded in the above, not quoted findings.
