#!/usr/bin/env python3
"""drift render-check — the look can't silently drift.

Each case below is frozen to a golden file. `check.py` re-renders and compares;
`check.py --freeze` rewrites the goldens (do this on purpose, never by reflex).

Determinism is the guarantee: same seed, same bytes. The hand-drawn pieces in
../docs/gallery.md are the aesthetic north-star; these goldens are the engine's
own deterministic baseline, so a regression shows up as a diff.
"""

from __future__ import annotations

import argparse
import os
import sys

import drift

HERE = os.path.dirname(os.path.abspath(__file__))
GOLDEN = os.path.join(HERE, "golden")

# name -> render kwargs (the frozen seeds)
CASES = {
    "wave-7": dict(motif="wave", seed=7, w=66, h=14, text=None),
    "wave-7-calm": dict(motif="wave", seed=7, w=66, h=14, text="calm"),
    "wave-22": dict(motif="wave", seed=22, w=66, h=14, text=None),
    "clouds-7": dict(motif="clouds", seed=7, w=66, h=14, text=None),
    "trees-7": dict(motif="trees", seed=7, w=66, h=14, text=None),
}


def _render(case: dict) -> str:
    return drift.render(case["motif"], case["seed"], case["w"], case["h"], case["text"]) + "\n"


def freeze() -> int:
    os.makedirs(GOLDEN, exist_ok=True)
    for name, case in CASES.items():
        path = os.path.join(GOLDEN, name + ".txt")
        with open(path, "w", encoding="utf-8") as f:
            f.write(_render(case))
    print(f"froze {len(CASES)} goldens -> {GOLDEN}")
    return 0


def verify() -> int:
    failures = []
    # determinism: each case renders identically twice
    for name, case in CASES.items():
        if _render(case) != _render(case):
            failures.append(f"{name}: not deterministic across two renders")
    # golden match
    for name, case in CASES.items():
        path = os.path.join(GOLDEN, name + ".txt")
        if not os.path.exists(path):
            failures.append(f"{name}: no golden (run --freeze)")
            continue
        with open(path, encoding="utf-8") as f:
            want = f.read()
        if _render(case) != want:
            failures.append(f"{name}: drifted from golden")
    if failures:
        for line in failures:
            print("FAIL", line)
        return 1
    print(f"ok — {len(CASES)} goldens hold, all deterministic")
    return 0


def main(argv: list[str] | None = None) -> int:
    p = argparse.ArgumentParser(description="drift render-check")
    p.add_argument("--freeze", action="store_true", help="rewrite the golden files")
    args = p.parse_args(argv)
    return freeze() if args.freeze else verify()


if __name__ == "__main__":
    sys.exit(main())
