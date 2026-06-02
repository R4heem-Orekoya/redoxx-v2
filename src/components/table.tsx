import { PropsWithChildren } from "react";

export function Table({ children }: PropsWithChildren) {
   return (
      <div className="my-6 overflow-x-auto rounded-lg border border-border/40">
         <table className="w-full text-sm mt-0">{children}</table>
      </div>
   );
}

export function TableHead({ children }: PropsWithChildren) {
   return (
      <thead>
         <tr className="bg-secondary border-b border-border/40">{children}</tr>
      </thead>
   );
}

export function TableHeader({ children }: PropsWithChildren) {
   return (
      <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-3 py-2.5">
         {children}
      </th>
   );
}

export function TableBody({ children }: PropsWithChildren) {
   return <tbody>{children}</tbody>;
}

export function TableRow({ children }: PropsWithChildren) {
   return (
      <tr className="border-b border-border/20 last:border-0 hover:bg-secondary/50 transition-colors">
         {children}
      </tr>
   );
}

export function TableCell({ children }: PropsWithChildren) {
   return <td className="px-3 py-2.5 text-muted-foreground">{children}</td>;
}
