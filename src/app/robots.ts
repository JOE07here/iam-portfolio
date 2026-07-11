import type { MetadataRoute } from "next";
import { site } from "@/data/portfolio";

// Statically generated at build time — compatible with GitHub Pages export.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
