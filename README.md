# LP Mini Astro Template

> **Agent-optimiertes Astro-Template für hochwertige Landingpages.**  
> Umbau aus [KMU-Mini-Astro-Template](https://github.com/Glossardi/KMU-Mini-Astro-Template) — optimiert für schnelle, skalierbare LP-Produktion durch KI-Agenten.

---

## Status

🚧 **In Umbau** — Dieses Repository wird gerade von einem KMU-Website-Template zu einem Landingpage-Template weiterentwickelt. Die technische Basis (Astro, datengetriebene Konfiguration, Theme-Presets) steht; die LP-spezifische Struktur folgt mit der Produktspezifikation.

Siehe [`CONTEXT.md`](./CONTEXT.md) für Vision und offene Punkte.

---

## Was ist dieses Template?

Ein schlankes, wartbares Starter-Repo für Landingpages — gebaut für Agent-Workflows (Cursor, Copilot, etc.):

- 🚀 Statischer Astro-Build — minimales JS, schnelle Ladezeiten
- 🎨 Branding über Theme-Presets + optionale Overrides
- 📄 Datengetrieben — Inhalte zentral konfigurierbar
- ♿ Semantisches HTML, Accessibility-Basics
- 🤖 Agent-friendly — klare Konventionen in `AGENTS.md`

---

## Quick Start

```bash
git clone https://github.com/Glossardi/LP-Mini-Astro-Template.git meine-landingpage
cd meine-landingpage

pnpm install
pnpm run dev
```

Öffne `http://localhost:4321`.

---

## Build & Deploy

```bash
pnpm run build    # Output: dist/
pnpm run preview  # Build lokal testen
```

**Cloudflare Pages:** Build command `pnpm run build`, output directory `dist`.

---

## Projektstruktur (aktuell)

```
src/
├── components/       # UI-Sektionen (Hero, FAQ, Contact, …)
├── layouts/          # BaseLayout, PageLayout
├── pages/            # index (OnePager), impressum, datenschutz, 404
├── data/
│   ├── site.ts       # Zentrale Inhalts- & Konfigurationsdatei
│   ├── theme.ts      # Theme-Resolver
│   └── themes.ts     # Theme-Presets
└── styles/global.css
```

---

## Agent-Workflow

1. **`AGENTS.md` lesen** — Konventionen und Dateistruktur
2. **`src/data/site.ts`** als primären Konfigurationspunkt nutzen
3. Keine unnötigen Dependencies; statisch-first bleiben

---

## Herkunft

Fork/Umbau von [Glossardi/KMU-Mini-Astro-Template](https://github.com/Glossardi/KMU-Mini-Astro-Template) (KMU-Websites für lokale Dienstleister).

## Lizenz

MIT — siehe [LICENSE](./LICENSE).
