/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    formats: ["image/webp"],
    qualities: [60, 72, 80],
  },
  experimental: { optimizePackageImports: ["lucide-react"] },
};

export default nextConfig;
