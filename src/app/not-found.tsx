import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight01Icon, CornerUpLeftIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

const PAGES = [
   { href: "/", label: "Home" },
   { href: "/writing/building-in-public", label: "Latest writing" },
];

export default function NotFound() {
   return (
      <div className="flex flex-col items-center text-center gap-10 py-16">
         <div className="flex flex-col items-center gap-4">
            <div className="bg-secondary border border-border/40 rounded-xl p-1.5">
               <div className="bg-accent border border-border/20 rounded-lg px-8 py-5 font-mono">
                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                     <span className="text-foreground font-semibold">
                        HTTP
                     </span>
                     <span className="text-muted-foreground/40">/</span>
                     <span className="text-rose-500 font-semibold">404</span>
                     <span className="text-muted-foreground/40">—</span>
                     <span>Not Found</span>
                  </div>
               </div>
            </div>

            <div className="space-y-2">
               <h1 className="text-xl font-semibold tracking-tight">
                  This page wasn't built
               </h1>
               <p className="text-muted-foreground text-sm max-w-xs text-balance leading-relaxed">
                  You have found a route that doesn't exist yet. As a product
                  engineer, I try to ship only what matters.
               </p>
            </div>
         </div>

         <div className="flex flex-col items-center gap-3 w-full max-w-72">
            <Link
               href="/"
               className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "gap-2.5 rounded-full px-6 w-full text-sm",
               )}
            >
               <HugeiconsIcon
                  icon={CornerUpLeftIcon}
                  strokeWidth={1.5}
                  className="size-4.5"
               />
               Back home
            </Link>

            <div className="flex gap-3 w-full">
               {PAGES.map(({ href, label }) => (
                  <Link
                     key={href}
                     href={href}
                     className={cn(
                        buttonVariants({ variant: "outline", size: "lg" }),
                        "gap-1.5 rounded-full px-5 text-sm flex-1",
                     )}
                  >
                     {label}
                     <HugeiconsIcon
                        icon={ArrowRight01Icon}
                        className="size-4"
                     />
                  </Link>
               ))}
            </div>
          </div>
      </div>
   );
}
