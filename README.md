# schumms-landings

Agent-gestütztes **Landing Page Template** für [Schumm & Rösch](https://www.schumms.com).

Der Agent editiert **nur Markdown** in `src/content/pages/`. Design, Sections, Routing und DSGVO-Basis sind vorgebaut.

**Agent-Dokumentation:** [`AGENTS.md`](./AGENTS.md)

---

## Quick Start

```bash
pnpm install
pnpm run dev      # → http://localhost:4321
pnpm run build    # → dist/
```

| URL | Typ | Beschreibung |
|-----|-----|--------------|
| `/arbeitsplatz-fitness-check/` | Lead-Magnet | Conversion-optimierte Referenz |
| `/default-landing/` | Lead-Magnet | Alle Sections aktiv (Showcase) |
| `/hr-konferenz-wiesbaden/` | Event | Konferenz mit Programm, Speaker, Location |
| `/workspace-day-september/` | Event | Kompakter Event-Funnel |
| `/` | — | Interne Seitenliste (Dev, `noindex`) |

---

## Neue Landingpage anlegen

```bash
# Lead-Magnet / E-Book / Checklist
cp src/content/pages/_template.leadmagnet.md src/content/pages/mein-angebot.md

# Event / Konferenz
cp src/content/pages/_template.event.md src/content/pages/mein-event.md
```

1. Frontmatter ausfüllen (`slug`, Inhalte, `sections:`)
2. Bilder nach `public/pages/[slug]/` legen
3. Nicht benötigte Sections auf `false` — **Inhalte nicht löschen**
4. `published: true` → Build deployen

**Neue Markdown-Datei während laufendem Dev-Server?** Einmal neu starten (`pnpm run dev`), sonst 404 auf dem neuen Slug.

Details: [`AGENTS.md`](./AGENTS.md)

---

## Architektur

```
src/content/pages/              ← Agent editiert hier
  _template.leadmagnet.md       ← Vorlage Lead-Magnet (nicht gebaut)
  _template.event.md            ← Vorlage Event (nicht gebaut)
  _template.md                  ← Legacy: alle Sections (nicht gebaut)

src/components/sections/        ← Section-Komponenten (fix)
src/lib/sections.ts             ← 18-Section-Registry + Defaults
src/content.config.ts           ← Zod-Schema (Build bricht bei Fehlern)
src/data/brand.ts               ← Markendaten (fix)

public/pages/[slug]/            ← Page-spezifische Bilder
public/images/pool/             ← schumms.com Image Pool + manifest.json
public/images/logos/            ← Partner-Logos
scripts/                        ← Asset-Fetcher (optional)
```

**Build-Regel:** `_`-Prefix in `src/content/pages/` → wird ignoriert.

**Production:** Nur `published: true`. Entwürfe: lokal sichtbar, `noindex`.

---

## Design (schumms.com)

- Schwarz/Weiß, Inter, scharfe Kanten
- Coral `#FD7857` — Hero-CTA, Nav-CTA, Formular
- Hero: Split-Layout · Benefits: nummerierte Kreise
- LP-Nav: Logo links, ein CTA rechts
- LP-Footer: Impressum + Datenschutz + Adresse

---

## Deployment (Coolify)

| Branch | Domain |
|--------|--------|
| `dev` | preview-landing.schumms.com |
| `main` | landing.schumms.com |

Production-Root `/` ist interne Seitenliste (`noindex`). Live-LPs: `/{slug}/`.

---

## Repository als Template nutzen

1. GitHub: **Use this template** → neues Repo
2. `astro.config.mjs` → `site:` anpassen
3. `src/data/brand.ts` → Markendaten
4. Impressum/Datenschutz juristisch prüfen
5. `form_webhook` in n8n anlegen

---

## Lizenz

MIT — siehe [`LICENSE`](./LICENSE)
