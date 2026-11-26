# Spec 002 — Auth & privacy

**Status:** locked — co-authored with Shakil · **Date:** 2026-07-14 · **App:** study

study's door and its data boundary. Inherits Margin's model
[near-wholesale](../../../margin/docs/specs/002-auth-privacy.md) — this spec records only study's deltas.

## Why
study is private and single-user (Article X); it holds a reading edition and the feeds you follow — his
own data, no one else's. The auth and privacy stance must be settled once so 003–008 build on it.

## What it does
- **Happy:** the reader reaches study only through Cloudflare Access; inside, it's his edition, served
  read-only.
- **When it fails:** Access denies or is unreachable → no edition is served; nothing degrades to public.
  Closed is the safe default.

## Not this (non-goals)
- No multi-user, no accounts, no sharing surface, no public route.
- No secret on the client or in git. No third-party analytics or telemetry.

## How (the plan)
- **Door:** **Cloudflare Access** (Zero Trust) as the only entrance — study's **own** Access application
  (separate deployment from Margin, same single-user policy).
- **Secrets:** any feed/API credentials live in **Worker bindings**, never on the client, never committed.
- **Data:** the store is **EU-pinned D1** (settled in [`001`](./001-architecture.md)); KV holds config/flags
  only (no residency control), never item content; anything sensitive is client-side-encrypted before it
  lands in Cloudflare storage.
- **No telemetry:** study measures nothing about the reader (Article X).

## Requirements
- **R1 (Ubiquitous).** study shall be reachable only via Cloudflare Access; there shall be no public route.
- **R2 (Ubiquitous).** study shall be single-user; no account, sharing, or multi-tenant surface shall exist.
- **R3 (Unwanted).** IF Access denies or is unavailable, THEN no edition shall be served (fail closed).
- **R4 (Ubiquitous).** Secrets shall live in Worker bindings only — never on the client, never in git.
- **R5 (Ubiquitous).** study shall emit no telemetry; item data shall live only in the EU-pinned store, with
  KV limited to config/flags.

## Constitution Check
1. **Serves:** X (private, single-user, his own data, no telemetry) and IX (one door, few moving parts).
2. **Violates:** none — inherits Margin's proven model; no new external surface.
3. **Subtracts:** re-uses Margin's auth pattern by reference (no re-decision); no accounts, no analytics.
4. **Calm:** fail-closed is quiet and safe; nothing about the reader is watched or counted.
