# Spec 008 — Illustration (Spot + Cartoon)
<!-- filename: 008-illustration.md — numbered per collection, in introduction order -->

**Status:** ready (locked 2026-07-03) · **Date:** 2026-07-03 · **App:** margin

The production route for Margin's two drawn moments — the masthead **Spot** and the daily **Cartoon** — and
the guardrails that keep them calm and hand-made-*looking*. 006 wired the slots with placeholders; this
decides what fills them and how they're made.

## Why
Margin is a **work tool**: it must produce its own illustration automatically, with no per-edition human step.
A hand-curated library would mean a person drawing and maintaining it — manual overhead that defeats the tool.
So both the Spot and the Cartoon are **generated automatically, server-side, on the edition cron.** That
settles identity §3's Article VIII question — generative is *essential* here, not optional novelty.

The catch this spec must own: automatic generation is the single highest-risk path for Article XI (never
looks AI-generated). So the whole route leans on a **calm-ink style system** — a locked style prompt plus a
bespoke style reference / LoRA — and an **automated style gate** that enforces the hand-made test and rejects
AI-looking output. Whether that can reliably clear the Article-XI bar is the load-bearing risk, gated by a
style spike before anything generative ships (open questions).

This answers to Article XI (the hand-made test) as much as to VI (single-ink, low-arousal) and VIII
(generative earns its place). The Spot and Cartoon are two of the charter's fixed columns; 006 renders their
slots but defers the route here. Depends on 006 (the slots) and a style-development session (execution, not a
spec blocker — identity §8).

## What it does
• **Automatic, both slots:** each edition's Spot and Cartoon are generated server-side on the in-hours cron,
cached in R2, and embedded — no human in the loop day to day. Margin sets them for you.
• **The Spot:** a single-ink, monochrome, hand-drawn-*looking* line illustration on the masthead. One a day,
static, no reroll.
• **The Cartoon:** a single panel + a text caption — wry-but-kind, Peanuts-gentle, single-ink. One a day, no
regenerate.
• **The gate over everything:** an automated style gate holds every generated image to the hand-made test
(identity §8) — genuine Peanuts ink, hand-made irregularity, never the AI-default look. Output that reads
"AI" is rejected.
• **When generation is off:** if a generation fails, is filtered, is rejected by the style gate, or would
exceed the cost cap, the edition quietly uses a pre-approved image from a vetted bank in R2 — never a broken
panel, an error, an empty slot, or a retry loop. The bank is generated and human-vetted *once*, so it too
passes Article XI: the tool stays automatic day-to-day while keeping a known-good floor.

## Requirements
R1–R4 the automatic route and its output; R5–R6 the Article-XI gate and the fallback; R7–R10 the
accessibility, motion, privacy/cost, and provider floors.

• **R1 (Ubiquitous)** — The Spot and the Cartoon shall both be generated automatically, server-side, with no
per-edition human step — Margin produces its own illustration (it is a work tool; hand-curation is overhead it
must not require) (charter; Article VIII).
• **R2 (Event)** — WHEN the in-hours edition cron builds the edition, the system shall generate the day's Spot
and one Cartoon server-side, cache them in R2, and embed them — set for the reader, with no regenerate,
reroll, or shuffle control ever (Article I; identity §3 — no reroll treadmill).
• **R3 (Ubiquitous)** — Generation shall be governed by a locked, versioned calm-ink style system (style
prompt + bespoke style reference / LoRA) enforcing low-arousal, single-ink, monochrome, hand-drawn-looking
output; it changes only by deliberate commit, never per-edition (identity §3; Articles VI, XI).
• **R4 (Ubiquitous)** — The Spot shall be a single-ink monochrome line illustration on the masthead; the
Cartoon a single panel plus a text caption, wry-but-kind and Peanuts-gentle (charter §2; identity §3, §4).
• **R5 (Ubiquitous)** — Every generated illustration shall pass the hand-made test (identity §8) via an
automated style gate: genuine Peanuts ink, hand-made irregularity, never the AI-default look — output that
reads "AI-generated" is rejected (Article XI).
• **R6 (Unwanted)** — IF a generation fails, is filtered, is rejected by the style gate, or would exceed the
cost cap, THEN the edition shall fall back to a pre-approved image from a vetted bank in R2 — never a broken
panel, an error, an empty slot, or a retry loop. The bank is generated and human-vetted once, so it also
passes Article XI (Article VI; identity §3 fallback).
• **R7 (Ubiquitous)** — Illustration shall be decorative: marked aria-hidden and never the sole carrier of
meaning; the Cartoon's meaning lives in its text caption (006 R12; identity §3).
• **R8 (Ubiquitous)** — No illustration shall animate, autoplay, or loop — single-ink and static, always
(Article VI; banned patterns; honours prefers-reduced-motion trivially).
• **R9 (Ubiquitous)** — Generation keys shall live server-side only, never on the client or in git (Article
X; 002), and generation shall run under the synthesis cost cap (budgets; enforced with 009) — a few $/mo,
sub-budget.
• **R10 (Ubiquitous)** — The generator shall be a real, officially-supported API (lead: FLUX.1 via
fal/Replicate + a bespoke calm-ink LoRA; candidates gpt-image-1, Imagen) — never an unofficial or automated
Midjourney integration (Article IX). A person authoring illustration by hand with any tool is out of scope of
this rule (identity §3 clarification, draft 2026-06-24).

