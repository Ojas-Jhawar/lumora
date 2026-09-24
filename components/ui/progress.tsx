import { cn } from "@/lib/utils";

const trackTone = {
  mint: "bg-mint-tint",
  lavender: "bg-lavender-tint",
  amber: "bg-amber-tint",
};

const fillTone = {
  mint: "bg-mint",
  lavender: "bg-lavender",
  amber: "bg-amber",
};

export function Progress({
  value,
  tone = "mint",
  className,
}: {
  /** 0–100 */
  value: number;
  tone?: "mint" | "lavender" | "amber";
  className?: string;
}) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div
      className={cn("h-2.5 w-full overflow-hidden rounded-full", trackTone[tone], className)}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={cn("h-full rounded-full transition-all duration-500", fillTone[tone])}
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}
