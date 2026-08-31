import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import type { PortfolioProject } from "@/lib/portfolioProjects";

type FeaturedProjectRowProps = {
  project: PortfolioProject;
  index: number;
};

export function FeaturedProjectRow({ project, index }: FeaturedProjectRowProps) {
  const number = String(index + 1).padStart(2, "0");
  const textFirst = index % 2 === 0;

  const artwork = (
    <Link href={`/work/${project.slug}`} className="neo-featured__image-link" aria-label={`View the ${project.name} project`}>
      {project.cover ? (
        <Image
          src={project.cover}
          alt={`${project.name} project cover`}
          sizes="(max-width: 820px) 100vw, 50vw"
          className="neo-featured__image"
          quality={72}
        />
      ) : (
        <span className="neo-grid-card__cover-note"><small>Case study</small>{project.name}</span>
      )}
    </Link>
  );

  const content = (
    <div className="neo-featured__content">
      <div className="neo-featured__titleline">
        <span className="neo-featured__number">{number}</span>
      </div>
      <h3>{project.name}</h3>
      <p className="neo-featured__engagement">{project.engagement}</p>
      <p className="neo-featured__summary">{project.summary}</p>
      <div className="neo-featured__actions">
        <Link href={`/work/${project.slug}`} className="neo-project-link">
          View case study <ArrowUpRight aria-hidden="true" size={14} />
        </Link>
      </div>
    </div>
  );

  return (
    <Reveal className="neo-featured-item">
      <article className={`neo-featured ${textFirst ? "neo-featured--reverse" : ""}`.trim()}>
        {artwork}
        {content}
      </article>
    </Reveal>
  );
}
