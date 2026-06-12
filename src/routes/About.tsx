import { PageShell } from "@/components/layout/PageShell";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { Btn } from "@/components/ui/Btn";
import { Eyebrow, LogoMark } from "@/components/ui/bits";
import { site } from "@/content/site";
import { stackGroups } from "@/content/stack";

const principles = [
  {
    name: "Architecture first",
    body: "I think about system design before writing a line of Liquid. Content models and config strategy come before pixels.",
  },
  {
    name: "App-free by default",
    body: "Every app is a subscription, a script tag, and a point of failure. I build on native primitives first — apps must earn their keep.",
  },
  {
    name: "Document everything",
    body: "Loom walkthrough, README, and changelog on every handoff. A build you can't operate isn't finished.",
  },
  {
    name: "Safe by default",
    body: "Never on a live theme. Dev themes, feature flags, versioned releases, rehearsed launches.",
  },
];

const timeline = [
  {
    year: "→ 2024",
    title: "Stores across food, fashion, beauty, DTC",
    body: "Theme customization, Figma builds, PDP and cart systems — learning what breaks stores and what keeps them editable.",
  },
  {
    year: "2025",
    title: "First major independent system",
    body: "Mickey's Pies & Cherry: a fully app-free fulfillment OS — metafield config, rules engine, Shopify Function validation.",
  },
  {
    year: "2025–26",
    title: "Plus-scale engagements",
    body: "TONI&GUY replatform (architecture & performance) and the Odette Paris maison build — Markets, metaobjects, token systems.",
  },
  {
    year: "Now",
    title: "Booking July 2026",
    body: "Taking on replatforms, performance rescues, and design-led builds. One serious project at a time.",
  },
];

export default function About() {
  return (
    <PageShell title="About">
      <section className="relative overflow-hidden pt-36 pb-20 md:pt-44">
        <span aria-hidden="true" className="deco glow right-[12%] top-[16%] h-72 w-72 bg-volt/10" />
        <div className="wrap relative grid items-start gap-14 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <Reveal y={12} blur={false}>
              <Eyebrow className="mb-5">About — the developer behind the receipts</Eyebrow>
            </Reveal>
            <TextReveal
              text="I build Shopify stores the right way."
              as="h1"
              className="display-soft text-[clamp(34px,5vw,64px)] text-tx"
            />
            <Reveal delay={0.2} y={18}>
              <div className="mt-8 max-w-[62ch] space-y-5 text-[15.5px] leading-[1.85] text-tx2">
                <p>
                  I'm Jay Taraviya — a Shopify developer and eCommerce frontend engineer based in
                  Rajkot, Gujarat. I build <strong className="text-tx">production-grade
                  storefronts</strong>: the kind that load fast, stay maintainable, and let
                  merchants run their business without calling a developer for every content
                  change.
                </p>
                <p>
                  My approach starts with architecture. Centralized config systems, native Shopify
                  primitives, proper OS 2.0 section design — stores that survive theme updates and
                  scale with the business. I'm obsessive about{" "}
                  <strong className="text-tx">Lighthouse scores, app removal, and merchant
                  editability</strong>, because those three things decide whether a storefront
                  compounds or decays.
                </p>
                <p>
                  The work spans food, fashion, beauty, and DTC — from an app-free fulfillment
                  system on Dawn to Plus-scale replatforms and pixel-faithful maison builds.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3} blur={false}>
              <div className="mt-9 flex flex-wrap gap-4">
                <Btn to="/work" arrow>
                  See the proof
                </Btn>
                <Btn href={site.linkedin} variant="ghost">
                  LinkedIn
                </Btn>
                <Btn href={site.github} variant="ghost">
                  GitHub
                </Btn>
              </div>
            </Reveal>
          </div>

          {/* identity card — swap the monogram block for a portrait when ready */}
          <Reveal delay={0.25} y={30}>
            <div className="rounded-2xl border border-line bg-bg2 p-7">
              <div className="mb-6 flex aspect-[4/3.4] items-center justify-center rounded-xl border border-line bg-bg">
                <LogoMark className="size-20 rounded-2xl text-[32px]" />
              </div>
              <ul className="flex flex-col font-mono text-[12px]">
                {[
                  ["Name", site.name],
                  ["Role", "Shopify & eCommerce frontend"],
                  ["Base", `${site.location} · ${site.timezone}`],
                  ["Languages", "Liquid · TS · GraphQL"],
                  ["Status", site.availability.replace("Booking new builds — ", "Booking · ")],
                ].map(([k, v]) => (
                  <li key={k} className="flex items-center justify-between gap-4 border-b border-line py-3 last:border-0">
                    <span className="uppercase tracking-[0.12em] text-tx3">{k}</span>
                    <span className="text-right text-tx">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-bg2/40 py-20 md:py-24">
        <div className="wrap">
          <Reveal>
            <div className="mb-10 flex items-center gap-4">
              <Eyebrow>Non-negotiables</Eyebrow>
              <span className="h-px flex-1 bg-line" aria-hidden="true" />
            </div>
          </Reveal>
          <Stagger className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {principles.map((p, i) => (
              <StaggerItem key={p.name} className="h-full">
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-bg p-7">
                  <span className="font-mono text-[11px] tracking-[0.18em] text-volt">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="display-soft text-[18px] text-tx">{p.name}</h2>
                  <p className="text-[13.5px] leading-relaxed text-tx2">{p.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="border-b border-line py-20 md:py-24">
        <div className="wrap">
          <Reveal>
            <div className="mb-10 flex items-center gap-4">
              <Eyebrow>Stack & capabilities</Eyebrow>
              <span className="h-px flex-1 bg-line" aria-hidden="true" />
            </div>
          </Reveal>
          <Stagger className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
            {stackGroups.map((g) => (
              <StaggerItem key={g.name}>
                <div>
                  <h3 className="text-[14px] font-semibold text-tx">{g.name}</h3>
                  <p className="mb-4 mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-volt">
                    {g.note}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {g.items.map((item) => (
                      <li key={item} className="text-[13.5px] leading-snug text-tx2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="wrap grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Reveal>
              <Eyebrow className="mb-5">Trajectory</Eyebrow>
              <h2 className="display-soft text-[clamp(28px,3.6vw,46px)] text-tx">
                Built in public, measured in launches.
              </h2>
            </Reveal>
          </div>
          <Stagger className="flex flex-col">
            {timeline.map((t) => (
              <StaggerItem key={t.title}>
                <div className="group grid gap-2 border-b border-line py-7 sm:grid-cols-[110px_1fr] sm:gap-8">
                  <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-volt">
                    {t.year}
                  </span>
                  <div>
                    <h3 className="text-[17px] font-semibold text-tx">{t.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-tx2">{t.body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </PageShell>
  );
}
