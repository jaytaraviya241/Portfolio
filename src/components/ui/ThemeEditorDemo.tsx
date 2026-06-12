import { useMemo, useState } from "react";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { cn } from "@/lib/utils";

/**
 * A working miniature of the Shopify theme editor.
 * The settings panel drives a live section preview AND its {% schema %} —
 * exactly how every section I ship behaves in the merchant's admin.
 * Demo product is fictional; nothing here imitates a real store.
 */

type SchemeId = "scheme-1" | "scheme-2" | "scheme-3";

const schemes: Record<
  SchemeId,
  { label: string; bg: string; card: string; tx: string; mut: string; accent: string; accentInk: string; line: string }
> = {
  "scheme-1": {
    label: "Night",
    bg: "#0b1018",
    card: "#111827",
    tx: "#e9eef7",
    mut: "#9aa6bb",
    accent: "#5c8dff",
    accentInk: "#04070f",
    line: "rgba(142,168,215,0.18)",
  },
  "scheme-2": {
    label: "Paper",
    bg: "#f4f6fa",
    card: "#ffffff",
    tx: "#101624",
    mut: "#5a6880",
    accent: "#1d4ed8",
    accentInk: "#ffffff",
    line: "rgba(16,22,36,0.14)",
  },
  "scheme-3": {
    label: "Deep sea",
    bg: "#081226",
    card: "#0d1c3d",
    tx: "#eaf1ff",
    mut: "#8fa5cc",
    accent: "#9fc0ff",
    accentInk: "#061022",
    line: "rgba(159,192,255,0.22)",
  },
};

const defaults = {
  heading: "Aurora Serum",
  scheme: "scheme-1" as SchemeId,
  mediaRight: false,
  radius: 14,
  badge: true,
  compareAt: true,
};

