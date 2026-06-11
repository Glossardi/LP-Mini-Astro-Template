# AGENTS.md — schumms-landings

> **Kernprinzip:** Du editierst **ausschließlich Markdown** in `src/content/pages/`.
> Alles andere (Components, Layouts, Styles, Schema, Brand) ist fix — nicht anfassen.

---

## Schnellstart

```bash
# Lead-Magnet / E-Book / Checklist (empfohlen)
cp src/content/pages/_template.leadmagnet.md src/content/pages/mein-angebot.md

# Event / Konferenz
cp src/content/pages/_template.event.md src/content/pages/mein-event.md

# Alle Sections (Showcase)
cp src/content/pages/_template.md src/content/pages/mein-slug.md
```

1. `_template.md` kopieren → `mein-slug.md` (kein `_` am Dateianfang)
2. `slug` muss URL-safe sein: `[a-z0-9-]+`
3. Bilder → `public/pages/mein-slug/`
4. Sections per `sections:` ein-/ausblenden — **Inhalte nie löschen**
5. `published: true` setzen

**Referenz Lead-Magnet:** `arbeitsplatz-fitness-check.md` → `/arbeitsplatz-fitness-check/`  
**Referenz Vollständig (alle Sections):** `default-landing.md` → `/default-landing/`  
**Referenz Event:** `hr-konferenz-wiesbaden.md` → `/hr-konferenz-wiesbaden/`

---

## Sections (18)

| Key | Default | Beschreibung |
|-----|---------|--------------|
| `nav` | `true` | Logo links, Coral-CTA rechts |
| `hero` | `true` | Eyebrow, H1, Subline, CTA, Bild, Kennzahlen |
| `social_proof_bar` | `true` | Partner-Logos / Kennzahlen |
| `problem` | `false` | Intro + optional 3 Pain-Points |
| `pricing` | `false` | Ticket-Preis (Events) |
| `program` | `false` | Agenda mit Keynotes, Breakouts, Panel |
| `transformation` | `true` | Heute / Danach |
| `benefits` | `true` | 3–5 Vorteile |
| `process` | `true` | 3 Schritte |
| `speakers` | `false` | Speaker-Grid mit Foto + Bio |
| `testimonial` | `true` | Zitat |
| `about` | `false` | Einzelne Person / Trust |
| `content_preview` | `true` | Inhalt / Kapitel + Bild |
| `location` | `false` | Venue, Adresse, Kontakt |
| `faq` | `true` | FAQ |
| `form` | `true` | Coral-Formular |
| `secondary_cta` | `true` | Weicher Ausstieg |
| `footer` | `true` | Impressum + Datenschutz |

**Event-Reihenfolge** (Partner am Ende):

```yaml
section_order:
  - hero
  - problem
  - pricing
  - program
  - speakers
  - location
  - form
  - social_proof_bar
```

```yaml
sections:
  nav: true
  hero: true
  problem: false    # ausblenden, YAML-Inhalt behalten
  about: false
```

---

## Frontmatter-Referenz

### Meta (Pflicht)

| Feld | Typ | Hinweis |
|------|-----|---------|
| `slug` | string | URL-Pfad, z.B. `mein-angebot` |
| `published` | boolean | `false` = Entwurf, noindex, nicht in Production-Build |
| `title` | string | SEO-Titel, max. 60 Zeichen |
| `description` | string | Meta-Description, max. 160 Zeichen |

### Navigation

| Feld | Typ |
|------|-----|
| `nav_cta_text` | string (optional) |

### Hero

| Feld | Typ |
|------|-----|
| `hero_eyebrow` | string |
| `hero_title` | string, max. 80 |
| `hero_subtitle` | string, max. 300 |
| `hero_image` | string, Pfad z.B. `/pages/slug/hero.jpg` |
| `hero_image_alt` | string |
| `cta_text` | string — Coral-Button-Text |
| `hero_trust_metrics` | `{ value, label }[]`, max. 3 |

### Social Proof Bar

| Feld | Typ |
|------|-----|
| `social_proof_text` | string |
| `social_proof_logos` | `{ name, image? }[]`, max. 8 |
| `social_proof_logos_monochrome` | boolean, default `true` — bei Event-Partnern `false` |
| `section_order` | Section-Keys in Render-Reihenfolge |
| `pricing_*` | `pricing_eyebrow`, `pricing_label`, `pricing_amount`, `pricing_currency`, `pricing_text`, `pricing_cta` |
| `program_*` | `program_heading`, `program_intro`, `program_items[]` mit `type`, `title`, `speaker`, `role`, `organization`, `organization_logo`, `description` |
| `speakers_*` | `speakers_heading`, `speakers_tagline`, `speakers[]` mit `name`, `title`, `bio`, `image`, `image_alt` |
| `location_*` | `location_heading`, `location_intro`, `location_venue`, `location_address`, `location_phone`, `location_email`, `location_image`, `location_image_alt` |
| `social_proof_metrics` | `{ value, label }[]`, max. 3 |

### Problem

| Feld | Typ |
|------|-----|
| `problem_heading` | string |
| `problem_intro` | string |
| `problem_points` | string[], 1–3 |

### Transformation

