import { motion } from "motion/react";
import { useEffect, type ReactNode } from "react";
import { useMotionOK } from "@/lib/boring";

type PageShellProps = {
  title: string;
  children: ReactNode;
};

/** Per-route shell: document title + cinematic mount transition. */
export function PageShell({ title, children }: PageShellProps) {
  const motionOK = useMotionOK();

  useEffect(() => {
    document.title = `${title} — Jay Taraviya`;
  }, [title]);

  if (!motionOK) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
