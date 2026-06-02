import { InfoIcon, AlertTriangleIcon, LightbulbIcon, MessageSquareIcon } from "lucide-react";
import { PropsWithChildren } from "react";

const styles = {
   info: {
      border: "border-blue-500/20",
      bg: "bg-blue-500/5",
      icon: InfoIcon,
      iconColor: "text-blue-500",
   },
   warning: {
      border: "border-amber-500/20",
      bg: "bg-amber-500/5",
      icon: AlertTriangleIcon,
      iconColor: "text-amber-500",
   },
   tip: {
      border: "border-emerald-500/20",
      bg: "bg-emerald-500/5",
      icon: LightbulbIcon,
      iconColor: "text-emerald-500",
   },
   note: {
      border: "border-muted-foreground/20",
      bg: "bg-secondary/50",
      icon: MessageSquareIcon,
      iconColor: "text-muted-foreground",
   },
};

interface NoteProps {
   type?: keyof typeof styles;
}

export default function Note({ type = "note", children }: PropsWithChildren<NoteProps>) {
   const { border, bg, icon: Icon, iconColor } = styles[type];

   return (
      <div className={`flex items-start gap-3 ${bg} border ${border} rounded-lg p-3 my-6`}>
         <Icon className={`size-4 shrink-0 mt-0.5 ${iconColor}`} />
         <div className="text-sm text-muted-foreground leading-relaxed [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
            {children}
         </div>
      </div>
   );
}
