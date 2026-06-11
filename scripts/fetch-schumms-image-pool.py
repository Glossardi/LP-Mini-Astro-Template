#!/usr/bin/env python3
"""Fetch schumms.com images with alt text into public/images/pool/."""

from __future__ import annotations

import json
import re
import subprocess
import unicodedata
from html import unescape
from pathlib import Path
from urllib.parse import unquote, urlparse

ROOT = Path(__file__).resolve().parents[1]
POOL = ROOT / "public" / "images" / "pool"
PAGES = [
    ("homepage", "https://www.schumms.com"),
    ("services", "https://www.schumms.com/services"),
    ("events", "https://www.schumms.com/events"),
    ("team", "https://www.schumms.com/team"),
    ("lookbook", "https://www.schumms.com/lookbook"),
    ("kontakt", "https://www.schumms.com/kontakt"),
]

IMG_RE = re.compile(
    r'<img\b[^>]*\bsrc="([^"]+)"[^>]*?(?:\balt="([^"]*)")?[^>]*>',
    re.IGNORECASE,
)
IMG_ALT_FIRST_RE = re.compile(
    r'<img\b[^>]*?\balt="([^"]*)"[^>]*?\bsrc="([^"]+)"[^>]*>',
    re.IGNORECASE,
)

CATEGORY_RULES: list[tuple[str, str]] = [
    (r"logo|favicon|webclip", "brand"),
    (r"susanne|dirk|annett|annina|claudia|eveline|alireza|giovanni|brittney|christine|gheorghe|frschemm|sophie|bianca", "team"),
    (r"event|architekten|business.?lunch|tiktok", "events"),
    (r"cimt|riese|steel|lookbook|case", "cases"),
    (r"e-book|ebook", "content"),
    (r"home|hero", "hero"),
    (r"services|team-1", "services"),
    (r"partner-logo", "partners"),
]

SKIP_PATTERNS = ("arrow-right", "pause.svg", "play-24", "sphere-shape")


def slugify(text: str, max_len: int = 72) -> str:
    text = unescape(text).strip().lower()
    text = unicodedata.normalize("NFKD", text)
    text = text.encode("ascii", "ignore").decode("ascii")
    text = re.sub(r"[^a-z0-9]+", "-", text).strip("-")
    if not text:
        return "image"
    parts = text.split("-")
    out: list[str] = []
    length = 0
    for part in parts:
        if not part:
            continue
        add = len(part) + (1 if out else 0)
        if length + add > max_len:
            break
        out.append(part)
        length += add
    return "-".join(out) or "image"


def full_size_url(url: str) -> str:
    url = unquote(url)
    return re.sub(r"-p-\d+\.(jpg|jpeg|png|webp)$", r".\1", url, flags=re.IGNORECASE)


def original_name(url: str) -> str:
    name = Path(unquote(urlparse(url).path)).name
    return re.sub(r"-p-\d+", "", name)


def guess_category(url: str, alt: str, page: str) -> str:
    hay = f"{url} {alt} {page}".lower()
    for pattern, category in CATEGORY_RULES:
        if re.search(pattern, hay):
            return category
    return "misc"


def curl_text(url: str) -> str:
    result = subprocess.run(
        ["curl", "-sL", url],
        check=True,
        capture_output=True,
        text=True,
    )
    return result.stdout


def curl_bytes(url: str) -> bytes:
    result = subprocess.run(
        ["curl", "-sL", url],
        check=True,
        capture_output=True,
    )
    return result.stdout


def extract_images(html: str) -> list[tuple[str, str]]:
    found: dict[str, str] = {}
    for regex in (IMG_RE, IMG_ALT_FIRST_RE):
        for match in regex.finditer(html):
            if regex is IMG_ALT_FIRST_RE:
                alt, src = match.group(1), match.group(2)
            else:
                src, alt = match.group(1), match.group(2) or ""
            if "website-files.com/68c2c99d8f9665630c14287f" not in src:
                continue
            if src.endswith(".svg") and "partner-logo" not in src.lower():
                continue
            if any(x in src.lower() for x in SKIP_PATTERNS):
                continue
            if src not in found or (alt and not found[src]):
                found[src] = alt.strip()
    return list(found.items())


def main() -> None:
    entries: dict[str, dict] = {}
    used_names: dict[str, int] = {}

    for page_slug, page_url in PAGES:
        html = curl_text(page_url)
        for src, alt in extract_images(html):
            full = full_size_url(src)
            if full in entries:
                entry = entries[full]
                if alt and not entry.get("alt"):
                    entry["alt"] = alt
                entry["pages"].add(page_slug)
                continue

            category = guess_category(full, alt, page_slug)
            ext = Path(unquote(urlparse(full).path)).suffix.lower() or ".jpg"
            base = slugify(alt) if alt else slugify(Path(original_name(full)).stem)
            name_key = f"{category}/{base}"
            count = used_names.get(name_key, 0)
            used_names[name_key] = count + 1
            filename = f"{base}{ext}" if count == 0 else f"{base}-{count + 1}{ext}"
            rel = f"/images/pool/{category}/{filename}"

            entries[full] = {
                "file": rel,
                "alt": alt or None,
                "category": category,
                "source_url": full,
                "source_page": page_slug,
                "pages": {page_slug},
                "original_filename": original_name(full),
            }

    manifest: list[dict] = []
    for full, meta in sorted(entries.items(), key=lambda x: x[1]["file"]):
        local_path = ROOT / "public" / meta["file"].lstrip("/")
        try:
            local_path.parent.mkdir(parents=True, exist_ok=True)
            local_path.write_bytes(curl_bytes(full))
            meta["bytes"] = local_path.stat().st_size
        except subprocess.CalledProcessError as exc:
            meta["error"] = str(exc)
            print(f"FAIL {full}: {exc}")
            continue
        meta["pages"] = sorted(meta["pages"])
        manifest.append(meta)
        print(f"OK {meta['file']}")

    manifest_path = POOL / "manifest.json"
    manifest_path.write_text(
        json.dumps(
            {
                "source": "https://www.schumms.com",
                "fetched_at": __import__("datetime").date.today().isoformat(),
                "usage": "Agents: Bild per Pfad in Frontmatter setzen. Alt-Text aus manifest.alt übernehmen.",
                "images": manifest,
            },
            ensure_ascii=False,
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )
    print(f"\nWrote {len(manifest)} images to {POOL}")


if __name__ == "__main__":
    main()
