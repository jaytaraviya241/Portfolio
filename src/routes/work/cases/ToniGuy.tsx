import {
  CaseBody,
  CaseList,
  Compare,
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

const sectionSchema = `{% schema %}
{
  "name": "Campaign hero",
  "settings": [
    { "type": "image_picker", "id": "media", "label": "Campaign media" },
    { "type": "text", "id": "kicker", "label": "Kicker", "default": "NEW IN" },
    { "type": "richtext", "id": "heading", "label": "Headline" },
    { "type": "url", "id": "cta_url", "label": "CTA link" },
    { "type": "select", "id": "tone", "label": "Tone",
      "options": [
        { "value": "editorial", "label": "Editorial" },
        { "value": "pro", "label": "Pro line" }
      ]
    }
  ],
  "presets": [{ "name": "Campaign hero" }]
}
{% endschema %}`;

const salonQuery = `{%- comment -%} Salon locator — metaobjects, no app {%- endcomment -%}
{%- assign salons = shop.metaobjects.salon.values -%}
{%- for salon in salons -%}
  <article class="salon-card" data-region="{{ salon.region }}">
    <h3>{{ salon.name }}</h3>
    <p>{{ salon.address }}</p>
    <a href="{{ salon.booking_url }}">Book a chair</a>
  </article>
{%- endfor -%}`;

export default function ToniGuyBody() {
  return (
    <CaseBody sections={sections}>
      <CSection id="context" kicker="01 — Context" title="A salon icon moving to Plus">
        <p>
          TONI&GUY is a global haircare name with salon heritage and a professional product line.
          The brand was moving its DTC storefront onto <strong>Shopify Plus</strong>, and the
          rebuild had to end an old pattern: a theme patched beyond recognition and an app
          installed for every problem marketing ever had.
        </p>
        <p>
          Delivered as an agency engagement — <strong>my role covered theme architecture, the
          section system, and the performance work</strong>.
        </p>
      </CSection>

      <CSection id="problem" kicker="02 — The problem" title="App sprawl and blocked marketing">
        <CaseList
          items={[
            <>Slow mobile PDPs, weighed down by <strong>render-blocking app scripts</strong> stacked over years</>,
            <>Overlapping apps — each one a script tag, a subscription, and a point of failure</>,
            <>Campaign pages hardcoded in Liquid — <strong>marketing shipped at developer speed</strong>, not campaign speed</>,
            <>Templates patched so many times that no one trusted a deploy</>,
          ]}
        />
      </CSection>

      <CSection id="solution" kicker="03 — The solution" title="A section system, not a theme">
        <p>
          The rebuild started with a content model, not mockups. Every recurring layout became a
          <strong> schema-first OS 2.0 section with presets</strong>, so marketing composes
          campaign pages in the theme editor instead of filing tickets.
        </p>
        <CodeBlock filename="sections/campaign-hero.liquid" lang="Liquid" code={sectionSchema} />
        <p>
          Brand structures that used to live in apps moved to <strong>native platform
          primitives</strong> — metaobjects for the salon locator and stylist content, native
          set merchandising on line-item logic instead of a bundle app.
        </p>
      </CSection>

      <CSection id="implementation" kicker="04 — Implementation" title="What was built">
        <CaseList
          items={[
            <><strong>Salon locator on metaobjects</strong> with region filtering — replacing an app subscription</>,
            <><strong>Set & bundle merchandising</strong> on native line-item logic with a Functions-based discount</>,
            <><strong>Education content</strong> for the pro line as structured entries, not pasted HTML</>,
            <><strong>Shopify Markets</strong> groundwork for localized selling</>,
            <>Performance pass: app removal, responsive image pipeline, critical CSS, deferred scripts — <strong>measured against a Core Web Vitals budget</strong></>,
            <>Full <strong>redirect map</strong> and structured-data parity to protect SEO through the replatform</>,
          ]}
        />
        <CodeBlock filename="sections/salon-locator.liquid" lang="Liquid" code={salonQuery} />
      </CSection>

      <CSection id="value" kicker="05 — Business value" title="What the brand can do now">
        <Compare
          before={[
            "Campaign pages required developer time",
            "An app (and invoice) for every feature",
            "Unversioned Liquid patches, risky deploys",
            "PDPs dragged down by third-party scripts",
          ]}
          after={[
            "Marketing composes pages in the theme editor",
            "Core features run on native platform primitives",
            "Versioned theme with a dev → staging → live flow",
            "Performance protected by a budget, not luck",
          ]}
        />
        <p>
          The structural win: commerce content lives in <strong>metaobjects and native
          sections</strong>, so the next redesign is a reskin — not another migration.
        </p>
      </CSection>
    </CaseBody>
  );
}
