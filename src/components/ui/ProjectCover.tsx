import { cn } from "@/lib/utils";

type ProjectCoverProps = {
  variant: "toni-guy" | "odette-paris" | "mickeys-pies";
  client: string;
  /** drop a real screenshot in public/work/ and pass its path to replace the artwork */
  img?: string;
  className?: string;
};

/**
 * Original cover artwork per project — abstract, accent-tinted compositions.
 * Deliberately NOT a storefront mockup: nothing here imitates a real site.
 * Swap in real screenshots anytime via the `img` prop.
 */
export function ProjectCover({ variant, client, img, className }: ProjectCoverProps) {
  if (img) {
    return (
      <img
        src={img}
        alt={`${client} — project screenshot`}
        loading="lazy"
        className={cn("aspect-[16/10] w-full rounded-xl border border-line object-cover", className)}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={`${client} — project artwork`}
      className={cn(
        "relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-line bg-[#0d110d]",
        className,
      )}
    >
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 640 400"
        preserveAspectRatio="xMidYMid slice"
      >
        {variant === "toni-guy" && <ToniGuyArt />}
        {variant === "odette-paris" && <OdetteArt />}
        {variant === "mickeys-pies" && <MickeysArt />}
      </svg>
      <span
        aria-hidden="true"
        className="absolute bottom-4 left-5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#8d958a]"
      >
        {client}
      </span>
    </div>
  );
}

/* Precision arcs + vertical strokes — engineered, salon-sharp. */
function ToniGuyArt() {
  return (
    <g>
      <rect width="640" height="400" fill="url(#tg-base)" />
      <defs>
        <linearGradient id="tg-base" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0c1220" />
          <stop offset="100%" stopColor="#070a12" />
        </linearGradient>
      </defs>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <circle
          key={i}
          cx="640"
          cy="0"
          r={90 + i * 62}
          fill="none"
          stroke="#cfd6e2"
          strokeOpacity={0.16 - i * 0.02}
          strokeWidth="1.4"
        />
      ))}
      {[120, 150, 180, 210, 240].map((x, i) => (
        <line
          key={x}
          x1={x}
          y1={400}
          x2={x}
          y2={250 - i * 22}
          stroke="#6fd3a0"
          strokeOpacity={0.5 - i * 0.08}
          strokeWidth="2"
        />
      ))}
      <circle cx="640" cy="0" r="220" fill="#6fd3a0" opacity="0.07" />
      <rect x="120" y="118" width="86" height="2" fill="#cfd6e2" opacity="0.7" />
    </g>
  );
}

/* Thin rings + a cut-stone polygon — quiet, jewelry-precise. */
function OdetteArt() {
  return (
    <g>
      <rect width="640" height="400" fill="url(#od-base)" />
      <defs>
        <linearGradient id="od-base" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0d1119" />
          <stop offset="100%" stopColor="#070a10" />
        </linearGradient>
      </defs>
      <ellipse cx="320" cy="200" rx="190" ry="120" fill="none" stroke="#dcc391" strokeOpacity="0.3" strokeWidth="1" />
      <ellipse cx="320" cy="200" rx="150" ry="92" fill="none" stroke="#dcc391" strokeOpacity="0.2" strokeWidth="1" />
      <ellipse cx="320" cy="200" rx="246" ry="156" fill="none" stroke="#dcc391" strokeOpacity="0.12" strokeWidth="1" />
      <path d="M320 156 L352 196 L320 246 L288 196 Z" fill="#dcc391" opacity="0.85" />
      <path d="M320 156 L352 196 L320 208 L288 196 Z" fill="#f4ead7" opacity="0.9" />
      <circle cx="320" cy="200" r="3" fill="#6fd3a0" opacity="0.9" />
      <line x1="64" y1="330" x2="200" y2="330" stroke="#dcc391" strokeOpacity="0.35" strokeWidth="1" />
    </g>
  );
}

/* Lattice grid + circle segments — warm geometry, bakery rhythm. */
function MickeysArt() {
  return (
    <g>
      <rect width="640" height="400" fill="url(#mk-base)" />
      <defs>
        <linearGradient id="mk-base" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#120d14" />
          <stop offset="100%" stopColor="#08070c" />
        </linearGradient>
      </defs>
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <line
          key={`d-${i}`}
          x1={i * 110 - 120}
          y1={400}
          x2={i * 110 + 80}
          y2={0}
          stroke="#ff7a83"
          strokeOpacity="0.14"
          strokeWidth="1.4"
        />
      ))}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <line
          key={`u-${i}`}
          x1={i * 110 - 60}
          y1={0}
          x2={i * 110 + 140}
          y2={400}
          stroke="#ff7a83"
          strokeOpacity="0.1"
          strokeWidth="1.4"
        />
      ))}
      <circle cx="478" cy="206" r="86" fill="none" stroke="#ff7a83" strokeOpacity="0.65" strokeWidth="2" strokeDasharray="10 7" />
      <circle cx="478" cy="206" r="56" fill="#ff7a83" opacity="0.16" />
      <circle cx="478" cy="206" r="4" fill="#6fd3a0" />
      <rect x="96" y="118" width="86" height="2" fill="#ff7a83" opacity="0.6" />
    </g>
  );
}
