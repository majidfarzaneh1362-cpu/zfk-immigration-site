import type { MetadataRoute } from "next";
import { provinces } from "../data/provinces";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://zfkimigration.ca";
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

  const rootUrl = {
    url: baseUrl,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 1,
  };

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

  return [rootUrl, ...localizedStatic, ...localizedProvincePages];
}
