import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getWritings } from "@/lib/writings";

export function generateStaticParams() {
   return getWritings().map((writing) => ({ slug: writing.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
   params,
}: {
   params: Promise<{ slug: string }>;
}): Promise<Metadata> {
   const { slug } = await params;

   try {
      const { frontmatter } = await import(`@/writings/${slug}.mdx`);
      return {
         title: frontmatter.title,
         description: `Read "${frontmatter.title}" — a writing by Raheem Orekoya.`,
         openGraph: {
            title: frontmatter.title,
            description: `Read "${frontmatter.title}" — a writing by Raheem Orekoya.`,
         },
      };
   } catch {
      return {};
   }
}

export default async function Page({
   params,
}: {
   params: Promise<{ slug: string }>;
}) {
   const { slug } = await params;

   const MDXContent = (await import(`@/writings/${slug}.mdx`)).default;
   return (
      <div className="prose prose-neutral">
         <MDXContent />
      </div>
   );
}
