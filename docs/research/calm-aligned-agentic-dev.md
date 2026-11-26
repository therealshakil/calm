# Kindred approaches — agentic dev that fits the calm way

**A research product** · 2026-06-28 · suite-wide
*Extends [`research-method.md`](../research-method.md). A reading list and a check: is the calm way grounded in established thinking? A deliverable in itself — it forces no spec.*

## Question

What existing agentic-development approaches and writing are *kindred* to the calm principles — so we can
learn from, borrow, and cite them? And does calm have real lineage, or is it improvised?

## Method

One frugal pass (the research-flow's second real run), graded by strength, mapped to each calm principle.
Confirmed = found and verified; uncertain flagged. Verify-queue at the end.

## What it found — calm has named ancestors

Calm is not improvised. Each pillar traces to established work:

- **"Calm" itself** — Mark Weiser & John Seely Brown, PARC (1995): technology should "require the smallest
  possible amount of attention" and use "the periphery of attention". The literal source of the name.
- **The Build Gate** — Jeff Bezos's **two-way vs one-way doors**: reversible → decide fast; irreversible →
  slow, ~70% certainty. Calm's gate is this model, named.
- **The Constitution + four-line Check** — the same shape as Anthropic's **Constitutional AI**: explicit
  written principles a system self-checks against (inspiration, not method).
- **Subtract by default** — Leidy Klotz, *Subtract* (2021): minds add before taking away, so subtraction
  must be a *stated* rule to happen.
- **Sustainable** — Cal Newport's *Slow Productivity* ("do fewer things, natural pace") and Agile Principle
  #8 ("a constant pace indefinitely").
- **ND-friendly** — a 2025 arXiv study of neurodivergent engineers names "artifact-first communication,
  predictable cadence, opt-in pairing" — calm's ND rules, almost verbatim.

## The kindred work, by calm principle

**Specs-first / research-backed**
- **Harper Reed — LLM codegen workflow** — `spec.md` → `prompt_plan.md` + `todo.md` → small safe chunks.
  "The spec is the godhead." Borrow: the artefacts and chunk sizing. ([harper.blog](https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/))
- **GitHub Spec Kit / spec-driven development** — Specify → Plan → Tasks → Implement; "the spec is the
  source of truth," framed against vibe-coding. Borrow the phase gates, leave the ceremony. ([spec-kit](https://github.com/github/spec-kit))
- **README-driven development** (Tom Preston-Werner, 2010) — write the README first; if a feature is hard to
  explain in prose, it's too complex. A subtract test. ([rdd](https://tom.preston-werner.com/2010/08/23/readme-driven-development))

**Human is the decider; machine does the strict parts**
- **Anthropic — Claude Code best practices** — research → plan → execute → review, "human as oversight, not
  typist"; plan mode; "show evidence, don't assert success." ([best-practices](https://code.claude.com/docs/en/best-practices))
- **Karpathy — agentic engineering** — the coiner of "vibe coding" now calls it passé and favours
  "orchestrating agents … more oversight and scrutiny." The credible anti-vibe anchor.

**Calm tooling (glanceable, peripheral)**
- **Weiser & Brown; Amber Case — *Calm Technology*** — the periphery/centre attention model (Weiser & Brown,
  1996: "technologies encalm as they empower our periphery"). Amber Case distilled **8 named principles** —
  e.g. #1 "require the smallest possible amount of attention", #3 "make use of the periphery", #7 "the right
  amount of technology is the minimum needed" — usable as a ship-gate for any calm tool. ([principles.design](https://principles.design/examples/principles-of-calm-technology) · [Case](https://www.caseorganic.com/post/principles-of-calm-technology))

**Subtract / frugal**
- **Leidy Klotz — *Subtract*** — the behavioural reason the rule must be explicit.
- **Anthropic — Building Effective Agents** — "find the simplest solution … this might mean not building
  agentic systems at all." Frugality as the default; maybe don't build it. ([building-effective-agents](https://www.anthropic.com/research/building-effective-agents))

**Sustainable**
- **Cal Newport — *Slow Productivity*** — do fewer things, natural pace, quality; names "pseudo-productivity"
  (busyness as proxy) — our anti-hype language.
- **Agile Principle #8** — "a constant pace indefinitely." The citeable one-liner. ([agilemanifesto](https://agilemanifesto.org/principles.html))

**ND-friendly**
- **"Invisible Load" (arXiv 2512.05350, 2025 preprint; scope: ND women)** — predictable cadence,
  artifact-first, opt-in pairing; code review is high-load for ADHD devs; chunk + externalise. Calm's ND
  rules, near-verbatim — cite as illustrative (preprint, not peer-reviewed), don't over-generalise.
- **Cognitive-accessibility writing** — reducing cognitive load is a curb-cut: ND-first is good for everyone.

**Governance**
- **Bezos two-way/one-way doors** — the Build Gate's origin; adopt the ~70% heuristic explicitly. ([fs.blog](https://fs.blog/reversible-irreversible-decisions/))
- **Constitutional AI** — written principles a system self-checks against; the spec-Check loop's ancestor.
- **Definition of Done** (official Scrum) — the "not done until it meets agreed criteria" gate; *Definition
  of Ready* (the closer match to "human locks before build") is a common **complementary** practice, not
  official Scrum (removed from the Guide in 2020).

## Anti-calm counter-currents (flag and resist)

- **Vibe coding** — "forget the code exists," ship unread. Against human-is-decider + preview-before-write.
  (Its own coiner now hand-codes — the built-in rebuttal.)
- **"Run 50 agents / let it cook / max throughput"** — against subtract, frugal, sustainable, low load.
  (e.g. "Multi-Agent Orchestration: Running 10+ Claude Instances in Parallel", dev.to — and even pro-swarm
  write-ups concede token use scales with agents, conceding the frugality cost.)
- **Pseudo-productivity / hustle velocity** — busyness as value; against sustainable + no-urgency.
- **Confirmation-heavy "safety theatre"** — each prompt is an attention tax. Calm keeps oversight but
  *front-loads* it into a locked spec + plan, then proceeds silently. (So calm ≠ "ask the human everything".)

## Through-line

The calm way is a coherent point in a real tradition: **front-load judgement (spec + gate), keep the human
deciding, protect attention, subtract, work at a pace you can hold.** What's distinctive is the *synthesis*
and the **ND-first, wellbeing-first north star** — the others optimise leverage; calm optimises a person's
sustainable attention. Same bones, calmer values.

## Citations

Calm tech: [Weiser & Brown (Ubiquity)](https://ubiquity.acm.org/article.cfm?id=985617) · [Amber Case](https://www.caseorganic.com/post/principles-of-calm-technology) ·
Specs: [Harper Reed](https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/) · [GitHub Spec Kit](https://github.com/github/spec-kit) · [README-driven dev](https://tom.preston-werner.com/2010/08/23/readme-driven-development) ·
Oversight: [Claude Code best practices](https://code.claude.com/docs/en/best-practices) ·
Subtract/frugal: [Klotz — Subtract](https://leidyklotz.com/subtract/) · [Building Effective Agents](https://www.anthropic.com/research/building-effective-agents) ·
Sustainable: [Slow Productivity](https://us.macmillan.com/books/9780593544853/slowproductivity) · [Agile Principle #8](https://agilemanifesto.org/principles.html) ·
ND: [Invisible Load (arXiv)](https://arxiv.org/pdf/2512.05350) ·
Governance: [Bezos doors (fs.blog)](https://fs.blog/reversible-irreversible-decisions/) · [Constitutional AI](https://www.anthropic.com/research/constitutional-classifiers)

## Confidence — verified (second bounded pass, 2026-06-28)

A verification pass confirmed the load-bearing claims, with three corrections now applied above:

- **Calm Technology = 8 named principles** (Amber Case / principles.design), not a "checklist". The 8 are the
  citeable core; a separate time/attention checklist also exists on Medium.
- **"Invisible Load" is a 2025 preprint** (arXiv:2512.05350, Zaib et al., 5 Dec 2025) — not peer-reviewed,
  scope is ND *women*. Cite as illustrative, not authoritative.
- **Definition of Ready is a complementary practice, not official Scrum** (removed from the Guide in 2020);
  the official gate is Definition of *Done*.
- **Weiser & Brown (1996)** primary essay confirmed: "Technologies encalm as they empower our periphery."
- The **swarm** counter-current has concrete sources (dev.to "Running 10+ Claude Instances in Parallel"; not
  one canonical doctrine — a prevailing pattern across several blogs).

Residual: exact bracketed wording of one Weiser quote to check against the PDF; Case's separate Medium
checklist not read in full. Neither is load-bearing.
