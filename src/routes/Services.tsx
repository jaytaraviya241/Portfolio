import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/PageShell";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { Btn } from "@/components/ui/Btn";
import { Chip, Eyebrow } from "@/components/ui/bits";
import { process } from "@/content/process";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { useMotionOK } from "@/lib/boring";
import { scrollToId } from "@/lib/utils";

const engagements = [
  {
    name: "Project",
    line: "Scoped build with a launch window",
    points: ["Fixed scope & estimate", "Weekly preview links", "Docs + Loom handoff"],
  },
  {
    name: "Sprint",
    line: "One sharp problem, one focused week",
    points: ["Perf rescue or PDP rebuild", "Before/after report", "No long contract"],
  },
  {
    name: "Retainer",
    line: "Ongoing engineering for a live store",
    points: ["Experiment pipeline", "New sections monthly", "Priority response"],
  },
];

export default function Services() {
  const motionOK = useMotionOK();
  const hash = useRouterState({ select: (s) => s.location.hash });

  // deep links like /services#performance land on the right system
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => scrollToId(hash.replace("#", ""), motionOK), 350);
      return () => clearTimeout(t);
    }
  }, [hash, motionOK]);

  return (
    <PageShell title="Services">
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-44">
        <span aria-hidden="true" className="deco glow left-[10%] top-[20%] h-72 w-72 bg-volt/10" />
        <div className="wrap relative">
          <Reveal y={12} blur={false}>
            <Eyebrow className="mb-5">Services</Eyebrow>
          </Reveal>
          <TextReveal
            text="Four things I do well."
            as="h1"
            className="display-soft text-[clamp(34px,5vw,64px)] text-tx"
          />
          <Reveal delay={0.2} y={18}>
            <p className="mt-6 max-w-[52ch] text-[15.5px] leading-relaxed text-tx2">
              Curated on purpose — each with defined deliverables and a spec it must meet. Not sure
              which fits? Describe the problem and I'll tell you honestly.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line">
        {services.map((s) => (
          <article
            key={s.id}
            id={s.id}
            className="group scroll-mt-24 border-b border-line transition-colors duration-500 hover:bg-bg2/60"
          >
            <div className="wrap grid gap-x-12 gap-y-6 py-14 md:py-16 lg:grid-cols-[80px_1.2fr_1fr]">
              <Reveal blur={false} y={10}>
                <span
                  className="display block text-[clamp(36px,4vw,56px)] leading-none text-transparent transition-colors duration-500 group-hover:text-volt"
                  style={{ WebkitTextStroke: "1px var(--line2)" }}
                  aria-hidden="true"
                >
                  {s.num}
                </span>
              </Reveal>
              <div>
                <Reveal y={16}>
                  <h2 className="display-soft text-[clamp(22px,2.6vw,32px)] text-tx">{s.name}</h2>
                  <p className="mt-4 max-w-[52ch] text-[14.5px] leading-relaxed text-tx2">{s.blurb}</p>
                  <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-volt">
                    {s.spec}
                  </p>
                </Reveal>
              </div>
              <div className="flex flex-col gap-3">
                <Reveal delay={0.1} y={16}>
                  <p className="eyebrow mb-3">Ships with</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.deliverables.map((d) => (
                      <Chip key={d}>{d}</Chip>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="border-b border-line bg-bg2/40 py-24 md:py-28">
        <div className="wrap">
          <Reveal>
            <div className="mb-12">
              <p className="eyebrow mb-5">
                <span className="text-volt">Process</span>
                <span className="mx-2.5" aria-hidden="true">—</span>
                The same on every engagement
              </p>
              <h2 className="display-soft text-[clamp(28px,3.6vw,44px)] text-tx">
                From scope to launch window.
              </h2>
            </div>
          </Reveal>
          <Stagger className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((p) => (
              <StaggerItem key={p.num}>
                <div className="flex h-full flex-col gap-3 border-t border-line pt-5">
                  <span className="font-mono text-[11px] text-volt">{p.num}</span>
                  <h3 className="text-[16.5px] font-semibold text-tx">{p.name}</h3>
                  <p className="text-[13.5px] leading-relaxed text-tx2">{p.body}</p>
                  <p className="mt-auto pt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-tx3">
                    → {p.artifact}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-24 md:py-28">
        <div className="wrap">
          <Reveal>
            <div className="mb-10 flex items-center gap-4">
              <Eyebrow>Engagement modes</Eyebrow>
              <span className="h-px flex-1 bg-line" aria-hidden="true" />
            </div>
          </Reveal>
          <Stagger className="grid gap-4 md:grid-cols-3">
            {engagements.map((e) => (
              <StaggerItem key={e.name} className="h-full">
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-line bg-bg2 p-7">
                  <h3 className="font-display text-[20px] font-bold uppercase text-tx" style={{ fontStretch: "118%" }}>
                    {e.name}
                  </h3>
                  <p className="text-[13.5px] text-tx2">{e.line}</p>
                  <ul className="mt-1 flex flex-col gap-2">
                    {e.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-[13.5px] text-tx2">
                        <span className="mt-0.5 font-mono text-[11px] text-volt" aria-hidden="true">→</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal blur={false} className="mt-14 flex justify-center">
            <Btn href={`mailto:${site.email}`} size="lg" arrow>
              Describe your problem — {site.responseTime.toLowerCase()}
            </Btn>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
