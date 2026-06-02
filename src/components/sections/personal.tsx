import Image from "next/image";
import P1Image from "../../../public/p1.webp";
import P1Back from "../../../public/p1-back.webp";
import P1Wings from "../../../public/p1-wings.webp";
import P1In from "../../../public/p1-in.webp";
import { Heart } from "lucide-react";
import { NowPlaying } from "../now-playing";
import { DashboardSpeed02Icon, EngineIcon, HeartIcon, HorseHeadIcon, Timer02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function Personal() {
   return (
      <div className="space-y-8">
         <div className="space-y-1">
            <h2 className="text-lg font-medium leading-snug">Personal</h2>
            <p className="text-sm text-muted-foreground text-balance leading-snug">
               Outside of work — music, football, and an unhealthy interest in
               cars.
            </p>
         </div>

         <NowPlaying />

         <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2">
               <div className="col-span-2 bg-secondary border border-border/40 rounded-xl p-1.5">
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                     <Image
                        src={P1Image}
                        alt="McLaren P1 front three-quarter view"
                        fill
                        placeholder="blur"
                        className="object-cover hover:scale-[1.02] transition-transform"
                     />
                  </div>
               </div>

               <div className="col-span-1 bg-secondary border border-border/40 rounded-xl p-1.5">
                  <div className="relative h-full rounded-lg overflow-hidden">
                     <Image
                        src={P1Wings}
                        alt="McLaren P1 rear wing deployed"
                        fill
                        placeholder="blur"
                        className="object-cover hover:scale-[1.02] transition-transform"
                     />
                  </div>
               </div>

               <div className="col-span-1 bg-secondary border border-border/40 rounded-xl p-1.5">
                  <div className="relative h-full rounded-lg overflow-hidden">
                     <Image
                        src={P1In}
                        alt="McLaren P1 interior cockpit"
                        fill
                        placeholder="blur"
                        className="object-cover hover:scale-[1.02] transition-transform"
                     />
                  </div>
               </div>

               <div className="col-span-2 bg-secondary border border-border/40 rounded-xl p-1.5">
                  <div className="col-span-2 relative aspect-video rounded-lg overflow-hidden">
                     <Image
                        src={P1Back}
                        alt="McLaren P1 rear view"
                        fill
                        placeholder="blur"
                        className="object-cover hover:scale-[1.02] transition-transform"
                     />
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
               <div className="flex items-start gap-2 bg-secondary border border-border/40 rounded-lg p-2">
                  <HugeiconsIcon icon={HorseHeadIcon} strokeWidth={1.8} className="size-4 text-yellow-500 fill-yellow-500 mt-0.5" />
                  <div className="text-xs leading-snug">
                     <div className="text-muted-foreground">Power</div>
                     <div className="font-medium font-mono text-foreground uppercase">903 horses</div>
                  </div>
               </div>

               <div className="flex items-start gap-2 bg-secondary border border-border/40 rounded-lg p-2">
                  <HugeiconsIcon icon={Timer02Icon} strokeWidth={1.8} className="size-4 text-blue-500 fill-blue-500 mt-0.5" />
                  <div className="text-xs leading-snug">
                     <div className="text-muted-foreground">0–100</div>
                     <div className="font-medium font-mono text-foreground uppercase">2.8s</div>
                  </div>
               </div>

               <div className="flex items-start gap-2 bg-secondary border border-border/40 rounded-lg p-2">
                  <HugeiconsIcon icon={DashboardSpeed02Icon} strokeWidth={1.8} className="size-4 text-rose-500 mt-0.5" />
                  <div className="text-xs leading-snug">
                     <div className="text-muted-foreground">Top speed</div>
                     <div className="font-medium font-mono text-foreground uppercase">350 km/h</div>
                  </div>
               </div>

               <div className="flex items-start gap-2 bg-secondary border border-border/40 rounded-lg p-2">
                  <HugeiconsIcon icon={EngineIcon} strokeWidth={1.8} className="size-4 text-purple-500 fill-purple-500" />
                  <div className="text-xs leading-snug">
                     <div className="text-muted-foreground">Engine</div>
                     <div className="font-medium font-mono text-foreground uppercase">
                        Hybrid V8
                     </div>
                  </div>
               </div>
            </div>

            <div className="flex items-center gap-2 bg-secondary border border-border/40 rounded-lg p-2">
               <HugeiconsIcon icon={HeartIcon} className="size-4 text-rose-500 fill-rose-500 shrink-0 mt-0.5" />
               <div className="text-xs leading-snug flex-1">
                  <div className="text-muted-foreground">Favorite car</div>
               </div>
               <span className="font-medium font-mono text-foreground uppercase text-xs">McLaren P1</span>
            </div>
         </div>
      </div>
   );
}
