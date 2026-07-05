import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configured for GitHub Pages: `npm run build` emits a fully static site
  // to `out/`, served at https://joe07here.github.io/iam-portfolio/.
  //
  // If you move to Vercel or Netlify later, remove these three lines
  // (and drop the "/iam-portfolio" prefix from site.cvUrl in
  // src/data/portfolio.ts).
  output: "export",
  basePath: "/iam-portfolio", // must match the GitHub repo name
  images: { unoptimized: true },
};

export default nextConfig;
