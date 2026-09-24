import { cn } from "@/lib/utils";

export function LumoraMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={cn("h-7 w-7", className)}
      aria-hidden="true"
    >
      {/* Expanding ripples radiating from a spark — light + positive change */}
      <circle cx="16" cy="16" r="14.5" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1.4" />
      <circle cx="16" cy="16" r="9.5" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.4" />
      <path
        d="M16 7.5c.9 3 1.9 4.6 4.5 5.9-2.6 1.3-3.6 2.9-4.5 5.9-.9-3-1.9-4.6-4.5-5.9 2.6-1.3 3.6-2.9 4.5-5.9Z"
        fill="url(#lumora-spark)"
      />
      <defs>
        <linearGradient id="lumora-spark" x1="11.5" y1="7.5" x2="20.5" y2="19.3" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF9F45" />
          <stop offset="1" stopColor="#2FBF9F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function LumoraWordmark({ className, mono }: { className?: string; mono?: boolean }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <LumoraMark className={mono ? "text-white" : "text-ink"} />
      <span
        className={cn(
          "font-display text-xl font-semibold tracking-tight",
          mono ? "text-white" : "text-ink"
        )}
      >
        Lumora
      </span>
    </div>
  );
}
