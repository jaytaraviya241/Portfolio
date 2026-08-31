import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "The working principles and Shopify focus behind Jay Taraviya's portfolio.",
};

const chapters = [
  ["01", "Clarity before complexity", "The strongest solution is not the one with the most custom code. It is the one that makes the customer decision and the merchant workflow easier to understand."],
  ["02", "Built to be edited", "A merchant should not need a developer for every campaign. Reusable sections and thoughtful content controls are part of the product, not cleanup work."],
  ["03", "Performance is product", "Speed shapes trust, clarity, and conversion. I treat loading, layout stability, interaction cost, and responsive behavior as design materials."],
  ["04", "Delivery without drama", "Clear scope, reviewable progress, and deliberate QA keep the build moving. The goal is a calm launch and a system the team can confidently own."],
] as const;

const practiceChapters = [
  ["05", "Full storefront builds", "End-to-end Shopify implementation for teams that need theme architecture, responsive polish, and launch support in one accountable build."],
  ["06", "Figma to Shopify", "Detailed design translation with the judgment required to make every viewport, content state, and commerce interaction feel intentional."],
  ["07", "Client-led improvements", "Focused enhancements for existing stores—new sections, campaign updates, UX refinements, and technical fixes delivered without destabilizing the theme."],
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="neo-about-hero">
        <div className="page-wrap neo-about-hero__layout">
          <div className="neo-about-hero__copy">
            <p className="neo-kicker neo-kicker--accent">About</p>
            <h1>Visual ambition,<br />made practical on Shopify.</h1>
            <p>I’m {site.name}, an independent Shopify developer based in {site.location}. I help DTC teams translate ambitious design into storefront systems customers understand and merchants can run.</p>
          </div>
          <aside className="neo-about-hero__portrait">
            <Image
              src={site.profileImage}
              alt={`${site.name}, Shopify developer`}
              fill
              quality={60}
              sizes="(max-width: 900px) calc(100vw - 2.5rem), 390px"
            />
            <div className="neo-about-hero__facts">
              <span>Independent</span>
              <span>{site.location}</span>
              <span>8+ years</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="neo-about-intro">
        <div className="page-wrap neo-about-intro__grid neo-about-intro__grid--copy-only">
          <div className="neo-about-intro__statement">
            <p className="neo-kicker neo-kicker--accent">The role</p>
            <p>Make the complex system underneath feel clear on the surface.</p>
          </div>
          <div className="neo-about-intro__copy">
            <p>
              A storefront is where brand, catalog, operations, content, and customer intent meet. My role is to make that system feel coherent on the surface without ignoring the complexity underneath.
            </p>
            <p>
              I work across full Shopify builds, Figma-led implementations, performance-sensitive theme systems, and focused improvements to existing stores. The common thread is careful translation: from a goal to an interface, and from an interface to maintainable theme architecture.
            </p>
            <dl className="neo-about-principles">
              <div><dt>Conversion-aware</dt><dd>Every choice should support clarity, confidence, or the path to purchase.</dd></div>
              <div><dt>Merchant-controlled</dt><dd>The team should be able to publish and merchandise without reopening the build.</dd></div>
              <div><dt>Durable by default</dt><dd>Maintainable systems create more value than clever one-off solutions.</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="neo-story">
        <div className="page-wrap neo-story__intro">
          <p className="neo-kicker neo-kicker--accent">How I work</p>
          <h2>The craft is in the constraints</h2>
          <p>Strong storefronts come from understanding what the business, team, content, and customer journey actually need.</p>
        </div>
        <div className="page-wrap neo-chapters">
          {chapters.map(([number, title, body]) => (
            <Reveal key={number}>
              <article className="neo-chapter">
                <div><span>{number}</span><small>Chapter</small></div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="neo-about-quote">
        <div className="page-wrap">
          <p>Distinctive for the shopper.<br /><strong>Predictable for the team.</strong></p>
        </div>
      </section>

      <section className="neo-story neo-story--after">
        <div className="page-wrap neo-chapters">
          {practiceChapters.map(([number, title, body]) => (
            <Reveal key={number}>
              <article className="neo-chapter">
                <div><span>{number}</span><small>Chapter</small></div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="neo-about-cta">
        <div className="page-wrap neo-about-cta__grid">
          <h2>That is still the job</h2>
          <div>
            <p>Every project starts with a real constraint and ends with a storefront that should be clearer to shop, easier to operate, and better prepared for whatever the brand needs next.</p>
            <div>
              <Link href="/work" className="neo-button neo-button--dark">See the work <ArrowRight aria-hidden="true" size={14} /></Link>
              <Link href="/contact" className="neo-button neo-button--outline">Start a conversation <ArrowUpRight aria-hidden="true" size={14} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
