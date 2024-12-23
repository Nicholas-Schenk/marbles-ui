import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  distDir: 'build',
};

export default nextConfig;
