import { useMemo } from "react";
import { cn, highlight } from "@/lib/utils";

type CodeBlockProps = {
  filename: string;
  lang: string;
  code: string;
  className?: string;
};

/** Styled code panel with a tiny deterministic highlighter — no runtime deps. */
export function CodeBlock({ filename, lang, code, className }: CodeBlockProps) {
  const html = useMemo(() => highlight(code.trim()), [code]);

  return (
    <figure className={cn("code-panel overflow-hidden rounded-xl", className)}>
      <figcaption className="code-panel-head flex items-center justify-between px-5 py-3">
        <span className="flex items-center gap-3">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-white/25" />
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="size-2.5 rounded-full bg-white/10" />
          </span>
          <span className="font-mono text-[11.5px] text-[#9aa394]">{filename}</span>
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#7ee2a8]">{lang}</span>
      </figcaption>
      <pre className="code-surface max-h-[420px] overflow-auto p-5">
        <code dangerouslySetInnerHTML={{ __html: html }} />
      </pre>
    </figure>
  );
}
