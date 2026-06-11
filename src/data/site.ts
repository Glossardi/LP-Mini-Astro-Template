/**
 * site.ts — Zentrale Konfiguration für das gesamte Projekt
 *
 * Dies ist die EINZIGE Datei, die pro Landingpage-Projekt angepasst wird.
 * Alle Inhalte, Texte und Einstellungen fließen automatisch in die
 * Komponenten ein.
 *
 * Workflow: Repository klonen → diese Datei anpassen → deployen.
 *
 * Hinweis: Demo-Inhalte stammen noch vom KMU-Template und werden im LP-Umbau ersetzt.
 */

import type { ThemePreset } from "./themes";

// ─── Typen ──────────────────────────────────────────────────────────

export interface SiteData {
  // Grunddaten
  company: string;
  /** Pfad zum Logo-Bild (z.B. "/images/logo.svg"). Wenn leer, wird Firmenname als Text angezeigt. */
  logo?: string;
  tagline: string;
  url: string;
  lang: string;

  // Theme-Preset (siehe themes.ts für verfügbare Presets)
  theme: string;
  /**
   * Fonts anpassen: Setze themeOverrides.typography.fontBody und fontHeading.
   * Beispiel für Google Fonts:
   *   themeOverrides: {
   *     typography: {
   *       fontBody: "'Inter', sans-serif",
   *       fontHeading: "'Playfair Display', serif",
   *     }
   *   }
   * Vergiss nicht, den Font-Import in BaseLayout.astro hinzuzufügen:
   *   <link href="https://fonts.googleapis.com/css2?family=Inter&family=Playfair+Display&display=swap" rel="stylesheet" />
   */
  themeOverrides?: Partial<ThemePreset>;

  // Kontakt
  contact: {
    email: string;
    phone: string;
    address: {
      street: string;
      zip: string;
      city: string;
    };
  };

  openingHours: Array<{ days: string; hours: string }>;

  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
    tiktok?: string;
    twitter?: string;
    xing?: string;
    github?: string;
  };

  // Navigation
  nav: Array<{ label: string; href: string }>;

  // CTAs
  cta: { label: string; href: string };
  ctaSecondary: { label: string; href: string };

  // ─── Sektions-Inhalte ──────────────────────────────────────────────

  hero: {
    headline: string;
    subline: string;
    backgroundImage?: string;
  };

  trustItems: Array<{
    icon: string;
    label: string;
  }>;

  services: Array<{
    icon: string;
    title: string;
    description: string;
  }>;

  about: {
    heading: string;
    text: string;
    image?: string;
    imageAlt?: string;
  };

  process: Array<{
    icon: string;
    title: string;
    description: string;
  }>;

  testimonials: Array<{
    quote: string;
    author: string;
    role?: string;
    rating?: number;
  }>;

  faq: Array<{
    question: string;
    answer: string;
  }>;

  // Verification Tags für Suchmaschinen
  verification?: {
    google?: string;
    bing?: string;
  };

  // Sektions-Überschriften (zentral konfigurierbar)
  sectionHeadings: {
    services: string;
    servicesIntro?: string;
    about: string;
    process: string;
    processIntro?: string;
    testimonials: string;
    testimonialsIntro?: string;
    faq: string;
    faqIntro?: string;
    contact: string;
    contactIntro?: string;
  };
}

// ─── Demo-Daten ─────────────────────────────────────────────────────

