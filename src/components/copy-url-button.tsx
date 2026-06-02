"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckIcon, Link04Icon } from "@hugeicons/core-free-icons";
import { useEffect, useState } from "react";

export default function CopyUrlButton() {
   const [isCopied, setIsCopied] = useState(false);
   const pathname = usePathname();

   useEffect(() => {
      if (!isCopied) return;

      const timeOut = setTimeout(() => {
         setIsCopied(false);
      }, 2000);

      return () => clearTimeout(timeOut);
   }, [isCopied]);

   return (
      <Button
         size="icon"
         variant="secondary"
         className="size-9 rounded-full relative overflow-hidden"
         onClick={async () => {
            try {
               await navigator.clipboard.write([
                  new ClipboardItem({
                     ["text/plain"]:
                        process.env.NEXT_PUBLIC_SITE_URL + pathname,
                  }),
               ]);
            } finally {
               setIsCopied(true);
            }
         }}
      >
         <HugeiconsIcon
            icon={Link04Icon}
            strokeWidth={1.5}
            className={`absolute size-4.5 transition-all duration-300 ease-out
               ${
                  isCopied
                     ? "scale-75 opacity-0 blur-md"
                     : "scale-100 opacity-100 blur-0"
               }`}
         />
         <HugeiconsIcon
            icon={CheckIcon}
            strokeWidth={1.5}
            className={`absolute size-4.5 transition-all duration-300 ease-out
               ${
                  isCopied
                     ? "scale-100 opacity-100 blur-0"
                     : "scale-75 opacity-0 blur-md"
               }`}
         />
      </Button>
   );
}
