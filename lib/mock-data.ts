export type ContentType = "article" | "video" | "game" | "quiz" | "survey" | "poll";

export type Cause = {
  slug: string;
  name: string;
  emoji: string;
  color: "mint" | "lavender" | "amber";
  /** UN Sustainable Development Goal numbers this cause maps to */
  sdgs: number[];
  /** One-line summary shown on cards / hero */
  description: string;
  /** Longer copy for the cause detail page */
  longDescription: string;
  image: string;
  /** Demo financials — all figures are mock/prototype data, see footer disclaimer */
  fundsRaisedUSD: number;
  fundGoalUSD: number;
  pointsDonated: number;
  supporters: number;
};

export const causes: Cause[] = [
  {
    slug: "environment",
    name: "Environment",
    emoji: "🌱",
    color: "mint",
    sdgs: [13, 15],
    description: "Protecting ecosystems and accelerating the shift to clean energy.",
    longDescription:
      "From reforestation to renewable energy access, funds and points directed here go toward projects that cut emissions, restore habitats, and help communities adapt to a changing climate.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
    fundsRaisedUSD: 32450,
    fundGoalUSD: 50000,
    pointsDonated: 128400,
    supporters: 2142,
  },
  {
    slug: "education",
    name: "Education",
    emoji: "📚",
    color: "lavender",
    sdgs: [4],
    description: "Expanding access to quality learning, especially where it's scarce.",
    longDescription:
      "Every point and dollar here funds classroom materials, teacher training, and digital access programs aimed at closing the literacy gap in underserved regions.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    fundsRaisedUSD: 18200,
    fundGoalUSD: 40000,
    pointsDonated: 74200,
    supporters: 1305,
  },
  {
    slug: "clean-water",
    name: "Clean Water",
    emoji: "💧",
    color: "mint",
    sdgs: [6],
    description: "Bringing safely managed drinking water and sanitation within reach.",
    longDescription:
      "Support here funds well construction, filtration systems, and sanitation infrastructure for communities still living without safely managed water.",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200&auto=format&fit=crop",
    fundsRaisedUSD: 41800,
    fundGoalUSD: 60000,
    pointsDonated: 156300,
    supporters: 2890,
  },
  {
    slug: "health",
    name: "Health",
    emoji: "❤️",
    color: "amber",
    sdgs: [3],
    description: "Improving access to basic care, nutrition, and health education.",
    longDescription:
      "Contributions here support mobile clinics, preventative care programs, and health literacy campaigns in communities with limited medical access.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    fundsRaisedUSD: 22750,
    fundGoalUSD: 45000,
    pointsDonated: 98100,
    supporters: 1670,
  },
  {
    slug: "animals",
    name: "Animals & Wildlife",
    emoji: "🐾",
    color: "amber",
    sdgs: [14, 15],
    description: "Protecting endangered species and the habitats they depend on.",
    longDescription:
      "Funds directed here support anti-poaching efforts, habitat conservation, and rehabilitation programs for threatened species on land and at sea.",
    image:
      "https://images.unsplash.com/photo-1474511320723-9a56873867b5?q=80&w=1200&auto=format&fit=crop",
    fundsRaisedUSD: 15600,
    fundGoalUSD: 35000,
    pointsDonated: 61200,
    supporters: 980,
  },
  {
    slug: "food",
    name: "Food & Hunger",
    emoji: "🍚",
    color: "mint",
    sdgs: [2],
    description: "Fighting hunger and building more resilient, sustainable food systems.",
    longDescription:
      "Support here funds emergency food relief, school meal programs, and training for smallholder farmers to build more resilient harvests.",
    image:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1200&auto=format&fit=crop",
    fundsRaisedUSD: 27300,
    fundGoalUSD: 50000,
    pointsDonated: 112700,
    supporters: 2015,
  },
  {
    slug: "communities",
    name: "Poverty & Housing",
    emoji: "🏠",
    color: "lavender",
    sdgs: [1, 11],
    description: "Building pathways out of poverty through housing and economic opportunity.",
    longDescription:
      "Contributions here go toward affordable housing projects, job-skills training, and microfinance programs that help families build lasting stability.",
    image:
      "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=1200&auto=format&fit=crop",
    fundsRaisedUSD: 19850,
    fundGoalUSD: 40000,
    pointsDonated: 83400,
    supporters: 1420,
  },
  {
    slug: "other",
    name: "Other SDGs",
    emoji: "🌍",
    color: "lavender",
    sdgs: [16, 17],
    description: "Backing peace, justice, and the partnerships that hold everything together.",
    longDescription:
      "This fund supports work that doesn't fit neatly under one goal — cross-cutting projects on governance, justice, and the partnerships that make the other SDGs possible.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
    fundsRaisedUSD: 12100,
    fundGoalUSD: 30000,
    pointsDonated: 45800,
    supporters: 760,
  },
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

// Mock signed-in user — swap for real auth/session data later.
export const currentUser = {
  name: "Aarav Sharma",
  handle: "aaravsharma",
  initials: "AS",
  pointsBalance: 1240,
};
