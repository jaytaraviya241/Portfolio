import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { site } from "@/lib/site";
import "@/styles/globals.css";

const portfolioSans = localFont({
  src: "../public/fonts/inter-variable.woff2",
  display: "swap",
  variable: "--font-sans",
  weight: "100 900",
});

const publicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jaytaraviya.dev";
const publicSiteOrigin = new URL(publicSiteUrl).origin;

export const metadata: Metadata = {
  metadataBase: new URL(publicSiteOrigin),
  title: {
    default: `${site.name} - Shopify Developer`,
    template: `%s - ${site.name}`,
  },
  description:
    "Independent Shopify developer building design-faithful, merchant-editable storefront systems for DTC brands.",
  openGraph: {
    title: `${site.name} - Shopify Developer`,
    description: site.tagline,
    images: [site.profileImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#f2f0eb",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={portfolioSans.variable} suppressHydrationWarning>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navigation />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
