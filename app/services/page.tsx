import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Process",
  description: "A clear Shopify delivery process from discovery and architecture through build, QA, and launch.",
};

const process = [
  ["01", "Discover", "Align on the business goal, customer journey, current store, technical constraints, content, and definition of success."],
  ["02", "Structure", "Translate the brief into theme architecture, content models, reusable sections, templates, and a practical delivery plan."],
  ["03", "Build", "Implement the storefront in reviewable slices, preserving the design intent across responsive states and real commerce content."],
  ["04", "Verify", "Test navigation, product paths, editor controls, accessibility, performance-sensitive interactions, and launch-critical states."],
  ["05", "Launch", "Ship with clear handoff notes, known follow-ups, and a storefront the merchant team can confidently operate."],
] as const;

const engagementModels = [
  ["01", "Full storefront build", "For a new store, replatform, or substantial theme rebuild that needs one accountable path from structure through launch.", "Theme architecture, responsive templates, reusable sections, and launch-ready QA."],
  ["02", "Figma to Shopify", "For approved design work that needs precise implementation, responsive judgment, and real-world commerce states.", "A design-faithful Shopify build that remains practical inside the theme editor."],
  ["03", "Focused improvements", "For an existing store with a defined customer journey, campaign, performance, or maintainability problem.", "A contained release with targeted changes and regression checks around the affected paths."],
] as const;

export default function ProcessPage() {
  return (
    <>
      <section className="neo-page-hero neo-page-hero--process">
        <div className="page-wrap neo-page-hero__split">
          <div className="neo-page-hero__copy">
            <p className="neo-kicker neo-kicker--accent">Process</p>
            <h1>A calm process for complex storefront work.</h1>
            <p>Visible decisions, reviewable progress, responsive craft, and a clean handoff—whether the project is a full build or a focused change.</p>
          </div>
          <aside className="neo-process-index" aria-label="Five-stage delivery process">
            <div className="neo-process-index__heading">
              <p className="neo-kicker">One visible system</p>
              <span>05 stages</span>
            </div>
            <ol>
              {process.map(([number, title]) => (
                <li key={number}>
                  <span>{number}</span>
                  <strong>{title}</strong>
                </li>
              ))}
            </ol>
            <p className="neo-process-index__note">Every stage ends with something concrete to review before the next begins.</p>
          </aside>
        </div>
      </section>

      <section className="neo-engagements" aria-labelledby="engagements-title">
        <div className="page-wrap neo-engagements__intro">
          <p className="neo-kicker neo-kicker--accent">Ways to work together</p>
          <h2 id="engagements-title">Choose the level of change the storefront actually needs.</h2>
        </div>
        <div className="page-wrap neo-engagements__grid">
          {engagementModels.map(([number, title, fit, outcome]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <div><small>Useful when</small><p>{fit}</p></div>
              <div><small>Leaves you with</small><p>{outcome}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="neo-process-page">
        <div className="page-wrap neo-process-page__heading">
          <p className="neo-kicker neo-kicker--accent">Delivery system</p>
          <h2>Five stages, one visible line of reasoning.</h2>
        </div>
        <div className="page-wrap neo-process-list">
          {process.map(([number, title, body]) => (
            <Reveal key={number}>
              <article className="neo-process-step">
                <span>{number}</span>
                <h2>{title}</h2>
                <p>{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="neo-handoff">
        <div className="page-wrap neo-handoff__grid">
          <div><p className="neo-kicker neo-kicker--accent">A useful first brief</p><h2>Bring the current store or designs, the business priority, the hard constraints, and the date that matters.</h2></div>
          <div><p className="neo-kicker neo-kicker--accent">A useful handoff</p><h2>Receive a tested release, a clear content system, and an honest list of what should happen next.</h2></div>
        </div>
      </section>

      <section className="neo-home-cta">
        <div className="page-wrap neo-home-cta__inner">
          <h2>Have a storefront problem worth solving properly?</h2>
          <Link href="/contact" className="neo-button neo-button--accent">Share the brief <ArrowRight aria-hidden="true" size={14} /></Link>
        </div>
      </section>
    </>
  );
}
