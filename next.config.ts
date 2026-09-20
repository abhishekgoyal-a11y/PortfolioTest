import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the workspace root to this project so Next.js doesn't try to walk
    // up into unrelated parent directories.
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
