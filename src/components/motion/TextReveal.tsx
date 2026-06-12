import { motion, type Variants } from "motion/react";
import { useMotionOK } from "@/lib/boring";
import { cn } from "@/lib/utils";

type TextRevealProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  /** applied to each word span — e.g. gradient text via bg-clip-text */
  wordClassName?: string;
  delay?: number;
  /** seconds between words */
  stagger?: number;
};

/**
 * Masked per-word reveal for display headings — words rise out of their own
 * clip box, editorial-style.
 *
 * The viewport trigger lives on the UNCLIPPED parent and propagates to the
 * words via variants: a word translated 115% inside an overflow-hidden span
 * has zero intersection with the viewport, so observing the words themselves
 * would never fire.
 */
export function TextReveal({
  text,
  as: Tag = "h2",
  className,
  wordClassName,
  delay = 0,
  stagger = 0.045,
}: TextRevealProps) {
  const motionOK = useMotionOK();
  const words = text.split(" ");

  if (!motionOK) {
    return <Tag className={className}>{text}</Tag>;
  }

  const MotionTag = motion[Tag];

  const child: Variants = {
    hidden: { y: "115%" },
    show: (i: number) => ({
      y: "0%",
      transition: {
        duration: 0.85,
        delay: delay + i * stagger,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <MotionTag
      className={cn(className)}
      aria-label={text}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          aria-hidden="true"
          className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-bottom"
        >
          <motion.span
            className={cn("inline-block will-change-transform", wordClassName)}
            variants={child}
            custom={i}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </MotionTag>
  );
}
