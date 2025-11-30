// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Aggressively remove console logs in production (keeps it clean)
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // 3. If you ever fetch images from external URLs (like GitHub avatar), add domains here
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'], // Tells Next.js to convert images to modern formats automatically
  },
};

export default nextConfig;