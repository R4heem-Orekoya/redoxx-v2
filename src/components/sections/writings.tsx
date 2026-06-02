import { getWritings } from "@/lib/writings";
import { Clock4Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export default function Writings() {
   const writings = getWritings();

   return (
      <div className="space-y-8">
         <div className="space-y-1">
            <h2 className="text-lg font-medium leading-snug">Writing</h2>
            <p className="text-sm text-muted-foreground text-balance leading-snug">
               A few things I've written — on building, thinking, and everything
               in between.
            </p>
         </div>

         <div className="space-y-6">
             {writings.map((writing) => (
               <Link
                  href={`/writing/${writing.slug}`}
                  key={writing.slug}
                  className="flex justify-between items-center max-sm:flex-col max-sm:items-start max-sm:gap-1 group"
               >
                  <span className="text-sm text-muted-foreground font-mono">
                     {writing.date}
                  </span>
                  <span className="font-medium group-hover:text-blue-500 duration-150 underline-offset-2">
                     {writing.title}
                  </span>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground font-mono">
                     <HugeiconsIcon icon={Clock4Icon} className="size-4" />
                     <span>{writing.readingTime} m</span>
                  </div>
               </Link>
            ))}
         </div>
      </div>
   );
}
