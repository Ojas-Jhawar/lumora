import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, Users, Sparkles } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { ContentCard } from "@/components/content/content-card";
import { SdgBadge } from "@/components/causes/sdg-badge";
import { DonatePanel } from "@/components/causes/donate-panel";
import { causes, contentItems, challenges } from "@/lib/mock-data";

export function generateStaticParams() {
  return causes.map((c) => ({ slug: c.slug }));
}

export default function CauseDetailPage({ params }: { params: { slug: string } }) {
  const cause = causes.find((c) => c.slug === params.slug);
  if (!cause) return notFound();

  const pct = Math.round((cause.fundsRaisedUSD / cause.fundGoalUSD) * 100);
  const relatedContent = contentItems.filter((c) => c.cause === cause.slug).slice(0, 3);
  const relatedChallenges = challenges.filter((c) => c.cause === cause.slug).slice(0, 2);

  return (
    <div className="container-content py-10">
      <Link
        href="/causes"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate hover:text-ink"
      >
        <ChevronLeft className="h-4 w-4" /> All Causes
      </Link>

      {/* Hero */}
      <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
        <div>
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
            <Image src={cause.image} alt="" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-transparent" />
            <div className="absolute bottom-5 left-5 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-white/90 text-xl backdrop-blur">
                {cause.emoji}
              </span>
              <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
                {cause.name}
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {cause.sdgs.map((n) => (
              <SdgBadge key={n} number={n} />
            ))}
          </div>

          <p className="mt-5 max-w-prose text-lg text-slate">{cause.longDescription}</p>

          {/* Stats */}
          <div className="mt-8 rounded-md border border-slate-line bg-white p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-display text-2xl font-semibold text-ink">
                ${cause.fundsRaisedUSD.toLocaleString()}{" "}
                <span className="text-base font-medium text-slate">
                  raised of ${cause.fundGoalUSD.toLocaleString()} goal
                </span>
              </p>
              <span className="text-sm font-semibold text-mint-deep">{pct}%</span>
            </div>
            <Progress value={pct} tone={cause.color} className="mt-3" />

            <div className="mt-5 grid grid-cols-2 gap-4 border-t border-slate-line pt-5 sm:grid-cols-3">
              <div>
                <p className="flex items-center gap-1.5 text-xs font-medium text-slate-soft">
                  <Sparkles className="h-3.5 w-3.5" /> Points donated
                </p>
                <p className="mt-1 font-display text-xl font-semibold text-ink">
                  {cause.pointsDonated.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="flex items-center gap-1.5 text-xs font-medium text-slate-soft">
                  <Users className="h-3.5 w-3.5" /> Supporters
                </p>
                <p className="mt-1 font-display text-xl font-semibold text-ink">
                  {cause.supporters.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <p className="mt-4 text-xs text-slate-soft">
            Demo figures for this prototype — not a verified financial report.
          </p>

          {/* Related content */}
          {relatedContent.length > 0 && (
            <div className="mt-12">
              <p className="mb-5 font-display text-xl font-semibold">Learn about this cause</p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedContent.map((item) => (
                  <ContentCard key={item.slug} item={item} />
                ))}
              </div>
            </div>
          )}

          {/* Related challenges */}
          {relatedChallenges.length > 0 && (
            <div className="mt-12">
              <p className="mb-5 font-display text-xl font-semibold">Take action</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {relatedChallenges.map((ch) => (
                  <Link
                    key={ch.slug}
                    href="/act"
                    className="flex items-center gap-4 rounded-md border border-slate-line bg-white p-5 hover:shadow-lift"
                  >
                    <span className="text-2xl">{ch.emoji}</span>
                    <div>
                      <p className="font-display text-base font-semibold text-ink">{ch.title}</p>
                      <p className="mt-0.5 text-xs text-slate-soft">
                        {ch.duration} · {ch.difficulty} · {ch.participants.toLocaleString()} joined
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Donate panel — sticky on desktop */}
        <aside className="lg:sticky lg:top-24">
          <DonatePanel cause={cause} />
        </aside>
      </div>
    </div>
  );
}
