#!/usr/bin/env python3
"""drift — a calm, deterministic ASCII engine.

seed -> calm ASCII. Same seed, same piece. Stdlib only.

Three motifs grown from one flow-and-density toolkit (wave, clouds, trees),
a light glyph ramp, and a way to set a word into a cleared space without
shouting. Decorative, low-ink, breathing — never the sole carrier of meaning.

Spec: ../docs/specs/001-drift.md (locked). Look: ../docs/gallery.md.
"""

from __future__ import annotations

import argparse
import math
import random

# Light ramp only — space, then three soft weights. No heavy bold, no blocks.
RAMP = " ·∙•"

# Canonical defaults (the gallery's register).
SEED = 7
WIDTH = 66
HEIGHT = 14


# --- small deterministic value noise --------------------------------------

class Noise:
    """Value noise on a wrapped lattice, smoothstep-interpolated.

    Seeded from one Random, so a given seed always yields the same field.
    """

    def __init__(self, rng: random.Random, period: int = 64):
        self.period = period
        self.grid = [rng.random() for _ in range(period * period)]

    def _lattice(self, ix: int, iy: int) -> float:
        p = self.period
        return self.grid[(iy % p) * p + (ix % p)]

    def at(self, x: float, y: float) -> float:
        x0, y0 = math.floor(x), math.floor(y)
        fx, fy = x - x0, y - y0
        sx = fx * fx * (3 - 2 * fx)
        sy = fy * fy * (3 - 2 * fy)
        v00 = self._lattice(x0, y0)
        v10 = self._lattice(x0 + 1, y0)
        v01 = self._lattice(x0, y0 + 1)
        v11 = self._lattice(x0 + 1, y0 + 1)
        a = v00 + (v10 - v00) * sx
        b = v01 + (v11 - v01) * sx
        return a + (b - a) * sy


# --- density helpers -------------------------------------------------------

def _blank(w: int, h: int) -> list[list[float]]:
    return [[0.0] * w for _ in range(h)]


def _splat(field: list[list[float]], x: float, y: float, w: int, h: int, amount: float) -> None:
    """Deposit `amount` at (x, y) with bilinear spread into four cells."""
    x0, y0 = math.floor(x), math.floor(y)
    fx, fy = x - x0, y - y0
    for dx, dy, weight in ((0, 0, (1 - fx) * (1 - fy)),
                           (1, 0, fx * (1 - fy)),
                           (0, 1, (1 - fx) * fy),
                           (1, 1, fx * fy)):
        cx, cy = x0 + dx, y0 + dy
        if 0 <= cx < w and 0 <= cy < h:
            field[cy][cx] += amount * weight


def _to_chars(field: list[list[float]], w: int, h: int,
              thresholds=(0.10, 0.40, 0.72)) -> list[list[str]]:
    """Normalise a density field to the light ramp, low density -> empty ma."""
    peak = max((c for row in field for c in row), default=0.0) or 1.0
    out = [[" "] * w for _ in range(h)]
    for y in range(h):
        for x in range(w):
            d = field[y][x] / peak
            if d < thresholds[0]:
                ch = " "
            elif d < thresholds[1]:
                ch = RAMP[1]
            elif d < thresholds[2]:
                ch = RAMP[2]
            else:
                ch = RAMP[3]
            out[y][x] = ch
    return out


# --- motifs ----------------------------------------------------------------

def wave(rng: random.Random, w: int, h: int) -> list[list[str]]:
    """A flow-field swell rising and curling, light foam at the crest, wide ma below."""
    noise = Noise(rng)
    field = _blank(w, h)
    freq = 0.06
    turbulence = 0.9
    drift = -0.12  # a gentle lift to the right
    eye_x, eye_y = 0.70 * w, 0.32 * h
    for _ in range(52):
        x = rng.uniform(0, w * 0.42)
        y = rng.uniform(h * 0.45, h * 0.98)
        for _step in range(95):
            angle = drift + turbulence * (noise.at(x * freq, y * freq) - 0.5) * 2
            vx, vy = math.cos(angle), math.sin(angle)
            # rotational pull around the curl's eye, falling off with distance
            dx, dy = x - eye_x, y - eye_y
            dist = math.hypot(dx, dy) + 1e-6
            curl = 1.1 / (1 + dist * dist * 0.02)
            vx += (-dy / dist) * curl
            vy += (dx / dist) * curl
            speed = math.hypot(vx, vy) + 1e-6
            x += vx / speed * 0.9
            y += vy / speed * 0.9
            if not (0 <= x < w and 0 <= y < h):
                break
            _splat(field, x, y, w, h, 1.0)
    # a little foam lifting off the crest
    for _ in range(40):
        fx = rng.uniform(eye_x - w * 0.18, eye_x + w * 0.10)
        fy = rng.uniform(eye_y - h * 0.18, eye_y)
        _splat(field, fx, fy, w, h, 0.45)
    return _to_chars(field, w, h, thresholds=(0.16, 0.50, 0.82))


