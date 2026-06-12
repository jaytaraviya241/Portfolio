import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { useMotionOK } from "@/lib/boring";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  blur?: boolean;
  once?: boolean;
  amount?: number;
  duration?: number;
};

/**
 * Scroll-triggered reveal. The workhorse: rise + fade (+ optional blur),
 * tuned to feel expensive — long expo ease, no bounce.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  blur = true,
  once = true,
  amount = 0.25,
  duration = 0.9,
}: RevealProps) {
  const motionOK = useMotionOK();
  if (!motionOK) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: blur ? "blur(8px)" : "none" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

type StaggerProps = {
  children: ReactNode;
  className?: string;
  amount?: number;
};

/** Parent that staggers any <StaggerItem> children into view. */
export function Stagger({ children, className, amount = 0.2 }: StaggerProps) {
  const motionOK = useMotionOK();
  if (!motionOK) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const motionOK = useMotionOK();
  if (!motionOK) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} variants={staggerChild}>
      {children}
    </motion.div>
  );
}
