import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { siteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/contact",
    "/services",
    ...services.map(({ slug }) => `/services/${slug}`),
  ];

  return paths.map((path) => ({ url: `${siteUrl}${path}` }));
}