## Not this (non-goals)
• No hand-curated illustration library as the source of truth, and no per-edition human drawing or approval —
Margin generates its own (it's a work tool). The vetted fallback bank is a safety net, not a daily hand-step.
• No reroll / regenerate / shuffle for either the Spot or the Cartoon — one a day, set for you (a regenerate
loop is a hyperfocus hole the suite resists).
• No colour, no animation, no autoplay or loop — single-ink, static (Article VI; 006).
• No user-facing style controls, prompt box, or "make another" — illustration is set for you, glanceable not
operable.
• No automated Midjourney integration (Article IX); a person's hand-craft with any tool is out of scope.
• No illustration carrying meaning — always decorative, aria-hidden; meaning is in text.
• Not the style system itself: this spec sets the route + guardrails; developing and tuning the calm-ink
prompt/LoRA and vetting the fallback bank are execution (identity §8 — doesn't block speccing), done at build.

## Research
• Peanuts single-ink language, warmth-over-wit — identity §3, §4.
• The hand-made test / Article XI — identity §8; Constitution Amendment 5 (2026-06-30). The central constraint
on an automatic route.
• Generative-bounded route, provider survey (FLUX.1 lead + bespoke calm-ink LoRA; not-Midjourney; gpt-image-1
/ Imagen candidates), and the reroll / cost / fallback guardrails — identity §3 (idea 2026-06-23).
• Day-to-day style consistency is the real risk — de-risk with a style spike across models before committing
(identity §3). Under an automatic route this is a hard gate, not a nicety.
• The Midjourney-by-hand clarification (a person's craft tool ≠ an automated in-app dependency) — identity §3,
draft 2026-06-24 (context: `calm-wallpapers`, `docs/the-midjourney-exception.md`); still yours to ratify.
• Cost cap under the synthesis budget — [`budgets.md`](../budgets.md); enforced by 009.

## How (the plan)
• **Cron:** on the 004 in-hours build → generate the day's Spot + one Cartoon → automated style gate
(monochrome / single-ink / hand-made-test heuristics) → cache in R2 keyed by edition → embed into the 006
slots (placeholders already accept them). Fallback bank in R2 covers every R6 path.
• **Style system:** a locked, versioned style prompt + bespoke calm-ink style reference / LoRA, server-side;
changing it is a deliberate commit, never per-edition.
• **Style spike (build-time, labelled throwaway per the Build Gate carve-out) — the hard prerequisite:** FLUX.1
(+LoRA) / gpt-image-1 / Imagen with a fixed seed / style reference. The question it must answer: does automatic
generation *reliably* clear the Article-XI hand-made test? Pick the provider/approach that holds a consistent
calm-ink hand. Nothing generative ships until it does.
• **Fallback bank:** generate a batch, human-vet once against Article XI, store in R2 — the known-good floor.
Refreshed occasionally, never per-edition.
• **Cost:** Worker cap + cron gate (009) covers generation alongside synthesis; a rejected / filtered
generation costs ~nothing (bank fallback).
• **Defers:** the final provider (post-spike); the fallback-bank size + refresh cadence (build); how
illustration behaves offline / installed (010).

## Open questions
• **Load-bearing:** can automatic generation *reliably* pass the Article-XI hand-made test? If the style spike
can't clear the bar, "must be automatic" (this decision) and "must never look AI-generated" (Article XI) are
in genuine tension — resolve then (invest in a better LoRA, or define an acceptable look). The spike gates
generative before it ships.
• Provider — FLUX.1 + calm-ink LoRA vs gpt-image-1 vs Imagen — settle by the style spike (evidence, per §3).
• Fallback-bank size + refresh cadence — settle at build.
• Sync identity §3 (its lean was "hybrid, hand-made default") to this automatic/generative decision, and
ratify the Midjourney-by-hand clarification (draft 2026-06-24) — recommend doing both when this spec locks.

## Tasks
*(fill at build time — smallest first; each cites the requirement it satisfies)*

[ ] Cron generates the day's Spot + one Cartoon server-side, caches in R2, embeds into the 006 slots; no reroll control (R1, R2, R4).
[ ] Locked, versioned calm-ink style system (prompt + style reference / LoRA), server-side (R3).
[ ] Automated style gate enforces the hand-made test; off / filtered / rejected / over-budget → vetted fallback bank, never broken / empty / retry (R5, R6).
[ ] Accessibility + motion: all illustration aria-hidden, meaning in the caption text, nothing animates (R7, R8).
[ ] Keys server-side only; generation cost under the synthesis cap with 009 (R9); provider a real API, no Midjourney automation (R10).
[ ] Style spike (labelled, throwaway) across FLUX.1 (+LoRA) / gpt-image-1 / Imagen — the gate: does automatic generation clear Article XI? Then generate + human-vet the fallback bank.

## Constitution Check
1. **Serves:** VI (single-ink, monochrome, static, low-arousal), VIII (for a work tool, automatic generation
is what makes illustration sustainable — hand-curation would be the overhead that defeats it; so generative
earns its place), XI (an automated hand-made-test gate governs all output); supports I (one a day, no reroll)
and X (keys server-side, generated on the cron).
2. **Violates:** none — **provided the style spike clears Article XI** (the load-bearing risk, gated before
ship). Otherwise confirmed vs Articles + Budgets + Banned patterns (no colour, no animation / autoplay / loop,
no reroll treadmill, no unofficial-API dependency; generation cost sub-synthesis-budget; client JS unaffected
— assets served from R2).
3. **Subtracts:** removes the hand-curation burden entirely (no library to draw or maintain) and bounds
generation to two static slots with a hard fallback and no controls — the smallest automatic surface that
earns its place.
4. **Calm:** honest states (a rejected or failed generation falls back silently to a vetted panel, never an
error or empty slot), static and motionless (prefers-reduced-motion moot); happy path (auto Spot + Cartoon)
and sad paths (style-gate reject, over-budget, spike-says-no) both specified. The Article-XI gate is automated
and load-bearing — flagged in the open, not hidden.
