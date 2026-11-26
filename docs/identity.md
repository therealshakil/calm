# Calm — Identity

> **Status: LOCKED (2026-06-23) — direction settled; specs may be written against it.** Typefaces locked
> 2026-06-25 on specimens (§2). One refinement remains and it doesn't block speccing: illustration
> execution (its own session, see §3). From here, change is by deliberate revision, not drift — same as
> the [Constitution](../CONSTITUTION.md).

The suite's voice in words already lives in [`calm-language.md`](./calm-language.md). **This doc is the
look**: palette, type, illustration, motion, and how the identity is built. Same job both files do —
keep every surface feeling made by one calm hand.

---

## 0. One identity, all apps

There is **one identity across the whole suite** (Margin, Quiet). Consistency matters more than
per-app flair — an app should feel like a sibling, not a stranger. Each app expresses the *same* identity
in its own form; it never invents its own look.

*(Note for future us: an earlier Margin draft used "New Yorker classic-print" as shorthand for "good,
typography-led craft" — it was an **example of quality, never a direction**. We are not doing a New York
look. Margin's specifics we define ourselves, against this doc. Margin's charter §3 — Playfair / Libre
Caslon / cream paper / "New-Yorker-style" Cartoon — is now stale and needs revisiting to match this.)*

## 1. Palette — monochrome, ink on paper

Black and white. **No colour.** Hierarchy is carried by space, weight, and type alone — never by
colour-coding or decoration. One palette unifies the suite and removes a whole layer of arousal.

- **Light and dark both** (always design and show both — never light-only). Both stay monochrome: warm
  off-white paper + near-black ink in light; soft off-black + bone-white ink in dark. Not pure
  `#000`/`#fff` — slightly warm, so it reads as *paper*, not screen.
- **The one allowed exception:** a single muted ink (think clay/graphite, never alarm-red) for the rare
  genuinely time-bound thing. Time-sensitivity is mostly carried by *position and weight*, not colour.
  This honours Article VI (calm over alarm).

  > *Proposed exception (draft, 2026-06-24 — not yet locked; you ratify):* the **calm-wallpapers** repo
  > may use **calm, research-earned colour** for a style (e.g. the Sakina palette — Alhambra ×
  > Swahili coast). The gate: low saturation, light value, low contrast, a neutral ground dominating, and
  > each palette justified by a research entry. Monochrome stays the suite default and the rule everywhere
  > else; this is one scoped, documented departure for a still-image repo. (Context: `calm-wallpapers`
  > charter §3.)

- **Terminal-scoped exception (recorded 2026-06-25):** the calm terminal foundation uses a warm, off-neon
  **pastel** ANSI palette — a terminal earns functional colour (diffs, errors, and directories are read all
  day; stripping them adds parsing effort, which is itself un-calm). This is scoped to terminal / code
  surfaces and documented in
  [`../assets/terminal/001-terminal-foundation.md`](../assets/terminal/001-terminal-foundation.md). The suite
  palette stays **monochrome + the one clay accent** everywhere else — what apps, docs, and new siblings
  inherit.

## 2. Type — it does all the work

In a monochrome world, **type is the whole design**. So it answers to two non-negotiables at once:

1. **Readable by a neurodivergent mind (hard floor — Constitution R10).** Open letterforms, generous
   spacing, distinct glyphs, low decoding cost.
2. **Warm and hand-near, not cold or corporate.** Humanist, with a little ink in its veins — to carry the
   Peanuts warmth and the poetry.

**Faces (locked 2026-06-25, chosen on specimens — light and dark):**

- **Reading / body / UI — Atkinson Hyperlegible.** Built by the Braille Institute so every letter is
  maximally distinct; its whole reason to exist is "everyone can read this," which is the suite's ethos in
  a typeface. Open-source (Article IX). It carries almost all the words.
- **Display serif — Yrsa.** A soft, gently rounded humanist serif: warm and Peanuts-gentle while staying
  grown-up. The serious, work-facing voice — the lead headline and leads, set above the body.
- **The hand — Shantell Sans.** A friendly, legible drawn hand for the human voice — the masthead wordmark,
  the "From the Desk" note, the sign-off. Used only on short, large, low-stakes text, so legibility never
  suffers.
- **Mono — IBM Plex Mono.** The terminal and code voice (locked with the terminal foundation). The
  reading and reference faces sit beside it as a small, warm set.

The system is body sans + serif + a sparing hand + mono — a quartet with clear jobs, not an orchestra
(restraint = Article IX).

## 3. Illustration — Peanuts ink

The drawing language is **Peanuts** (Charles Schulz): confident black ink on white, huge feeling from the
fewest marks, visibly hand-made, gentle and a touch wistful — never loud, never trying to grab you. Like
the Apple-TV Snoopy screensaver: it sits in the corner of your eye and asks nothing.

