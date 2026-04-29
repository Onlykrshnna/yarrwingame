import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // Triggering redeploy to verify static export fix
  turbopack: {
    root: __dirname,
  },
} as any;

export default nextConfig;
