import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import { useRef, useState } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { Btn } from "@/components/ui/Btn";
import { ProjectCover } from "@/components/ui/ProjectCover";
import { Chip, Eyebrow } from "@/components/ui/bits";
import { caseStudies, type CaseMeta } from "@/content/caseStudies";
import { useMotionOK } from "@/lib/boring";

/** Smaller engagements — receipts without full deep-dives. */
const moreBuilds = [
  {
    name: "Food brand — PDP rebuild",
    detail: "Nutrition panels, subscription UX, and sticky add-to-cart built as native sections.",
    metric: "App-free build",
    tags: ["OS 2.0", "CRO"],
  },
  {
    name: "Beauty store — cart drawer UX",
    detail: "Cart drawer rebuilt with native upsells, replacing a paid upsell app.",
    metric: "−1 app subscription",
    tags: ["AJAX Cart", "Performance"],
  },
  {
    name: "Performance audit & rescue",
    detail: "Three paid apps replaced with native Liquid; render-blocking chain dismantled.",
    metric: "Lighthouse 43 → 91",
    tags: ["CWV", "Audit"],
  },
  {
    name: "Fashion brand — Figma build",
    detail: "Editorial theme built faithful to the design system, fully editable in Theme Editor.",
    metric: "100% editor-editable",
    tags: ["Figma", "Theme"],
  },
];

export default function Work() {
  return (
    <PageShell title="Work">
      <section className="relative overflow-hidden pt-36 pb-10 md:pt-44">
        <span aria-hidden="true" className="deco glow right-[6%] top-[10%] h-72 w-72 bg-volt/10" />
        <div className="wrap relative">
          <Reveal y={12} blur={false}>
            <Eyebrow className="mb-5">Work index — {caseStudies.length} documented cases</Eyebrow>
          </Reveal>
          <TextReveal
            text="Shipped & documented."
            as="h1"
            className="display-soft text-[clamp(34px,5vw,64px)] text-tx"
          />
          <Reveal delay={0.2} y={18}>
            <p className="mt-6 max-w-[58ch] text-[15.5px] leading-relaxed text-tx2">
              Each case opens into a deep-dive: problem, solution, implementation, and what it
              changed for the business. Metrics appear only where they're real.
            </p>
          </Reveal>
        </div>
      </section>

      <CaseIndex />

      <section className="py-24 md:py-28">
        <div className="wrap">
          <Reveal>
            <div className="mb-10 flex items-center gap-4">
              <Eyebrow>More builds</Eyebrow>
              <span className="h-px flex-1 bg-line" aria-hidden="true" />
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-tx3">
                receipts, not anecdotes
              </span>
            </div>
          </Reveal>
          <Stagger className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {moreBuilds.map((b) => (
              <StaggerItem key={b.name} className="h-full">
                <div className="group flex h-full flex-col gap-3 rounded-2xl border border-line bg-bg2 p-6 transition-colors duration-500 hover:border-line2">
                  <p className="font-display text-[16px] font-bold text-tx" style={{ fontStretch: "112%" }}>
                    {b.name}
                  </p>
                  <p className="text-[13.5px] leading-relaxed text-tx2">{b.detail}</p>
                  <p className="mt-auto pt-2 font-mono text-[11.5px] text-volt">{b.metric}</p>
                  <div className="flex gap-1.5">
                    {b.tags.map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal blur={false} className="mt-14 flex justify-center">
            <Btn to="/contact" size="lg" arrow>
              Start a project
            </Btn>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

/* ------------------------------------------------- interactive index */
function CaseIndex() {
  const motionOK = useMotionOK();
  const [hovered, setHovered] = useState<CaseMeta | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 140, damping: 18, mass: 0.3 });
  const y = useSpring(my, { stiffness: 140, damping: 18, mass: 0.3 });

  function onMove(e: React.PointerEvent) {
    mx.set(e.clientX + 28);
    my.set(e.clientY - 130);
  }

  const previewOn =
    motionOK &&
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: fine)").matches;

  return (
    <section
      ref={containerRef}
      className="relative border-y border-line"
      onPointerMove={previewOn ? onMove : undefined}
      onPointerLeave={() => setHovered(null)}
    >
      <Stagger>
        {caseStudies.map((c) => (
          <StaggerItem key={c.slug}>
            <Link
              to="/work/$slug"
              params={{ slug: c.slug }}
              className="group relative block border-b border-line transition-colors duration-500 last:border-b-0 hover:bg-bg2"
              style={{ ["--accent" as string]: c.accent }}
              onPointerEnter={() => setHovered(c)}
              onFocus={() => setHovered(null)}
            >
              <div className="wrap grid items-center gap-x-8 gap-y-3 py-9 md:grid-cols-[64px_1.4fr_1fr_auto] md:py-12">
                <span className="font-mono text-[12px] tracking-[0.18em] text-tx3 transition-colors duration-300 group-hover:text-volt">
                  {c.index}
                </span>
                <div>
                  <h2 className="display text-[clamp(26px,3.6vw,44px)] text-tx transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">
                    {c.client}
                  </h2>
                  <p className="mt-1.5 text-[14px] font-medium" style={{ color: "var(--accent)" }}>
                    {c.title}
                  </p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-tx3">
                    {c.sector} · {c.year}
                  </span>
                  <span className="font-mono text-[12px] text-tx2">{c.fact}</span>
                </div>
                <span
                  className="hidden size-11 items-center justify-center rounded-full border border-line2 text-[15px] text-tx transition-all duration-300 group-hover:border-volt group-hover:bg-volt group-hover:text-volt-ink md:inline-flex"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>

      {/* cursor-following preview */}
      {previewOn && (
        <AnimatePresence>
          {hovered && (
            <motion.div
              key={hovered.slug}
              className="pointer-events-none fixed left-0 top-0 z-30 hidden w-[340px] overflow-hidden rounded-xl border border-line2 shadow-[0_30px_90px_-30px_rgba(23,26,21,0.4)] lg:block"
              style={{ x, y }}
              initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              aria-hidden="true"
            >
              <ProjectCover variant={hovered.cover} client={hovered.client} className="rounded-none border-0" />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </section>
  );
}
