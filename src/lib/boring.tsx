import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useReducedMotion } from "motion/react";

type BoringContextValue = {
  boring: boolean;
  toggle: () => void;
};

const BoringContext = createContext<BoringContextValue>({
  boring: false,
  toggle: () => {},
});

const KEY = "jt-boring-mode";

/**
 * "Boring mode" — the whole site collapses to flat paper, no motion,
 * no decoration. A personality nod *and* a hard accessibility fallback.
 */
export function BoringProvider({ children }: { children: ReactNode }) {
  const [boring, setBoring] = useState<boolean>(() => {
    try {
      return localStorage.getItem(KEY) === "1";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    document.documentElement.dataset.boring = boring ? "true" : "false";
    try {
      localStorage.setItem(KEY, boring ? "1" : "0");
    } catch {
      /* private mode — fine */
    }
  }, [boring]);

  const toggle = useCallback(() => setBoring((b) => !b), []);
  const value = useMemo(() => ({ boring, toggle }), [boring, toggle]);

  return <BoringContext.Provider value={value}>{children}</BoringContext.Provider>;
}

export function useBoring() {
  return useContext(BoringContext);
}

/** Single switch every JS-driven animation checks before running. */
export function useMotionOK() {
  const { boring } = useBoring();
  const reduced = useReducedMotion();
  return !boring && !reduced;
}
