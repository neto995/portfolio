import { MetadataRoute } from "next";
import { projects } from "../data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ernestootaqui.com";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
