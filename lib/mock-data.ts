export type ContentType = "article" | "video" | "game" | "quiz" | "survey" | "poll";

export type Cause = {
  slug: string;
  name: string;
  emoji: string;
  color: "mint" | "lavender" | "amber";
};

export const causes: Cause[] = [
  { slug: "environment", name: "Environment", emoji: "🌱", color: "mint" },
  { slug: "education", name: "Education", emoji: "📚", color: "lavender" },
  { slug: "clean-water", name: "Clean Water", emoji: "💧", color: "mint" },
  { slug: "health", name: "Health", emoji: "❤️", color: "amber" },
  { slug: "animals", name: "Animals & Wildlife", emoji: "🐾", color: "amber" },
  { slug: "food", name: "Food & Hunger", emoji: "🍚", color: "mint" },
  { slug: "communities", name: "Poverty & Housing", emoji: "🏠", color: "lavender" },
  { slug: "other", name: "Other SDGs", emoji: "🌍", color: "lavender" },
];

export type ContentItem = {
  slug: string;
  type: ContentType;
  title: string;
  description: string;
  cause: string;
  duration: string;
  image: string;
};

export const contentItems: ContentItem[] = [
  {
    slug: "power-of-renewable-energy",
    type: "article",
    title: "The Power of Renewable Energy",
    description:
      "Renewable energy isn't just an environmental fix — it's becoming the more affordable, more equitable choice worldwide.",
    cause: "environment",
    duration: "5 min read",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "how-the-ocean-heals-itself",
    type: "video",
    title: "How the Ocean Heals Itself",
    description: "Marine ecosystems can recover faster than we thought — if we give them the chance.",
    cause: "environment",
    duration: "8 min watch",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "global-water-crisis",
    type: "article",
    title: "The Global Water Crisis, Explained",
    description: "What it means for 2 billion people to live without safely managed drinking water.",
    cause: "clean-water",
    duration: "6 min read",
    image:
      "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "recycling-challenge-game",
    type: "game",
    title: "Recycling Challenge",
    description: "Sort, reduce, and learn what actually belongs in the bin.",
    cause: "environment",
    duration: "4 min play",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "sdg-quiz",
    type: "quiz",
    title: "How Much Do You Know About the SDGs?",
    description: "10 questions on the goals shaping the next decade of global progress.",
    cause: "other",
    duration: "3 min",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "cleaner-planet-poll",
    type: "poll",
    title: "What Matters Most for a Cleaner Planet?",
    description: "Vote and see how the Lumora community is prioritizing climate action.",
    cause: "environment",
    duration: "30 sec",
    image:
      "https://images.unsplash.com/photo-1470723710355-95304d8aece4?q=80&w=1200&auto=format&fit=crop",
  },
];

export type Challenge = {
  slug: string;
  title: string;
  emoji: string;
  cause: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  participants: number;
};

export const challenges: Challenge[] = [
  { slug: "plastic-free-7day", title: "7-Day Plastic-Free Challenge", emoji: "🌱", cause: "environment", duration: "7 days", difficulty: "Beginner", participants: 12482 },
  { slug: "read-5-books", title: "Read 5 Books Challenge", emoji: "📚", cause: "education", duration: "30 days", difficulty: "Beginner", participants: 6120 },
  { slug: "plant-5-trees", title: "Plant 5 Trees", emoji: "🌳", cause: "environment", duration: "14 days", difficulty: "Intermediate", participants: 4310 },
  { slug: "save-water", title: "Save Water Challenge", emoji: "💧", cause: "clean-water", duration: "10 days", difficulty: "Beginner", participants: 8760 },
  { slug: "help-someone", title: "Help Someone Challenge", emoji: "🤝", cause: "communities", duration: "5 days", difficulty: "Beginner", participants: 3980 },
  { slug: "reduce-food-waste", title: "Reduce Food Waste Challenge", emoji: "🍎", cause: "food", duration: "14 days", difficulty: "Intermediate", participants: 2860 },
];

// Explicitly demo data — see Page 13 note: never presented as verified financials.
export const impactMetrics = {
  peopleReached: "1.2M",
  activitiesCompleted: "3.4M",
  communityActions: "182K",
  causesSupported: 8,
};
