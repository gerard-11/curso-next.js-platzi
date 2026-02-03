import type { NextConfig } from "next";


const nextConfig:NextConfig = {
  sassOptions: {
    includePaths: ['./sass'],
  },
  images: {
    domains: ["cdn.shopify.com"],
  },
};

export default nextConfig;
