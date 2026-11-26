# Spec 003 — Sources & the feed list

**Status:** locked — co-authored with Shakil · **Date:** 2026-07-14 · **App:** study

The v1 source and how reading gets fetched: the curated feed list and its one read-only fetcher, behind the
`SourceFetcher` seam from [`001`](./001-architecture.md). Settles the deferred "feed-list home" question.

## Why
study's one job is to bring back the feeds you've *chosen* to follow (charter §1), finite and calm. That
needs a plain, private way to declare those feeds and pull them on a quiet cadence — no algorithmic feed, no
discovery surface (that noise is exactly what study refuses).

## What it does
- **Happy:** at build time, the feed-list fetcher reads a bounded recent window from each declared feed,
  normalises entries to study `Signal[]`, dedupes, and hands them to the edition composer (004).
- **Quiet & empty:** a feed has nothing new in-window → an empty list; the edition still builds (007).
- **When it fails:** a feed is unreachable or malformed → that feed is **absent** this edition (logged);
  the rest still compose. Never fatal, never a retry-now prompt.

## Not this (non-goals)
- No feed **discovery / recommendations** — you add feeds deliberately; study never suggests more.
- No ai-scout in v1 (deferred fast-follow — [`spec-ideas.md`](./spec-ideas.md)).
- No write path — fetch/read only (structural, per 001).

## How (the plan)
- **Feed-list home (settled):** a **versioned config file in the repo** (`apps/study/feeds.toml` or `.json`)
  — plainest, private, single-user, diffable; no admin UI to build. Adding a feed is an edit + commit.
- **Fetcher:** one `SourceFetcher` for the list, parsing **RSS / Atom / JSON Feed** → study `Signal`
  (`kind` = article/video/talk/podcast/post inferred from feed; `who` = author/channel; `when` = published;
  `why?` = the feed/section it came from; `link`; `raw`).
- **Bounded window + dedup:** fetch a recent window (size settled in 004); dedupe by `link`/guid so a
  re-seen item doesn't return across editions.
- **Per-feed isolation:** one feed failing never fails the build (R3 of 001).

## Requirements
- **R1 (Event).** WHEN the build runs, the feed-list fetcher shall read each declared feed's recent window
  and return normalised study `Signal[]`.
- **R2 (Ubiquitous).** Feeds shall be declared in a versioned repo config; study shall provide no feed
  discovery or recommendation.
- **R3 (Event).** WHEN a feed is unreachable or malformed, THEN it shall be absent for that edition
  (logged), and other feeds shall still compose.
- **R4 (Ubiquitous).** Items shall be deduped across editions by stable id (`link`/guid).
- **R5 (Ubiquitous).** The fetcher shall be read-only; no write method shall exist.

## Deferred
- **ai-scout digest** as a second fetcher (fast-follow) — same seam, own spec/skill.

## Constitution Check
1. **Serves:** the charter's one job (the chosen feeds, no noise), VII (read-only), X (private, versioned
   locally).
2. **Violates:** none — one fetcher, a config file, no discovery surface, no writes.
3. **Subtracts:** v1 is a single source; the feed list is a flat file, not an admin UI; ai-scout deferred.
4. **Calm:** empty and per-feed failure are first-class and quiet; no suggestions pulling you to more.
