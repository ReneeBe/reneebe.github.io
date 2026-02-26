import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",        // static HTML export — required for GitHub Pages
  trailingSlash: true,     // generates /blog/index.html instead of /blog.html
  images: {
    unoptimized: true,     // Next.js image optimization requires a server; skip for static
  },
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
