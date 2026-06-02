import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface DashedLineProps {
   className?: string;
}

export default function DashedLine({ className }: DashedLineProps) {
   return (
      <svg className={cn("w-full h-px opacity-50 overflow-visible", className)}>
         <line
            x1="0"
            y1="0"
            x2="100%"
            y2="0"
            stroke="var(--muted-foreground)"
            strokeWidth="1"
            strokeDasharray="6 4"
            strokeOpacity="0.3"
         />
      </svg>
   );
}
