import { Link } from "@tanstack/react-router";
import { navLinks, site } from "@/content/site";
import { useBoring } from "@/lib/boring";

/** Compact single-band footer — contact, index, mode. */
export function Footer() {
  const { boring, toggle } = useBoring();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-line bg-bg2/60">
      <div className="wrap flex flex-col gap-10 py-14">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div>
            <p className="font-display text-[15px] font-bold uppercase tracking-[0.04em] text-tx" style={{ fontStretch: "118%" }}>
              Jay Taraviya
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 block text-[14px] text-tx2 transition-colors hover:text-volt"
            >
              {site.email}
            </a>
            <p className="mt-1.5 font-mono text-[11px] text-tx3">
              {site.location} · {site.timezone}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-7 gap-y-2" aria-label="Footer">
            {[{ label: "Home", to: "/" }, ...navLinks].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-[13.5px] text-tx2 transition-colors hover:text-tx"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="text-[13.5px] text-tx2 transition-colors hover:text-tx"
            >
              GitHub ↗
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-[13.5px] text-tx2 transition-colors hover:text-tx"
            >
              LinkedIn ↗
            </a>
          </nav>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <p className="font-mono text-[11px] text-tx3">
            © {year} {site.name} — Shopify Developer
          </p>
          <button
            type="button"
            onClick={toggle}
            className="rounded-full border border-line px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-tx3 transition-colors hover:border-line2 hover:text-tx"
            aria-pressed={boring}
            title="Flat light theme, zero motion"
          >
            {boring ? "restore motion" : "low-motion mode"}
          </button>
        </div>
      </div>
    </footer>
  );
}
