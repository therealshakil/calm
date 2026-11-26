# Adopting calm

There are two ways to use calm in another repo. Pick one; you can move between them later.

- **Full calm** is an opt-in. The project takes calm as law: the Constitution, the identity, the voice,
  the method. It's named `calm-<something>` and says so in its `CLAUDE.md`. A departure is allowed only as a
  named, scoped exception written down in the project.
- **Built on calm** uses calm as a base. The project names the layers it takes, for example the method and
  the voice, and keeps its own look and rules for everything else. Nothing binds that it doesn't name.

Either way it's the same mechanism: one `CLAUDE.md` pointer, no analysis pass, no machinery.
The scope is set in the Constitution, Amendment 7.

## The layers

| Layer | What it is | Where it lives |
| --- | --- | --- |
| Method | specs-first, the Build Gate, the person locks, research-method | `CONSTITUTION.md` working principles, `docs/research-method.md` |
| Voice | how calm writes and speaks | `docs/calm-language.md`, `docs/specs/002-calm-markdown.md` |
| Identity | the look: ink on paper, one clay accent, four faces | `docs/identity.md`, `tokens.css` |
| Articles | the eleven Articles and the banned patterns | `CONSTITUTION.md` |
| Mechanics | CLI and dev-surface conventions | `docs/specs/007-cli-conventions.md` |

Full calm takes all five. Built on calm takes any subset.

## 1a. Full calm — the opt-in pointer

Name the repo `calm-<something>`. Create `CLAUDE.md` and copy this, changing only the project name:

```markdown
# Working calm — calm-<project>

calm-<project> opts in to full calm: it takes calm as law and does not restate the rules.

## Governing law lives elsewhere

- **github.com/therealshakil/calm** — the source of calm:
  - CONSTITUTION.md — the Articles + banned patterns. Supreme.
  - docs/identity.md — the look: monochrome ink on paper + one clay accent, the locked typefaces, almost no motion.
  - docs/calm-language.md — the voice.
  - CLAUDE.md — how to be while you build.

When a choice here conflicts with the calm Constitution, the choice loses — not the Constitution.

## Scoped exceptions

None. (A departure is written here with its reason, e.g. "colour: a low-arousal kids' palette over the
monochrome, because …". Anything not listed follows calm.)

## How we work here

- Build Gate (Amendment 2): classify before building — two-way (proceed, report) vs one-way (spec first; the person locks).
- Specs are co-authored; the person locks (Amendment 3).
- Mechanics: absolute paths and tool dir-flags (git -C), never cd; one operation per command; no command
  substitution, shell variables, or chained commands; push after every commit.
- CLI / dev-surface conventions: github.com/therealshakil/calm -> docs/specs/007-cli-conventions.md.
- Spot a pattern calm itself should carry? Promote it upstream — author it in calm (the true source) and this repo reads it back live; never copy-and-diverge. See calm's docs/specs/008-downstream-contributions.md.
```

Then import the tokens (§2) and follow the conventions (§3).

## 1b. Built on calm — the base pointer

Any name. Create `CLAUDE.md`, keep only the layers you take, and say what's your own:

```markdown
# Working calm — <project>

<project> is built on calm. It takes the layers below from calm and keeps its own rules for the rest;
calm's Constitution doesn't bind it beyond what's listed.

## Taken from calm (github.com/therealshakil/calm)

- Method — specs-first, the Build Gate, the person locks (CONSTITUTION.md working principles).
- Voice — docs/calm-language.md and docs/specs/002-calm-markdown.md.
- Mechanics — docs/specs/007-cli-conventions.md.

## Our own

- Identity — <project>'s own look, in docs/identity.md here.
- <anything else this project decides for itself>
```

Import the tokens only if you take the identity.

## 2. Import the tokens (full calm, or if you take the identity)

Copy [`tokens.css`](./tokens.css) into your repo (or link it), and build your styles on its variables —
never hard-coded colour. The palette is monochrome ink-on-paper + one clay accent; light and dark are both
defined.

```css
@import "tokens.css";
body { background: var(--calm-bg); color: var(--calm-fg); font-family: var(--calm-font-body); }
```

Load the four faces yourself (Google Fonts or self-host): Atkinson Hyperlegible (body), Yrsa (serif),
Shantell Sans (the hand), IBM Plex Mono (mono). The tokens only name them.

Not on the web? The values are plain — transcribe them to your target. The tokens are the canonical design;
the skin ports, the rest does not.

## 3. Reuse the conventions — don't restate them

- Specs follow [`docs/spec-template.md`](./docs/spec-template.md); keep them in your repo, indexed.
- READMEs follow [`docs/specs/004-readme-standard.md`](./docs/specs/004-readme-standard.md) (skeleton:
  [`docs/readme-template.md`](./docs/readme-template.md)).
- Writing follows [`docs/specs/002-calm-markdown.md`](./docs/specs/002-calm-markdown.md) (the eight rules).
- CLI and dev-surface work follows [`docs/specs/007-cli-conventions.md`](./docs/specs/007-cli-conventions.md).
- Skills follow the `SKILL.md` open standard (agentskills.io): standard frontmatter, a Markdown body, and
  the three optional dirs (`scripts/`, `references/`, `assets/`). A calm skill then runs unchanged across
  Claude Code, Codex, Cursor, Gemini CLI and other compliant agents — portable by construction, not tied to
  one engine. Keep the body lean (progressive disclosure), one skill to one job, the description a routing
  rule (triggers + inputs + output).
- Every doc that makes a claim ends with the four-line Constitution Check (full calm), or with whatever
  check the project keeps (built on calm).

## 4. Add yourself to the registry

When the repo is real, add a line to [`CALMED.md`](./CALMED.md) under its kind: name, one line, link,
what it borrows (and, for full calm, any scoped exception). It appears once it exists — never as a wishlist.

---

That is the whole of it: point, take what you need, follow the conventions. No generator, no build step,
nothing to maintain.
