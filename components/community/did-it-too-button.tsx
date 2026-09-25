"use client";

import { CircleCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export function DidItTooButton({
  count,
  userDidIt,
  onToggle,
}: {
  count: number;
  userDidIt: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={userDidIt}
      className={cn(
        "flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-semibold transition-colors",
        userDidIt
          ? "border-amber bg-amber-tint text-amber-deep"
          : "border-slate-line bg-white text-slate hover:border-ink hover:text-ink"
      )}
    >
      <CircleCheck className="h-4 w-4" />
      {userDidIt ? "You did this too" : "I did it too"}
      {count > 0 && (
        <span className="ml-0.5 text-xs font-medium text-slate-soft">
          · {count.toLocaleString()}
        </span>
      )}
    </button>
  );
}
