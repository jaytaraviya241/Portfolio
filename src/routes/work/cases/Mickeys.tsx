import {
  CaseBody,
  CaseList,
  Compare,
  CSection,
  PullQuote,
  type CaseSectionDef,
} from "@/components/case/Blocks";
import { CodeBlock } from "@/components/ui/CodeBlock";

const sections: CaseSectionDef[] = [
  { id: "problem", label: "The problem" },
  { id: "scope", label: "Scope" },
  { id: "build", label: "Technical build" },
  { id: "before-after", label: "Before & after" },
  { id: "results", label: "Results" },
  { id: "reflection", label: "Reflection" },
];

const pieConfig = `{%- comment -%} Global PIE_CONFIG — sourced from shop metafields {%- endcomment -%}
<script>
  window.PIE_CONFIG = {
    deliveryZones:     {{ shop.metafields.pie.delivery_zones.value | json }},
    pickupLocations:   {{ shop.metafields.pie.pickup_locations.value | json }},
    deliveryThreshold: {{ shop.metafields.pie.delivery_minimum.value | json }},
    pickupThreshold:   {{ shop.metafields.pie.pickup_minimum.value | json }},
    deliveryWindows:   {{ shop.metafields.pie.delivery_windows.value | json }}
  };
</script>`;

const pieRules = `// PieRules — shared rules engine
// Single source of truth for all fulfillment logic
class PieRules {
  constructor(config) {
    this.config = config || window.PIE_CONFIG;
  }

  evaluate(zipCode) {
    const inZone = this.config.deliveryZones.includes(zipCode.trim());
    return {
      canDeliver: inZone,
      canPickup: true,
      fulfillmentOptions: inZone ? ['delivery', 'pickup'] : ['pickup'],
      deliveryWindows: inZone ? this.config.deliveryWindows : []
    };
  }

  validateCart(cartItems, fulfillmentType) {
    const total = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
    const min = fulfillmentType === 'delivery'
      ? this.config.deliveryThreshold
      : this.config.pickupThreshold;
    return { valid: total >= min, shortfall: Math.max(0, min - total) };
  }
}

export default PieRules;`;

const fnRun = `// Shopify Function — cart_checkout_validation
// Enforces fulfillment rules at the checkout level
export function run(input) {
  const errors = [];
  const attrs = input.cart.attribute;
  const zipCode = attrs?.find(a => a.key === 'delivery_zip')?.value;
  const type = attrs?.find(a => a.key === 'fulfillment_type')?.value;

  if (type === 'delivery' && !isValidZip(zipCode)) {
    errors.push({
      localizedMessage: "Sorry, we don't deliver to that zip code.",
      target: "cart"
    });
  }
  return { errors };
}`;

export default function MickeysBody() {
  return (
    <CaseBody sections={sections}>
      <CSection id="problem" kicker="01 — The problem" title="Business rules living in spreadsheets">
        <p>
          Mickey's runs a regional pie business with delivery and pickup across specific zones.
          Their Shopify store had <strong>no enforcement of delivery zones</strong> — customers
          could order to zip codes the bakery couldn't serve, causing fulfillment failures and
          manual cancellations every single week.
        </p>
        <p>
          They also needed a <strong>bundle builder</strong> for mixed pie boxes, different pricing
          thresholds for pickup versus delivery, and a UI that only showed delivery windows when
          the customer's zip actually qualified. Every off-the-shelf option meant another paid app,
          another script tag, another monthly invoice.
        </p>
        <p>
          The core challenge: <strong>logic that belongs in code was scattered across
          spreadsheets, staff notes, and manual order checks.</strong> The store needed a single
          source of truth the merchant could edit without a developer.
        </p>
      </CSection>

      <CSection id="scope" kicker="02 — Scope" title="Everything native, nothing rented">
        <CaseList
          items={[
            <>Custom OS 2.0 <strong>bundle builder section</strong> with full schema settings</>,
            <>Zip-code delivery gating — <strong>client-side UX + server-side enforcement</strong></>,
            <>Conditional fulfillment UI: pickup vs. delivery options per zip</>,
            <>Cart attributes & line item properties carrying order context</>,
            <>A <strong>Shopify Function</strong> on cart_checkout_validation as the final gate</>,
            <>The <strong>PIE_CONFIG metafield system</strong> — one source of truth in the admin</>,
            <>Dev-theme workflow on a live store — never building on the published theme</>,
            <>A testing matrix covering every business-rule scenario</>,
          ]}
        />
      </CSection>

      <CSection id="build" kicker="03 — Technical build" title="One config object, three consumers">
        <p>
          The architecture centers on a <strong>PIE_CONFIG global object</strong> sourced from shop
          metafields. It powers the storefront UI, the cart logic, and the server-side Function —
          so when the merchant updates delivery zones or thresholds in the admin, every layer
          updates at once. No deploy, no developer.
        </p>
        <CodeBlock filename="snippets/pie-config.liquid" lang="Liquid" code={pieConfig} />
        <p>
          <strong>PieRules.evaluate()</strong> is a shared rules engine used by the bundle builder,
          the cart, and the checkout flow. One module decides what any zip code is allowed to do.
        </p>
        <CodeBlock filename="assets/pie-rules.js" lang="JavaScript" code={pieRules} />
        <p>
          Client-side validation is UX; <strong>server-side validation is business logic</strong>.
          Even if someone bypasses the UI entirely, the Shopify Function blocks invalid orders at
          checkout.
        </p>
        <CodeBlock filename="cart_checkout_validation/run.js" lang="Shopify Function" code={fnRun} />
      </CSection>

      <CSection id="before-after" kicker="04 — Before & after" title="The same store, made trustworthy">
        <Compare
          before={[
            "No zip validation — anyone could order to any address",
            "Manual review required for every delivery order",
            "Business rules in staff notes, unenforced",
            "No bundle builder — separate products, no pricing logic",
            "43 Lighthouse performance (app overhead)",
            "3 paid apps for cart, upsell, and delivery logic",
          ]}
          after={[
            "Real-time zip gating — enforced in UI and at checkout",
            "Zero invalid delivery orders reaching the kitchen",
            "Rules in metafields — merchant-editable from admin",
            "Custom bundle builder with conditional pricing",
            "97 Lighthouse performance, no app overhead",
            "Zero third-party apps — all native Shopify",
          ]}
        />
      </CSection>

      <CSection id="results" kicker="05 — Results" title="Faster store, calmer kitchen">
        <p>
          The merchant now updates delivery zones, pickup locations, thresholds, and delivery
          windows entirely from the Shopify admin. The Function provides bulletproof enforcement
          even when client-side validation is bypassed.
        </p>
        <PullQuote
          accent="var(--cherry)"
          quote={
            <>
              Jay built our entire fulfillment system without a single third-party app. The store
              runs faster than anything we've had before, and I can update delivery zones myself
              from the admin. <strong>Exactly what we needed.</strong>
            </>
          }
          author="Sarah C."
          role="Owner, Mickey's Pies & Cherry"
        />
      </CSection>

      <CSection id="reflection" kicker="06 — Reflection" title="Principles this project hardened">
        <CaseList
          items={[
            <><strong>Never develop on a live theme.</strong> An unpublished dev theme protected the live store through the entire build.</>,
            <><strong>Centralize business rules.</strong> One config object beats five scattered conditionals — for the developer and the merchant.</>,
            <><strong>Client-side validation is UX. Server-side validation is business logic.</strong> You need both, and they must read the same source.</>,
            <><strong>App-free isn't just performance.</strong> It's ownership — no subscription can sunset this system.</>,
          ]}
        />
      </CSection>
    </CaseBody>
  );
}
