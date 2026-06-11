#!/usr/bin/env bash
# Download + compress assets from go.schumms.com HR conference LP.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PAGE="$ROOT/public/pages/hr-konferenz-wiesbaden"
RAW="$PAGE/_raw"
BASE="https://go.schumms.com"

mkdir -p "$RAW" "$PAGE/partners" "$PAGE/speakers"

compress_jpeg() {
  local src="$1" dest="$2" max="$3" quality="$4"
  sips -Z "$max" -s format jpeg -s formatOptions "$quality" "$src" --out "$dest" >/dev/null 2>&1
}

compress_png() {
  local src="$1" dest="$2" max="$3"
  sips -Z "$max" "$src" --out "$dest" >/dev/null 2>&1
}

download() {
  curl -fsSL "$1" -o "$2"
}

echo "Downloading originals…"
download "$BASE/hubfs/SuR_Meeting-Townhall-4.jpg" "$RAW/townhall.jpg"
download "$BASE/hubfs/68c446bebd461c0bdec13712_Susanne-Busshart.jpg" "$RAW/susanne-busshart.jpg"
download "$BASE/hubfs/Simon.png" "$RAW/simon-busshart.png"
download "$BASE/hubfs/jessica%20turner.jpeg" "$RAW/jessica-turner.jpeg"
download "$BASE/hubfs/Bildschirmfoto%202026-04-30%20um%2014.40.06.png" "$RAW/kiki-radicke.png"
download "$BASE/hubfs/KI%20Robot%203.png" "$RAW/ki-robot.png"
download "$BASE/hs-fs/hubfs/thumb-ADACOR_RGB_800px.png?width=800" "$RAW/adacor.png"
download "$BASE/hs-fs/hubfs/NieOhneKI-Agency-Logo-trans_v2.png?width=800" "$RAW/nieohneki.png"
download "$BASE/hs-fs/hubfs/w+bmarke_logo_dunkel.png?width=800" "$RAW/w-b-marke.png"
download "$BASE/hubfs/logo_wilkhahn.svg" "$RAW/wilkhahn.svg"

echo "Compressing page images…"
compress_jpeg "$RAW/townhall.jpg" "$PAGE/hero.jpg" 1600 82
compress_jpeg "$RAW/townhall.jpg" "$PAGE/preview.jpg" 1200 80
compress_jpeg "$RAW/susanne-busshart.jpg" "$PAGE/about.jpg" 960 82

echo "Compressing speaker assets…"
compress_jpeg "$RAW/jessica-turner.jpeg" "$PAGE/speakers/jessica-turner.jpg" 800 82
compress_jpeg "$RAW/simon-busshart.png" "$PAGE/speakers/simon-busshart.jpg" 600 82
compress_jpeg "$RAW/kiki-radicke.png" "$PAGE/speakers/kiki-radicke.jpg" 600 82
compress_jpeg "$RAW/susanne-busshart.jpg" "$PAGE/speakers/susanne-busshart.jpg" 800 82
compress_jpeg "$RAW/ki-robot.png" "$PAGE/ki-robot.jpg" 800 80

echo "Compressing partner logos…"
compress_png "$RAW/adacor.png" "$PAGE/partners/adacor.png" 320
compress_png "$RAW/nieohneki.png" "$PAGE/partners/nieohneki.png" 320
compress_png "$RAW/w-b-marke.png" "$PAGE/partners/w-b-marke.png" 400
cp "$RAW/wilkhahn.svg" "$PAGE/partners/wilkhahn.svg"

echo ""
echo "Compressed sizes:"
ls -lh "$PAGE"/*.jpg "$PAGE"/*.png 2>/dev/null || true
ls -lh "$PAGE/partners" "$PAGE/speakers" 2>/dev/null || true
echo "Raw (not committed): $(du -sh "$RAW" | cut -f1)"
