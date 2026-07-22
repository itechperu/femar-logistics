import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel is hands-off: clean build (next build), no standalone, no scripts post-build
  // All assets commited to repo, dynamic imports for client-only libs
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
