import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-md border border-slate-line bg-white shadow-soft transition-shadow duration-200",
        className
      )}
      {...props}
    />
  );
}
