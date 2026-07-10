import type { MetadataRoute } from "next";
import { site } from "@/data/portfolio";

// Statically generated at build time — compatible with GitHub Pages export.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${site.url}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
