"use client";

import type { PropsWithChildren } from "react";
import QueryProvider from "./query-provider";
import { ThemeProvider } from "./theme-provider";
import { TooltipProvider } from "../ui/tooltip";

export default function Providers({ children }: PropsWithChildren<{}>) {
   return (
      <QueryProvider>
         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
         >
            <TooltipProvider>{children}</TooltipProvider>
         </ThemeProvider>
      </QueryProvider>
   );
}