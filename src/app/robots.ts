import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "localhost:3000";
const SITE_URL = BASE_URL.startsWith("http") ? BASE_URL : `https://${BASE_URL}`;

export default function robots(): MetadataRoute.Robots {
   return {
      rules: [
         {
            userAgent: "*",
            allow: "/",
            disallow: "/api/",
         },
      ],
      sitemap: `${SITE_URL}/sitemap.xml`,
   };
}