export function ThemeEditorDemo() {
  const [heading, setHeading] = useState(defaults.heading);
  const [scheme, setScheme] = useState<SchemeId>(defaults.scheme);
  const [mediaRight, setMediaRight] = useState(defaults.mediaRight);
  const [radius, setRadius] = useState(defaults.radius);
  const [badge, setBadge] = useState(defaults.badge);
  const [compareAt, setCompareAt] = useState(defaults.compareAt);
  const [tab, setTab] = useState<"preview" | "schema">("preview");
  const [cart, setCart] = useState(0);
  const [justAdded, setJustAdded] = useState(false);

  const s = schemes[scheme];

  function reset() {
    setHeading(defaults.heading);
    setScheme(defaults.scheme);
    setMediaRight(defaults.mediaRight);
    setRadius(defaults.radius);
    setBadge(defaults.badge);
    setCompareAt(defaults.compareAt);
    setCart(0);
  }

  function addToCart() {
    setCart((c) => c + 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 900);
  }

  const schemaCode = useMemo(() => {
    const schema = {
      name: "Featured product",
      settings: [
        { type: "text", id: "heading", label: "Heading", default: heading },
        {
          type: "select",
          id: "color_scheme",
          label: "Color scheme",
          default: scheme,
          options: Object.entries(schemes).map(([value, v]) => ({ value, label: v.label })),
        },
        {
          type: "select",
          id: "media_position",
          label: "Desktop media position",
          default: mediaRight ? "right" : "left",
          options: [
            { value: "left", label: "Left" },
            { value: "right", label: "Right" },
          ],
        },
        { type: "range", id: "corner_radius", label: "Corner radius", min: 0, max: 24, step: 2, unit: "px", default: radius },
        { type: "checkbox", id: "show_badge", label: "Show bestseller badge", default: badge },
        { type: "checkbox", id: "show_compare_at", label: "Show compare-at price", default: compareAt },
      ],
      presets: [{ name: "Featured product" }],
    };
    return JSON.stringify(schema, null, 2);
  }, [heading, scheme, mediaRight, radius, badge, compareAt]);

  const labelCls = "font-mono text-[10.5px] uppercase tracking-[0.14em] text-tx3";
  const fieldCls =
    "w-full rounded-lg border border-line bg-bg px-3 py-2.5 text-[13.5px] text-tx outline-none transition-colors focus:border-volt";

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-bg2 shadow-[0_30px_90px_-45px_rgba(23,26,21,0.5)]">
      {/* editor chrome */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-bg3/60 px-5 py-3">
        <span className="flex items-center gap-3">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-tx3/40" />
            <span className="size-2.5 rounded-full bg-tx3/25" />
            <span className="size-2.5 rounded-full bg-tx3/15" />
          </span>
          <span className="font-mono text-[11.5px] text-tx2">sections/featured-product.liquid</span>
        </span>
        <span className="flex items-center gap-2">
          <span className="rounded-full border border-line px-3 py-1 font-mono text-[10.5px] text-tx2" aria-live="polite">
            Cart · {cart}
          </span>
          <span className="flex overflow-hidden rounded-full border border-line" role="tablist" aria-label="Demo view">
            {(["preview", "schema"] as const).map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={tab === t}
                onClick={() => setTab(t)}
                className={cn(
                  "px-3.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.1em] transition-colors",
                  tab === t ? "bg-volt text-volt-ink" : "text-tx3 hover:text-tx",
                )}
              >
                {t === "preview" ? "Preview" : "{% schema %}"}
              </button>
            ))}
          </span>
          <button
            type="button"
            onClick={reset}
            className="rounded-full border border-line px-3.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.1em] text-tx3 transition-colors hover:border-line2 hover:text-tx"
          >
            Reset
          </button>
        </span>
      </div>

      <div className="grid lg:grid-cols-[1fr_300px]">
        {/* canvas */}
        <div className="border-b border-line p-5 sm:p-8 lg:border-b-0 lg:border-r">
          {tab === "preview" ? (
            <div
              className="transition-colors duration-500"
              style={{ background: s.bg, borderRadius: radius + 8, border: `1px solid ${s.line}` }}
            >
              <div
                className={cn(
                  "flex flex-col gap-6 p-6 sm:p-8 md:items-center",
                  mediaRight ? "md:flex-row-reverse" : "md:flex-row",
                )}
              >
                {/* demo media — original artwork, fictional product */}
                <div
                  className="flex aspect-square w-full max-w-[220px] shrink-0 items-center justify-center self-center transition-all duration-500"
                  style={{ background: s.card, borderRadius: radius, border: `1px solid ${s.line}` }}
                >
                  <svg width="120" height="150" viewBox="0 0 120 150" aria-label="Demo product illustration" role="img">
                    <defs>
                      <linearGradient id="ted-g" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor={s.accent} stopOpacity="0.9" />
                        <stop offset="100%" stopColor={s.accent} stopOpacity="0.45" />
                      </linearGradient>
                    </defs>
                    <rect x="44" y="8" width="32" height="18" rx="4" fill={s.mut} opacity="0.55" />
                    <rect x="30" y="30" width="60" height="112" rx="16" fill="url(#ted-g)" />
                    <rect x="40" y="62" width="40" height="34" rx="4" fill={s.bg} opacity="0.85" />
                    <circle cx="60" cy="79" r="6" fill={s.accent} />
                  </svg>
                </div>
                <div className="min-w-0">
                  {badge && (
                    <span
                      className="mb-3 inline-block px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.14em] transition-all duration-300"
                      style={{ background: s.accent, color: s.accentInk, borderRadius: Math.max(radius - 8, 2) }}
                    >
                      Bestseller
                    </span>
                  )}
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: s.mut }}>
                    Demo Brand — fictional product
                  </p>
                  <h3
                    className="display-soft mt-1.5 break-words text-[clamp(22px,3vw,30px)] transition-colors duration-500"
                    style={{ color: s.tx }}
                  >
                    {heading.trim() || "Untitled product"}
                  </h3>
                  <p className="mt-2 flex items-baseline gap-2.5 text-[15px]" style={{ color: s.tx }}>
                    <span className="font-semibold">$38.00</span>
                    {compareAt && (
                      <s className="text-[13px]" style={{ color: s.mut }}>
                        $48.00
                      </s>
                    )}
                    {compareAt && (
                      <span
                        className="px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.08em]"
                        style={{ border: `1px solid ${s.line}`, color: s.mut, borderRadius: 99 }}
                      >
                        Save 21%
                      </span>
                    )}
                  </p>
                  <p className="mt-3 max-w-[38ch] text-[13px] leading-relaxed" style={{ color: s.mut }}>
                    Sample copy block — merchants edit this from the theme editor, not from code.
                  </p>
                  <button
                    type="button"
                    onClick={addToCart}
                    className="mt-5 px-6 py-3 text-[13.5px] font-semibold transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
                    style={{ background: s.accent, color: s.accentInk, borderRadius: Math.max(radius - 4, 2) }}
                  >
                    {justAdded ? "Added ✓" : "Add to cart"}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <CodeBlock filename="sections/featured-product.liquid" lang="{% schema %}" code={schemaCode} className="max-w-full" />
          )}
        </div>

        {/* settings panel */}
        <aside className="flex flex-col gap-5 p-5 sm:p-6" aria-label="Section settings">
          <p className="eyebrow">Section settings</p>

          <label className="flex flex-col gap-2">
            <span className={labelCls}>Heading</span>
            <input
              value={heading}
              onChange={(e) => setHeading(e.target.value.slice(0, 40))}
              className={fieldCls}
              placeholder="Heading"
            />
          </label>

          <div className="flex flex-col gap-2">
            <span className={labelCls}>Color scheme</span>
            <div className="flex gap-2" role="radiogroup" aria-label="Color scheme">
              {(Object.keys(schemes) as SchemeId[]).map((id) => (
                <button
                  key={id}
                  type="button"
                  role="radio"
                  aria-checked={scheme === id}
                  title={schemes[id].label}
                  onClick={() => setScheme(id)}
                  className={cn(
                    "flex h-9 flex-1 items-center justify-center gap-1.5 rounded-lg border text-[10.5px] font-mono transition-all",
                    scheme === id ? "border-volt text-tx" : "border-line text-tx3 hover:border-line2",
                  )}
                >
                  <span className="size-3.5 rounded-full border border-line" style={{ background: schemes[id].bg }} aria-hidden="true" />
                  {schemes[id].label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className={labelCls}>Desktop media position</span>
            <div className="flex overflow-hidden rounded-lg border border-line">
              {[
                { v: false, label: "Left" },
                { v: true, label: "Right" },
              ].map((o) => (
                <button
                  key={o.label}
                  type="button"
                  aria-pressed={mediaRight === o.v}
                  onClick={() => setMediaRight(o.v)}
                  className={cn(
                    "flex-1 py-2 text-[12.5px] transition-colors",
                    mediaRight === o.v ? "bg-volt font-semibold text-volt-ink" : "text-tx3 hover:text-tx",
                  )}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>

          <label className="flex flex-col gap-2">
            <span className="flex items-center justify-between">
              <span className={labelCls}>Corner radius</span>
              <span className="font-mono text-[11px] text-volt tabular">{radius}px</span>
            </span>
            <input
              type="range"
              min={0}
              max={24}
              step={2}
              value={radius}
              onChange={(e) => setRadius(Number(e.target.value))}
              className="accent-[var(--volt)]"
            />
          </label>

          {[
            { label: "Show bestseller badge", value: badge, set: setBadge },
            { label: "Show compare-at price", value: compareAt, set: setCompareAt },
          ].map((c) => (
            <label key={c.label} className="flex cursor-pointer items-center justify-between gap-3 rounded-lg border border-line px-3 py-2.5 transition-colors hover:border-line2">
              <span className="text-[13px] text-tx2">{c.label}</span>
              <input
                type="checkbox"
                checked={c.value}
                onChange={(e) => c.set(e.target.checked)}
                className="size-4 accent-[var(--volt)]"
              />
            </label>
          ))}

          <p className="mt-auto border-t border-line pt-4 font-mono text-[10.5px] leading-relaxed text-tx3">
            Merchants get exactly this control in the Shopify admin — schema-first, no developer
            needed for content changes.
          </p>
        </aside>
      </div>
    </div>
  );
}
