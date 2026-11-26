# drift spec-drops (parked)

Rough, drift-level spec ideas not yet promoted. Each names the need; promote via the normal flow (the person
locks). Drafts only.

---

## drift's docs — a lean documentation set

**Need (lived):** drift will want a little documentation beyond [the spec](./001-drift.md) and the
[README](../../README.md) — but the suite subtracts by default, so this should be *few* well-chosen docs, not
a wiki. Three gaps are real: the canonical art needs a preserved, reproducible home (so the look can't
silently drift); the calm poems need somewhere to live (the spec's one open item); and once built, drift
needs a short how-to.

**Proposed docs (lean):**

1. **`gallery.md` — the preserved look.** The canonical pieces (clouds, trees, wave + the text treatments),
   each with its **golden seed** and the dials used, so the look is reproducible and can't drift. This is the
   home for "preserve them all" and backs the spec's golden-seed task. The render-check reads from here.
2. **`poems.md` — drift's calm words.** A small, curated set of haiku / short poems drift can set into the
   *ma*, authored by Shakil, each tagged for the motif or mood it suits. Resolves the spec's open "poems"
   item — gives the words a home instead of a placeholder.
3. **Usage — folded into the README, not a new file.** A short "how to run" (engine args + the skill) added
   to `assets/drift/README.md` when drift is built. (Subtract: no separate USAGE doc.)

**Not proposed (kept out):** a separate decisions/ADR doc — the *why* already lives in the spec's
*Decisions & open questions*. No changelog, no wiki, no per-motif pages.

**Why it's calm:** three docs, each earning its place; the gallery prevents silent drift, poems gives the
words a home, usage stays in the README. ND-friendly — small, glanceable, nothing to maintain that doesn't
pull weight.

**Status:** **ratified** (2026-06-24). [`gallery.md`](../gallery.md) and [`poems.md`](../poems.md) created;
usage folds into the README at build.
