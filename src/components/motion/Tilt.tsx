import { motion, useSpring, useTransform } from "motion/react";
import { useRef, type ReactNode, type PointerEvent } from "react";
import { useMotionOK } from "@/lib/boring";

type TiltProps = {
  children: ReactNode;
  className?: string;
  /** max degrees of tilt */
  max?: number;
};

/** Subtle pointer tilt for cards. Sets --mx/--my (0–100) for glare effects. */
export function Tilt({ children, className, max = 4 }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const motionOK = useMotionOK();
  const px = useSpring(0.5, { stiffness: 160, damping: 20 });
  const py = useSpring(0.5, { stiffness: 160, damping: 20 });
  const rotateX = useTransform(py, [0, 1], [max, -max]);
  const rotateY = useTransform(px, [0, 1], [-max, max]);

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    if (!motionOK || !ref.current) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const rect = ref.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top) / rect.height;
    px.set(nx);
    py.set(ny);
    ref.current.style.setProperty("--mx", `${nx * 100}`);
    ref.current.style.setProperty("--my", `${ny * 100}`);
  }

  function onPointerLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  if (!motionOK) return <div className={className}>{children}</div>;

  return (
    <div style={{ perspective: 1100 }}>
      <motion.div
        ref={ref}
        className={className}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
      >
        {children}
      </motion.div>
    </div>
  );
}
