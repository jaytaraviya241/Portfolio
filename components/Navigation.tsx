"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { site } from "@/lib/site";

const links = [
  { href: "/#work", label: "Selected work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="site-header">
      <nav className="page-wrap site-nav" aria-label="Primary navigation">
        <Link href="/" className="site-brand" aria-label={`${site.name}, home`}>
          <span className="site-brand__monogram" aria-hidden="true">JT</span>
          <span className="site-brand__identity"><strong>{site.name}</strong><small>{site.role}</small></span>
        </Link>

        <div className="site-nav__links">
          {links.map((link) => {
            const active = link.href === "/#work"
              ? pathname === "/"
              : pathname.startsWith(link.href);
            return (
              <Link key={link.href} href={link.href} className="nav-link" aria-current={active ? "page" : undefined}>
                {link.label}
              </Link>
            );
          })}
          <Link href="/contact" className="neo-button neo-button--accent site-nav__cta">
            <span>Enquire</span>
            <ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.7} />
          </Link>
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
        </button>
      </nav>

      {open ? (
          <div id="mobile-navigation" className="mobile-navigation">
            <div className="page-wrap mobile-navigation__inner">
              {links.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                  <ArrowUpRight aria-hidden="true" size={18} />
                </Link>
              ))}
              <Link href="/contact" className="neo-button neo-button--accent" onClick={() => setOpen(false)}>
                Enquire
                <ArrowUpRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>
        ) : null}
    </header>
  );
}
