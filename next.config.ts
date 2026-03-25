import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/tlahuillo-films-website",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
