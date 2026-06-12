import {
  CaseBody,
  CaseList,
  CSection,
  type CaseSectionDef,
} from "@/components/case/Blocks";
import { CodeBlock } from "@/components/ui/CodeBlock";

const sections: CaseSectionDef[] = [
  { id: "context", label: "Context" },
  { id: "problem", label: "The problem" },
  { id: "solution", label: "The solution" },
  { id: "implementation", label: "Implementation" },
  { id: "value", label: "Business value" },
];

const tokens = `{%- comment -%} Design tokens — Figma variables → theme settings {%- endcomment -%}
<style>
  :root {
    --maison-ink:   {{ settings.color_ink }};
    --maison-paper: {{ settings.color_paper }};
    --maison-gold:  {{ settings.color_gold }};
    --type-display: {{ settings.type_display_family.family }}, serif;
    --scale-step:   {{ settings.type_scale | default: 1.25 }};
    --space-unit:   {{ settings.space_unit | default: 8 }}px;
  }
</style>`;

const lookbook = `{%- comment -%} Lookbook chapters — metaobject-driven {%- endcomment -%}
{%- assign book = shop.metaobjects.lookbook['vendome-04'] -%}
<section class="lookbook" aria-label="{{ book.title }}">
  {%- for chapter in book.chapters.value -%}
    <figure class="lookbook__plate" data-mood="{{ chapter.mood }}">
      <img src="{{ chapter.image | image_url: width: 1600 }}"
           alt="{{ chapter.alt }}" loading="lazy">
      {%- for spot in chapter.hotspots.value -%}
        <a class="hotspot" style="--x:{{ spot.x }};--y:{{ spot.y }}"
           href="{{ spot.product.value.url }}">
          {{ spot.product.value.title }}
        </a>
      {%- endfor -%}
    </figure>
  {%- endfor -%}
</section>`;

export default function OdetteBody() {
  return (
    <CaseBody sections={sections}>
      <CSection id="context" kicker="01 — Context" title="A maison that measures in millimetres">
        <p>
          Odette Paris is a fine jewelry maison with a designer-led identity — the kind of brand
          where the Figma file specifies optical letter-spacing and the photography has a point
          of view. The storefront was launching in French and English, and the brief was blunt:
          <strong> the build must match the design file. Exactly.</strong>
        </p>
      </CSection>

      <CSection id="problem" kicker="02 — The problem" title="Template drift was eating the brand">
        <CaseList
          items={[
            <>A previous template-based attempt <strong>diverged from the design system</strong> — wrong type ramp, flattened spacing, lost details</>,
            <>Lookbooks were hardcoded image strips — <strong>publishing a new collection required a developer</strong></>,
            <>No localization strategy for the <strong>FR/EN launch</strong></>,
            <>PDPs squeezed metal options and engraving into a generic variant picker</>,
          ]}
        />
      </CSection>

      <CSection id="solution" kicker="03 — The solution" title="Figma variables, compiled to Liquid">
        <p>
          The build started by translating the Figma variable set into a <strong>token layer in
          theme settings</strong> — color, type scale, and a spacing unit. Sections consume
          tokens instead of raw values, which is how a build stays design-faithful <em>and</em>
          merchant-tunable at the same time.
        </p>
        <CodeBlock filename="snippets/maison-tokens.liquid" lang="Liquid" code={tokens} />
        <p>
          Every section was QA'd against the file across breakpoints — type ramp, baseline
          rhythm, letter-spacing. <strong>Design-faithful is a process, not a promise.</strong>
        </p>
      </CSection>

      <CSection id="implementation" kicker="04 — Implementation" title="What was built">
        <CaseList
          items={[
            <><strong>Lookbooks as metaobjects</strong> — plates, moods, and shoppable hotspots, publishable from the admin in both locales</>,
            <><strong>Shopify Markets</strong> for FR/EN — one codebase, two voices, translated metaobject fields</>,
            <><strong>PDP configuration as storytelling</strong> — metal selection via variant metafields, engraving as a validated line-item property, gift packaging as a flow</>,
            <>A full set of <strong>theme-editor sections</strong> covering editorial, commerce, and maison pages</>,
          ]}
        />
        <CodeBlock filename="sections/lookbook.liquid" lang="Liquid" code={lookbook} />
      </CSection>

      <CSection id="value" kicker="05 — Business value" title="The design file, running a store">
        <p>
          The maison now runs its own editorial calendar — <strong>new lookbooks ship from the
          admin</strong>, in both languages, without touching code. The design system survived
          the build intact, and the PDP sells craftsmanship instead of flattening it into a
          dropdown. Content changes that used to be developer tickets are now an afternoon in
          the theme editor.
        </p>
      </CSection>
    </CaseBody>
  );
}
