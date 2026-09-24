import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { causes } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const toneBg = {
  mint: "bg-mint-tint",
  lavender: "bg-lavender-tint",
  amber: "bg-amber-tint",
};

export default function CausesPage() {
  return (
    <div className="container-content py-12">
      <h1 className="font-display text-3xl font-semibold sm:text-4xl">Causes</h1>
      <p className="mt-2 max-w-lg text-slate">
        Every cause maps to one or more UN Sustainable Development Goals. Follow one, donate
        points you've earned, or give directly — see exactly where it goes.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {causes.map((cause) => {
          const pct = Math.round((cause.fundsRaisedUSD / cause.fundGoalUSD) * 100);
          return (
            <Link key={cause.slug} href={`/causes/${cause.slug}`}>
              <Card className="flex h-full flex-col gap-4 p-6 hover:shadow-lift">
                <span
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-sm text-xl",
                    toneBg[cause.color]
                  )}
                >
                  {cause.emoji}
                </span>
                <div>
                  <p className="font-display text-lg font-semibold text-ink">{cause.name}</p>
                  <p className="mt-1 text-sm text-slate">{cause.description}</p>
                </div>

                <div className="mt-auto space-y-2">
                  <Progress value={pct} tone={cause.color} />
                  <div className="flex items-center justify-between text-xs text-slate-soft">
                    <span>
                      <span className="font-semibold text-ink">
                        ${cause.fundsRaisedUSD.toLocaleString()}
                      </span>{" "}
                      raised of ${cause.fundGoalUSD.toLocaleString()}
                    </span>
                    <span>{cause.supporters.toLocaleString()} supporters</span>
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
