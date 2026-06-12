# Jay Taraviya — Shopify Developer Portfolio

Editorial, chapter-based portfolio built with **React 18 + Vite + TypeScript + Tailwind CSS v4 + TanStack Router + Motion** (Framer Motion's successor). Self-hosted variable fonts (Archivo, Inter, JetBrains Mono), hash-based routing, route-level code splitting.

## Run it

```bash
npm install
npm run dev          # → http://localhost:5173
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Local dev server with HMR |
| `npm run build` | Type-check + production build → `dist/` |
| `npm run build:preview` | Single self-contained HTML file → `dist-preview/index.html` — double-click to open, no server needed |
| `npm run typecheck` | TypeScript only |

## Deploy

The build uses **hash routing** (`#/work`, `#/about`) and a relative base, so it deploys anywhere static files are served — no rewrite rules needed:

- **GitHub Pages:** push, then Settings → Pages → deploy `dist/` (e.g. via `gh-pages` branch or an action).
- **Netlify / Vercel:** build command `npm run build`, publish directory `dist`.

## Where things live

```
src/
  content/        ← ALL copy & data: site.ts (email, links), caseStudies.ts,
                    services.ts, process.ts, proof.ts, stack.ts
  routes/         ← pages: Home, Work, Services, About, Contact
  routes/work/    ← case-study route + per-case content (ToniGuy, Odette, Mickeys)
  components/
    motion/       ← reusable primitives: Reveal, Stagger, TextReveal, Counter,
                    Magnetic, Marquee, Tilt
    layout/       ← nav, footer, command palette (⌘K), page shell
    ui/           ← buttons, section heads, code blocks, browser frame,
                    storefront simulations, case cards
    case/         ← case-study building blocks (hero, stat strip, compare, …)
legacy/           ← the previous static site, untouched
```

## Things to know

- **Edit copy in `src/content/`** — pages read from there; no JSX digging needed for text changes.
- **Honest by design:** every number on the site is real (Mickey's Pies metrics, the 43→91 rescue, the Lighthouse panel, and all three testimonials come from your previously published site). TONI&GUY and Odette Paris are described by scope and role only — **add business metrics to `caseStudies.ts` / the case files only when you can back them.**
- **Project imagery:** cards and case heroes use original artwork (`ProjectCover.tsx`) — deliberately not fake screenshots. To show real project shots, drop files in `public/work/` and pass `img="/work/file.jpg"` to `<ProjectCover>`.
- **Contact form** opens a pre-filled email (no backend). On Netlify you can switch to Netlify Forms by adding the `netlify` attribute to the `<form>`.
- **Low-motion mode** (footer toggle) flips the site to a flat light theme with zero motion — an accessibility fallback alongside `prefers-reduced-motion` support.
- **⌘K** opens the command palette (pages, case studies, actions).
- **Theme-editor demo** (homepage, chapter 02): a working miniature of Shopify's section settings — visitors change text/scheme/layout/radius/toggles and watch the live preview *and* the generated `{% schema %}` update. The demo product is clearly labeled fictional. Edit it in `src/components/ui/ThemeEditorDemo.tsx`.
- **Interactions inventory:** pointer-reactive hero spotlight, masked text reveals, scroll-staggered sections, magnetic gradient buttons, card tilt + glare, cursor-following work previews, animated counters, smooth page transitions — all disabled cleanly by low-motion mode and `prefers-reduced-motion`.
