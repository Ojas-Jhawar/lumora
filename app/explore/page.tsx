import { Search } from "lucide-react";
import { ContentCard } from "@/components/content/content-card";
import { contentItems, causes } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const typeFilters = ["All", "Articles", "Videos", "Games", "Quizzes", "Surveys", "Polls"];
const sidebarCategories = [
  "Environment",
  "Education",
  "Health",
  "Food & Hunger",
  "Gender Equality",
  "Clean Water",
  "Energy",
  "Climate Action",
  "Peace & Justice",
  "Partnerships",
];

export default function ExplorePage() {
  return (
    <div className="container-content py-12">
      <h1 className="font-display text-3xl font-semibold sm:text-4xl">Explore</h1>
      <p className="mt-2 text-slate">Articles, videos, games, quizzes, surveys and more.</p>

      <div className="relative mt-8 max-w-2xl">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-soft" />
        <input
          type="search"
          placeholder="Search for topics, causes, or keywords…"
          className="h-13 w-full rounded-full border border-slate-line bg-white pl-12 pr-4 text-sm placeholder:text-slate-soft"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {typeFilters.map((t, i) => (
          <button
            key={t}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              i === 0
                ? "bg-ink text-paper"
                : "border border-slate-line bg-white text-slate hover:border-ink hover:text-ink"
            )}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[220px_1fr]">
        <aside className="hidden lg:block">
          <p className="mb-4 text-sm font-semibold text-ink">Categories</p>
          <ul className="space-y-1">
            {sidebarCategories.map((c, i) => (
              <li key={c}>
                <button
                  className={cn(
                    "w-full rounded-sm px-3 py-2 text-left text-sm transition-colors",
                    i === 0
                      ? "bg-mint-tint font-semibold text-mint-deep"
                      : "text-slate hover:bg-slate-line/40 hover:text-ink"
                  )}
                >
                  {c}
                </button>
              </li>
            ))}
            <li>
              <button className="w-full rounded-sm px-3 py-2 text-left text-sm font-semibold text-ink">
                All
              </button>
            </li>
          </ul>
        </aside>

        <div className="space-y-14">
          <section>
            <h2 className="font-display text-xl font-semibold">Featured</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {contentItems.slice(0, 3).map((item) => (
                <ContentCard key={item.slug} item={item} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold">Popular This Week</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {contentItems.slice(3, 6).map((item) => (
                <ContentCard key={item.slug} item={item} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold">Recommended For You</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[...contentItems].reverse().slice(0, 3).map((item) => (
                <ContentCard key={item.slug} item={item} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
