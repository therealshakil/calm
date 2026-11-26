# Spec 006 — The edition UI
<!-- filename: 006-edition-ui.md — numbered per collection, in introduction order -->

**Status:** ready (locked 2026-06-30) · **Date:** 2026-06-30 · **App:** margin

How a composed edition (004) renders as the calm daily page — the fixed columns, the two-voice type,
monochrome ink on warm paper, hairline rules — the happy page a reader opens to.

## Why
This is where the edition stops being data and becomes something you *read*. It serves Article I (a finite,
glanceable page you finish — not a live dashboard) and Article VI (monochrome, hairline, almost no motion —
low arousal). It's the surface the charter form lands on (charter §2 columns, §3 design), grounded in the
worked-up [edition-v3 mockup](../mockups/edition-v3.html). Depends on 004 (what's composed) and 005 (the
hero + ranked rest). First spec authored with the EARS-lite loop ([`calm-spec-loop`](../../../../docs/research/calm-spec-loop.md)).

## What it does
- **Happy:** opening Margin shows today's complete edition as one page, in a fixed order — masthead, From the
  Desk, the lead ("Work on this next" + why + one way out), the rest of your plate, the Forecast, Settled,
  the Cartoon, a sign-off. You read down once and reach "that's the edition." Light or dark, always
  monochrome; type, weight and space carry every bit of hierarchy.
- **Quiet & empty:** a thin day still renders as a whole, calm page — From the Desk names it kindly, the lead
  may read "nothing needs you first today" (005 hero is null), and columns with nothing in them simply aren't
  there. The page never shows a "0", an empty-state nag, or a hole. (Full quiet-day treatment is 007; 006
  guarantees the page holds together when thin.)
- **When it fails:** 006 renders whatever the builder served — the last-good edition or the
  deterministically-ranked one (004 / 005 fallbacks) — with an honest one-line note. Never a blank, never a
  spinner that never ends, never an alarm.

