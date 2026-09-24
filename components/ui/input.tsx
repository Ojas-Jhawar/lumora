import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-12 w-full rounded-sm border border-slate-line bg-white px-4 text-sm text-ink placeholder:text-slate-soft focus-visible:border-lavender",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";
