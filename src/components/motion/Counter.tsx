import { animate, motion, useInView, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { useMotionOK } from "@/lib/boring";

type CounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  duration?: number;
};

/** Animated metric counter — counts up once when it enters the viewport. */
export function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
  duration = 1.6,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const motionOK = useMotionOK();
  const mv = useMotionValue(0);
  const text = useTransform(mv, (v) => `${prefix}${v.toFixed(decimals)}${suffix}`);

  useEffect(() => {
    if (!motionOK) {
      mv.set(value);
      return;
    }
    if (inView) {
      const controls = animate(mv, value, { duration, ease: [0.16, 1, 0.3, 1] });
      return () => controls.stop();
    }
  }, [inView, motionOK, value, duration, mv]);

  if (!motionOK) {
    return (
      <span ref={ref} className={className}>
        {prefix}
        {value.toFixed(decimals)}
        {suffix}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      <motion.span className="tabular">{text}</motion.span>
    </span>
  );
}
