# Spec 001 — Architecture & stack

**Status:** ready (locked 2026-06-23) · **Date:** 2026-06-23 · **App:** margin

How Margin is built and runs: the stack, the shape of the data, and the boundaries — so every later spec
plugs into a settled foundation. This is also where the parked **native/mobile** fork is resolved.

## Why
The [charter](../charter.md) §4 pins the direction in one line; a spec set needs the foundation written
once, explicitly, so 002–010 don't each re-decide it. Serves Article IX (small, few moving parts) and X
(private, single-user) — the architecture itself has to be calm and durable, not just the UI.

## What it does
Margin prepares a **finite daily edition on a quiet schedule** and serves it as a complete, dated thing —
never a live, refreshing dashboard (Article I). The architecture's job is to make that reliable and calm:
- **Happy:** at a scheduled in-hours time, a Worker pulls source data, Claude ranks it, an edition is
  composed, stored, and **waits quietly**. The user opens the installed PWA and reads a complete edition.
- **Quiet & empty:** a source returns little or nothing — the edition still builds, as a quiet-day
  edition (spec 007). The build must never error on emptiness; emptiness is normal.
- **When it fails:** a source or the model call fails — the build **degrades gracefully** (a partial
  edition, or yesterday's holds with an honest note), retries on the next cadence, and **never** shows an
  alarm state or a manual-refresh prompt (Articles VI, I).

## Not this (non-goals)
- No native app shell now (see the decision below). No multi-user anything. No server holding user
  secrets beyond the single-user model (spec 002). No real-time/live data path — the edition is the unit.

## Research
- Native/mobile path: [SvelteKit + Capacitor (Ionic)](https://ionic.io/blog/cross-platform-sveltekit-capacitor-application-yes-its-possible) ·
  [Tauri vs Capacitor 2026](https://trysaasbattle.com/tauri-vs-capacitor/) ·
  [PWA iOS limitations / when to wrap](https://bryanhogan.com/blog/web-to-app-sveltekit-capacitor).
  Logged in [`research.md`](../../../../docs/research.md).
- Identity build boundary (own-the-skin / rent-the-mechanics): [`identity.md`](../../../../docs/identity.md) §7.

## How (the plan)

**Stack (from charter §4):** SvelteKit on **Cloudflare** — Workers (compute), **D1** (the edition + its
items, structured), **KV** (config/flags), **R2** (illustration assets — the Spot/Cartoon), **Cron** (the
in-hours build trigger). **Claude API** for ranking/synthesis (spec 005). **Composio** hosted API behind
a `SourceAdapter` seam for the five sources (spec 003). **Cloudflare Access** as the only door (spec 002).

**Data location (calmest-when-forced, added 2026-07-05).** Cloudflare is a third party accepted for its
Article IX savings, so take its calmest data settings: **pin D1 + R2 to the EU jurisdiction** at creation;
**KV** has no residency control, so it holds **only config/flags — never user or edition data**; anything
sensitive is client-side-encrypted before it lands in Cloudflare storage. Full rule in [`002-auth-privacy.md`](./002-auth-privacy.md).

**The edition as a pre-built artifact.** Because the edition is composed once per cadence (not live), the
front-end can be **mostly static / prerendered per edition** over a thin Workers API. This is what keeps
it calm (nothing computes while you read) *and* keeps the native escape hatch cheap.

### Decision — native/mobile (resolves the parked fork)
**PWA-first; no native shell now — confirmed & locked 2026-06-23.** Margin is private and single-user with no native-hardware need and no
app-store requirement, so an **installable PWA** meets the real need (and is the fewest-deps, calmest
option — Article IX). The "calmer phone" goal is a *responsive* one, met in the PWA, not a packaging one.
- **Escape hatch, kept cheap:** keep the front-end **shell-portable** (the static-edition + thin-API
  shape above), so wrapping it in **Capacitor** later is low-fuss *if* a real need appears (App Store
  presence, a native API). Capacitor over Tauri if we ever do — web-native, better iOS/store coverage;
  Tauri's Rust + smaller-bundle wins don't pay off for a single-user content app.
- **Not deferred forever, just not now** — revisit only on a concrete trigger, recorded here.

## Open questions
- ~~D1 vs KV for the edition body?~~ **Resolved in 004 (2026-06-23): D1** — a composed edition record + rows for the items it references.
- ~~Front-end on Pages or Worker?~~ **Resolved (2026-06-23): Cloudflare Pages** hosts the front-end; Workers do the build/API.
- Edition retention: how many past editions to keep (finite by nature — but how finite?).

## Tasks
*(fill at build time — smallest increments first)*
- [ ] Scaffold SvelteKit + Cloudflare adapter; Worker + Cron hello-world.
- [ ] D1 schema for an edition + items; KV + R2 bindings.
- [ ] `SourceAdapter` interface stub (no real sources yet — spec 003).
- [ ] Prerender-per-edition front-end skeleton + PWA manifest/service worker.
- [ ] Confirm the empty/partial edition build path (no errors on no data).

## Constitution Check
1. **Serves:** I (finite edition as the unit), IX (one small stack, few moving parts), X (single-user, private).
2. **Violates:** none — confirmed vs Articles + Budgets (≤12 deps, ≤75KB client) + Banned patterns (no live refresh, no native bloat).
3. **Subtracts:** removes the native-shell dependency and any live-data path — both deliberately out.
4. **Calm:** the build degrades gracefully and waits quietly; no alarm states; empty is a first-class path; `prefers-reduced-motion` is a UI concern (spec 006) but the no-live-refresh stance is set here.