const site: SiteData = {
  company: "Muster Schreinerei",
  logo: "/images/logo.svg",
  tagline: "Maßgefertigte Möbel & Innenausbau in Musterstadt",
  url: "https://example.com",
  lang: "de",

  theme: "warm-craft",

  contact: {
    email: "info@muster-schreinerei.de",
    phone: "+49 123 456789",
    address: {
      street: "Werkstraße 12",
      zip: "12345",
      city: "Musterstadt",
    },
  },

  openingHours: [
    { days: "Mo–Fr", hours: "07:30–17:00 Uhr" },
    { days: "Sa", hours: "08:00–12:00 Uhr" },
  ],

  social: {
    instagram: "https://instagram.com/musterschreinerei",
    facebook: "https://facebook.com/musterschreinerei",
  },

  nav: [
    { label: "Leistungen", href: "#services" },
    { label: "Über uns", href: "#about" },
    { label: "Ablauf", href: "#process" },
    { label: "Kontakt", href: "#contact" },
  ],

  cta: {
    label: "Jetzt anfragen",
    href: "#contact",
  },

  ctaSecondary: {
    label: "Leistungen ansehen",
    href: "#services",
  },

  // ─── Hero ──────────────────────────────────────────────────────────

  hero: {
    headline: "Maßgefertigte Möbel für Ihr Zuhause",
    subline:
      "Vom Entwurf bis zur Montage — Qualitätshandwerk aus Musterstadt. Persönlich, zuverlässig, maßgenau.",
    backgroundImage: "/images/placeholder-hero.svg",
  },

  // ─── Trust ─────────────────────────────────────────────────────────

  trustItems: [
    { icon: "award", label: "Meisterbetrieb" },
    { icon: "calendar", label: "Seit 1985" },
    { icon: "users", label: "500+ Projekte" },
    { icon: "shield-check", label: "5 Jahre Garantie" },
  ],

  // ─── Services ──────────────────────────────────────────────────────

  services: [
    {
      icon: "sofa",
      title: "Maßmöbel",
      description:
        "Individuelle Möbel nach Ihren Wünschen — vom Einbauschrank bis zum Esstisch.",
    },
    {
      icon: "door-open",
      title: "Türen & Fenster",
      description:
        "Haustüren, Innentüren und Fenster in höchster Qualität, passgenau gefertigt.",
    },
    {
      icon: "home",
      title: "Innenausbau",
      description:
        "Kompletter Innenausbau: Böden, Decken, Wandverkleidungen und Trockenbau.",
    },
    {
      icon: "hammer",
      title: "Restaurierung",
      description:
        "Fachgerechte Restaurierung antiker Möbel und historischer Holzelemente.",
    },
    {
      icon: "ruler",
      title: "Küchenplanung",
      description:
        "Maßküchen von der 3D-Planung bis zum Einbau — Ihr Traumküche wird Realität.",
    },
    {
      icon: "wrench",
      title: "Reparaturen",
      description:
        "Schnelle und professionelle Reparaturen an Möbeln, Türen und Fenstern.",
    },
  ],

  // ─── About ─────────────────────────────────────────────────────────

  about: {
    heading: "Tradition trifft Moderne",
    text: "Seit über 35 Jahren steht die Muster Schreinerei für Qualitätshandwerk in Musterstadt. Als Familienbetrieb in dritter Generation verbinden wir traditionelle Handwerkstechniken mit modernen Fertigungsmethoden. Unser Team aus 8 erfahrenen Schreinern und 3 Auszubildenden arbeitet mit Leidenschaft an jedem Projekt — ob Einbauschrank oder kompletter Innenausbau.",
    image: "/images/placeholder-about.svg",
    imageAlt: "Werkstatt der Muster Schreinerei",
  },

  // ─── Process ───────────────────────────────────────────────────────

  process: [
    {
      icon: "phone",
      title: "Erstgespräch",
      description:
        "Wir besprechen Ihre Wünsche und nehmen Maß — kostenlos und unverbindlich.",
    },
    {
      icon: "pencil-ruler",
      title: "Planung & Entwurf",
      description:
        "Sie erhalten einen detaillierten Entwurf mit 3D-Visualisierung und transparentem Angebot.",
    },
    {
      icon: "hammer",
      title: "Fertigung",
      description:
        "In unserer Werkstatt fertigen wir Ihr Projekt mit Präzision und hochwertigen Materialien.",
    },
    {
      icon: "check-circle",
      title: "Montage & Übergabe",
      description:
        "Fachgerechte Montage vor Ort und Übergabe — erst wenn Sie zufrieden sind, sind wir es auch.",
    },
  ],

  // ─── Testimonials ──────────────────────────────────────────────────

  testimonials: [
    {
      quote:
        "Unsere neue Einbauküche ist ein Traum. Von der Planung bis zur Montage — alles perfekt und termingerecht.",
      author: "Familie Weber",
      role: "Privatkunde",
      rating: 5,
    },
    {
      quote:
        "Professionell, zuverlässig und fair im Preis. Die Schreinerei Muster hat unsere Büroräume komplett ausgebaut.",
      author: "Thomas Richter",
      role: "Geschäftsführer, Richter IT",
      rating: 5,
    },
    {
      quote:
        "Die Restaurierung unserer antiken Kommode war hervorragend. Man sieht sofort die Liebe zum Detail.",
      author: "Maria Schneider",
      role: "Privatkundin",
      rating: 5,
    },
  ],

  // ─── FAQ ───────────────────────────────────────────────────────────

  faq: [
    {
      question: "Wie läuft eine Auftragsanfrage ab?",
      answer:
        "Kontaktieren Sie uns telefonisch oder über das Kontaktformular. Wir vereinbaren einen kostenlosen Beratungstermin, bei dem wir Ihre Wünsche besprechen und Maß nehmen.",
    },
    {
      question: "Wie lange dauert die Fertigung?",
      answer:
        "Je nach Umfang rechnen Sie mit 4–8 Wochen ab Auftragsbestätigung. Bei Großprojekten erstellen wir einen individuellen Zeitplan.",
    },
    {
      question: "Bieten Sie auch Montage an?",
      answer:
        "Ja, wir liefern und montieren alles fachgerecht bei Ihnen vor Ort. Der Preis ist im Angebot enthalten.",
    },
    {
      question: "Welche Materialien verwenden Sie?",
      answer:
        "Wir arbeiten vorwiegend mit heimischen Hölzern aus nachhaltiger Forstwirtschaft. Auf Wunsch auch mit Spezialhölzern oder modernen Verbundwerkstoffen.",
    },
    {
      question: "Gibt es eine Garantie?",
      answer:
        "Auf alle unsere Arbeiten geben wir 5 Jahre Garantie. Bei Fragen oder Problemen sind wir jederzeit erreichbar.",
    },
  ],

  // ─── Sektions-Überschriften ────────────────────────────────────────

  sectionHeadings: {
    services: "Unsere Leistungen",
    servicesIntro: "Von Maßmöbeln bis Innenausbau — wir setzen Ihre Ideen in Holz um.",
    about: "Über uns",
    process: "So arbeiten wir",
    processIntro:
      "In vier Schritten zu Ihrem fertigen Projekt — transparent und persönlich.",
    testimonials: "Das sagen unsere Kunden",
    testimonialsIntro:
      "Zufriedene Kunden sind unser bestes Aushängeschild.",
    faq: "Häufige Fragen",
    faqIntro: "Antworten auf die wichtigsten Fragen rund um unsere Arbeit.",
    contact: "Kontakt aufnehmen",
    contactIntro:
      "Schreiben Sie uns oder rufen Sie an — wir beraten Sie gerne persönlich.",
  },
};

export default site;
