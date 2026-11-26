# Spec 002 — Auth & privacy

**Status:** ready (locked 2026-06-23) · **Date:** 2026-06-23 · **App:** margin

One door, one person. Margin is reachable only by Shakil, authenticated at the edge; the app holds no
user system of its own, and no secret ever touches the client or git.

## Why
Article X (private & single-user): "the user's own door is the only door." The calmest, most durable auth
is the one we don't build — push it to the platform edge and keep the app itself ignorant of auth
mechanics. Fewer moving parts (IX), nothing to breach, nothing to maintain.

## What it does
- **Happy:** Shakil opens Margin; **Cloudflare Access** (Zero Trust) gates it at the edge — he proves
  identity once via **Google SSO**, and every request to the Worker/edition arrives
  already-authenticated. The app trusts the Access identity header; there is no login screen of ours, no
  account, no password.
- **Session lapse:** when an Access session expires, re-auth is a calm, expected step — a plain "sign in
  again" via Access, never an error or a lost-work scare.
- **Anyone else:** Access denies them at the edge; they never reach the app or its data.

## Not this (non-goals)
- No app-level user system, accounts, roles, or password store of our own.
- **No analytics or engagement telemetry on the user** (Article X) — Margin watches your work, never you.
- No multi-user, no sharing, no public surface.

## Secrets
- Source tokens (Composio), the Claude API key, and any binding secrets live in **Worker secrets /
  environment bindings** — never in client bundles, never in git.
- Local dev uses `.dev.vars` (git-ignored); deployed secrets via `wrangler secret`. A `.gitignore` and a
  pre-commit glance (per the suite's review-before-commit habit) keep secrets out of history.

## Data location (calmest-when-forced)
Cloudflare holds our data — a third party we accept for its Article IX savings — so we take its **calmest
data settings**. The standing rule (2026-07-05): *when forced onto a tool with no calm alternative, choose its
most private option, and say so.*
- **D1 + R2 → pinned to the EU jurisdiction** at creation (UK/GDPR-aligned; set once, immutable after).
- **KV → non-sensitive only.** KV has **no residency control**, so it holds config/flags — **never user or
  edition data**. (The edition body is D1, per 004 — already aligned.)
- **Sensitive data → client-side-encrypted** before it reaches Cloudflare storage.
This doesn't cure the third-party fact; it minimises exposure within it (Article X). Backed by the tooling
audit ([`research.md`](../../../../docs/research.md) 2026-07-05).

## Research
Cloudflare Access (Zero Trust) as the only door, plus Wrangler-managed secrets, is standard platform
practice — there's no contested decision here, so no formal `research.md` entry. **To verify at build:**
the exact Access policy (single-identity allow-list) and the identity header the Worker should trust.

## Open questions
- ~~Email OTP vs Google SSO?~~ **Resolved (2026-06-23): Google SSO.**
- Do we pin the trusted identity by email, or by a service token for the Cron Worker's own calls?
  (Cron runs server-side, not as the user — likely a separate service-auth path; settle at build.)

## Tasks
*(fill at build time)*
- [ ] Cloudflare Access application + policy allowing the single identity.
- [ ] Worker reads/validates the Access identity; rejects anything unauthenticated.
- [ ] `wrangler secret` for source + model keys; `.dev.vars` + `.gitignore` for local.
- [ ] Calm re-auth path (no alarm copy) for expired sessions.
- [ ] Confirm the Cron build path authenticates as a service, not as the user.

## Constitution Check
1. **Serves:** X (private, single-user, no telemetry on the user); IX (no auth system to build/maintain).
2. **Violates:** none — confirmed vs Articles + Budgets + Banned patterns (no engagement metrics).
3. **Subtracts:** removes an entire app-level auth/account system and any user analytics — pushed to the edge / not built.
4. **Calm:** session lapse is a calm expected step, not an error; no scary auth modals; happy + lapse + denied paths all specified.
