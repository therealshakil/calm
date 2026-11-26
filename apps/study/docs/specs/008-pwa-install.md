# Spec 008 — PWA & install

**Status:** locked — co-authored with Shakil · **Date:** 2026-07-14 · **App:** study

study as an **installable, offline-graceful PWA** — the pre-fetched, prerendered edition (001) makes offline
fall out naturally. Inherits Margin's PWA/install pattern
([`001`](../../../margin/docs/specs/001-architecture.md), spec 010 there).

## Why
The charter fixes study as an installable PWA on Margin's spine (§4), and 001 makes the edition a pre-built,
prerendered artifact — so "works offline" is nearly free and worth locking in. A calm reading room should
open instantly and read on a train (Articles I, VI).

## What it does
- **Happy:** study installs to the home screen / dock; opening it shows the current edition instantly; the
  current edition is **readable offline**.
- **When offline:** the last built edition reads fully; new editions appear when connectivity + the next
  build cadence allow — quietly, never a "you're offline" alarm.

## Not this (non-goals)
- **No push notifications** — study never pings you (007: no re-engagement).
- No background-sync nagging, no install-prompt harassment.

## How (the plan)
- **Manifest + icons:** study's own web app manifest and calm icons (suite identity).
- **Service worker:** caches the app shell + the current prerendered edition (001) for offline reading;
  updates the cached edition on the next successful load.
- **Offline-graceful:** absence of network is a normal state — the last edition stands; no alarm.

## Requirements
- **R1 (Ubiquitous).** study shall be an installable PWA (web app manifest + service worker).
- **R2 (Ubiquitous).** The current edition shall be readable offline.
- **R3 (Ubiquitous).** study shall send no push notifications.
- **R4 (Event).** WHEN offline, THEN the last built edition shall remain readable with no alarm state.

## Constitution Check
1. **Serves:** I (opens instantly, finite), VI (calm; no pings).
2. **Violates:** none — no notifications, no background nagging.
3. **Subtracts:** offline falls out of the prerendered-edition choice (001) — no extra sync engine; no
   push infrastructure at all.
4. **Calm:** offline is a normal state, not an error; study never interrupts you.
