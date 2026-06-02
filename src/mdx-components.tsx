import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import {
   CodeBlock as Code,
   CodeBlockCopyButton,
} from "@/components/code-block";
import DashedLine from "./components/dashed-line";

export function useMDXComponents(): MDXComponents {
   return {
      h1: ({ children }) => (
         <h1 className="text-xl font-semibold tracking-tight text-foreground mt-12 mb-4 first:mt-0">
            {children}
         </h1>
      ),
      h2: ({ children }) => (
         <h2 className="text-lg font-semibold tracking-tight text-foreground mt-10 mb-3">
            {children}
         </h2>
      ),
      h3: ({ children }) => (
         <h3 className="text-base font-semibold text-foreground mt-8 mb-2">
            {children}
         </h3>
      ),
      p: ({ children }) => (
         <div className="text-muted-foreground leading-relaxed mb-5">
            {children}
         </div>
      ),
      a: ({ href, children }) => (
         <Link
            href={href ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground font-normal underline underline-offset-4 decoration-muted-foreground hover:decoration-foreground hover:text-foreground transition-colors"
         >
            {children}
         </Link>
      ),
      strong: ({ children }) => (
         <strong className="font-semibold text-foreground">{children}</strong>
      ),
      blockquote: ({ children }) => (
         <blockquote className="border-l-3 border-border pl-4 py-2.5 text-muted-foreground italic [&>*:first-child]:mb-0">
            {children}
         </blockquote>
      ),
      pre: ({ children, ...props }: any) => {
         const code = children?.props?.children ?? "";

         return (
            <div className="my-6 overflow-hidden">
               <div className="p-1.5 bg-secondary rounded-xl border border-border/40">
                  <Code code={code} language={"ts"}>
                     <CodeBlockCopyButton />
                  </Code>
               </div>
            </div>
         );
      },
      code: ({ children, className }) => {
         if (!className) {
            return (
               <code className="px-1.5 pt-0.5 pb-1 text-sm text-foreground font-jetbrain font-medium rounded-md border bg-secondary before:hidden after:hidden">
                  {children}
               </code>
            );
         }
         return <code className={className}>{children}</code>;
      },
      img: ({ src, alt }) => (
         <div className="my-6 rounded-lg aspect-video overflow-hidden border border-border/40">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
               src={src}
               alt={alt ?? ""}
               className="w-full object-cover mt-0"
            />
         </div>
      ),
      ul: ({ children }) => (
         <ul className="text-sm text-muted-foreground leading-relaxed mb-5 list-disc pl-5 space-y-1">
            {children}
         </ul>
      ),
      ol: ({ children }) => (
         <ol className="text-sm text-muted-foreground leading-relaxed mb-5 list-decimal pl-5 space-y-1">
            {children}
         </ol>
      ),
      li: ({ children }) => <li>{children}</li>,
      hr: () => <DashedLine className="border-border my-12" />,
   };
}
