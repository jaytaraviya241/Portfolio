import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { getPortfolioProject, portfolioProjects, type CaseItem } from "@/lib/portfolioProjects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

type CaseSectionProps = {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
  tone?: "default" | "soft";
};

const chapterLinks = [
  ["overview", "Overview"],
  ["information", "Information"],
  ["objective", "Objective"],
  ["challenge", "Challenge"],
  ["scope", "Scope"],
  ["research", "Research"],
  ["strategy", "Strategy"],
  ["process", "Process"],
  ["technology", "Technology"],
  ["stack", "Tech stack"],
  ["features", "Features"],
  ["responsive", "Responsive"],
  ["design", "Design system"],
  ["results", "Results"],
  ["lessons", "Lessons"],
  ["outcome", "Final outcome"],
] as const;

function CaseSection({ id, number, title, children, tone = "default" }: CaseSectionProps) {
  return (
    <section id={id} className={`case-study-section case-study-section--${tone}`}>
      <div className="case-study-section__heading">
        <span>{number}</span>
        <h2>{title}</h2>
      </div>
      <div className="case-study-section__body">{children}</div>
    </section>
  );
}

function InsightGrid({ items, variant = "standard" }: { items: CaseItem[]; variant?: "standard" | "process" }) {
  return (
    <div className={`case-item-grid case-item-grid--${variant}`}>
      {items.map((item) => (
        <article key={item.title} className="case-item-card">
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  );
}

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioProject(slug);
  return project ? { title: `${project.name} case study`, description: project.summary } : {};
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);
  if (!project) notFound();

  const currentIndex = portfolioProjects.findIndex((item) => item.slug === project.slug);
  const nextProject = portfolioProjects[(currentIndex + 1) % portfolioProjects.length];
  const number = String(currentIndex + 1).padStart(2, "0");
  const caseStudy = project.caseStudy;

  return (
    <>
      <section className="case-study-hero">
        <div className="page-wrap case-study-hero__grid">
          <div className="case-study-hero__copy">
            <Link href="/work" className="case-study-hero__back"><ArrowLeft aria-hidden="true" size={15} /> All projects</Link>
            <p className="neo-kicker neo-kicker--accent">{number} · {project.category}</p>
            <h1>{project.name}</h1>
            <p className="case-study-hero__summary">{project.summary}</p>
            <dl className="case-study-hero__meta">
              <div><dt>Engagement</dt><dd>{project.engagement}</dd></div>
              <div><dt>Primary focus</dt><dd>{project.tags[0]}</dd></div>
              <div><dt>Evidence</dt><dd>Live store + supplied captures</dd></div>
            </dl>
            <div className="case-study-hero__outcome">
              <span>Primary outcome</span>
              <p>{caseStudy.outcome}</p>
            </div>
            <div className="neo-case-hero__actions">
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="neo-button neo-button--accent">
                Visit live website <ArrowUpRight aria-hidden="true" size={14} />
              </a>
              <a href="#overview" className="neo-button neo-button--ghost-dark">Read the case study <ArrowRight aria-hidden="true" size={14} /></a>
            </div>
          </div>

          <figure className={`case-study-hero__visual${project.cover ? "" : " case-study-hero__visual--text"}`}>
            {project.cover ? (
              <Image src={project.cover} alt={`${project.name} project cover`} preload quality={72} sizes="(max-width: 900px) calc(100vw - 1.5rem), 46vw" />
            ) : (
              <div className="case-study-hero__cover-note">
                <span>Case study</span>
                <strong>{project.name}</strong>
                <p>Source A-cover not supplied in the project archive.</p>
              </div>
            )}
            <figcaption>{project.cover ? "Project cover" : "Project archive cover note"}</figcaption>
          </figure>
        </div>
      </section>

      <section className="case-study-content">
        <div className="page-wrap case-study-content__grid">
          <aside className="case-study-navigation" aria-label="Case study sections">
            <p>Case study map</p>
            <ol>
              {chapterLinks.map(([id, label], index) => (
                <li key={id}><a href={`#${id}`}><span>{String(index + 1).padStart(2, "0")}</span>{label}</a></li>
              ))}
            </ol>
          </aside>

          <div className="case-study-content__chapters">
            <CaseSection id="overview" number="01" title="Project overview">
              <p className="case-study-section__lede">{caseStudy.overview}</p>
              <div className="case-capture case-capture--desktop">
                <Image src={project.desktopCapture} alt={`${project.name} desktop storefront capture`} quality={60} sizes="(max-width: 900px) calc(100vw - 1.5rem), 860px" />
                <span>Original desktop storefront capture</span>
              </div>
            </CaseSection>

            <CaseSection id="information" number="02" title="Project information" tone="soft">
              <dl className="case-information-grid">
                <div><dt>Industry</dt><dd>{project.category}</dd></div>
                <div><dt>Platform</dt><dd>Shopify</dd></div>
                <div><dt>Live website</dt><dd><a href={project.liveUrl} target="_blank" rel="noreferrer">{project.liveUrl.replace(/^https?:\/\/(www\.)?/, "")} <ArrowUpRight aria-hidden="true" size={13} /></a></dd></div>
                <div><dt>Project duration</dt><dd>{project.duration}</dd></div>
                <div><dt>Team</dt><dd>{project.team}</dd></div>
                <div><dt>Engagement</dt><dd>{project.engagement}</dd></div>
              </dl>
              <div className="case-information-lists">
                <div><h3>Services provided</h3><ul>{project.services.map((service) => <li key={service}><Check aria-hidden="true" size={14} />{service}</li>)}</ul></div>
                <div><h3>Deliverables</h3><ul>{project.deliverables.map((deliverable) => <li key={deliverable}><Check aria-hidden="true" size={14} />{deliverable}</li>)}</ul></div>
              </div>
            </CaseSection>

            <CaseSection id="objective" number="03" title="Objective">
              <ul className="case-priority-list">
                {caseStudy.objective.map((objective) => <li key={objective}>{objective}</li>)}
              </ul>
            </CaseSection>

            <CaseSection id="challenge" number="04" title="Problem or challenge">
              <p className="case-study-section__lede">{caseStudy.challenge}</p>
            </CaseSection>

            <CaseSection id="scope" number="05" title="Scope of work" tone="soft">
              <div className="case-scope-list">
                {caseStudy.scope.map((scope, index) => <span key={scope}><small>{String(index + 1).padStart(2, "0")}</small>{scope}</span>)}
              </div>
            </CaseSection>

            <CaseSection id="research" number="06" title="Research and insights">
              <p className="case-disclosure">{caseStudy.researchNote}</p>
              <InsightGrid items={caseStudy.insights} />
            </CaseSection>

            <CaseSection id="strategy" number="07" title="Approach and strategy" tone="soft">
              <InsightGrid items={caseStudy.approach} />
            </CaseSection>

            <CaseSection id="process" number="08" title="Execution or process">
              <InsightGrid items={caseStudy.process} variant="process" />
            </CaseSection>

            <CaseSection id="technology" number="09" title="Technology used" tone="soft">
              <p className="case-study-section__lede case-study-section__lede--compact">{caseStudy.technology}</p>
            </CaseSection>

            <CaseSection id="stack" number="10" title="Tech stack">
              <div className="case-stack-grid">
                {caseStudy.stack.map((group) => (
                  <div key={group.label}><h3>{group.label}</h3><ul>{group.values.map((value) => <li key={value}>{value}</li>)}</ul></div>
                ))}
              </div>
            </CaseSection>

            <CaseSection id="features" number="11" title="Key features and functionality" tone="soft">
              <InsightGrid items={caseStudy.features} />
            </CaseSection>

            <CaseSection id="responsive" number="12" title="Responsive experience">
              <ul className="case-priority-list case-priority-list--compact">
                {caseStudy.responsive.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="case-capture-pair">
                <div className="case-capture case-capture--desktop"><Image src={project.cover ?? project.desktopCapture} alt={`${project.name} desktop interface preview`} quality={60} sizes="(max-width: 900px) calc(100vw - 1.5rem), 560px" /><span>Desktop</span></div>
                <div className="case-capture case-capture--mobile"><Image src={project.mobileCapture} alt={`${project.name} mobile interface capture`} quality={60} sizes="(max-width: 900px) 44vw, 280px" /><span>Mobile</span></div>
              </div>
            </CaseSection>

            <CaseSection id="design" number="13" title="Design system and visual direction" tone="soft">
              <p className="case-study-section__lede case-study-section__lede--compact">{caseStudy.designSystem}</p>
            </CaseSection>

            <CaseSection id="results" number="14" title="Results and impact">
              <p className="case-results-label">Evidence-aware outcome</p>
              <p className="case-study-section__lede case-study-section__lede--compact">{caseStudy.results}</p>
            </CaseSection>

            <CaseSection id="lessons" number="15" title="Lessons learned" tone="soft">
              <ul className="case-lessons-list">
                {caseStudy.lessons.map((lesson, index) => <li key={lesson}><span>{String(index + 1).padStart(2, "0")}</span>{lesson}</li>)}
              </ul>
            </CaseSection>

            <CaseSection id="outcome" number="16" title="Final outcome">
              <p className="case-final-outcome">{caseStudy.finalOutcome}</p>
              <div className="case-final-outcome__actions">
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="neo-button neo-button--dark">Visit live website <ArrowUpRight aria-hidden="true" size={14} /></a>
                <Link href="/contact" className="neo-button neo-button--outline">Discuss a similar build <ArrowRight aria-hidden="true" size={14} /></Link>
              </div>
            </CaseSection>
          </div>
        </div>
      </section>

      <section className="neo-next-project">
        <div className="page-wrap neo-next-project__inner">
          <span>Next project</span>
          <Link href={`/work/${nextProject.slug}`}>{nextProject.name} <ArrowRight aria-hidden="true" size={22} /></Link>
        </div>
      </section>
    </>
  );
}
