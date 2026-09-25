"use client";

import { useState } from "react";
import { PostComposer } from "@/components/community/post-composer";
import { PostCard, type FeedPost } from "@/components/community/post-card";
import { communityPosts, currentUser, type ReactionEmoji } from "@/lib/community-data";

function toFeedPost(post: (typeof communityPosts)[number]): FeedPost {
  return { ...post, userReaction: null, userDidIt: false };
}

export default function CommunityPage() {
  const [posts, setPosts] = useState<FeedPost[]>(() => communityPosts.map(toFeedPost));

  function handleReact(postId: string, emoji: ReactionEmoji) {
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id !== postId) return p;
        const reactions = { ...p.reactions };
        let userReaction = p.userReaction;

        if (userReaction) reactions[userReaction] -= 1;

        if (userReaction === emoji) {
          userReaction = null;
        } else {
          reactions[emoji] += 1;
          userReaction = emoji;
        }

        return { ...p, reactions, userReaction };
      })
    );
  }

  function handleToggleDidIt(postId: string) {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId
          ? {
              ...p,
              userDidIt: !p.userDidIt,
              didItCount: p.userDidIt ? p.didItCount - 1 : p.didItCount + 1,
            }
          : p
      )
    );
  }

  function handleNewPost(content: string, causeSlug: string) {
    const newPost: FeedPost = {
      id: `post-${Date.now()}`,
      author: {
        name: currentUser.name,
        handle: currentUser.handle,
        initials: currentUser.initials,
      },
      causeSlug,
      content,
      timestamp: "Just now",
      reactions: { "👏": 0, "🔥": 0, "💪": 0, "❤️": 0, "🎉": 0 },
      userReaction: null,
      didItCount: 0,
      userDidIt: false,
    };
    setPosts((prev) => [newPost, ...prev]);
  }

  return (
    <div className="container-content max-w-2xl py-12">
      <h1 className="font-display text-3xl font-semibold sm:text-4xl">Community</h1>
      <p className="mt-2 text-slate">
        Share the steps you're taking, react to what others are doing, and let people know
        when you've done it too.
      </p>

      <div className="mt-8">
        <PostComposer onSubmit={handleNewPost} />
      </div>

      <div className="mt-8 space-y-5">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onReact={(emoji) => handleReact(post.id, emoji)}
            onToggleDidIt={() => handleToggleDidIt(post.id)}
          />
        ))}
      </div>
    </div>
  );
}
