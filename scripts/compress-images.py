"""Compress public assets for faster GitHub Pages loads."""
from __future__ import annotations

from pathlib import Path

from PIL import Image

PUBLIC = Path(r"d:\pre commit\website-resume\public")

# name -> (max_width, quality, format)
TARGETS = {
    "background.png": (1600, 78, "WEBP"),
    "phone-background.png": (900, 78, "WEBP"),
    "user.png": (900, 80, "WEBP"),
    "project-1.png": (1200, 78, "WEBP"),
    "project-3.png": (1200, 80, "WEBP"),
    "project-4.png": (1200, 80, "WEBP"),
    "project-5.png": (1200, 80, "WEBP"),
    "project-llm-kg.png": (1200, 78, "WEBP"),
    "project-parkease.png": (1200, 78, "WEBP"),
    "logo.png": (256, 90, "PNG"),
}


def compress(name: str, max_w: int, quality: int, fmt: str) -> None:
    src = PUBLIC / name
    if not src.exists():
        print(f"skip missing {name}")
        return

    img = Image.open(src)
    img = img.convert("RGBA") if fmt == "PNG" and img.mode in ("P", "RGBA") else img.convert("RGB")

    w, h = img.size
    if w > max_w:
        nh = int(h * (max_w / w))
        img = img.resize((max_w, nh), Image.Resampling.LANCZOS)

    if fmt == "WEBP":
        out = src.with_suffix(".webp")
        img.save(out, "WEBP", quality=quality, method=6)
        before = src.stat().st_size
        after = out.stat().st_size
        src.unlink()
        print(f"{name} -> {out.name}: {before/1024:.0f}KB -> {after/1024:.0f}KB")
    else:
        # optimize PNG in place
        tmp = src.with_suffix(".tmp.png")
        img.save(tmp, "PNG", optimize=True)
        before = src.stat().st_size
        after = tmp.stat().st_size
        tmp.replace(src)
        print(f"{name}: {before/1024:.0f}KB -> {after/1024:.0f}KB")


def main() -> None:
    for name, args in TARGETS.items():
        compress(name, *args)


if __name__ == "__main__":
    main()
