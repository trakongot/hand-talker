import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compilerOptions: {
    module: "ESNext",
    moduleResolution: "Bundler",
    skipLibCheck: true,
    paths: {
      "@/*": ["./src/*"],
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
