import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
  /** seconds for one full loop */
  speed?: number;
  reverse?: boolean;
};

/** CSS-driven marquee — GPU-cheap, pauses on hover, hidden in boring mode via .deco. */
export function Marquee({ children, className, speed = 36, reverse = false }: MarqueeProps) {
  return (
    <div className={cn("marquee overflow-hidden", className)}>
      <div
        className="marquee-row flex w-max items-center"
        style={{
          ["--marquee-speed" as string]: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <div className="flex w-max items-center">{children}</div>
        <div className="flex w-max items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
