import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Magnetic } from "@/components/motion/Magnetic";
import { cn } from "@/lib/utils";

type BtnProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "ghost" | "bare";
  size?: "md" | "lg";
  arrow?: boolean;
  className?: string;
  magnetic?: boolean;
  type?: "button" | "submit";
};

const base =
  "group/btn inline-flex items-center gap-2.5 rounded-full font-medium transition-colors duration-300 select-none";

const variants = {
  solid:
    "text-volt-ink bg-[linear-gradient(135deg,color-mix(in_oklab,var(--volt)_80%,white)_0%,var(--volt)_55%,color-mix(in_oklab,var(--volt)_82%,black)_100%)] shadow-[0_4px_18px_-6px_color-mix(in_oklab,var(--volt)_45%,transparent)] hover:shadow-[0_10px_34px_-8px_color-mix(in_oklab,var(--volt)_65%,transparent)] hover:-translate-y-px transition-[box-shadow,transform,background-color]",
  ghost: "border border-line2 text-tx hover:border-volt hover:text-volt",
  bare: "text-tx2 hover:text-volt px-0",
};

const sizes = {
  md: "px-6 h-11 text-[13.5px]",
  lg: "px-8 h-[54px] text-[15px]",
};

function Arrow() {
  return (
    <span className="relative inline-block h-[1em] w-[1em] overflow-hidden" aria-hidden="true">
      <span className="absolute inset-0 transition-transform duration-300 ease-out group-hover/btn:translate-x-[130%] group-hover/btn:-translate-y-[130%]">
        ↗
      </span>
      <span className="absolute inset-0 -translate-x-[130%] translate-y-[130%] transition-transform duration-300 ease-out group-hover/btn:translate-x-0 group-hover/btn:translate-y-0">
        ↗
      </span>
    </span>
  );
}

export function Btn({
  children,
  to,
  href,
  onClick,
  variant = "solid",
  size = "md",
  arrow = false,
  className,
  magnetic = true,
  type = "button",
}: BtnProps) {
  const cls = cn(base, variants[variant], variant !== "bare" && sizes[size], className);
  const inner = (
    <>
      <span>{children}</span>
      {arrow && <Arrow />}
    </>
  );

  let node: ReactNode;
  if (to) {
    node = (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    );
  } else if (href) {
    const external = href.startsWith("http");
    node = (
      <a
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {inner}
      </a>
    );
  } else {
    node = (
      <button type={type} onClick={onClick} className={cls}>
        {inner}
      </button>
    );
  }

  return magnetic ? <Magnetic strength={0.22}>{node}</Magnetic> : node;
}
