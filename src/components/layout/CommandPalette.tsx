import { useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Kbd } from "@/components/ui/bits";
import { caseStudies } from "@/content/caseStudies";
import { site } from "@/content/site";
import { useBoring, useMotionOK } from "@/lib/boring";
import { cn } from "@/lib/utils";

type Item = {
  id: string;
  group: "Pages" | "Case studies" | "Actions";
  label: string;
  hint?: string;
  keywords?: string;
  run: () => void;
};

type Props = { open: boolean; setOpen: (v: boolean) => void };

export function CommandPalette({ open, setOpen }: Props) {
  const navigate = useNavigate();
  const { boring, toggle } = useBoring();
  const motionOK = useMotionOK();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const [copied, setCopied] = useState(false);

  const items = useMemo<Item[]>(() => {
    const go = (to: string) => () => {
      setOpen(false);
      navigate({ to });
    };
    return [
      { id: "home", group: "Pages", label: "Home", hint: "/", run: go("/") },
      { id: "work", group: "Pages", label: "Work", hint: "/work", run: go("/work") },
      { id: "services", group: "Pages", label: "Services", hint: "/services", run: go("/services") },
      { id: "about", group: "Pages", label: "About", hint: "/about", run: go("/about") },
      { id: "contact", group: "Pages", label: "Contact", hint: "/contact", run: go("/contact") },
      ...caseStudies.map((c) => ({
        id: c.slug,
        group: "Case studies" as const,
        label: `${c.client} — ${c.title}`,
        hint: c.sector,
        keywords: c.stack.join(" "),
        run: () => {
          setOpen(false);
          navigate({ to: "/work/$slug", params: { slug: c.slug } });
        },
      })),
      {
        id: "email",
        group: "Actions",
        label: copied ? "Email copied ✓" : "Copy email address",
        hint: site.email,
        keywords: "mail contact",
        run: () => {
          navigator.clipboard?.writeText(site.email).then(() => {
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
              setOpen(false);
            }, 900);
          });
        },
      },
      {
        id: "github",
        group: "Actions",
        label: "Open GitHub",
        hint: "jaytaraviya241",
        run: () => {
          window.open(site.github, "_blank", "noreferrer");
          setOpen(false);
        },
      },
      {
        id: "linkedin",
        group: "Actions",
        label: "Open LinkedIn",
        hint: "jaytaraviya241",
        run: () => {
          window.open(site.linkedin, "_blank", "noreferrer");
          setOpen(false);
        },
      },
      {
        id: "boring",
        group: "Actions",
        label: boring ? "Restore motion + dark theme" : "Low-motion light mode",
        hint: "flat, fast, zero motion",
        keywords: "theme toggle mode",
        run: () => {
          toggle();
          setOpen(false);
        },
      },
    ];
  }, [navigate, setOpen, boring, toggle, copied]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((i) =>
      `${i.label} ${i.hint ?? ""} ${i.keywords ?? ""}`.toLowerCase().includes(q),
    );
  }, [items, query]);

  // global shortcut
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(!open);
      }
      if (e.key === "Escape" && open) setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      requestAnimationFrame(() => inputRef.current?.focus());
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => setActive(0), [query]);

  function onInputKey(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[active]?.run();
    }
  }

  let lastGroup = "";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-start justify-center bg-bg/70 px-4 pt-[14vh] backdrop-blur-sm"
          initial={motionOK ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          exit={motionOK ? { opacity: 0 } : undefined}
          transition={{ duration: 0.18 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            className="w-full max-w-[560px] overflow-hidden rounded-2xl border border-line2 bg-bg2 shadow-[0_40px_120px_-30px_rgba(23,26,21,0.35)]"
            initial={motionOK ? { opacity: 0, y: -14, scale: 0.985 } : false}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={motionOK ? { opacity: 0, y: -10, scale: 0.985 } : undefined}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 border-b border-line px-5">
              <span className="font-mono text-[12px] text-volt" aria-hidden="true">
                ▸
              </span>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onInputKey}
                placeholder="Jump to a page, case study, action…"
                className="h-14 flex-1 bg-transparent text-[14.5px] text-tx outline-none placeholder:text-tx3"
                aria-label="Search commands"
              />
              <Kbd>esc</Kbd>
            </div>
            <ul className="max-h-[46vh] overflow-y-auto p-2" role="listbox">
              {filtered.length === 0 && (
                <li className="px-4 py-8 text-center font-mono text-[12px] text-tx3">
                  No matches — try "work" or "contact".
                </li>
              )}
              {filtered.map((item, idx) => {
                const showGroup = item.group !== lastGroup;
                lastGroup = item.group;
                return (
                  <li key={item.id}>
                    {showGroup && (
                      <p className="px-3 pb-1.5 pt-3 font-mono text-[9.5px] uppercase tracking-[0.2em] text-tx3">
                        {item.group}
                      </p>
                    )}
                    <button
                      type="button"
                      role="option"
                      aria-selected={idx === active}
                      className={cn(
                        "flex w-full items-center justify-between gap-4 rounded-lg px-3 py-2.5 text-left text-[13.5px] transition-colors",
                        idx === active ? "bg-bg3 text-tx" : "text-tx2 hover:bg-bg3/60",
                      )}
                      onMouseEnter={() => setActive(idx)}
                      onClick={item.run}
                    >
                      <span>{item.label}</span>
                      {item.hint && (
                        <span className="truncate font-mono text-[10.5px] text-tx3">{item.hint}</span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="flex items-center gap-4 border-t border-line px-5 py-2.5">
              <span className="flex items-center gap-1.5 font-mono text-[9.5px] text-tx3">
                <Kbd>↑↓</Kbd> navigate
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[9.5px] text-tx3">
                <Kbd>↵</Kbd> select
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
