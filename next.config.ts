import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // Final deployment verification
  turbopack: {
    root: __dirname,
  },
} as any;

export default nextConfig;
