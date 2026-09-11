import { siteConfig } from "@/data/siteConfig";

export const dynamic = "force-static";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: siteConfig.allowIndexing ? "/" : undefined,
      disallow: siteConfig.allowIndexing ? undefined : "/",
    },
    sitemap: `${siteConfig.baseUrl}/sitemap.xml`,
  };
}
