import type { MetadataRoute } from "next";
import { siteUrl } from "./seo";

// Situs satu halaman: hanya beranda. Tambahkan URL baru di sini bila ada halaman lain.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
