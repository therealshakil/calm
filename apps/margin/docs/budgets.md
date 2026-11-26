# Margin — Budgets

The measurable teeth behind the [Calm Constitution](../../../CONSTITUTION.md), specific to Margin. The
Constitution Check in every spec & PR is verified against these. Budgets may be re-tuned only by a logged
Amendment in the Constitution (prevents "just bump the limit" creep).

## Budgets (CI-enforced)

| Budget | Limit | Enforced by |
|---|---|---|
| Client JS (gzipped) | ≤ 75 KB | CI bundle-size check (fails the build) |
| Runtime dependencies | ≤ 12; a new one needs a one-line written reason in the PR | CI dep-count + review |
| Edition columns | exactly the fixed set¹ | review against the charter; new column = Amendment |
| Performance | Lighthouse Perf + PWA ≥ 95, no CLS regressions | CI Lighthouse gate |
| Synthesis cost | ≤ N editions/day; tokens/edition under target | Worker cap + cron gate (spec 009) |

¹ *Columns (fixed set):* the Spot · Work-on-this-next · the rest of your plate · the Cartoon · Settled ·
the Forecast · From the Desk. (Rationale in [`charter.md`](./charter.md); detail in the spec set.)

## Margin-specific banned patterns

In addition to the suite-wide banned patterns in the Constitution, Margin never adds: a manual refresh /
pull-to-refresh control, an unread/badge count on the edition, or a crossword / puzzle / horoscope column.

## Open provocations (decide deliberately, not in a rush)

- **Mobile — resolved (2026-06-23): yes, support phones.** The reasoning was backwards. Phones *are*
  where the un-calm lives — which is exactly why a calm presence earns its keep there; you don't withhold
  calm from the place that needs it most. The job isn't to avoid the phone, it's to make the phone a
  little calmer. *Life is too short* cuts the other way: too short to leave the worst surface un-helped.
  The installable-on-phone assumption stands.
- **Open source?** Margin may be open source in the making. Parked as a possible direction.
