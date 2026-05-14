import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gofly-next-js.vercel.app",
        pathname: "/**",
      },

      // Local Backend Images
      {
        protocol: "http",
        hostname: "192.168.1.55",
        port: "7003",
        pathname: "/**",
      },
    ],

    unoptimized: true,
  },

  reactStrictMode: true,
};

export default nextConfig;