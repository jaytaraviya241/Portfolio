import Link from "next/link";
import { ArrowUpRight, Circle } from "lucide-react";

export function Hero() {
  return (
    <section className="neo-hero" aria-labelledby="hero-title">
      <div className="page-wrap neo-hero__inner">
        <div className="neo-hero__heading">
          <h1 id="hero-title">
            <span>Commerce,</span>
            <span>engineered</span>
            <span>with <em>taste.</em></span>
          </h1>
          <div className="neo-hero__intro">
            <span className="neo-hero__rule" aria-hidden="true" />
            <p>
              I build high-performing Shopify experiences for DTC brands—with clean architecture,
              faster loads, and conversion-focused design systems.
            </p>
            <div className="neo-hero__actions">
              <Link href="/contact" className="neo-button neo-button--accent">
                Start a project <ArrowUpRight aria-hidden="true" size={15} />
              </Link>
              <span className="neo-hero__availability"><Circle aria-hidden="true" size={8} fill="currentColor" />Available for new projects</span>
            </div>
          </div>
        </div>

        <div className="neo-hero__bio">
          <p>
            Senior Shopify developer with 8+ years of experience partnering with ambitious brands.
            I care about the details most—performance, accessibility, and revenue.
          </p>
          <p className="neo-kicker">Based in India</p>
        </div>
      </div>
    </section>
  );
}