def clouds(rng: random.Random, w: int, h: int) -> list[list[str]]:
    """Three soft Gaussian masses, light and well separated, generous ma."""
    field = _blank(w, h)
    centres = []
    for _ in range(3):
        cx = rng.uniform(0.18, 0.82) * w
        cy = rng.uniform(0.28, 0.72) * h
        sx = rng.uniform(0.14, 0.20) * w
        sy = rng.uniform(0.40, 0.55) * h
        centres.append((cx, cy, sx, sy))
    for y in range(h):
        for x in range(w):
            for cx, cy, sx, sy in centres:
                nx = (x - cx) / sx
                ny = (y - cy) / sy
                field[y][x] += math.exp(-(nx * nx + ny * ny))
    return _to_chars(field, w, h, thresholds=(0.18, 0.45, 0.78))


def trees(rng: random.Random, w: int, h: int) -> list[list[str]]:
    """A calm grove: thin trunks under soft dappled canopies, at varied heights."""
    field = _blank(w, h)
    baseline = h - 1
    trunks: list[tuple[int, int]] = []
    slots = 3
    for i in range(slots):
        cx = int((i + 0.5) / slots * w + rng.uniform(-w * 0.06, w * 0.06))
        cx = max(2, min(w - 3, cx))
        canopy_y = rng.uniform(0.20, 0.42) * h
        radius_x = rng.uniform(0.06, 0.10) * w
        radius_y = rng.uniform(0.14, 0.22) * h
        for y in range(h):
            for x in range(w):
                nx = (x - cx) / radius_x
                ny = (y - canopy_y) / radius_y
                field[y][x] += math.exp(-(nx * nx + ny * ny)) * rng.uniform(0.85, 1.15)
        trunks.append((cx, int(canopy_y + radius_y)))
    out = _to_chars(field, w, h, thresholds=(0.16, 0.46, 0.80))
    for cx, top in trunks:
        for y in range(max(0, top), baseline + 1):
            out[y][cx] = "|"
    return out


MOTIFS = {"wave": wave, "clouds": clouds, "trees": trees}


# --- text into art ---------------------------------------------------------

def set_wordmark(canvas: list[list[str]], text: str, w: int, h: int) -> list[list[str]]:
    """Rest a word in a cleared ma, a hairline rule beneath it. Type stays plain."""
    row = h // 2
    start = max(0, (w - len(text)) // 2)
    halo = 2
    # clear a calm clearing: the word's row, the rule's row, and a one-cell halo
    for y in range(row - 1, row + 3):
        if 0 <= y < h:
            for x in range(start - halo, start + len(text) + halo):
                if 0 <= x < w:
                    canvas[y][x] = " "
    for i, ch in enumerate(text):
        if 0 <= start + i < w:
            canvas[row][start + i] = ch
    rule_row = row + 1
    if 0 <= rule_row < h:
        for i in range(len(text)):
            if 0 <= start + i < w:
                canvas[rule_row][start + i] = "─"
    return canvas


def cartouche(text: str) -> str:
    """A small upper-left cartouche + seal — the Hokusai-style quiet region."""
    inner = f" {text} "
    top = "╭" + "─" * len(inner) + "╮"
    mid = "│" + inner + "│"
    bot = "╰" + "─" * len(inner) + "╯"
    return "\n".join((top, mid, bot, " ▫"))


# --- render ----------------------------------------------------------------

def render(motif: str, seed: int, w: int, h: int, text: str | None) -> str:
    rng = random.Random(seed)
    canvas = MOTIFS[motif](rng, w, h)
    if text:
        canvas = set_wordmark(canvas, text, w, h)
    return "\n".join("".join(row).rstrip() for row in canvas)


def main(argv: list[str] | None = None) -> int:
    p = argparse.ArgumentParser(description="drift — calm deterministic ASCII")
    p.add_argument("--motif", choices=sorted(MOTIFS), default="wave")
    p.add_argument("--seed", type=int, default=SEED)
    p.add_argument("--width", type=int, default=WIDTH)
    p.add_argument("--height", type=int, default=HEIGHT)
    p.add_argument("--text", default=None, help="set a word into a cleared ma")
    p.add_argument("--cartouche", default=None, help="print a cartouche + seal and exit")
    args = p.parse_args(argv)
    if args.cartouche is not None:
        print(cartouche(args.cartouche))
        return 0
    print(render(args.motif, args.seed, args.width, args.height, args.text))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
