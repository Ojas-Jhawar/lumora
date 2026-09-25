"use client";

import { Share2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EmojiReactionBar } from "./emoji-reaction-bar";
import { DidItTooButton } from "./did-it-too-button";
import { causes, type ReactionEmoji } from "@/lib/community-data";

export type FeedPost = {
  id: string;
  author: { name: string; handle: string; initials: string };
  causeSlug: string;
  content: string;
  timestamp: string;
  reactions: Record<ReactionEmoji, number>;
  userReaction: ReactionEmoji | null;
  didItCount: number;
  userDidIt: boolean;
};

export function PostCard({
  post,
  onReact,
  onToggleDidIt,
}: {
  post: FeedPost;
  onReact: (emoji: ReactionEmoji) => void;
  onToggleDidIt: () => void;
}) {
  const cause = causes.find((c) => c.slug === post.causeSlug);

  return (
    <Card className="p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lavender-tint text-sm font-semibold text-lavender-deep">
          {post.author.initials}
        </span>
        <div className="min-w-0">
          <p className="truncate font-display text-sm font-semibold text-ink">
            {post.author.name}
          </p>
          <p className="text-xs text-slate-soft">
            @{post.author.handle} · {post.timestamp}
          </p>
        </div>
        {cause && (
          <Badge tone={cause.color} className="ml-auto shrink-0">
            {cause.emoji} {cause.name}
          </Badge>
        )}
      </div>

      <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/90">{post.content}</p>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-line pt-4">
        <div className="flex flex-wrap items-center gap-2">
          <EmojiReactionBar
            reactions={post.reactions}
            userReaction={post.userReaction}
            onReact={onReact}
          />
          <DidItTooButton
            count={post.didItCount}
            userDidIt={post.userDidIt}
            onToggle={onToggleDidIt}
          />
        </div>
        <button
          type="button"
          className="flex items-center gap-1.5 text-sm font-medium text-slate hover:text-ink"
          aria-label="Share post"
        >
          <Share2 className="h-4 w-4" /> Share
        </button>
      </div>
    </Card>
  );
}
