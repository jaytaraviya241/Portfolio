import { useEffect, useState } from "react";

/** Section-aware navigation: returns the id of the chapter in view. */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio);
          } else {
            visible.delete(entry.target.id);
          }
        }
        let best = "";
        let bestRatio = 0;
        for (const [id, ratio] of visible) {
          if (ratio > bestRatio) {
            best = id;
            bestRatio = ratio;
          }
        }
        if (best) setActive(best);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.1, 0.3, 0.6] },
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
