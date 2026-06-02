"use client";

import { useQuery } from "@tanstack/react-query";
import {
   CloudSunRainIcon,
   Location04Icon,
   Sun01Icon,
   CloudIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

function getWeatherIcon(code: number) {
   if (code === 0) return Sun01Icon;
   if (code <= 3) return CloudSunRainIcon;
   if (code <= 77) return CloudIcon;
   if (code <= 82) return CloudSunRainIcon;
   if (code <= 99) return CloudIcon;
   return CloudIcon;
}

export default function Footer() {
   const pathname = usePathname();
   const isValidRoute = pathname === "/" || pathname.startsWith("/writing/");
   if (!isValidRoute) return null;

   const { data } = useQuery({
      queryKey: ["weather"],
      queryFn: () => fetch("/api/weather").then((r) => r.json()),
      refetchInterval: 1800000,
   });

   return (
      <footer className="flex items-center justify-between max-w-150 w-screen mx-auto max-sm:px-4 pb-12 text-sm text-muted-foreground font-normal font-mono">
         <p className="flex items-center gap-1.5 uppercase">
            <HugeiconsIcon icon={Location04Icon} className="size-4" />
            lagos, nigeria
         </p>

         <p className="flex items-center gap-1">
            <HugeiconsIcon
               icon={data ? getWeatherIcon(data.code) : CloudSunRainIcon}
               className={cn("size-5", {
                  "mb-1":
                     data && getWeatherIcon(data.code) === CloudSunRainIcon,
               })}
            />
            {data ? `${data.temp}°c` : "--°c"}
         </p>
      </footer>
   );
}
