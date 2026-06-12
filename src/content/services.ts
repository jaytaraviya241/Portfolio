export type Service = {
  id: string;
  num: string;
  name: string;
  blurb: string;
  short: string;
  deliverables: string[];
  spec: string;
};

/** Four curated service buckets — the work I want to be hired for. */
export const services: Service[] = [
  {
    id: "builds",
    num: "01",
    name: "Shopify builds & replatforms",
    short: "OS 2.0 theme systems and platform migrations",
    blurb:
      "Custom OS 2.0 themes and migrations onto Shopify — schema-first sections, JSON templates, and content models your team runs from the editor. Redirects, SEO continuity, and a rehearsed launch when replatforming.",
    deliverables: ["Section library", "Content model", "Migration runbook", "Docs + Loom handoff"],
    spec: "editor-native · no page-builder debt",
  },
  {
    id: "figma",
    num: "02",
    name: "Figma → Shopify",
    short: "Design files translated faithfully to native Liquid",
    blurb:
      "Pixel-faithful builds from design files — spacing, type ramps, and interaction details survive the translation. Tokens map to theme settings so the build stays true and stays editable.",
    deliverables: ["Token map", "Pixel-faithful sections", "Responsive QA", "Editor presets"],
    spec: "design-faithful · theme-editor native",
  },
  {
    id: "performance",
    num: "03",
    name: "Performance & CRO",
    short: "Core Web Vitals rescues and conversion-focused rebuilds",
    blurb:
      "App-ectomies, critical CSS, image pipelines, and JS diets — measured before and after. PDP and cart systems built as testable native sections instead of app subscriptions.",
    deliverables: ["CWV audit", "App removal plan", "PDP/cart rebuild", "Before/after report"],
    spec: "measured · zero app tax",
  },
  {
    id: "apis",
    num: "04",
    name: "APIs, Functions & integrations",
    short: "Native platform primitives for custom business logic",
    blurb:
      "Storefront and Admin GraphQL, Shopify Functions for validation and discounts, webhooks, and metaobject content models — native primitives before apps, always.",
    deliverables: ["Function builds", "Webhook services", "Metaobject models", "Integration docs"],
    spec: "native primitives first",
  },
];
