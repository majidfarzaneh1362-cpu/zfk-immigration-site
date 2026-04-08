import type { MetadataRoute } from "next";
import { provinces } from "../data/provinces";
import { getSiteUrl } from "../lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const locales = ["en", "fa", "fr"];
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/assessment",
    "/contact",
    "/universities",
    "/colleges",
    "/provinces",
  ];

  const now = new Date();

  const localizedStatic = locales.flatMap((locale) =>
    staticRoutes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    }))
  );

  const localizedProvincePages = locales.flatMap((locale) =>
    provinces.map((province) => ({
      url: `${baseUrl}/${locale}/provinces/${province.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }))
  );

  return [...localizedStatic, ...localizedProvincePages];
}
