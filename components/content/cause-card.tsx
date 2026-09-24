import Link from "next/link";
import { Card } from "@/components/ui/card";
import type { Cause } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const toneBg = {
  mint: "bg-mint-tint",
  lavender: "bg-lavender-tint",
  amber: "bg-amber-tint",
};

export function CauseCard({ cause, className }: { cause: Cause; className?: string }) {
  return (
    <Link href={`/causes/${cause.slug}`}>
      <Card
        className={cn(
          "flex flex-col items-start gap-3 p-5 hover:shadow-lift",
          className
        )}
      >
        <span
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-sm text-xl",
            toneBg[cause.color]
          )}
        >
          {cause.emoji}
        </span>
        <p className="font-display text-base font-semibold text-ink">{cause.name}</p>
      </Card>
    </Link>
  );
}
