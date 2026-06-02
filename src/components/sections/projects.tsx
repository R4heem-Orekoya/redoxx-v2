import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import ProjectImage from "../../../public/download.jpeg";
import ShevonImage from "../../../public/shevon.png";

export default function Projects() {
   return (
      <div className="space-y-12">
         <div className="space-y-1">
            <h2 className="text-lg font-medium leading-snug">Projects</h2>
            <p className="text-sm text-muted-foreground text-balance leading-snug">
               Below are some selected projects, full walkthroughs on request.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="#" className="space-y-4 group" aria-label="Test Project">
               <div className="group bg-secondary border border-border/40 aspect-16/10 rounded-lg p-1.5 flex flex-col gap-2">
                  <div className="relative border border-border/40 rounded-sm overflow-hidden flex-1">
                     <Image
                        src={ProjectImage}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                     />
                  </div>
               </div>

               <div className="flex items-start justify-between px-1 pb-1">
                  <div className="space-y-1">
                     <h3 className="text-sm font-medium leading-snug">
                        Test Project
                     </h3>
                     <p className="text-xs text-muted-foreground leading-snug">
                        The Autonomous Exchange Kernel.
                     </p>
                  </div>
                  <HugeiconsIcon
                     icon={ArrowRight01Icon}
                     size={16}
                     className="mt-0.5 shrink-0 transition-all duration-200 opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
                  />
               </div>
            </Link>

            <Link
               href="https://shevon-salmon.vercel.app/"
               target="_blank"
               rel="noopener noreferrer"
               className="space-y-4 group"
               aria-label="Shevon Salmon"
            >
               <div className="group bg-secondary border border-border/40 aspect-16/10 rounded-lg p-1.5 flex flex-col gap-2">
                  <div className="relative border border-border/40 rounded-sm overflow-hidden flex-1">
                     <Image
                        src={ShevonImage}
                        alt="shevon salmon brand website"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                     />
                  </div>
               </div>

               <div className="flex items-start justify-between px-1 pb-1">
                  <div className="space-y-1">
                     <h3 className="text-sm font-medium leading-snug">
                        Shevon Salmon
                     </h3>
                     <p className="text-xs text-muted-foreground leading-snug">
                        Brand website
                     </p>
                  </div>
                  <HugeiconsIcon
                     icon={ArrowRight01Icon}
                     size={16}
                     className="mt-0.5 shrink-0 transition-all duration-200 opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
                  />
               </div>
            </Link>

            <Link href="#" className="space-y-4 group" aria-label="Test Project">
               <div className="group bg-secondary border border-border/40 aspect-16/10 rounded-lg p-1.5 flex flex-col gap-2">
                  <div className="relative border border-border/40 rounded-sm overflow-hidden flex-1">
                     <Image
                        src={ProjectImage}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                     />
                  </div>
               </div>

               <div className="flex items-start justify-between px-1 pb-1">
                  <div className="space-y-1">
                     <h3 className="text-sm font-medium leading-snug">
                        Test Project
                     </h3>
                     <p className="text-xs text-muted-foreground leading-snug">
                        The Autonomous Exchange Kernel.
                     </p>
                  </div>
                  <HugeiconsIcon
                     icon={ArrowRight01Icon}
                     size={16}
                     className="mt-0.5 shrink-0 transition-all duration-200 opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
                  />
               </div>
            </Link>

            <Link href="#" className="space-y-4 group" aria-label="Test Project">
               <div className="group bg-secondary border border-border/40 aspect-16/10 rounded-lg p-1.5 flex flex-col gap-2">
                  <div className="relative border border-border/40 rounded-sm overflow-hidden flex-1">
                     <Image
                        src={ProjectImage}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                     />
                  </div>
               </div>

               <div className="flex items-start justify-between px-1 pb-1">
                  <div className="space-y-1">
                     <h3 className="text-sm font-medium leading-snug">
                        Test Project
                     </h3>
                     <p className="text-xs text-muted-foreground leading-snug">
                        The Autonomous Exchange Kernel.
                     </p>
                  </div>
                  <HugeiconsIcon
                     icon={ArrowRight01Icon}
                     size={16}
                     className="mt-0.5 shrink-0 transition-all duration-200 opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
                  />
               </div>
            </Link>
         </div>
      </div>
   );
}
