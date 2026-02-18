import type { NextConfig } from "next";



const nextConfig:NextConfig = {
  sassOptions: {
    includePaths: ['./sass'],
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
    ],
  },
};

export default nextConfig