| Feld | Typ |
|------|-----|
| `transformation_heading` | string |
| `transformation_before` | string |
| `transformation_after` | string |

### Benefits

| Feld | Typ |
|------|-----|
| `benefits_heading` | string |
| `benefits_intro` | string |
| `benefits` | `{ headline, description }[]`, 3–5 |

### Prozess

| Feld | Typ |
|------|-----|
| `process_heading` | string |
| `process_steps` | `{ title, description }[]`, **genau 3** |

### Testimonial

| Feld | Typ |
|------|-----|
| `testimonial_heading` | string |
| `testimonial_quote` | string |
| `testimonial_author` | string |
| `testimonial_role` | string |
| `testimonial_company` | string |
| `testimonial_image` | string, optional |
| `testimonial_video_url` | URL, optional |

### Über uns

| Feld | Typ |
|------|-----|
| `about_heading` | string |
| `about_name` | string |
| `about_title` | string |
| `about_image` | string |
| `about_bio` | string |

### Content Preview

| Feld | Typ |
|------|-----|
| `content_preview_heading` | string |
| `content_preview_intro` | string |
| `content_preview_image` | string |
| `content_preview_image_alt` | string |
| `content_preview_items` | `{ title, description? }[]` |

### FAQ

| Feld | Typ |
|------|-----|
| `faq_heading` | string |
| `faq_intro` | string |
| `faq` | `{ question, answer }[]` |

### Formular (Pflicht)

| Feld | Typ |
|------|-----|
| `form_title` | string |
| `form_intro` | string |
| `form_cta` | string — konkret: „E-Book herunterladen", nie „Absenden" |
| `form_webhook` | URL — n8n Webhook |
| `form_download_url` | URL, optional — Download nach Submit |
| `form_success_message` | string |
| `form_privacy_note` | string |

### Sekundärer CTA

| Feld | Typ |
|------|-----|
| `secondary_cta_heading` | string |
| `secondary_cta_text` | string |
| `secondary_cta_button` | string |
| `secondary_cta_href` | string, default: schumms.com/kontakt |

---

## Bilder

### Page-spezifisch (pro Landing)

```
public/pages/[slug]/hero.jpg           ← Hero (Split rechts)
public/pages/[slug]/preview.jpg        ← Content Preview
public/pages/[slug]/about.jpg          ← Über uns
public/pages/[slug]/testimonial.jpg    ← Testimonial-Foto (optional)
```

Beispiel mit Alt-Texten: `public/pages/default-landing/manifest.json`

### Image Pool (schumms.com, für Agents)

Alle Bilder von schumms.com mit **Alt-Text**, Kategorie und beschreibendem Dateinamen:

```
public/images/pool/manifest.json       ← Master-Katalog (79 Bilder)
public/images/pool/hero/               ← Hero-Hintergründe
public/images/pool/team/               ← Team-Fotos
public/images/pool/cases/              ← Referenzprojekte / Lookbook
public/images/pool/content/            ← E-Book etc.
public/images/pool/events/             ← Events
public/images/pool/services/           ← Services / Büro
public/images/pool/brand/              ← Logos, Favicon, Partner-SVGs
```

**Workflow:** Pfad aus `manifest.json` in Frontmatter setzen, `alt` als `*_image_alt` übernehmen.

Pool neu laden: `python3 scripts/fetch-schumms-image-pool.py`

**Partner-Logos** (schwarz, von schumms.com Homepage-Slider):

```
public/images/logos/schumms-partners/
  vitra.svg, wilkhahn.svg, sedus.svg, koenig-neurath.svg, vario.svg, …
```

Manifest: `public/images/logos/schumms-partners/manifest.json`

**Marken-Logos** (nicht editieren):

```
public/images/schumms-logo-black.png   ← helle Hintergründe
public/images/schumms-logo-white.png   ← dunkle Hintergründe
```

---

## Formular

- Felder: **Name**, **E-Mail**, **Firma**, DSGVO-Checkbox
- Webhook: POST JSON an `form_webhook`
- Optional: `form_download_url` öffnet nach Erfolg in neuem Tab

---

## Was du NICHT anfasst

| Pfad | Grund |
|------|-------|
| `src/components/` | Section-UI fix |
| `src/layouts/` | Page-Layouts fix |
| `src/styles/` | Design System fix |
| `src/data/brand.ts` | Markendaten fix |
| `src/content.config.ts` | Schema fix |
| `src/lib/sections.ts` | Section-Registry fix |

---

## Design-Tokens

| Token | Wert | Verwendung |
|-------|------|------------|
| Coral | `#FD7857` | Hero-CTA, Nav-CTA, Formular |
| Schwarz | `#000` | Buttons, Text, Footer |
| Inter | Google Fonts | Typografie |

---

## Build & Validierung

```bash
pnpm install && pnpm run build
```

**Dev-Server:** Läuft er schon, bevor du eine **neue** `.md`-Datei anlegst, einmal neu starten (`Ctrl+C`, dann `pnpm run dev`). Sonst 404 auf dem neuen Slug — `pnpm run build` zeigt trotzdem, ob die Seite valide ist.

Schema-Fehler in `src/content.config.ts` → Build bricht ab. Typische Fehler: fehlendes `form_webhook`, `process_steps` ≠ 3, ungültiger `slug`.
