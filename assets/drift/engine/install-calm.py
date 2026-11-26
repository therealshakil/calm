#!/usr/bin/env python3
"""Install (or remove) the `calm` command.

Adds a small `calm` shell function to ~/.zshrc: it enters the repo and prints
the sit-down view — drift's rotating banner + a one-glance project status.
Plain terminal output, run on purpose, so it always shows and costs zero model
tokens (unlike a launch banner, which Claude Code can't render — see the drift
README).

  python3 install-calm.py            # install the `calm` command
  python3 install-calm.py --remove   # take it back out

Idempotent — re-running replaces the block between its markers. Reversible.
"""

from __future__ import annotations

import argparse
import os

RC = os.path.expanduser("~/.zshrc")
BEGIN = "# >>> calm command >>>"
END = "# <<< calm command <<<"
WORK = "$HOME/dev/calm/assets/drift/engine/work.py"


def _block() -> str:
    return "\n".join((
        BEGIN,
        "# sit down to work on calm: enter the repo, banner + status",
        "calm() {",
        '  cd "$HOME/dev/calm" || return',
        f'  python3 "{WORK}"',
        "}",
        END,
    ))


def _strip_existing(text: str) -> str:
    if BEGIN not in text:
        return text
    before, _, rest = text.partition(BEGIN)
    _, _, after = rest.partition(END)
    return before.rstrip("\n") + ("\n" + after.lstrip("\n") if after.strip() else "\n")


def main(argv: list[str] | None = None) -> int:
    p = argparse.ArgumentParser(description="install the `calm` command")
    p.add_argument("--remove", action="store_true", help="remove the command")
    args = p.parse_args(argv)

    text = ""
    if os.path.exists(RC):
        with open(RC, encoding="utf-8") as f:
            text = f.read()

    cleaned = _strip_existing(text)
    if args.remove:
        with open(RC, "w", encoding="utf-8") as f:
            f.write(cleaned)
        print(f"removed the `calm` command from {RC}")
        return 0

    new = cleaned.rstrip("\n") + "\n\n" + _block() + "\n"
    with open(RC, "w", encoding="utf-8") as f:
        f.write(new)
    print(f"installed the `calm` command into {RC}")
    print("open a new shell (or: source ~/.zshrc), then run: calm")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
