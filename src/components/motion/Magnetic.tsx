import { motion, useSpring } from "motion/react";
import { useRef, type ReactNode, type PointerEvent } from "react";
import { useMotionOK } from "@/lib/boring";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  /** 0–1: how strongly the element follows the pointer */
  strength?: number;
};

/** Magnetic hover — element leans toward a fine pointer, springs back on leave. */
export function Magnetic({ children, className, strength = 0.3 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const motionOK = useMotionOK();
  const x = useSpring(0, { stiffness: 180, damping: 16, mass: 0.2 });
  const y = useSpring(0, { stiffness: 180, damping: 16, mass: 0.2 });

  const finePointer = () =>
    typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    if (!motionOK || !finePointer() || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  }

  function onPointerLeave() {
    x.set(0);
    y.set(0);
  }

  if (!motionOK) return <div className={className}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x, y, display: "inline-block" }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      {children}
    </motion.div>
  );
}
