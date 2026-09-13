import { siteUrl } from "@/data/portfolio";

// Menghasilkan /robots.txt otomatis.
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
