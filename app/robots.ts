import type { MetadataRoute } from "next";
import { siteUrl } from "./seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/studio" }, // /studio = Sanity Studio (admin)
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
