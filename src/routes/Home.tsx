import { Link } from "@tanstack/react-router";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { PageShell } from "@/components/layout/PageShell";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { Btn } from "@/components/ui/Btn";
import { CaseCard } from "@/components/ui/CaseCard";
import { ThemeEditorDemo } from "@/components/ui/ThemeEditorDemo";
import { SectionHead, Stat } from "@/components/ui/bits";
import { caseStudies } from "@/content/caseStudies";
import { counters, testimonials } from "@/content/proof";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { useMotionOK } from "@/lib/boring";

export default function Home() {
  return (
    <PageShell title="Shopify Developer">
      <Hero />
      <SelectedWork />
      <EditorDemo />
      <WhatIDo />
      <Proof />
      <Start />
    </PageShell>
  );
}

/* ================================================== hero */
function Hero() {
  const motionOK = useMotionOK();
  const mx = useMotionValue(38);
  const my = useMotionValue(30);
  const spotlight = useMotionTemplate`radial-gradient(560px circle at ${mx}% ${my}%, color-mix(in oklab, var(--volt) 10%, transparent), transparent 70%)`;

  function onPointerMove(e: React.PointerEvent<HTMLElement>) {
    if (!motionOK) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  }

  return (
    <section
      className="relative flex min-h-[92svh] items-center overflow-hidden pt-16"
      onPointerMove={onPointerMove}
    >
      {/* pointer-reactive spotlight */}
      {motionOK && (
        <motion.div
          aria-hidden="true"
          className="deco absolute inset-0"
          style={{ backgroundImage: spotlight }}
        />
      )}
      <div
        aria-hidden="true"
        className="deco absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
          backgroundSize: "84px 84px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 35%, black 0%, transparent 72%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 35%, black 0%, transparent 72%)",
          opacity: 0.4,
        }}
      />
      <span aria-hidden="true" className="deco glow left-[12%] top-[18%] h-80 w-80 bg-volt/10" />

      <div className="wrap relative w-full py-24">
        <Reveal y={12} blur={false}>
          <span className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-line px-4 py-1.5">
            <span className="size-1.5 rounded-full bg-volt pulse-dot" aria-hidden="true" />
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-tx2">
              {site.availability}
            </span>
          </span>
        </Reveal>

        <h1 className="display text-[clamp(46px,8vw,108px)] text-tx">
          <TextReveal text="Jay" as="span" className="block" delay={0.05} />
          <TextReveal
              text="Taraviya"
              as="span"
              className="block"
              wordClassName="bg-[linear-gradient(115deg,var(--volt)_0%,#2c9a66_55%,#7cc59b_115%)] bg-clip-text text-transparent"
              delay={0.16}
            />
        </h1>

        <Reveal delay={0.35} y={18}>
          <p className="mt-8 max-w-[44ch] text-[clamp(15.5px,1.4vw,18px)] leading-relaxed text-tx2">
            Shopify Developer. I build storefronts that load fast, convert hard, and stay
            merchant-editable.
          </p>
        </Reveal>

        <Reveal delay={0.5} y={14} blur={false}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Btn to="/work" size="lg" arrow>
              View selected work
            </Btn>
            <Btn to="/contact" size="lg" variant="ghost">
              Start a project
            </Btn>
          </div>
        </Reveal>

        <Reveal delay={0.7} blur={false}>
          <div className="mt-20 flex items-center justify-between border-t border-line pt-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-tx3">
              Shopify Plus · OS 2.0 · Performance · CRO
            </span>
            <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-tx3 sm:block">
              {site.location} · {site.timezone}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================== selected work */
function SelectedWork() {
  return (
    <section className="py-24 md:py-32">
      <div className="wrap">
        <SectionHead
          index="01"
          eyebrow="Selected work"
          title="Three storefronts, documented."
        />
        <Stagger className="grid gap-5 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <StaggerItem key={c.slug} className="h-full">
              <CaseCard meta={c} />
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.15} blur={false} className="mt-12">
          <Btn to="/work" variant="bare" arrow>
            All case studies
          </Btn>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================== theme editor demo */
function EditorDemo() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <span aria-hidden="true" className="deco glow right-[8%] top-[12%] h-72 w-72 bg-volt/10" />
      <div className="wrap relative">
        <SectionHead
          index="02"
          eyebrow="Theme customization, demonstrated"
          title="Try the theme editor."
          lede="Every section I ship is schema-first. This demo behaves exactly like the settings panel your team gets in the Shopify admin — change anything, then open the schema tab to see the Liquid section settings update live."
        />
        <Reveal y={30}>
          <ThemeEditorDemo />
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================== what i do */
function WhatIDo() {
  return (
    <section className="border-y border-line bg-bg2/40 py-24 md:py-32">
      <div className="wrap">
        <SectionHead
          index="03"
          eyebrow="Services"
          title="What I build."
        />
        <Stagger className="flex flex-col">
          {services.map((s) => (
            <StaggerItem key={s.id}>
              <Link
                to="/services"
                hash={s.id}
                className="group grid items-baseline gap-x-10 gap-y-1 border-b border-line py-6 transition-colors duration-300 last:border-b-0 hover:bg-bg2 sm:grid-cols-[56px_240px_1fr_auto] md:py-7"
              >
                <span className="font-mono text-[11px] text-tx3 transition-colors duration-300 group-hover:text-volt">
                  {s.num}
                </span>
                <h3 className="display-soft text-[17px] text-tx">{s.name}</h3>
                <p className="text-[13.5px] leading-relaxed text-tx2 sm:truncate">{s.short}</p>
                <span
                  className="hidden text-[14px] text-tx3 transition-all duration-300 group-hover:translate-x-1 group-hover:text-volt sm:block"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ================================================== proof */
function Proof() {
  const t = testimonials[0];
  return (
    <section className="py-24 md:py-32">
      <div className="wrap">
        <SectionHead index="04" eyebrow="Proof" title="Measured, not promised." />
        <Stagger className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
          {counters.map((c) => (
            <StaggerItem key={c.label}>
              <Stat value={c.value} suffix={"suffix" in c ? c.suffix : undefined} label={c.label} />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-20">
          <figure className="border-l-2 border-volt pl-8 md:pl-10">
            <blockquote className="max-w-[52ch] text-[clamp(16.5px,1.8vw,20px)] font-medium leading-relaxed text-tx">
              "{t.quote.split(". ").slice(0, 2).join(". ")}."
            </blockquote>
            <figcaption className="mt-5 text-[13.5px] text-tx2">
              {t.author} — <span className="text-tx3">{t.role}</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================== start */
function Start() {
  return (
    <section className="border-t border-line bg-bg2/40 py-24 md:py-32">
      <div className="wrap">
        <TextReveal
          text="Let's build your storefront."
          as="h2"
          className="display-soft max-w-[16ch] text-[clamp(30px,4.2vw,52px)] text-tx"
        />
        <Reveal delay={0.15} y={16}>
          <p className="mt-6 max-w-[46ch] text-[15px] leading-relaxed text-tx2">
            Replatform, rebuild, rescue, or net-new — tell me what you're selling and what's
            broken. I reply within 24 hours.
          </p>
        </Reveal>
        <Reveal delay={0.25} blur={false}>
          <div className="mt-9 flex flex-wrap gap-4">
            <Btn to="/contact" size="lg" arrow>
              Start a project
            </Btn>
            <Btn href={`mailto:${site.email}`} size="lg" variant="ghost">
              {site.email}
            </Btn>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
