import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="neo-footer">
      <div className="page-wrap neo-footer__bottom">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <nav aria-label="Footer navigation">
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" size={12} /></a>
          <a href={site.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight aria-hidden="true" size={12} /></a>
        </nav>
      </div>
    </footer>
  );
}
