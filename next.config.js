const pagesBasePath = process.env.PAGES_BASE_PATH || "";
const isPagesBuild = Boolean(pagesBasePath);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  allowedDevOrigins: ["127.0.0.1"],
  output: isPagesBuild ? "export" : undefined,
  basePath: pagesBasePath,
  trailingSlash: isPagesBuild,
  images: {
    unoptimized: isPagesBuild,
    formats: ["image/webp"],
    qualities: [60, 72, 80],
  },
  experimental: { optimizePackageImports: ["lucide-react"] },
};

export default nextConfig;
