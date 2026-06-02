import {
   Marquee,
   MarqueeContent,
   MarqueeFade,
   MarqueeItem,
} from "@/components/kibo-ui/marquee";
import {
   Tooltip,
   TooltipContent,
   TooltipTrigger,
} from "@/components/ui/tooltip";

import { Bun } from "@/components/ui/svgs/bun";
import { Cloudflare } from "@/components/ui/svgs/cloudflare";
import { DrizzleOrmDark } from "@/components/ui/svgs/drizzleOrmDark";
import { Elysiajs } from "@/components/ui/svgs/elysiajs";
import { GithubDark } from "@/components/ui/svgs/githubDark";
import { MotionDark } from "@/components/ui/svgs/motionDark";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { RailwayDark } from "@/components/ui/svgs/railwayDark";
import { Tailwindcss } from "@/components/ui/svgs/tailwindcss";
import { Typescript } from "@/components/ui/svgs/typescript";
import { VercelDark } from "@/components/ui/svgs/vercelDark";
import { BetterAuthDark } from "@/components/ui/svgs/betterAuthDark";
import { SanityDark } from "@/components/ui/svgs/sanityDark";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Upstash } from "@/components/ui/svgs/upstash";
import { Convex } from "@/components/ui/svgs/convex";
import { PolarShDark } from "@/components/ui/svgs/polarShDark";
import { Posthog } from "@/components/ui/svgs/posthog";

const STACK = [
   { icon: Tailwindcss, label: "Tailwind CSS" },
   { icon: MotionDark, label: "Motion" },
   { icon: DrizzleOrmDark, label: "Drizzle ORM" },
   { icon: Posthog, label: "PostHog" },
   { icon: SanityDark, label: "Sanity" },
   { icon: Cloudflare, label: "Cloudflare" },
   { icon: Bun, label: "Bun" },
   { icon: Elysiajs, label: "Elysia.js" },
   { icon: Postgresql, label: "PostgreSQL" },
   { icon: Upstash, label: "Upstash" },
   { icon: VercelDark, label: "Vercel" },
   { icon: NextjsIconDark, label: "Next.js" },
   { icon: Convex, label: "Convex" },
   { icon: GithubDark, label: "GitHub" },
   { icon: PolarShDark, label: "Polar.sh" },
   { icon: BetterAuthDark, label: "Better Auth" },
   { icon: RailwayDark, label: "Railway" },
   { icon: Typescript, label: "TypeScript" },
];

export default function Stack() {
   return (
      <div className="space-y-6">
         <h2 className="text-lg font-medium leading-snug">Stack</h2>

         <Marquee>
            <MarqueeFade side="left" />
            <MarqueeFade side="right" />
            <MarqueeContent>
               {STACK.map(({ icon: Icon, label }, i) => (
                  <MarqueeItem className="h-14 ml-4" key={i}>
                     <Tooltip>
                        <TooltipTrigger asChild>
                           <button
                              className="cursor-pointer"
                              aria-label={label}
                           >
                              <Icon className="size-10 hover:scale-115 duration-300 object-contain rounded-md p-1" />
                           </button>
                        </TooltipTrigger>
                        <TooltipContent
                           side="bottom"
                           sideOffset={8}
                           showArrow={false}
                           className="font-normal px-2.5 py-1 dark:border-t rounded-sm bg-secondary text-foreground"
                        >
                           {label}
                        </TooltipContent>
                     </Tooltip>
                  </MarqueeItem>
               ))}
            </MarqueeContent>
         </Marquee>
      </div>
   );
}
