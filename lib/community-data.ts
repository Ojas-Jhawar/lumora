import { causes, currentUser } from "@/lib/mock-data";

/** The only reactions people can give — kept small and specific on purpose. */
export type ReactionEmoji = "👏" | "🔥" | "💪" | "❤️" | "🎉";

export const curatedReactions: { emoji: ReactionEmoji; label: string }[] = [
  { emoji: "👏", label: "Applaud" },
  { emoji: "🔥", label: "On fire" },
  { emoji: "💪", label: "Strong" },
  { emoji: "❤️", label: "Love it" },
  { emoji: "🎉", label: "Celebrate" },
];

export type CommunityPost = {
  id: string;
  author: { name: string; handle: string; initials: string };
  causeSlug: string;
  content: string;
  timestamp: string;
  reactions: Record<ReactionEmoji, number>;
  /** How many people have marked "I did it too" */
  didItCount: number;
};

function baseReactions(): Record<ReactionEmoji, number> {
  return { "👏": 0, "🔥": 0, "💪": 0, "❤️": 0, "🎉": 0 };
}

export const communityPosts: CommunityPost[] = [
  {
    id: "post-1",
    author: { name: "Maya Chen", handle: "mayachen", initials: "MC" },
    causeSlug: "environment",
    content:
      "Finished my 7-Day Plastic-Free Challenge! Swapped every single-use item in my kitchen for a reusable one. Small change, but it's already sticking as a habit.",
    timestamp: "2h ago",
    reactions: { ...baseReactions(), "👏": 24, "🔥": 9, "🎉": 4 },
    didItCount: 18,
  },
  {
    id: "post-2",
    author: { name: "Diego Ramirez", handle: "diegor", initials: "DR" },
    causeSlug: "clean-water",
    content:
      "Cut my household water use by tracking every tap I left running. Down 30% this week on the Save Water Challenge — didn't think it'd be this easy.",
    timestamp: "5h ago",
    reactions: { ...baseReactions(), "💪": 15, "👏": 11, "❤️": 3 },
    didItCount: 27,
  },
  {
    id: "post-3",
    author: { name: "Priya Nair", handle: "priyan", initials: "PN" },
    causeSlug: "education",
    content:
      "Read book #3 of 5 for the Read 5 Books Challenge — 'Educated' by Tara Westover. Donated the points I earned straight to the Education fund.",
    timestamp: "1d ago",
    reactions: { ...baseReactions(), "❤️": 19, "👏": 8 },
    didItCount: 6,
  },
  {
    id: "post-4",
    author: { name: "Sam Okafor", handle: "samokafor", initials: "SO" },
    causeSlug: "food",
    content:
      "Meal-prepped from a planned grocery list all week for the Reduce Food Waste Challenge. Only threw out one wilted lettuce — usually it's half the fridge.",
    timestamp: "1d ago",
    reactions: { ...baseReactions(), "🔥": 12, "🎉": 7 },
    didItCount: 9,
  },
  {
    id: "post-5",
    author: { name: "Elena Petrova", handle: "elenap", initials: "EP" },
    causeSlug: "communities",
    content:
      "Spent Saturday helping a neighbor move into her new place through the Help Someone Challenge. Turns out she's also on Lumora — small world.",
    timestamp: "2d ago",
    reactions: { ...baseReactions(), "❤️": 31, "👏": 14, "🎉": 5 },
    didItCount: 22,
  },
];

export { causes, currentUser };
