import {
  Outlet,
  createHashHistory,
  createRootRoute,
  createRoute,
  createRouter,
  useRouterState,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { SiteNav } from "@/components/layout/SiteNav";
import { Footer } from "@/components/layout/Footer";
import { CommandPalette } from "@/components/layout/CommandPalette";
import Home from "@/routes/Home";
import Work from "@/routes/Work";
import Services from "@/routes/Services";
import About from "@/routes/About";
import Contact from "@/routes/Contact";
import CaseStudy from "@/routes/work/CaseStudy";

function Page({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

function RootLayout() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // scroll to top on navigation (hash links inside a page still work)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <div className="grain relative min-h-screen">
      <a
        href="#main"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-volt px-5 py-2.5 text-[13px] font-semibold text-volt-ink transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <SiteNav onOpenPalette={() => setPaletteOpen(true)} />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <CommandPalette open={paletteOpen} setOpen={setPaletteOpen} />
    </div>
  );
}

const rootRoute = createRootRoute({ component: RootLayout });

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <Page>
      <Home />
    </Page>
  ),
});

const workRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/work",
  component: () => (
    <Page>
      <Work />
    </Page>
  ),
});

const caseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/work/$slug",
  component: () => (
    <Page>
      <CaseStudy />
    </Page>
  ),
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: () => (
    <Page>
      <Services />
    </Page>
  ),
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: () => (
    <Page>
      <About />
    </Page>
  ),
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: () => (
    <Page>
      <Contact />
    </Page>
  ),
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  workRoute,
  caseRoute,
  servicesRoute,
  aboutRoute,
  contactRoute,
]);

// Hash history → deep links survive refresh on GitHub Pages, and the
// production build even runs straight off the filesystem.
export const router = createRouter({
  routeTree,
  history: createHashHistory(),
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
