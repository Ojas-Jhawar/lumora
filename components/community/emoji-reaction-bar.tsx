"use client";

import { curatedReactions, type ReactionEmoji } from "@/lib/community-data";
import { cn } from "@/lib/utils";

export function EmojiReactionBar({
  reactions,
  userReaction,
  onReact,
}: {
  reactions: Record<ReactionEmoji, number>;
  userReaction: ReactionEmoji | null;
  onReact: (emoji: ReactionEmoji) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1.5" role="group" aria-label="React with an emoji">
      {curatedReactions.map(({ emoji, label }) => {
        const count = reactions[emoji];
        const active = userReaction === emoji;
        return (
          <button
            key={emoji}
            type="button"
            onClick={() => onReact(emoji)}
            aria-pressed={active}
            aria-label={label}
            title={label}
            className={cn(
              "flex items-center gap-1 rounded-full border px-2.5 py-1 text-sm font-medium transition-colors",
              active
                ? "border-mint bg-mint-tint text-mint-deep"
                : "border-slate-line bg-white text-slate hover:border-ink hover:text-ink"
            )}
          >
            <span aria-hidden>{emoji}</span>
            {count > 0 && <span className="text-xs">{count}</span>}
          </button>
        );
      })}
    </div>
  );
}
