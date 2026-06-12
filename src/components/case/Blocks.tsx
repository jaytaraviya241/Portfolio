import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import { Counter } from "@/components/motion/Counter";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { ProjectCover } from "@/components/ui/ProjectCover";
import { Chip } from "@/components/ui/bits";
import type { CaseMeta } from "@/content/caseStudies";
import { useActiveSection } from "@/lib/useActiveSection";
import { useMotionOK } from "@/lib/boring";
import { cn, scrollToId } from "@/lib/utils";

/* ------------------------------------------------------------- hero */
export function CaseHero({ meta }: { meta: CaseMeta }) {
  const motionOK = useMotionOK();

  return (
    <header
      className="relative overflow-hidden border-b border-line pt-32 pb-16 md:pt-40 md:pb-20"
      style={{ ["--accent" as string]: meta.accent }}
    >
      <span
        aria-hidden="true"
        className="deco absolute -top-32 right-[-10%] h-[420px] w-[560px] rounded-full opacity-[0.10] blur-[110px]"
        style={{ background: "var(--accent)" }}
      />
      <div className="wrap relative">
        <Reveal y={12} blur={false}>
          <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-tx3">
            <Link to="/work" className="text-tx2 transition-colors hover:text-volt">
              ← Work index
            </Link>
            <span aria-hidden="true">/</span>
            <span>Case {meta.index}</span>
            <span aria-hidden="true">·</span>
            <span>{meta.sector}</span>
            <span aria-hidden="true">·</span>
            <span>{meta.year}</span>
          </div>
        </Reveal>

        <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <TextReveal
              text={meta.client}
              as="h1"
              className="display text-[clamp(36px,5.6vw,72px)] text-tx"
            />
            <Reveal delay={0.12} y={16}>
              <p className="mt-3 text-[clamp(16px,1.8vw,21px)] font-medium" style={{ color: "var(--accent)" }}>
                {meta.title}
              </p>
            </Reveal>
            <Reveal delay={0.2} y={16}>
              <p className="mt-6 max-w-[58ch] text-[15.5px] leading-relaxed text-tx2">{meta.summary}</p>
            </Reveal>
            <Reveal delay={0.28} blur={false}>
              <dl className="mt-9 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-line pt-7 sm:grid-cols-3">
                {[
                  ["Role", meta.role],
                  ["Engagement", meta.engagement],
                  ["Year", meta.year],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-tx3">{k}</dt>
                    <dd className="mt-1.5 text-[13.5px] font-medium text-tx">{v}</dd>
                  </div>
                ))}
                <div className="col-span-2 sm:col-span-3">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-tx3">Stack</dt>
                  <dd className="mt-2 flex flex-wrap gap-1.5">
                    {meta.stack.map((s) => (
                      <Chip key={s}>{s}</Chip>
                    ))}
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.3} y={40} className="relative">
            <motion.div
              animate={motionOK ? { y: [0, -8, 0] } : undefined}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ProjectCover variant={meta.cover} client={meta.client} />
            </motion.div>
          </Reveal>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------- stat strip */
