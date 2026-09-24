import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContentCard } from "@/components/content/content-card";
import { contentItems, causes } from "@/lib/mock-data";

export function generateStaticParams() {
  return contentItems.map((item) => ({ slug: item.slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const item = contentItems.find((c) => c.slug === params.slug);
  if (!item) return notFound();

  const cause = causes.find((c) => c.slug === item.cause);
  const related = contentItems.filter((c) => c.slug !== item.slug).slice(0, 3);

  return (
    <div className="container-content py-10">
      <Link href="/explore" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate hover:text-ink">
        <ChevronLeft className="h-4 w-4" /> Back to Explore
      </Link>

      <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_320px]">
        <article className="max-w-prose">
          {cause && (
            <Badge tone={cause.color} className="mb-4">
              {cause.emoji} {cause.name}
            </Badge>
          )}
          <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
            {item.title}
          </h1>
          <p className="mt-3 text-lg text-slate">
            What's changing, why it matters, and three ways you can help move it forward.
          </p>

          <div className="mt-6 flex items-center gap-3 text-sm text-slate">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lavender-tint font-semibold text-lavender-deep">
              LT
            </span>
            <span>Lumora Editorial Team</span>
            <span aria-hidden>·</span>
            <time>Sept 12, 2026</time>
            <span aria-hidden>·</span>
            <span>{item.duration}</span>
          </div>

          <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-md">
            <Image src={item.image} alt="" fill className="object-cover" priority />
          </div>

          <div className="prose-content mt-8 space-y-5 text-[1.05rem] leading-relaxed text-ink/90">
            <p>{item.description}</p>

            <h2 className="font-display text-2xl font-semibold text-ink">1. What's actually happening</h2>
            <p>
              Over the past decade, the pace of change here has outstripped most public
              awareness of it. What used to be a niche concern for specialists is now shaping
              decisions in households, city halls, and boardrooms alike.
            </p>

            <div className="rounded-md border border-slate-line bg-mint-tint/40 p-6">
              <p className="font-display text-2xl font-semibold text-mint-deep">72%</p>
              <p className="mt-1 text-sm text-slate">
                of people surveyed say they'd act on this if given one clear first step.
              </p>
            </div>

            <h2 className="font-display text-2xl font-semibold text-ink">2. The benefits</h2>
            <p>
              Progress here compounds — early, small actions tend to unlock larger
              structural shifts once enough people take them. That's the case for
              individual habits as much as it is for policy.
            </p>

            <h2 className="font-display text-2xl font-semibold text-ink">3. How you can help</h2>
            <p>
              You don't need to become an expert to make a difference. Below, we've linked
              the specific actions and challenges that build directly on what you just read.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-3 border-t border-slate-line pt-6">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4" /> Share
            </Button>
            <Button variant="outline" size="sm">
              <Bookmark className="h-4 w-4" /> Save
            </Button>
          </div>

          <div className="mt-10 rounded-md border border-slate-line bg-white p-6 text-center sm:hidden">
            <p className="font-display text-xl font-semibold">
              Want to turn knowledge into action?
            </p>
            <Link href="/act">
              <Button className="mt-4">See Related Actions</Button>
            </Link>
          </div>
        </article>

        <aside className="space-y-8">
          <div className="rounded-md border border-slate-line bg-white p-6">
            <p className="font-display text-lg font-semibold">Take Action</p>
            <p className="mt-2 text-sm text-slate">
              Support clean energy projects and help build a sustainable future.
            </p>
            <Link href="/causes">
              <Button className="mt-4 w-full">Choose a Cause</Button>
            </Link>
          </div>

          <div>
            <p className="mb-4 font-display text-lg font-semibold">Related Articles</p>
            <div className="space-y-4">
              {related.map((r) => (
                <ContentCard key={r.slug} item={r} />
              ))}
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-16 hidden rounded-lg bg-ink px-8 py-12 text-center text-paper sm:block">
        <p className="font-display text-2xl font-semibold">
          Want to turn knowledge into action?
        </p>
        <Link href="/act">
          <Button className="mt-5">See Related Actions</Button>
        </Link>
      </div>
    </div>
  );
}
