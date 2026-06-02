import { getWritings } from "@/lib/writings";
import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "localhost:3000";
const SITE_URL = BASE_URL.startsWith("http") ? BASE_URL : `https://${BASE_URL}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
   const writings = getWritings();

   const writingEntries: MetadataRoute.Sitemap = writings.map((writing) => ({
      url: `${SITE_URL}/writing/${writing.slug}`,
      lastModified: new Date(writing.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
   }));

   return [
      {
         url: SITE_URL,
         lastModified: new Date(),
         changeFrequency: "monthly",
         priority: 1,
      },
      ...writingEntries,
   ];
}
