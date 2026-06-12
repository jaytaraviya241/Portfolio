import clsx, { type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/** Tiny deterministic syntax highlighter for code panels (liquid/js). */
export function highlight(code: string): string {
  const esc = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return esc
    .replace(/(\{%-?[\s\S]*?-?%\}|\{\{[\s\S]*?\}\})/g, `<span class="tk-k">$1</span>`)
    .replace(/(\/\/[^\n]*|\{#[^#]*#\}|^\s*#[^\n]*)/gm, `<span class="tk-c">$1</span>`)
    .replace(/(&quot;[^&]*?&quot;|'[^'\n]*'|`[^`]*`)/g, `<span class="tk-s">$1</span>`)
    .replace(
      /\b(const|let|var|function|return|export|default|class|new|if|else|import|from|await|async)\b/g,
      `<span class="tk-k">$1</span>`,
    )
    .replace(/\b([A-Za-z_$][\w$]*)\s*(?=\()/g, `<span class="tk-f">$1</span>`);
}

export function scrollToId(id: string, smooth: boolean) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
}
