import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { LogoMark, Kbd } from "@/components/ui/bits";
import { navLinks, site } from "@/content/site";
import { useMotionOK } from "@/lib/boring";
import { cn } from "@/lib/utils";

export function SiteNav({ onOpenPalette }: { onOpenPalette: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const motionOK = useMotionOK();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 180, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile menu on navigation
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
          scrolled || menuOpen
            ? "border-b border-line bg-bg/85 backdrop-blur-xl"
            : "border-b border-transparent",
        )}
      >
        {/* reading progress */}
        {motionOK && (
          <motion.span
            aria-hidden="true"
            className="deco absolute inset-x-0 top-0 block h-[2px] origin-left bg-volt"
            style={{ scaleX: progress }}
          />
        )}
        <nav className="wrap flex h-16 items-center justify-between gap-4" aria-label="Primary">
          <Link to="/" className="flex items-center gap-3" aria-label="Jay Taraviya — home">
            <LogoMark />
            <span className="hidden flex-col leading-none sm:flex">
              <span className="font-display text-[13.5px] font-bold uppercase tracking-[0.04em]" style={{ fontStretch: "118%" }}>
                Jay Taraviya
              </span>
              <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.22em] text-tx3">
                Shopify Developer
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "rounded-full px-4 py-2 text-[13.5px] font-medium transition-colors duration-300",
                  pathname.startsWith(l.to) ? "text-volt" : "text-tx2 hover:text-tx",
                )}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={onOpenPalette}
              className="hidden size-10 items-center justify-center rounded-full border border-line text-tx3 transition-colors hover:border-line2 hover:text-tx md:inline-flex"
              aria-label="Open command palette (⌘K)"
              title="⌘K"
            >
              <Kbd>⌘K</Kbd>
            </button>
            <Link
              to="/contact"
              className="hidden rounded-full bg-volt px-5 py-2.5 text-[13.5px] font-semibold text-volt-ink transition-colors hover:bg-tx sm:inline-flex"
            >
              Start a project
            </Link>
            <button
              type="button"
              className="inline-flex size-10 flex-col items-center justify-center gap-[5px] rounded-full border border-line md:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
            >
              <span className={cn("h-px w-4 bg-tx transition-transform duration-300", menuOpen && "translate-y-[3px] rotate-45")} />
              <span className={cn("h-px w-4 bg-tx transition-transform duration-300", menuOpen && "-translate-y-[3px] -rotate-45")} />
            </button>
          </div>
        </nav>
      </header>

      {/* mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-bg/97 pt-16 backdrop-blur-xl md:hidden"
            initial={motionOK ? { opacity: 0 } : false}
            animate={{ opacity: 1 }}
            exit={motionOK ? { opacity: 0 } : undefined}
            transition={{ duration: 0.3 }}
          >
            <nav className="wrap flex flex-col gap-1 pt-10" aria-label="Mobile">
              {[{ label: "Home", to: "/" }, ...navLinks].map((l, i) => (
                <motion.span
                  key={l.to}
                  initial={motionOK ? { opacity: 0, y: 18 } : false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={l.to}
                    className="display block border-b border-line py-5 text-[40px] text-tx"
                  >
                    {l.label}
                  </Link>
                </motion.span>
              ))}
              <div className="mt-8">
                <a href={`mailto:${site.email}`} className="font-mono text-[12px] text-tx2">
                  {site.email}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
