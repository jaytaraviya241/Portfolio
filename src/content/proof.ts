/**
 * Proof — verified numbers only.
 * 15+ projects, the Lighthouse panel, and all three testimonials carry over
 * from the previous published site; nothing here is projected or invented.
 */
export const counters = [
  { value: 15, suffix: "+", label: "Shopify projects shipped" },
  { value: 97, label: "Lighthouse performance, live build" },
  { value: 100, label: "Lighthouse accessibility, live build" },
  { value: 24, suffix: "h", label: "response time, any timezone" },
] as const;

export const testimonials = [
  {
    quote:
      "Jay built our entire fulfillment system without a single third-party app. The store runs faster than anything we've had before, and I can update delivery zones myself from the admin. Exactly what I needed.",
    author: "Sarah C.",
    role: "Owner, Mickey's Pies & Cherry",
  },
  {
    quote:
      "Our Figma design came to life exactly as intended. The sections are editable by our team in Theme Editor — no developer needed for content changes. The attention to detail in the Liquid architecture is impressive.",
    author: "Marcus R.",
    role: "Fashion brand founder",
  },
  {
    quote:
      "Went from a 43 to a 91 Lighthouse score in one sprint. Jay removed three apps we were paying for monthly and replaced them with native Liquid. Clean code, proper documentation, no shortcuts.",
    author: "Anita K.",
    role: "eCommerce manager",
  },
] as const;

export const lighthouse = [
  { label: "Performance", value: 97 },
  { label: "Accessibility", value: 100 },
  { label: "Best practices", value: 100 },
  { label: "SEO", value: 92 },
] as const;
