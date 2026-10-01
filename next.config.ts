import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization settings for better performance
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    qualities: [75, 95],
    // Enable image optimization
    unoptimized: false,
  },
// next.config.js
  allowedDevOrigins: ['192.168.29.6'],

  // Enable compression
  compress: true,

  // Environment variables configuration
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },

  // Headers for security and performance
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  // Redirects if needed
  async redirects() {
    return [
      // Add any redirects here if needed
      // Example:
      // {
      //   source: '/old-page',
      //   destination: '/new-page',
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;
