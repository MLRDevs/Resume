import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,   // Helps with debugging and enforcing best practices
  output: "standalone",    // Required for standalone builds (Netlify support)
  distDir: ".next",        // Use the default .next build directory
};

export default nextConfig;

