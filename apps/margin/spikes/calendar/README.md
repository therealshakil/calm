# Spike — Google Calendar, first-party (no Composio)

A throwaway spike to de-risk the locked decision (research.md, 2026-07-06): replace Composio with
**direct first-party adapters**. It proves the hardest part end-to-end —

> a cold run, no interactive login: a stored refresh token → a fresh access token → this week's
> Calendar → `Signal[]`, with nothing leaving the you↔Google path.

If that works, the offline-refresh path is real and the Margin specs that name Composio can be re-ratified.
The Cloudflare Worker shell around this is known platform boilerplate, left off the spike on purpose
(subtraction) — ported only if we green-light. Promoting this spike re-triggers the Build Gate.

## What's here

- `get-token.mjs` — one-time: local consent → prints your refresh token.
- `spike.mjs` — the repeatable proof: refresh → Calendar → `Signal[]`.
- `.dev.vars.example` — copy to `.dev.vars` (git-ignored) and fill in.

## Your part (only you can do this — it's your Google account)

Nothing here needs a card or a paid tier; it's all in the free Google Cloud console.

1. Google Cloud console → create a project (or reuse one).
2. **APIs & Services → Enable APIs → Google Calendar API → Enable.**
3. **OAuth consent screen** → External → add yourself as a **Test user** (your own email). No verification
   needed while it's in testing.
4. **Credentials → Create credentials → OAuth client ID → Web application.**
   Add an **Authorised redirect URI:** `http://localhost:8788/callback`.
   Copy the **Client ID** and **Client secret**.
5. `cp .dev.vars.example .dev.vars` and paste the ID + secret in.

## Then (either of us can run it)

```
node get-token.mjs      # opens a consent URL; approve read-only Calendar; paste the printed line into .dev.vars
node spike.mjs          # prints this week's meetings as Signal[]
```

Needs Node 18+ (uses native `fetch`). The refresh token and secrets live only in `.dev.vars` on your
machine — never committed, never sent anywhere but Google.

## Success / not

- **Green:** `spike.mjs` prints real events as Signals on a cold run, self-refreshing. → re-ratify 003 / 002 /
  001 / charter to drop Composio; port the helper into a Worker.
- **Amber:** works but a rough edge (refresh, scopes, shape). → note it, decide before porting.
- **Red:** the path doesn't hold. → back to the research; the decision reopens.
