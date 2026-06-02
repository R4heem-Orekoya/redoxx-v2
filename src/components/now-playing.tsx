"use client";

import { FaSpotify } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

type NowPlaying = {
   isPlaying: boolean;
   title?: string;
   artist?: string;
   albumArt?: string;
   songUrl?: string;
};

export function NowPlaying() {
   const { data, isError, isLoading } = useQuery<NowPlaying>({
      queryKey: ["spotify"],
      queryFn: () => fetch("/api/spotify").then((r) => r.json()),
      refetchInterval: 30000,
   });

   if (isLoading) {
      return (
         <div className="bg-secondary border border-border/40 rounded-2xl p-1.5 animate-shimmer">
            <div className="bg-accent border border-border/20 p-1.5 rounded-xl">
               <div className="flex gap-4">
                  <div className="size-16 rounded-sm bg-muted shrink-0" />

                  <div className="flex flex-col justify-center gap-2 w-full">
                     <div className="h-4 w-3/4 bg-muted rounded" />
                     <div className="h-3 w-1/2 bg-muted rounded" />
                  </div>
               </div>
            </div>

            <div className="flex justify-between pt-2.5 pl-1 pr-0.5">
               <div className="h-3 w-24 bg-muted rounded" />
               <div className="h-3 w-32 bg-muted rounded" />
            </div>
         </div>
      );
   }

   if (isError) {
      return (
         <div className="bg-secondary border border-border/40 rounded-xl p-1.5">
            <div className="bg-accent border border-border/20 p-1.5 rounded-lg">
               <div className="flex gap-4">
                  <div className="size-16 rounded-md border shrink-0" />
                  <div className="flex flex-col justify-center gap-1">
                     <span className="font-medium leading-snug">
                        Unavailable
                     </span>
                     <span className="text-muted-foreground leading-snug text-sm">
                        Could not load track
                     </span>
                  </div>
               </div>
            </div>
         </div>
      );
   }

   if (!data) {
      return (
         <div className="bg-secondary border border-border/40 rounded-2xl p-1.5">
            <div className="bg-accent border border-border/20 p-1.5 rounded-xl">
               <div className="flex gap-4 items-center">
                  <div className="size-16 rounded-sm bg-muted flex items-center justify-center shrink-0">
                     <FaSpotify className="size-6 text-muted-foreground/50" />
                  </div>

                  <div className="flex flex-col justify-center gap-1">
                     <span className="font-medium leading-snug">
                        Nothing to show
                     </span>
                     <span className="text-muted-foreground leading-snug text-sm">
                        No recent Spotify activity
                     </span>
                  </div>
               </div>
            </div>

            <div className="flex justify-between pt-2.5 pl-1 pr-0.5 text-xs text-muted-foreground font-medium">
               <span>Offline</span>
               <Link
                  href="https://spotify.com"
                  target="_blank"
                  className="flex gap-1.5 items-center hover:text-foreground transition-colors"
               >
                  <span>Open Spotify</span>
                  <FaSpotify className="size-4 pb-0.5 text-green-500" />
               </Link>
            </div>
         </div>
      );
   }

   const nowPlaying = data;

   return (
      <div className="bg-secondary border border-border/40 rounded-2xl p-1.5">
         <div className="bg-accent border border-border/20 p-1.5 rounded-xl">
            <div className="flex gap-4">
               <div className="size-16 rounded-sm overflow-hidden shrink-0">
                  {nowPlaying.albumArt && (
                     <Image
                        src={nowPlaying.albumArt}
                        alt="album art"
                        width={80}
                        height={80}
                        className="object-cover"
                     />
                  )}
               </div>
               <div className="flex flex-col justify-center">
                  <span className="font-medium leading-snug line-clamp-1">
                     {nowPlaying.title}
                  </span>
                  <span className="text-muted-foreground leading-snug line-clamp-1">
                     {nowPlaying.artist}
                  </span>
               </div>
            </div>
         </div>

         <div className="flex justify-between pt-2.5 pl-1 pr-0.5 text-xs text-muted-foreground font-medium">
            <span>
               {nowPlaying.isPlaying ? "Currently playing" : "Last played"}
            </span>
            <Link
               href={nowPlaying.songUrl ?? "https://spotify.com"}
               target="_blank"
               className="flex gap-1.5 items-center hover:text-foreground transition-colors"
            >
               <span>Listen on Spotify</span>
               <FaSpotify className="size-4 pb-0.5 text-green-500" />
            </Link>
         </div>
      </div>
   );
}
