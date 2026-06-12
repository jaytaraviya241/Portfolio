export type CaseMeta = {
  slug: string;
  client: string;
  title: string;
  sector: string;
  year: string;
  role: string;
  engagement: string;
  summary: string;
  /** CSS color var for the brand accent (used subtly on case pages) */
  accent: string;
  /** one-line footer fact for cards/rows — facts only, never invented metrics */
  fact: string;
  cover: "toni-guy" | "odette-paris" | "mickeys-pies";
  stack: string[];
  /** verified, real numbers only — omit when none exist */
  kpis?: { value: number; prefix?: string; suffix?: string; decimals?: number; label: string }[];
  index: string;
};

export const caseStudies: CaseMeta[] = [
  {
    slug: "toni-guy",
    client: "TONI&GUY",
    title: "Salon-grade DTC on Shopify Plus",
    sector: "Haircare · DTC",
    year: "2025",
    role: "Shopify developer — theme architecture & performance",
    engagement: "Agency engagement",
    summary:
      "Replatforming work on Shopify Plus: an OS 2.0 section system the marketing team can compose without developers, app-sprawl cleanup, and a performance-first rebuild of core templates.",
    accent: "var(--chrome)",
    fact: "Shopify Plus · OS 2.0",
    cover: "toni-guy",
    stack: ["Shopify Plus", "OS 2.0", "Liquid", "Metaobjects", "Markets"],
    index: "01",
  },
  {
    slug: "odette-paris",
    client: "Odette Paris",
    title: "A Parisian maison, pixel-faithful",
    sector: "Fine jewelry · Paris",
    year: "2025",
    role: "Shopify developer — Figma-to-Shopify build",
    engagement: "Design-led build",
    summary:
      "A designer-led Figma direction rebuilt as a native theme — a design-token layer in theme settings, editorial lookbooks on metaobjects, and FR/EN localization through Shopify Markets.",
    accent: "var(--champagne)",
    fact: "Figma → Shopify · FR/EN",
    cover: "odette-paris",
    stack: ["OS 2.0", "Liquid", "Metaobjects", "Shopify Markets", "JSON templates"],
    index: "02",
  },
  {
    slug: "mickeys-pies",
    client: "Mickey's Pies & Cherry",
    title: "An app-free fulfillment system",
    sector: "Food & beverage · Regional DTC",
    year: "2025–26",
    role: "Lead Shopify developer",
    engagement: "Independent client",
    summary:
      "Zip-gated delivery, a bundle builder, and server-side checkout validation — built natively on Dawn with metafields and a Shopify Function. Zero third-party apps.",
    accent: "var(--cherry)",
    fact: "97 Lighthouse · 0 apps",
    cover: "mickeys-pies",
    stack: ["Liquid", "OS 2.0", "Metafields", "Shopify Functions", "AJAX Cart"],
    kpis: [
      { value: 97, label: "Lighthouse, from 43" },
      { value: 0, label: "third-party apps" },
      { value: 100, suffix: "%", label: "rules merchant-editable" },
    ],
    index: "03",
  },
];

export const caseBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);
