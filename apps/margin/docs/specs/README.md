# Margin — Spec Map

The ordered set of specs that take Margin from charter to build. Each follows the suite
[spec template](../../../../docs/spec-template.md), is backed by [research](../../../../docs/research.md),
and passes the [Constitution](../../../../CONSTITUTION.md) Check. We write and **lock** specs before
building (waterfall), and build in small increments.

Grounded in: the [charter](../charter.md) (one job, the edition form, the fixed columns), the
[budgets](../budgets.md), and the worked-up [mockups](../mockups/) (edition-v3, states-v1).

**Status:** ▢ planned · ◐ drafting · ✓ locked · ⬛ shipped

| # | Spec | Covers | Serves (Articles) | Depends on | Status |
|---|---|---|---|---|---|
| 001 | **[Architecture & stack](./001-architecture.md)** | Cloudflare topology (Workers/D1/KV/R2/Cron), the `SourceAdapter` seam, **and the parked native/mobile decision** | IX, X | — | ✓ |
| 002 | **[Auth & privacy](./002-auth-privacy.md)** | Cloudflare Access (Zero Trust) as the only door; single-user; secrets never on client/git | X | 001 | ✓ |
| 003 | **[Source adapters](./003-source-adapters.md)** | Composio behind `SourceAdapter`; the five read-only sources (Jira, Fathom, Gmail, Calendar, Slack) | VII, X | 001, 002 | ✓ |
| 004 | **[The edition model](./004-edition-model.md)** | Numbered, dated, finite edition; in-hours cron build; "waits quietly"; done/undone/leftover continuity | I, II, III, IV | 001 | ✓ |
| 005 | **[Ranking & synthesis](./005-ranking-synthesis.md)** | The transparent rubric; Claude API; "work on this next" + its reasoning; the ranked rest | III, VII | 003, 004 | ✓ |
| 006 | **[The edition UI](./006-edition-ui.md)** | The fixed columns, two-voice type, monochrome identity, hairline layout (happy path) | I, VI | 004, 005 | ✓ |
| 007 | **[Calm states](./007-calm-states.md)** | A quiet day, it defends rest, it tells you to stop (the sad paths) | I, II, IV, V, X | 006 | ✓ |
| 008 | **[Illustration (Spot + Cartoon)](./008-illustration.md)** | Automatic generation, both slots; Article-XI style gate + vetted fallback bank | VI, VIII, XI | 006; style spike | ✓ |
| 009 | **Cost, cadence & budgets** | Synthesis cost cap, edition cadence gate, CI budget enforcement (referenced in `budgets.md`) | IX | 005 | ▢ |
| 010 | **PWA & install** | Installable, offline-graceful, the calmer-phone experience (mobile resolved: yes) | I, VI | 006 | ▢ |

**Next:** 009 — cost, cadence & budgets (or 010). 001–008 are locked. Two follow-ups owed from 008's lock:
sync identity §3 to the automatic route (its old lean was hybrid/hand-made-default), and ratify the
Midjourney-by-hand clarification — both yours. 006 was the first spec
authored with the EARS-lite requirements loop
([`calm-spec-loop`](../../../../docs/research/calm-spec-loop.md)) — the dogfood that proved the method (the
[`spec-template.md`](../../../../docs/spec-template.md) revision is still yours to lock).

*This map can change by deliberate revision; if the order or set shifts, say why here.*