/** Verified metrics only — renders nothing when a case has no real numbers. */
export function StatStrip({ meta }: { meta: CaseMeta }) {
  if (!meta.kpis?.length) return null;
  return (
    <div
      className="border-b border-line bg-bg2/50"
      style={{ ["--accent" as string]: meta.accent }}
    >
      <div className="wrap grid grid-cols-1 divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {meta.kpis.map((k) => (
          <div key={k.label} className="flex flex-col items-center gap-1.5 py-8 text-center">
            <Counter
              value={k.value}
              prefix={k.prefix}
              suffix={k.suffix}
              decimals={k.decimals}
              className="display text-[clamp(28px,3vw,40px)] leading-none"
            />
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-tx3">
              {k.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- body + rail */
export type CaseSectionDef = { id: string; label: string };

export function CaseBody({
  sections,
  children,
}: {
  sections: CaseSectionDef[];
  children: ReactNode;
}) {
  const active = useActiveSection(sections.map((s) => s.id));
  const motionOK = useMotionOK();

  return (
    <div className="wrap grid gap-14 py-16 md:py-24 lg:grid-cols-[minmax(0,1fr)_220px]">
      <div className="min-w-0 max-w-[760px]">{children}</div>
      <aside className="hidden lg:block" aria-label="Case study contents">
        <nav className="sticky top-28">
          <p className="eyebrow mb-5">Contents</p>
          <ol className="flex flex-col gap-1 border-l border-line">
            {sections.map((s, i) => {
              const isActive = active === s.id;
              return (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => scrollToId(s.id, motionOK)}
                    className={cn(
                      "-ml-px flex w-full items-center gap-3 border-l-2 py-2 pl-4 text-left text-[12.5px] transition-colors duration-300",
                      isActive
                        ? "border-volt text-tx"
                        : "border-transparent text-tx3 hover:text-tx2",
                    )}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span className="font-mono text-[9px]">{String(i + 1).padStart(2, "0")}</span>
                    {s.label}
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>
      </aside>
    </div>
  );
}

export function CSection({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-b border-line pb-14 pt-2 [&:not(:first-child)]:mt-14 last:border-0">
      <Reveal y={20}>
        <p className="eyebrow mb-3 text-volt">{kicker}</p>
        <h2 className="display-soft mb-7 text-[clamp(22px,2.6vw,30px)] text-tx">{title}</h2>
      </Reveal>
      <div className="space-y-5 text-[15px] leading-[1.85] text-tx2 [&_strong]:font-semibold [&_strong]:text-tx">
        {children}
      </div>
    </section>
  );
}

export function CaseList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="!my-6 flex flex-col gap-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-[14px] leading-relaxed text-tx2">
          <span className="mt-[2px] font-mono text-[12px] text-volt" aria-hidden="true">
            →
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------- compare */
export function Compare({
  before,
  after,
}: {
  before: string[];
  after: string[];
}) {
  return (
    <div className="!my-8 grid gap-4 md:grid-cols-2">
      <div className="rounded-2xl border border-line bg-bg2 p-6">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ember">⚠ Before</p>
        <ul className="flex flex-col gap-2.5">
          {before.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-tx2">
              <span className="mt-[7px] size-1 shrink-0 rounded-full bg-ember/60" aria-hidden="true" />
              {b}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-volt/25 bg-bg2 p-6">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-volt">✓ After</p>
        <ul className="flex flex-col gap-2.5">
          {after.map((a) => (
            <li key={a} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-tx2">
              <span className="mt-[7px] size-1 shrink-0 rounded-full bg-volt" aria-hidden="true" />
              {a}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- quote */
export function PullQuote({
  quote,
  author,
  role,
  accent,
}: {
  quote: ReactNode;
  author: string;
  role: string;
  accent?: string;
}) {
  return (
    <Reveal>
      <figure
        className="!my-8 rounded-2xl border border-line bg-bg2 p-8"
        style={accent ? { borderColor: `color-mix(in oklab, ${accent} 30%, transparent)` } : undefined}
      >
        <blockquote className="text-[17px] font-medium leading-relaxed text-tx">
          "{quote}"
        </blockquote>
        <figcaption className="mt-5">
          <span className="block text-[13.5px] font-semibold text-tx">{author}</span>
          <span className="mt-0.5 block font-mono text-[11px] uppercase tracking-[0.12em] text-tx3">
            {role}
          </span>
        </figcaption>
      </figure>
    </Reveal>
  );
}

/* ------------------------------------------------------------- next case */
export function NextCase({ next }: { next: CaseMeta }) {
  return (
    <Link
      to="/work/$slug"
      params={{ slug: next.slug }}
      className="group block border-t border-line bg-bg2/40 transition-colors duration-500 hover:bg-bg2"
      style={{ ["--accent" as string]: next.accent }}
    >
      <div className="wrap flex flex-col gap-3 py-16 md:py-20">
        <span className="eyebrow">Next case study — {next.index}</span>
        <span className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
          <span className="display text-[clamp(30px,4.6vw,56px)] text-tx transition-colors duration-500 group-hover:text-volt">
            {next.client}
          </span>
          <span className="text-[15px] font-medium" style={{ color: "var(--accent)" }}>
            {next.title} ↗
          </span>
        </span>
      </div>
    </Link>
  );
}