- Single-ink line work only (fits monochrome). No gradients, no 3D, no stock-illustration gloss.
- Warmth over wit. Where an app has a drawn moment (e.g. Margin's masthead spot), it's **Peanuts-gentle,
  not New-Yorker-wry**.

**How illustrations are made — parked for the spec phase (idea: 2026-06-23).** Two production routes, to
decide with evidence, not now:
1. **Hand-made set, rotated.** A small curated library of single-ink spots (like the mockup's). Zero
   dependency, zero cost, always on-brand, fully calm — the Article-VIII default.
2. **Generative, bounded.** One Spot + one daily Cartoon generated server-side on the edition cron,
   cached in R2, embedded in that day's edition ("someone set this for you today"). *Calm applied to the
   feature itself* means: finite — one a day, **no reroll treadmill** (a regenerate loop is a hyperfocus
   hole the suite resists); low-arousal monochrome-ink output enforced by a **locked style prompt**;
   graceful **fallback** to the hand-made set if a generation is off/filtered; key server-side only
   (Article X); cost-capped (a few $/mo, under the synthesis budget).
- **Not Midjourney** — no durable official API (unofficial Discord automation = fragile / ToS-risky →
  fails Article IX "responsibly sourced"). Real-API candidates: **FLUX.1** (Black Forest Labs, via
  fal/Replicate; open weights → a bespoke LoRA for a consistent "calm ink" style — lead pick),
  **gpt-image-1**, **Google Imagen**.

  > *Proposed clarification (draft, 2026-06-24 — not yet locked; you ratify):* "Not Midjourney" is
  > about **automated** generation inside a shipped app — a machine reaching for a fragile API. It does
  > **not** rule out a person using Midjourney **by hand** as a craft tool, where the output is plain
  > static files and nothing fragile ships. The line isn't the tool; it's whose hand is on it. (Context:
  > `calm-wallpapers` repo, `docs/the-midjourney-exception.md`.)
- **The real risk = day-to-day style consistency** (most likely thing to break calm). De-risk with a
  style spike across models (fixed seed / style reference) *before* committing.
- **Open Article-VIII question:** is generative even *essential*, or is the hand-made set calmer and
  enough? Likely **hybrid** — hand-made by default, generative reserved for the daily Cartoon where
  novelty earns its place. Applies suite-wide (shared identity → shared illustration approach).

**Execution still owed — a dedicated illustration piece for later (Shakil, 2026-06-23).** The mockups'
doodles (the desk mug, the crescent moon, the closed book, the stick-figure cartoon) are **placeholders**
— rough hand-authored SVG, programmer-art. The *ideas* are right; the *craft* isn't there yet. Whichever
route we land on, the bar is genuinely good single-ink illustration with one consistent hand —
Peanuts-grade warmth, not approximations. Worth its own focused session.

## 4. Tone — Peanuts + poetry

Two pillars, both pointing the same way (full word-patterns in [`calm-language.md`](./calm-language.md)):

- **Peanuts:** warm, plain, hand-made, a little wistful. Big heart, few marks.
- **Poetry:** meaning from few words, white space doing real work, rhythm over volume. Copy can lean
  spare and poetic rather than instructional.
- **Even angry poetry is calm.** Calm is not the absence of hard feeling — it's the form that *holds* it.
  The suite can carry a bad week or real frustration; held by craft and restraint, not denied and not
  amplified. Calm by containment.

## 5. Motion — almost none

Low-arousal by default (Article VI). No autoplay, no looping, no attention-grabbing motion. What little
moves is slow and ambient. `prefers-reduced-motion` is always honoured — and is close to the *default*
feel anyway.

## 6. Craft on the dev surfaces

The identity reaches the docs and CLI too (Constitution working-principles): **ASCII display-type
headers**, one consistent voice across README / CLI / docs, and a `humans.txt`. Personality without
colour — calm doesn't mean characterless.

## 7. How the identity is built (own the skin, rent the mechanics)

- **Own 100% of the look in our own tokens + CSS.** No styled component library — it would impose someone
  else's aesthetic and we'd fight it. Calm can't be bought off a shelf.
- **Rent only interaction + accessibility** via a headless primitive (**Bits UI** — unstyled, Svelte-5
  native), and only when a real component needs it (likely Quiet's calendar). Essential + responsibly
  sourced, per Article IX. Add it lazily, not as scaffolding.
- **Specs are target-neutral.** The canonical design lives as **tokens + plain-language behaviour
  contracts**, not framework code — so any target (web, a Capacitor/Tauri webview, or true-native) could
  reproduce it. The skin ports; the rented mechanics don't.
- **Native is an open option, parked for the architecture pass.** "Ship native if doable without too much
  fuss." The choices above keep the low-fuss path (webview shell) open; true-native would be the bigger
  fork. Decide during arch, not now.

## 8. Calm never looks AI-generated (the hand-made test)

The whole point is that a calm surface feels **made by a person**, not generated. So every surface answers
one test before it ships: *does this look hand-made, or does it look like a default?*

- **The tell to avoid.** The generic "AI-tasteful" look — letter-spaced **uppercase** labels stacked over
  thin **machine-perfect** hairline rules, evenly-spaced everything, stand-in system fonts. It reads
  templated and corporate; it is explicitly out.
- **The feel to reach for.** The hand does real work: lettering in **Shantell Sans** (not tracked-out sans),
  rules and marks with a **hand-made irregularity** (not perfect 1px lines), genuine **Peanuts ink** (§3),
  warmth and a little imperfection. Type, space, and ink — chosen, not defaulted.
- **Why it matters.** "Feels AI" is the opposite of calm — the un-loved, un-chosen, mass-produced feeling.
  Calm is the presence of a hand. This holds for **every** surface in the suite — apps, docs, dev surfaces,
  adopters — not just Margin.

Ratified into the Constitution as **Article XI** (Amendment 5, 2026-06-30) — supreme-document force.

---

## Still to finalise (neither blocks speccing)

- **Illustration execution** — a dedicated session to produce genuinely good single-ink work (see §3).

*Done: charter §3 realigned to this identity, this doc locked, identity folded into the Constitution,
typefaces locked on specimens (§2, 2026-06-25): Atkinson Hyperlegible · Yrsa · Shantell Sans · IBM Plex Mono.*
