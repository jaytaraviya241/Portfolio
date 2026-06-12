import { useEffect, useState, type FormEvent } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { Btn } from "@/components/ui/Btn";
import { site } from "@/content/site";

const projectTypes = [
  "New Shopify build",
  "Replatform / migration",
  "Performance rescue",
  "Figma → Shopify",
  "CRO / PDP & cart",
  "APIs / Functions / integrations",
  "Something else",
];

const steps = [
  { k: "T+0", v: "Your brief lands. I read it properly." },
  { k: "< 24h", v: "A real reply — questions, not boilerplate." },
  { k: "48h", v: "Scope document with estimate and timeline." },
  { k: "Kickoff", v: "Dev theme up, weekly preview links begin." },
];

function ISTClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "Asia/Kolkata",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="tabular">{time || "—"}</span>;
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard?.writeText(site.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `[${data.get("type")}] Project inquiry — ${data.get("name")}`,
    );
    const body = encodeURIComponent(
      `Hi Jay,\n\n${data.get("message")}\n\n— ${data.get("name")}\n${data.get("email")}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  const inputCls =
    "w-full rounded-xl border border-line bg-bg2 px-4 py-3.5 text-[14px] text-tx outline-none transition-colors placeholder:text-tx3 focus:border-volt";

  return (
    <PageShell title="Contact">
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-44">
        <span aria-hidden="true" className="deco glow left-[14%] top-[18%] h-72 w-72 bg-volt/10" />
        <div className="wrap relative">
          <Reveal y={12} blur={false}>
            <div className="mb-5 flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-line px-4 py-1.5">
                <span className="size-1.5 rounded-full bg-volt pulse-dot" aria-hidden="true" />
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-tx2">
                  {site.availability}
                </span>
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-tx3">
                Local time <ISTClock /> IST
              </span>
            </div>
          </Reveal>
          <TextReveal
            text="Let's build your storefront."
            as="h1"
            className="display-soft text-[clamp(34px,5vw,64px)] text-tx"
          />
          <Reveal delay={0.2} y={18}>
            <p className="mt-6 max-w-[58ch] text-[15.5px] leading-relaxed text-tx2">
              Tell me what you're selling and what's broken. The more specific the brief, the
              faster the useful reply — store URL, the metric that hurts, and the deadline if one
              exists.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="wrap grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          {/* brief form — opens a pre-filled email, no backend required */}
          <Reveal y={24}>
            <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-bg2/60 p-7 md:p-9">
              <p className="eyebrow mb-7">Project brief</p>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-tx3">
                    Name
                  </span>
                  <input name="name" required placeholder="Your name" className={inputCls} />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-tx3">
                    Email
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@brand.com"
                    className={inputCls}
                  />
                </label>
              </div>
              <label className="mt-5 flex flex-col gap-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-tx3">
                  Project type
                </span>
                <select name="type" className={inputCls} defaultValue={projectTypes[0]}>
                  {projectTypes.map((t) => (
                    <option key={t} value={t} className="bg-bg2 text-tx">
                      {t}
                    </option>
                  ))}
                </select>
              </label>
              <label className="mt-5 flex flex-col gap-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-tx3">
                  The brief
                </span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Store URL, what's broken or what you're launching, timeline, budget range if you have one…"
                  className={inputCls}
                />
              </label>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Btn type="submit" size="lg" arrow magnetic={false}>
                  Send the brief
                </Btn>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-tx3">
                  opens your mail app, pre-filled
                </span>
              </div>
            </form>
          </Reveal>

          <div className="flex flex-col gap-5">
            <Reveal delay={0.1} y={24}>
              <div className="rounded-2xl border border-line bg-bg2 p-7">
                <p className="eyebrow mb-5">Direct line</p>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="group flex w-full items-center justify-between gap-3 rounded-xl border border-line bg-bg px-4 py-3.5 text-left transition-colors hover:border-volt"
                >
                  <span className="truncate font-mono text-[12.5px] text-tx">{site.email}</span>
                  <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.12em] text-tx3 transition-colors group-hover:text-volt">
                    {copied ? "copied ✓" : "copy"}
                  </span>
                </button>
                <div className="mt-4 flex gap-3">
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-xl border border-line px-4 py-3 text-center text-[13.5px] text-tx2 transition-colors hover:border-line2 hover:text-tx"
                  >
                    LinkedIn ↗
                  </a>
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-xl border border-line px-4 py-3 text-center text-[13.5px] text-tx2 transition-colors hover:border-line2 hover:text-tx"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.18} y={24}>
              <div className="rounded-2xl border border-line bg-bg2 p-7">
                <p className="eyebrow mb-5">What happens next</p>
                <ol className="flex flex-col">
                  {steps.map((s, i) => (
                    <li
                      key={s.k}
                      className="grid grid-cols-[64px_1fr] items-baseline gap-4 border-b border-line py-3.5 last:border-0"
                    >
                      <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-volt">
                        {s.k}
                      </span>
                      <span className="text-[13.5px] leading-relaxed text-tx2">
                        <span className="mr-2 font-mono text-[11px] text-tx3">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {s.v}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </PageShell>
  );
}
