import { siteUrl } from "@/data/portfolio";

// Menghasilkan /sitemap.xml otomatis. Single-page, jadi cukup satu URL.
export default function sitemap() {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
