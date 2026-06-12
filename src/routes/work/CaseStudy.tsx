import { Link, useParams } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/PageShell";
import { CaseHero, NextCase, StatStrip } from "@/components/case/Blocks";
import { caseBySlug, caseStudies } from "@/content/caseStudies";
import ToniGuyBody from "@/routes/work/cases/ToniGuy";
import OdetteBody from "@/routes/work/cases/Odette";
import MickeysBody from "@/routes/work/cases/Mickeys";

const bodies: Record<string, () => JSX.Element> = {
  "toni-guy": ToniGuyBody,
  "odette-paris": OdetteBody,
  "mickeys-pies": MickeysBody,
};

export default function CaseStudy() {
  const { slug } = useParams({ strict: false }) as { slug?: string };
  const meta = slug ? caseBySlug(slug) : undefined;
  const Body = slug ? bodies[slug] : undefined;

  if (!meta || !Body) {
    return (
      <PageShell title="Not found">
        <div className="wrap flex min-h-[70vh] flex-col items-start justify-center gap-6 pt-16">
          <p className="eyebrow">404 — no such case</p>
          <h1 className="display text-[clamp(38px,6vw,78px)] text-tx">
            Cart is empty<span className="text-volt">.</span>
          </h1>
          <p className="max-w-[46ch] text-[15px] leading-relaxed text-tx2">
            That case study doesn't exist — but three documented ones do.
          </p>
          <Link
            to="/work"
            className="rounded-full bg-volt px-7 py-3.5 text-[14px] font-semibold text-volt-ink transition-colors hover:bg-tx"
          >
            Open the work index
          </Link>
        </div>
      </PageShell>
    );
  }

  const idx = caseStudies.findIndex((c) => c.slug === meta.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <PageShell title={`${meta.client} — Case study`}>
      <article>
        <CaseHero meta={meta} />
        <StatStrip meta={meta} />
        <Body />
        <NextCase next={next} />
      </article>
    </PageShell>
  );
}
