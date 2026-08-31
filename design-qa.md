# Design QA

## Source visual truth

- Editorial foundation: `/private/tmp/portfolio-layout-v2/10-home-postfix.png`.
- Rejected color implementation captured in this correction run: `/private/tmp/portfolio-premium-fix/01-current-vibrant.png`.
- Design target: retain the foundation's typography, imagery, spacing, and composition; introduce freshness through one controlled ultramarine accent, warm ivory, graphite, and cool stone only.
- Source, rejected implementation, and corrected implementation homepage captures are each 1475 × 3212 pixels.
- State: desktop homepage, navigation closed, project rows idle.

## Implementation evidence

- Corrected homepage: `/private/tmp/portfolio-premium-fix/02-home.png`.
- Corrected work hero: `/private/tmp/portfolio-premium-fix/03-work.png`.
- Corrected process hero: `/private/tmp/portfolio-premium-fix/04-services.png`.
- Corrected about hero: `/private/tmp/portfolio-premium-fix/05-about.png`.
- Corrected contact hero: `/private/tmp/portfolio-premium-fix/06-contact.png`.
- Corrected project hover state: `/private/tmp/portfolio-premium-fix/07-project-hover.png`.
- Corrected mobile homepage: `/private/tmp/portfolio-premium-fix/08-mobile.png`.
- Combined foundation/rejected/corrected comparison: `/private/tmp/portfolio-premium-fix/09-three-way-comparison.png`.
- Desktop CSS viewport: 1636 × 1000 at browser `devicePixelRatio` 1.1. Mobile CSS viewport: 390 × 843.
- Full-view source and implementation captures were equal pixel dimensions, so no density normalization was required. Focused hover screenshots were scaled into equal comparison columns and were used to judge treatment rather than geometry.

## Required fidelity surfaces

- Fonts and typography: unchanged from the approved editorial foundation. Serif display scale, sans-serif utility weights, line height, wrapping, and hierarchy remain intact.
- Spacing and layout rhythm: unchanged. The 1280px grid, split heroes, featured-project cadence, image proportions, dividers, and mobile stacking remain stable.
- Colors and tokens: the rejected neon lime, rainbow tints, coral, mint, violet, and saturated footer were removed. The corrected system uses warm ivory `#f2f0eb`, graphite `#17191f`, ultramarine `#304da5`, pale blue-grey `#e7eaf2`, cool slate `#eceef2`, and near-black `#171a22`.
- Image quality: all original project covers and supplied profile photography remain. Covers use only a very small saturation shift from 0.94 to 1.0 during interaction.
- Copy and content: unchanged across the homepage, work, process, about, contact, and case-study routes.

## Findings and fixes

- [P1] The rejected palette damaged professional credibility.
  - Location: global palette, homepage hero, route heroes, CTAs, footer, and hover states.
  - Evidence: the middle column of `/private/tmp/portfolio-premium-fix/09-three-way-comparison.png` uses neon lime plus several unrelated pastel families, competing with the project work.
  - Fix: reduced the system to one ultramarine brand accent with ivory, graphite, and slate support.
- [P2] The highlighted `taste` block and lime buttons felt promotional rather than editorial.
  - Location: homepage hero and primary actions.
  - Fix: removed the block fill, retained italic typography, and changed `taste` and primary actions to deep ultramarine.
- [P2] Hard offset shadows and colored card lifts made interactions feel playful.
  - Location: project rows, work cards, profile portrait, contact form.
  - Fix: removed all offset shadows and positional lifts; interaction now uses a pale blue-grey surface, a 1px outline, and a 1% image scale.
- [P2] Route-by-route rainbow backgrounds fragmented the brand.
  - Location: work, process, about, and contact heroes.
  - Fix: returned process, about, and contact to the same ivory foundation; only work and case-study heroes receive the single pale brand tint.
- [P0] None remaining.
- [P1] None remaining.
- [P2] None remaining.

## Accessibility and interaction checks

- Contrast ratios: ink/ivory 15.43:1, muted/ivory 5.78:1, ultramarine/ivory 6.75:1, white/ultramarine 7.69:1, ink/pale-blue-grey 14.60:1, and white/near-black 17.39:1.
- Featured-project hover and focus preserve content position, reveal a restrained blue-grey surface, restore natural image saturation, and scale imagery by 1%.
- Mobile navigation opens with four links, reports `aria-expanded=true`, and closes with Escape.
- Mobile homepage: no broken images, no overflowing descendants, and document width remains inside the 390px viewport.
- Reduced-motion support remains active.
- No application-origin browser console errors were found.

## Comparison history

1. Editorial foundation: premium hierarchy and layout were established, but the original oxblood palette had been rejected as too muted.
2. Rejected vibrant pass: freshness was over-applied through neon lime, multiple pastel families, hard shadows, and colorful hover blocks. This introduced the P1/P2 findings above.
3. Corrected premium pass: removed decorative color, reduced the palette to one brand accent, restored neutral surfaces, and replaced playful motion with restrained state feedback.
4. Final visual comparison: foundation, rejected pass, corrected pass, and both hover treatments were inspected together in `/private/tmp/portfolio-premium-fix/09-three-way-comparison.png`. No actionable P0, P1, or P2 issue remains.

## Engineering checks

- `npm run typecheck`: passed.
- `npm run build`: passed; 27 static/SSG routes generated.

## Final result

passed
