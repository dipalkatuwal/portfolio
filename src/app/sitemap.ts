import { MetadataRoute } from "next";
import { PROJECTS } from "@/lib/data";
import { BASE_URL } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = PROJECTS.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: new Date("2026-05-22"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date("2026-05-22"),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date("2026-05-22"),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...projectRoutes,
  ];
}
