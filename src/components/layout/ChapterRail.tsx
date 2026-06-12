import { useActiveSection } from "@/lib/useActiveSection";
import { useMotionOK } from "@/lib/boring";
import { cn, scrollToId } from "@/lib/utils";

export type Chapter = { id: string; num: string; label: string };

/** Sticky chapter index — Editions-style section-aware navigation (≥xl). */
export function ChapterRail({ chapters }: { chapters: Chapter[] }) {
  const active = useActiveSection(chapters.map((c) => c.id));
  const motionOK = useMotionOK();

  return (
    <nav
      className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-1 xl:flex"
      aria-label="Chapters"
    >
      {chapters.map((c) => {
        const isActive = active === c.id;
        return (
          <button
            key={c.id}
            type="button"
            onClick={() => scrollToId(c.id, motionOK)}
            className={cn(
              "group flex items-center gap-3 rounded-full px-2 py-1.5 text-left transition-colors duration-300",
              isActive ? "text-volt" : "text-tx3 hover:text-tx2",
            )}
            aria-current={isActive ? "true" : undefined}
          >
            <span className="font-mono text-[9px] tracking-[0.1em]">{c.num}</span>
            <span
              className={cn(
                "h-px bg-current transition-all duration-500",
                isActive ? "w-7" : "w-3.5 group-hover:w-5",
              )}
              aria-hidden="true"
            />
            <span
              className={cn(
                "font-mono text-[9.5px] uppercase tracking-[0.16em] transition-opacity duration-300",
                isActive ? "opacity-100" : "opacity-0 group-hover:opacity-70",
              )}
            >
              {c.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
