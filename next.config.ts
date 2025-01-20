import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com', 'imgs.search.brave.com', 'i.pinimg.com', 'cdn.vectorstock.com', 't3.ftcdn.net'],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'node-pty': 'false'
    };
    return config;
  },
  transpilePackages: ['@xterm/xterm', '@xterm/addon-fit']
};

export default nextConfig;