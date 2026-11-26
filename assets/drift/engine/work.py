#!/usr/bin/env python3
"""work-on-calm — the sit-down view.

Draws drift's rotating banner, then a calm one-glance status of the repo:
branch, last commit, and whether the tree is clean. Run from the shell (via the
`calm` command), so it's plain terminal output — zero model tokens.

  python3 engine/work.py
"""

from __future__ import annotations

import os
import subprocess

import welcome

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, "..", "..", ".."))


def _git(*args: str) -> str:
    try:
        out = subprocess.run(
            ["git", "-C", ROOT, *args],
            capture_output=True, text=True, check=True,
        )
        return out.stdout.strip()
    except (subprocess.CalledProcessError, FileNotFoundError):
        return ""


def status() -> str:
    branch = _git("rev-parse", "--abbrev-ref", "HEAD") or "—"
    subject = _git("log", "-1", "--format=%s") or "—"
    when = _git("log", "-1", "--format=%cr") or ""
    changed = [ln for ln in _git("status", "--porcelain").splitlines() if ln]
    tree = "clean" if not changed else f"{len(changed)} uncommitted"
    lines = [
        f"  calm · {branch}",
        f"  last   {subject}  · {when}".rstrip(" ·"),
        f"  tree   {tree}",
    ]
    return "\n".join(lines)


def main() -> int:
    print(welcome.banner())
    print()
    print(status())
    print()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
