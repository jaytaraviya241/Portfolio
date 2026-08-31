import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import type { PortfolioProject } from "@/lib/portfolioProjects";

export function PortfolioGridCard({ project }: { project: PortfolioProject }) {
  return (
    <Reveal>
      <article className="neo-grid-card">
        <Link href={`/work/${project.slug}`} className="neo-grid-card__image-link" aria-label={`View the ${project.name} project`}>
          {project.cover ? (
            <Image
              src={project.cover}
              alt={`${project.name} project cover`}
              sizes="(max-width: 760px) calc(100vw - 1.5rem), (max-width: 1100px) 50vw, 610px"
              className="neo-grid-card__image"
              quality={72}
            />
          ) : (
            <span className="neo-grid-card__cover-note"><small>Case study</small>{project.name}</span>
          )}
        </Link>
        <p className="neo-kicker">{project.category}</p>
        <h2>{project.name}</h2>
        <p className="neo-grid-card__engagement">{project.engagement}</p>
        <p className="neo-grid-card__summary">{project.summary}</p>
        <div className="neo-grid-card__objective">
          <span>Objective</span>
          <p>{project.caseStudy.objective[0]}</p>
        </div>
        <ul className="neo-grid-card__tags" aria-label={`${project.name} project focus`}>
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <div className="neo-grid-card__actions">
          <Link href={`/work/${project.slug}`} className="neo-button neo-button--dark">
            Project details <ArrowUpRight aria-hidden="true" size={14} />
          </Link>
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="neo-button neo-button--outline">
            Live store <ArrowUpRight aria-hidden="true" size={14} />
          </a>
        </div>
      </article>
    </Reveal>
  );
}
