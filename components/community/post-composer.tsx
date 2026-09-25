"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { causes, currentUser } from "@/lib/community-data";

export function PostComposer({
  onSubmit,
}: {
  onSubmit: (content: string, causeSlug: string) => void;
}) {
  const [content, setContent] = useState("");
  const [causeSlug, setCauseSlug] = useState(causes[0].slug);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = content.trim();
    if (!trimmed) return;
    onSubmit(trimmed, causeSlug);
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-md border border-slate-line bg-white p-5">
      <div className="flex gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lavender-tint text-sm font-semibold text-lavender-deep">
          {currentUser.initials}
        </span>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Share a step you took today…"
          rows={3}
          className="w-full resize-none rounded-sm border border-slate-line bg-white p-3 text-sm text-ink placeholder:text-slate-soft focus-visible:border-lavender"
        />
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 pl-13">
        <select
          value={causeSlug}
          onChange={(e) => setCauseSlug(e.target.value)}
          className="h-9 rounded-full border border-slate-line bg-white px-3 text-sm text-slate"
          aria-label="Cause this action supports"
        >
          {causes.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.emoji} {c.name}
            </option>
          ))}
        </select>

        <Button type="submit" size="sm" disabled={!content.trim()}>
          <Send className="h-4 w-4" /> Share
        </Button>
      </div>
    </form>
  );
}
