import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { FeaturedProjectRow } from "@/components/FeaturedProjectRow";
import { featuredProjects } from "@/lib/portfolioProjects";
import { site } from "@/lib/site";

export default function HomePage() {
  const selectedProjects = ["toni-and-guy", "mikeys-pies", "rockmarq"]
    .map((slug) => featuredProjects.find((project) => project.slug === slug))
    .filter((project): project is (typeof featuredProjects)[number] => Boolean(project));

  return (
    <>
      <Hero />

      <section id="work" className="neo-work">
        <div className="page-wrap neo-work__intro">
          <p className="neo-kicker">Selected work</p>
          <Link href="/work" className="neo-project-link">View all projects <ArrowUpRight aria-hidden="true" size={14} /></Link>
        </div>
        <div className="page-wrap neo-featured-list">
          {selectedProjects.map((project, index) => (
            <FeaturedProjectRow key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="neo-home-profile" aria-labelledby="capabilities-title">
        <div className="page-wrap neo-home-profile__grid">
          <div className="neo-service-index">
            <p className="neo-kicker">How I help</p>
            {[
              ["01", "Shopify storefronts", "High-performing builds focused on UX, speed, and conversion that scale with your brand."],
              ["02", "Figma-to-Shopify", "Pixel-precise builds with clean, modular code and a design system your team can extend."],
              ["03", "Ongoing improvements", "Technical audits, performance boosts, bug fixes, and feature development."],
            ].map(([number, title, body]) => (
              <Link key={number} href="/services" className="neo-service-row">
                <span>{number}</span><h2 id={number === "01" ? "capabilities-title" : undefined}>{title}</h2><p>{body}</p><ArrowRight aria-hidden="true" size={16} />
              </Link>
            ))}
          </div>
          <div className="neo-home-profile__bio">
            <div>
              <p className="neo-kicker">Built for brands that care</p>
              <p>Over the past 8+ years, I’ve helped DTC brands turn ambitious ideas into reliable, revenue-driven experiences. I work closely with founders and teams who value craftsmanship, clarity, and results.</p>
              <Link href="/about" className="neo-project-link">More about Jay <ArrowUpRight aria-hidden="true" size={14} /></Link>
            </div>
            <div className="neo-home-profile__portrait">
              <Image src={site.profileImage} alt={`${site.name}, Shopify developer`} fill sizes="(max-width: 680px) 112px, 168px" quality={60} />
            </div>
          </div>
        </div>
      </section>

      <section className="neo-home-cta">
        <div className="page-wrap neo-home-cta__inner">
          <h2>Let’s build something<br />that <em>grows</em> your brand.</h2>
          <p>Have a project in mind?<br />I’d love to hear about it.</p>
          <Link href="/contact" className="neo-button neo-button--light">Enquire now <ArrowUpRight aria-hidden="true" size={14} /></Link>
          <div><a href={`mailto:${site.email}`}>{site.email}</a><span>India (IST)</span></div>
        </div>
      </section>
    </>
  );
}
