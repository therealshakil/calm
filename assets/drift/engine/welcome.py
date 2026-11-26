#!/usr/bin/env python3
"""welcome-to-calm — a rotating launch banner drawn from drift.

Each launch picks a sibling seed (and a calm motif), so the banner is gently
different every time while staying in the same low-ink register. The calm
wordmark rests in the cleared ma. Decorative; a plain "calm" sits in the text.

Run: python3 engine/welcome.py
"""

from __future__ import annotations

import os
import struct

import drift

# Calm motifs for a welcome — the grove reads less as a "banner", so wave/clouds.
ROTATION = ("wave", "clouds")


def _launch_seed() -> int:
    """A fresh seed per launch, from the OS entropy pool (not time, not the LLM)."""
    return struct.unpack("<I", os.urandom(4))[0]


def banner(width: int = 66, height: int = 12) -> str:
    seed = _launch_seed()
    motif = ROTATION[seed % len(ROTATION)]
    return drift.render(motif, seed, width, height, text="calm")


if __name__ == "__main__":
    print(banner())
