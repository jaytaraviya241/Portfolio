import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Counter } from "@/components/motion/Counter";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal } from "@/components/motion/Reveal";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("eyebrow", className)}>{children}</p>;
}

export function Chip({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-tx2",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Kbd({ children }: { children: ReactNode }) {
  return (
    <kbd className="inline-flex h-5 min-w-5 items-center justify-center rounded border border-line2 bg-bg3 px-1.5 font-mono text-[11px] text-tx2">
      {children}
    </kbd>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-[10px] bg-volt font-display text-[15px] font-bold text-volt-ink",
        className,
      )}
      style={{ fontStretch: "125%" }}
      aria-hidden="true"
    >
      JT
    </span>
  );
}

type SectionHeadProps = {
  index: string;
  eyebrow: string;
  title: string;
  lede?: string;
  className?: string;
};

/** Section header: quiet numbered eyebrow, sentence-case display title, optional lede. */
export function SectionHead({ index, eyebrow, title, lede, className }: SectionHeadProps) {
  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      <Reveal blur={false} y={12}>
        <Eyebrow className="mb-5">
          <span className="text-volt">{index}</span>
          <span className="mx-2.5" aria-hidden="true">
            —
          </span>
          {eyebrow}
        </Eyebrow>
      </Reveal>
      <TextReveal
        text={title}
        as="h2"
        className="display-soft text-[clamp(28px,3.8vw,46px)] text-tx"
      />
      {lede && (
        <Reveal delay={0.15} y={16}>
          <p className="mt-5 max-w-[56ch] text-[15px] leading-relaxed text-tx2">{lede}</p>
        </Reveal>
      )}
    </div>
  );
}

type StatProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  className?: string;
  accent?: boolean;
};

export function Stat({ value, prefix, suffix, decimals, label, className, accent }: StatProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Counter
        value={value}
        prefix={prefix}
        suffix={suffix}
        decimals={decimals}
        className={cn(
          "display text-[clamp(30px,3.4vw,44px)] leading-none",
          accent ? "text-volt" : "text-tx",
        )}
      />
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-tx3">{label}</span>
    </div>
  );
}
