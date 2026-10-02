import { siteConfig } from "@/data/siteConfig";

export const dynamic = "force-static";

export default function sitemap() {
  const routes = [
    "",
    "/about",
    "/products",
    "/portfolio",
    "/branches",
    "/careers",
    "/contact",
  ].map((route) => {
    let priority = 0.8;
    if (route === "") priority = 1;
    if (route === "/products" || route === "/portfolio") priority = 0.9;
    
    return {
      url: `${siteConfig.baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority,
    };
  });

  return routes;
}
