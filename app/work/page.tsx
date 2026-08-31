import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PortfolioGridCard } from "@/components/PortfolioGridCard";
import { additionalProjectLinks, portfolioProjects } from "@/lib/portfolioProjects";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected Shopify portfolio projects and detailed commerce case studies.",
};

const engagementCounts = [
  ["Full builds", portfolioProjects.filter((project) => project.engagement === "Full Shopify build").length],
  ["Figma implementations", portfolioProjects.filter((project) => project.engagement === "Figma-to-Shopify").length],
  ["Focused improvements", portfolioProjects.filter((project) => project.engagement === "Client enhancements").length],
] as const;

export default function WorkPage() {
  return (
    <>
      <section className="neo-page-hero neo-page-hero--work">
        <div className="page-wrap neo-page-hero__inner">
          <p className="neo-kicker neo-kicker--accent">Portfolio</p>
          <h1>Shopify work,<br />with the thinking included.</h1>
          <p>A documented archive across fashion, beauty, food, wellness, and professional services—framed around the customer or operating problem each storefront needed to solve.</p>
          <dl className="neo-page-hero__proof">
            <div><dt>Documented projects</dt><dd>{portfolioProjects.length}</dd></div>
            {engagementCounts.map(([label, count]) => <div key={label}><dt>{label}</dt><dd>{count}</dd></div>)}
          </dl>
        </div>
      </section>

      <section className="neo-project-index">
        <div className="page-wrap neo-project-grid">
          {portfolioProjects.map((project) => (
            <PortfolioGridCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="page-wrap neo-beyond">
          <h2>Focused collaborations</h2>
          <div>
            <p>Additional Figma-to-Shopify work is linked directly while the supporting visual archive is prepared. The live stores remain the clearest available record.</p>
            <ul>
              {additionalProjectLinks.map((project) => (
                <li key={project.name}>
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    {project.name}<span>{project.engagement}</span><ArrowUpRight aria-hidden="true" size={15} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
