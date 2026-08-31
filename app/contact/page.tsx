import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a Shopify build, Figma-to-Shopify implementation, or storefront improvement project with Jay Taraviya.",
};

export default function ContactPage() {
  return (
    <>
      <section className="neo-page-hero neo-page-hero--contact">
        <div className="page-wrap neo-page-hero__split">
          <div className="neo-page-hero__copy">
            <p className="neo-kicker neo-kicker--accent">Contact</p>
            <h1>A useful project starts with an honest constraint.</h1>
            <p>Share the store, business priority, current friction, and timing. I’ll come back with the most practical next step.</p>
          </div>
          <aside className="neo-project-fit" aria-labelledby="project-fit-title">
            <div className="neo-project-fit__heading">
              <p id="project-fit-title" className="neo-kicker">A strong fit</p>
              <span>{site.availability}</span>
            </div>
            <ul>
              <li><span>01</span><div><strong>Full Shopify builds</strong><small>Architecture through launch</small></div></li>
              <li><span>02</span><div><strong>Figma to Shopify</strong><small>Precise, responsive implementation</small></div></li>
              <li><span>03</span><div><strong>Focused improvements</strong><small>Defined problems, contained releases</small></div></li>
            </ul>
            <p>Useful briefs include the store, priority, constraints, and the date that matters.</p>
          </aside>
        </div>
      </section>

      <section className="neo-contact">
        <div className="page-wrap neo-contact__grid">
          <div className="neo-contact__details">
            <p className="neo-kicker neo-kicker--accent">Start a conversation</p>
            <h2>Tell me what customers or the merchant team need to do more easily.</h2>
            <div>
              <a href={`mailto:${site.email}`}>{site.email}<ArrowUpRight aria-hidden="true" size={15} /></a>
              <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn<ArrowUpRight aria-hidden="true" size={15} /></a>
              <a href={site.github} target="_blank" rel="noreferrer">GitHub<ArrowUpRight aria-hidden="true" size={15} /></a>
            </div>
            <dl>
              <div><dt>Location</dt><dd>{site.location}</dd></div>
              <div><dt>Availability</dt><dd>{site.availability}</dd></div>
              <div><dt>Working style</dt><dd>Remote collaboration</dd></div>
            </dl>
          </div>
          <ContactForm email={site.email} />
        </div>
      </section>
    </>
  );
}
