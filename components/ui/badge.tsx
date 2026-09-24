import * as React from "react";
import { cn } from "@/lib/utils";

type Tone = "mint" | "lavender" | "amber" | "neutral";

const toneClasses: Record<Tone, string> = {
  mint: "bg-mint-tint text-mint-deep",
  lavender: "bg-lavender-tint text-lavender-deep",
  amber: "bg-amber-tint text-amber-deep",
  neutral: "bg-slate-line text-slate",
};

export function Badge({
  tone = "neutral",
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { tone?: Tone }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold",
        toneClasses[tone],
        className
      )}
      {...props}
    />
  );
}
