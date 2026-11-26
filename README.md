```
   calm
   ink on paper, all the way down
```

# calm

A small, strict way of building software that leaves people alone.
It's a constitution, a look, a voice and a working method, plus the tools that hold them,
made for working with an AI assistant (Claude Code today) and readable by a person.

calm says no to the loud defaults: no streaks, no badges, no red, no infinite anything.
A calm tool is finite and glanceable; you look, you leave.
The [Constitution](./CONSTITUTION.md) is the law, and everything here answers to it.

## What's here

| Part | Where |
| --- | --- |
| The law: eleven Articles, the banned patterns, how we work | [`CONSTITUTION.md`](./CONSTITUTION.md) |
| The look: ink on paper, one clay accent, four faces | [`docs/identity.md`](./docs/identity.md), [`tokens.css`](./tokens.css) |
| The voice | [`docs/calm-language.md`](./docs/calm-language.md) |
| How to be while you build | [`CLAUDE.md`](./CLAUDE.md) |
| How we research and spec | [`docs/research-method.md`](./docs/research-method.md), [`docs/specs/`](./docs/specs/) |
| Skills: the design system, the council, drift | [`.claude/skills/`](./.claude/skills/) |
| A terminal theme and calm ASCII art | [`assets/terminal/`](./assets/terminal/), [`assets/drift/`](./assets/drift/) |
| Apps in progress: Margin, study, gutter, mail | [`apps/`](./apps/) |

## Install

There are two ways in. Pick whichever fits; neither is hard to undo.

**Point a project at calm.** Drop one `CLAUDE.md` into your repo that points here.
Full calm takes calm as law; built on calm takes only the layers you name and keeps its own look.
The templates and the layers are in [`ADOPTING.md`](./ADOPTING.md).

**Use calm everywhere in Claude Code.** An opt-in that makes calm how your assistant works in every
project: the register, the voice, the skills. Paste [`ONBOARDING.md`](./ONBOARDING.md) into a Claude Code
session and it walks you through it, one step at a time.

## Use

Once it's in, you work as normal. A few things change.

- Before building anything non-trivial, the assistant says whether it's a two-way door (it goes ahead
  and tells you after) or a one-way door (it stops and asks one question).
- Specs come before code, and only you lock them.
- Ask for anything visual and it comes out in ink on paper, in both themes.
- Say "council this" before a hard decision to hear independent advisors argue it out.

## Licence

MIT, see [`LICENSE`](./LICENSE). The bundled fonts keep their own SIL Open Font Licence
([`assets/fonts/OFL.txt`](./assets/fonts/OFL.txt)).
