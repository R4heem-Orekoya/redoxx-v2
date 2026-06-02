import CopyUrlButton from "@/components/copy-url-button";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CornerUpLeftIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { getWritings } from "@/lib/writings";
import Link from "next/link";
import { PropsWithChildren } from "react";

export function generateStaticParams() {
   return getWritings().map((writing) => ({ slug: writing.slug }));
}

export const dynamicParams = false;

export default async function writingLayout({
   children,
   params,
}: PropsWithChildren<{ params: Promise<{ slug: string }> }>) {
   const { slug } = await params;
   const { frontmatter } = await import(`@/writings/${slug}.mdx`);
   const { date } = frontmatter;

   const formatted = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
   }).format(new Date(date));

   return (
      <article>
         <div className="flex items-center justify-between mb-24">
            <Link
               href="/"
               className={cn(
                  buttonVariants({ variant: "secondary", size: "icon" }),
                  "size-9 rounded-full",
               )}
               aria-label="Back to home"
            >
               <HugeiconsIcon
                  icon={CornerUpLeftIcon}
                  strokeWidth={1.5}
                  className="size-4.5"
               />
            </Link>

            <div className="flex items-center gap-3">
               <time
                  dateTime={date}
                  className="uppercase text-muted-foreground text-sm font-mono"
               >
                  {formatted}
               </time>
               <CopyUrlButton />
            </div>
         </div>

         {children}
      </article>
   );
}
