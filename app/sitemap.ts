import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";
import { members } from "@/data/members";
import { newsItems } from "@/data/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/tentang",
    "/visi-misi",
    "/struktur",
    "/divisi",
    "/proker",
    "/anggota",
    "/galeri",
    "/berita",
    "/kontak",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const memberRoutes = members.map((m) => ({
    url: `${siteConfig.url}/anggota/${m.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.4,
  }));

  const newsRoutes = newsItems.map((n) => ({
    url: `${siteConfig.url}/berita/${n.slug}`,
    lastModified: new Date(n.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...memberRoutes, ...newsRoutes];
}
