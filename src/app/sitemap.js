import { siteConfig } from "@/data/siteConfig";

export const dynamic = "force-static";

export default function sitemap() {
  const routes = [
    "",
    "/about",
    "/products",
    "/portfolio",
    "/branches",
    "/contact",
  ].map((route) => ({
    url: `${siteConfig.baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
