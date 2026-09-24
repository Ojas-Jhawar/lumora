import Image from "next/image";
import Link from "next/link";
import { BookOpen, PlayCircle, Gamepad2, HelpCircle, ClipboardList, Vote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { causes, type ContentItem } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const typeMeta = {
  article: { label: "Article", icon: BookOpen },
  video: { label: "Video", icon: PlayCircle },
  game: { label: "Game", icon: Gamepad2 },
  quiz: { label: "Quiz", icon: HelpCircle },
  survey: { label: "Survey", icon: ClipboardList },
  poll: { label: "Poll", icon: Vote },
};

export function ContentCard({ item, className }: { item: ContentItem; className?: string }) {
  const meta = typeMeta[item.type];
  const Icon = meta.icon;
  const cause = causes.find((c) => c.slug === item.cause);

  return (
    <Link href={`/article/${item.slug}`} className="group block">
      <Card className={cn("overflow-hidden hover:shadow-lift", className)}>
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-line">
          <Image
            src={item.image}
            alt=""
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 320px, 90vw"
          />
          <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-ink backdrop-blur">
            <Icon className="h-3.5 w-3.5" />
            {meta.label}
          </div>
        </div>
        <div className="p-5">
          {cause && (
            <Badge tone={cause.color} className="mb-3">
              {cause.emoji} {cause.name}
            </Badge>
          )}
          <h3 className="font-display text-lg font-semibold leading-snug text-ink">
            {item.title}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-sm text-slate">{item.description}</p>
          <p className="mt-3 text-xs font-medium text-slate-soft">{item.duration}</p>
        </div>
      </Card>
    </Link>
  );
}
