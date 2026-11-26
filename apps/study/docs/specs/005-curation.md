# Spec 005 — Curation & ordering

**Status:** locked — co-authored with Shakil · **Date:** 2026-07-14 · **App:** study

How items are ordered within an edition — for a calm read, by provenance and recency, **not** by urgency or
engagement. Inherits Margin's [ranking](../../../margin/docs/specs/005-ranking-synthesis.md) shape but
deliberately re-tuned: reading is not work, and v1 does **no** AI ranking.

## Why
Margin ranks work by urgency ("what to do next"). study must not — an item of reading is an *invitation*,
not an obligation (001). Ordering should be legible and calm, and it should resist becoming an engagement
algorithm. The AI "knows-you" feed is the north star, explicitly deferred (charter §5) — so v1 stays simple
and honest (Articles III transparent, VII recommend-not-drive).

## What it does
- **Happy:** items are grouped into sections and ordered **deterministically** (published-desc within a
  section); the reader sees a legible, reproducible arrangement, with each item's `why?` (its provenance)
  available.
- **Quiet:** few items → the same simple order; nothing to tune.

## Not this (non-goals)
- **No AI ranking in v1.** No Claude-API scoring of what you "should" read (that's the deferred north star).
- No engagement optimisation, no urgency scoring, no "trending", no personalised-by-behaviour reordering.

## How (the plan)
- **v1 ordering:** group by **feed/section**, order by **published date (newest first)** within each. Simple,
  deterministic, reproducible — you could predict the order yourself.
- **The `why?` field (from 001):** in v1 it is **provenance** — the feed/section the item came from — not an
  AI-derived reason.
- **North star (deferred):** the AI "knows-you / archetype-as-feed" curation (charter §5, `Calm.md`) lands
  on top of this later, as its own spec — never silently in v1.

## Requirements
- **R1 (Ubiquitous).** Items shall be grouped and ordered deterministically (provenance + recency); order
  shall be reproducible.
- **R2 (Ubiquitous).** study shall perform no AI ranking, urgency scoring, or engagement-based reordering in
  v1.
- **R3 (Ubiquitous).** The `why?` shown shall be the item's provenance in v1.
- **R4 (Ubiquitous).** AI curation (the archetype feed) shall be deferred to a later spec, never enabled by
  default in v1.

## Constitution Check
1. **Serves:** III (transparent, legible order), VII (recommends by arrangement, never drives), and the
   charter's "reading is not work".
2. **Violates:** none — no engagement machinery, no hidden scoring.
3. **Subtracts:** v1 needs **no Claude API** and no ranking engine — the simplest order that reads calm;
   the AI feed is deferred, not built speculatively (Subtraction Ladder).
4. **Calm:** deterministic and predictable; no urgency, no trending, no behaviour-tracking reorder.
