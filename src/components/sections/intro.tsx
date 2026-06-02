import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { SiGithub, SiMaildotru, SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import DashedLine from "../dashed-line";
import Avatar from "../../../public/avatar.svg"
import Image from "next/image";

export default function Intro() {
   return (
      <div className="space-y-8">
         <div className="flex items-center gap-4">
            <div className="size-12 rounded-full overflow-hidden">
               <Image
                  src={Avatar}
                  alt="avatar"
                  unoptimized
               />
            </div>
            <div className="flex flex-col">
               <h1 className="font-medium leading-snug">Raheem Orekoya</h1>
               <p className="text-muted-foreground leading-snug">
                  Product Engineer
               </p>
            </div>
         </div>

         <div className="text-muted-foreground max-sm:text-balance space-y-4">
            <p>
               I'm a product engineer. I design and build software end to end —
               from the interface to the infrastructure behind it. I care about
               how things work as much as how they look and feel.
            </p>

            <p>
               I build products, not just features. I sit at the intersection of
               design, engineering, and product thinking — close enough to the
               user to know what matters, and technical enough to ship it
               myself.
            </p>
         </div>

         <div className="flex items-center gap-4">
            <nav aria-label="Social links" className="flex gap-2">
               <Link
                  href="mailto:hello@raheemorekoya.me"
                  className={cn(
                     buttonVariants({ variant: "secondary", size: "icon" }),
                     "size-9 rounded-full",
                  )}
                  aria-label="Email"
               >
                  <SiMaildotru size={14} />
               </Link>
                <Link
                   href="https://github.com/R4heem-Orekoya"
                   target="_blank"
                   rel="noopener noreferrer"
                   className={cn(
                      buttonVariants({ variant: "secondary", size: "icon" }),
                      "size-9 rounded-full",
                   )}
                   aria-label="GitHub"
                >
                   <SiGithub size={12} />
                </Link>
                <Link
                   href="https://x.com/raheem_d3v"
                   target="_blank"
                   rel="noopener noreferrer"
                   className={cn(
                      buttonVariants({ variant: "secondary", size: "icon" }),
                      "size-9 rounded-full",
                   )}
                   aria-label="X"
                >
                   <SiX size={10} />
                </Link>
                <Link
                   href="https://linkedin.com/in/babatunde-orekoya-aa5a252b7"
                   target="_blank"
                   rel="noopener noreferrer"
                   className={cn(
                      buttonVariants({ variant: "secondary", size: "icon" }),
                      "size-9 rounded-full",
                   )}
                   aria-label="LinkedIn"
                >
                   <FaLinkedin size={12} />
                </Link>
            </nav>
            
            <DashedLine className="max-sm:hidden" />
         </div>
      </div>
   );
}
