import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  PlayCircle,
  Gamepad2,
  HelpCircle,
  ClipboardList,
  Vote,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContentCard } from "@/components/content/content-card";
import { CauseCard } from "@/components/content/cause-card";
import { causes, contentItems, impactMetrics } from "@/lib/mock-data";

const exploreTypes = [
  { icon: BookOpen, label: "Articles", desc: "Deep dives on the issues shaping our world." },
  { icon: PlayCircle, label: "Videos", desc: "Short, watchable stories with real substance." },
  { icon: Gamepad2, label: "Games", desc: "Learn by playing — geography, climate & more." },
  { icon: HelpCircle, label: "Quizzes", desc: "Test what you know, and what you don't yet." },
  { icon: ClipboardList, label: "Surveys", desc: "Help shape research on what matters to people." },
  { icon: Vote, label: "Polls", desc: "See where the community stands, in real time." },
];

const loopSteps = ["Learn", "Engage", "Revenue", "Impact", "Action"];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="container-content grid gap-10 pb-20 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-20">
        <div>
          <h1 className="max-w-xl font-display text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
            Your attention can create a brighter future.
          </h1>
          <p className="mt-6 max-w-md text-lg text-slate">
            Read, watch, play and take action. Lumora turns everyday engagement into
            opportunities for positive change.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/explore">
              <Button size="lg">
                Start Exploring <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/impact">
              <Button size="lg" variant="outline">
                See Your Impact
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 hidden rounded-full bg-mint-tint/60 blur-2xl sm:block" />
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-lg shadow-lift sm:ml-auto">
            <Image
              src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1000&auto=format&fit=crop"
              alt="A person reading outdoors in natural light"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* ripple motif echoing the wordmark */}
          <svg
            viewBox="0 0 120 120"
            className="absolute -bottom-6 -left-6 hidden h-28 w-28 text-mint sm:block"
            aria-hidden
          >
            <circle cx="60" cy="60" r="58" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.5" fill="none" />
            <circle cx="60" cy="60" r="40" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
      </section>

      {/* EXPLORE WHAT MATTERS */}
      <section className="container-content py-16">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">Explore What Matters</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {exploreTypes.map(({ icon: Icon, label, desc }) => (
            <Link
              key={label}
              href="/explore"
              className="group rounded-md border border-slate-line bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-mint-tint text-mint-deep">
                <Icon className="h-5 w-5" />
              </span>
              <p className="mt-4 font-display text-lg font-semibold">{label}</p>
              <p className="mt-1 text-sm text-slate">{desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* TRENDING TODAY */}
      <section className="container-content py-16">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">Trending Today</h2>
          <Link href="/explore" className="text-sm font-semibold text-ink hover:text-mint-deep">
            View all
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contentItems.slice(0, 3).map((item) => (
            <ContentCard key={item.slug} item={item} />
          ))}
        </div>
      </section>

      {/* CHOOSE YOUR CAUSE */}
      <section className="bg-white py-16">
        <div className="container-content">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">Choose Your Cause</h2>
          <p className="mt-2 max-w-lg text-slate">
            Follow the causes you care about most — your activity helps direct where impact goes.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {causes.map((cause) => (
              <CauseCard key={cause.slug} cause={cause} />
            ))}
          </div>
          <Link href="/causes">
            <Button variant="secondary" className="mt-8">
              Explore Causes
            </Button>
          </Link>
        </div>
      </section>

      {/* IMPACT IN NUMBERS */}
      <section className="container-content py-16">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">Your Impact in Numbers</h2>
        <p className="mt-2 text-sm font-medium text-slate-soft">
          Demo metrics — illustrative figures for this prototype, not a verified report.
        </p>
        <dl className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {[
            ["People reached", impactMetrics.peopleReached],
            ["Learning activities completed", impactMetrics.activitiesCompleted],
            ["Community actions", impactMetrics.communityActions],
            ["Causes supported", impactMetrics.causesSupported],
          ].map(([label, value]) => (
            <div key={label} className="rounded-md border border-slate-line bg-white p-6">
              <dt className="text-sm text-slate">{label}</dt>
              <dd className="mt-2 font-display text-3xl font-semibold text-ink">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* THE LOOP */}
      <section className="bg-ink py-16 text-paper">
        <div className="container-content">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Small actions. Bigger change.
          </h2>
          <p className="mt-2 max-w-lg text-slate-line/80">
            Every visit moves through the same loop — here's how your time becomes impact.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            {loopSteps.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold">
                  {step}
                </span>
                {i < loopSteps.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-slate-line/50" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-content py-20 text-center">
        <h2 className="mx-auto max-w-xl font-display text-3xl font-semibold sm:text-4xl">
          A brighter tomorrow starts with you.
        </h2>
        <Link href="/login">
          <Button size="lg" className="mt-8">
            Join Lumora
          </Button>
        </Link>
      </section>
    </>
  );
}
