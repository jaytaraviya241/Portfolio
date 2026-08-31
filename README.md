# Jay Taraviya — Shopify Portfolio

Editorial Shopify developer portfolio built with Next.js, TypeScript, and the App Router. The visual system uses warm ivory, graphite, restrained ultramarine, compact interface type, large editorial headings, and responsive project layouts. Primary content is server-rendered and motion is limited to lightweight CSS interaction states.

## Run locally

```bash
npm install
npm run dev
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run typecheck` | Run TypeScript checks |
| `npm run build` | Create the optimized production build |
| `npm run start` | Serve the production build |

## Deployment

Pushes to `main` deploy automatically to [GitHub Pages](https://jaytaraviya241.github.io/Portfolio/) through `.github/workflows/deploy-pages.yml`. The workflow creates a static Next.js export with the repository base path, uploads the `out` artifact, and deploys it through the `github-pages` environment.

## Portfolio structure

```text
app/                         Homepage, work, about, process, contact, and project routes
components/                  Reusable navigation, footer, project rows, cards, and form
lib/portfolioProjects.ts     Project content, links, tags, and cover imports
styles/globals.css           Design tokens, components, and responsive rules
casestudy-homepages/         Desktop and mobile storefront captures
casestudy-homepages/project-covers/
                             Cleanly named project cover artwork
```

## Add or replace a case-study cover

Project cards use the cleanly named files in `casestudy-homepages/project-covers/`. The original `desktop-home.png` and `mobile-home.png` captures remain inside each project folder for detailed case-study sections.

To add a new project:

1. Add a folder to `casestudy-homepages/` containing `desktop-home.png` and `mobile-home.png`.
2. Add a matching `<project-slug>-cover.png` to `casestudy-homepages/project-covers/`.
3. Import the cover and both responsive captures in `lib/portfolioProjects.ts`.
4. Add a `PortfolioProject` entry with a unique slug, live URL, category, engagement, summary, and tags.
5. Add `featured: true` if it should appear in the homepage selected-work sequence.

The project is then available on `/work`, gets a static `/work/[slug]` page, and can be linked to its live storefront. Nawala and Fringe Food Co. currently appear as live text links because matching capture folders were not present in the supplied archive.

## Content updates

- Identity and contact information: `lib/site.ts`
- Project archive and live links: `lib/portfolioProjects.ts`
- Homepage editorial copy: `components/Hero.tsx` and `app/page.tsx`
- About narrative: `app/about/page.tsx`
- Process: `app/services/page.tsx`
- Case-study placeholders: `app/work/[slug]/page.tsx`

The competitive research and the messaging decisions behind this version are documented in [`docs/portfolio-benchmark.md`](docs/portfolio-benchmark.md).

The detail template deliberately labels unverified project role, outcomes, and learnings as content to add later; it does not invent metrics or client claims.
