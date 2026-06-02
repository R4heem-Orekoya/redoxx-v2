import {
   ArrowUpRight01Icon,
   Mail01Icon,
   NewTwitterIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import Link from "next/link";

export const CONTACTS = [
   {
      icon: <HugeiconsIcon icon={Mail01Icon} className="size-5" />,
      label: "Email",
      value: "hello@raheemorekoya.me",
      href: "mailto:hello@raheemorekoya.me",
   },
   {
      icon: <SiGithub className="size-5" />,
      label: "Github",
      value: "@R4heem-Orekoya",
      href: "https://github.com/R4heem-Orekoya",
   },
   {
      icon: <HugeiconsIcon icon={NewTwitterIcon} className="size-5" />,
      label: "X.com",
      value: "@raheem_d3v",
      href: "https://x.com/raheem_d3v",
   },
   {
      icon: <FaLinkedin className="size-5" />,
      label: "LinkedIn",
      value: "@babatunde-orekoya-aa5a252b7",
      href: "https://linkedin.com/in/babatunde-orekoya-aa5a252b7",
   },
];

export default function Contact() {
   return (
      <nav aria-label="Contact links" className="flex flex-col text-muted-foreground">
         {CONTACTS.map(({ icon, label, value, href }) => (
            <Link
               key={label}
               href={href}
               target="_blank"
               aria-label={label}
               className="group flex items-center justify-between py-2.5 transition-colors hover:text-foreground"
            >
               <div className="flex items-center gap-3">
                  {icon}
                  <span>{label}</span>
               </div>

               <div className="flex items-center gap-2">
                  <span className="max-sm:hidden">{value}</span>
                  <HugeiconsIcon
                     icon={ArrowUpRight01Icon}
                     className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
               </div>
            </Link>
         ))}
      </nav>
   );
}