## Requirements
Foundational UI spec (one-way — the suite's first real screen), so the fuller set. R1–R6 are the page and its
identity; R7–R9 the calm states; R10–R14 the cross-cutting floors.

- **R1 (Ubiquitous)** — The edition shall render as a single, finite page in this fixed order: masthead, From
  the Desk, the lead, the rest of your plate, the Forecast, Settled, the Cartoon, the sign-off — ending in a
  clear close ("that's the edition").
- **R2 (Ubiquitous)** — The edition shall carry all hierarchy through type, weight, and space alone, with no
  colour and no colour-coding (monochrome ink on warm paper; identity §1).
- **R3 (Event)** — WHEN the reader opens Margin, the system shall show today's complete composed edition (004)
  with no refresh / pull-to-refresh control and no unread or badge count (charter; budgets banned patterns).
- **R4 (State)** — WHILE dark mode is active, the edition shall render the dark monochrome pair (soft off-black
  ground, bone ink); WHILE light, the warm-paper pair — both the non-pure, research-led anti-glare values, not
  `#000`/`#fff` (identity §1; research 2026-06-23).
- **R5 (Ubiquitous)** — The lead shall present the hero recommendation, its plain "why", and at most one action
  link out to the source — it recommends and links, it never acts on the source (005; Article VII).
- **R6 (Optional)** — WHERE a plate item is genuinely time-bound, the system shall mark it by position, weight,
  and a single filled ink mark only — never by colour, an "overdue" label, a red treatment, or a count
  (identity §1; charter §3; Article VI; the 004 no-debt rule).
- **R7 (Event)** — WHEN 005 returns no hero (a quiet day), the lead shall render a calm "nothing needs you
  first today" rather than an empty slot or a manufactured item (Article VI — never invent urgency).
- **R8 (State)** — WHILE a column has nothing to show, the edition shall omit it quietly — no "0", no
  empty-state prompt — and the page shall still read as complete (Article IV — emptiness is not failure).
- **R9 (Unwanted)** — IF the builder served a last-good or deterministically-ranked edition (004 / 005
  fallback), THEN the edition shall show the honest one-line note and otherwise render normally — never a
  blank, a perpetual spinner, or an alarm.
- **R10 (Ubiquitous)** — The edition shall honour `prefers-reduced-motion`; what little moves (e.g. the
  light/dark transition) shall be slow, ambient, and fully removable (identity §5; Article VI).
- **R11 (State)** — WHILE viewed on a phone, the edition shall reflow to a single readable column (the
  lead/spot and plate/forecast grids stack) and stay installable-PWA-friendly (budgets: mobile yes; Lighthouse
  Perf + PWA ≥ 95, no CLS regression).
- **R12 (Ubiquitous)** — The edition shall be readable by assistive tech: semantic landmarks, a logical
  heading order, decorative illustration marked `aria-hidden`, and all meaning carried in text — the
  illustration is never the sole carrier (R10 ND floor; identity §3).
- **R13 (Ubiquitous)** — Type shall use the locked quartet in role: Shantell Sans (the hand) for masthead /
  From the Desk / sign-off, Yrsa (serif) for the lead and work-facing headings, Atkinson Hyperlegible (body)
  for all reading text (identity §2).
- **R14 (Ubiquitous)** — The page shall pass the hand-made test (identity §8): labels and the editorial voice
  set in the hand (Shantell Sans), **not** tracked-out uppercase sans; rules and marks with a hand-made
  irregularity, **not** machine-perfect hairlines; genuine Peanuts ink (008). The generic "AI-default" look —
  letter-spaced caps stacked over thin rules — is explicitly out.

## Not this (non-goals)
- No live-dashboard behaviour: no refresh / pull-to-refresh, no auto-updating numbers, no badges or unread
  counts (budgets banned patterns).
- No colour, no colour-coded status, no alarm red — ever (identity §1; Article VI).
- No operable surface inside the edition: no triage, edit, complete, or snooze controls (charter — glanceable,
  not operable). The local "set aside" gesture stays deferred per 004 and is not part of 006.
- No full sad-path *design* — the quiet-day and degraded states render here, but their worked-up treatment is
  007.
- No illustration craft — the Spot and Cartoon slots are wired with placeholders; their production route is
  008.

## Research
- Monochrome, type-carries-hierarchy, warm paper/ink as anti-glare (not cosmetic) — `research.md` 2026-06-23
  (paper & ink colour) + [identity §1](../../../../docs/identity.md).
- Type roles and the locked faces — [identity §2](../../../../docs/identity.md) (typefaces locked 2026-06-25).
- Low-arousal / `prefers-reduced-motion` — [identity §5](../../../../docs/identity.md); Article VI.
- Spec authored via the upgraded EARS-lite loop (the dogfood) — `research.md` 2026-06-30,
  [`calm-spec-loop`](../../../../docs/research/calm-spec-loop.md).

## How (the plan)
- **Render path:** a SvelteKit route renders the composed edition record (004) **server-side**; the page is
  static once served — no client refresh, no live updates (own the skin, identity §7 — no component library;
  semantic HTML + a little CSS grid).
- **Tokens:** the [edition-v3](../mockups/edition-v3.html) `:root` is the seed — `--ground`, `--ink`,
  `--ink-2`, `--rule`, `--rule-strong`, with a `.dark` override. Promote the shared ones into the suite
  `tokens.css`; keep Margin-only ones local (the edition is the suite's first real UI, so it seeds the shared
  set — which graduate is an open question below).
- **Type:** self-host + subset the locked quartet (`@font-face`: Atkinson Hyperlegible, Yrsa, Shantell Sans;
  IBM Plex Mono only if code ever appears). Mind total weight and CLS against the budgets.
- **Layout:** the lead is a two-column grid (text + Spot) that stacks under ~620px; the plate/forecast is a
  two-column grid with a hairline divider that becomes a top rule when stacked (per the mockup's media query).
- **Theme:** `prefers-color-scheme` as default + a single toggle (the only control on the page), persisted
  minimally; both pairs monochrome.
- **Illustration slots:** the Spot and Cartoon render inline SVG marked `aria-hidden`, fed by 008's assets
  later; placeholders for now.
- **States:** the builder (004 / 005) hands the page a small state flag (normal / quiet / degraded); the
  component omits empty columns and renders the honest note. The full 007 treatment layers on top later.
- **Defers:** the worked-up quiet-day / defends-rest / stop visuals (007); illustration production (008); PWA
  install specifics (010).

## Open questions
- On a very small phone, does the Spot sit above the lead (the mockup uses `order: -1`) or drop entirely while
  it's a placeholder? Settle with 008 / 010.
- Exactly which tokens graduate into the shared `tokens.css` versus stay Margin-local — settle as Quiet's UI
  arrives and there's a second consumer to generalise against.
- Are From the Desk and the sign-off always present, or omitted on the very thinnest editions? Lean: always
  present — they're the warmth that holds a light day together. Confirm in 007.

## Tasks
*(fill at build time — smallest first; each cites the requirement it satisfies)*
- [ ] Static route renders a fixed composed-edition fixture as the full page in order, no refresh, no badge (R1, R3).
- [ ] Tokens + both monochrome pairs; theme toggle + `prefers-color-scheme`; test asserts no colour value beyond ink/paper/clay (R2, R4).
- [ ] The lead: hero + why + ≤1 action link; hero-null renders "nothing needs you first today" (R5, R7).
- [ ] Plate time-bound marking by weight + filled mark only; test asserts no colour / "overdue" / count (R6).
- [ ] Empty-column omission keeps the page complete (R8); degraded / last-good note renders, never blank or alarm (R9).
- [ ] `prefers-reduced-motion` honoured and removable; phone reflow to one column (R10, R11).
- [ ] A11y pass — landmarks, heading order, `aria-hidden` art, meaning in text (R12); type quartet in role (R13).
- [ ] Lighthouse Perf + PWA ≥ 95, no CLS regression, client JS ≤ 75 KB (budgets gate).

## Constitution Check
1. **Serves:** I (a finite, glanceable page you finish, not a dashboard), VI (monochrome, hairline, near-zero
   motion — low arousal); supports VII (the lead recommends and links, never executes) and IV (a thin day
   reads as calm, not failure).
2. **Violates:** none — confirmed vs Articles + Budgets + Banned patterns (no refresh, no badge/unread, no
   colour-coding, no puzzle/horoscope, fixed column set, client JS ≤ 75 KB, Lighthouse ≥ 95).
3. **Subtracts:** removes every dashboard affordance (refresh, counts, live updates, status colour) and every
   operable control but the one theme toggle — the page is to read and leave.
4. **Calm:** honest states (quiet-day "nothing needs you first", degraded last-good note) + `prefers-reduced-motion`;
   the happy path is specified here, the sad paths render here and are fully designed in 007.
