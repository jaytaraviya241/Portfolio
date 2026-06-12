import { Link } from "@tanstack/react-router";
import { Tilt } from "@/components/motion/Tilt";
import { ProjectCover } from "@/components/ui/ProjectCover";
import type { CaseMeta } from "@/content/caseStudies";
import { cn } from "@/lib/utils";

type CaseCardProps = {
  meta: CaseMeta;
  className?: string;
};

/** Case-study card — original cover artwork, client, one factual footer line. */
export function CaseCard({ meta, className }: CaseCardProps) {
  return (
    <Tilt max={2.5} className="h-full">
      <Link
        to="/work/$slug"
        params={{ slug: meta.slug }}
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-bg2 transition-colors duration-500 hover:border-volt/40",
          className,
        )}
      >
        {/* pointer glare */}
        <span
          aria-hidden="true"
          className="deco pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(420px circle at calc(var(--mx,50)*1%) calc(var(--my,50)*1%), color-mix(in oklab, var(--volt) 7%, transparent), transparent 70%)",
          }}
        />
        <div className="p-5 pb-0 sm:p-6 sm:pb-0">
          <div className="overflow-hidden rounded-xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.015]">
            <ProjectCover variant={meta.cover} client={meta.client} />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-2.5 p-6 sm:p-7">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-tx3">
            {meta.sector} · {meta.year}
          </span>
          <h3 className="display-soft text-[clamp(20px,2.1vw,24px)] text-tx">{meta.client}</h3>
          <p className="text-[14px] leading-snug text-tx2">{meta.title}</p>
          <div className="mt-auto flex items-center justify-between border-t border-line pt-4">
            <span className="font-mono text-[11.5px] text-tx2">{meta.fact}</span>
            <span
              className="inline-flex size-9 items-center justify-center rounded-full border border-line2 text-[13.5px] text-tx transition-all duration-300 group-hover:border-volt group-hover:bg-volt group-hover:text-volt-ink"
              aria-hidden="true"
            >
              ↗
            </span>
          </div>
        </div>
      </Link>
    </Tilt>
  );
}
