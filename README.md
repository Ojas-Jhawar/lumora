# Lumora

Learn. Act. Create Impact. — a social-impact learning + community platform.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with a custom Lumora design system (`tailwind.config.ts`)
- **lucide-react** for icons
- Hand-built UI primitives in `components/ui` (button, card, badge, input) — written in
  the shadcn/ui style so you can swap in the real `shadcn` CLI later without changing
  call sites, but with zero extra dependencies for now
- Mock data lives in `lib/mock-data.ts` — swap this for real API/DB calls page by page

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## What's built (this batch)

- Design system: colors, type (Fraunces + Manrope), spacing, shadows — `tailwind.config.ts`, `app/globals.css`
- Shared layout: `Navbar`, `Footer`, `MobileBottomNav`, `LumoraMark`/`LumoraWordmark` logo
- Shared content components: `ContentCard`, `CauseCard`
- **Homepage** (`app/page.tsx`) — hero, Explore What Matters, Trending Today, Choose Your
  Cause, Impact in Numbers, the Learn→Engage→Revenue→Impact→Action loop, final CTA
- **Explore / Content Hub** (`app/explore/page.tsx`) — search, type filters, category
  sidebar, Featured / Popular / Recommended sections
- **Article page** (`app/article/[slug]/page.tsx`) — dynamic route, one per mock content
  item, with related articles + Take Action sidebar
- **Login / Sign up** (`app/login/page.tsx`)

## Not yet built (next batches)

Everything else from the wireframe — in the order I'd build it:

1. `/act` — Challenges list + filters
2. `/act/[slug]` — Challenge detail (day-by-day, progress, community impact)
3. `/community` — Social feed + post composer
4. `/community/create` — Create Post
5. `/profile/[handle]` — User profile (stats, tabs, badges)
6. `/impact` — Impact Dashboard (charts, cause breakdown, "where the money goes")
7. `/causes` + `/causes/[slug]` — Cause directory + detail, SDG view
8. `/groups` — Community groups
9. Video page, Games page, Quiz page, Survey/Poll page
10. Real auth (Auth.js/Clerk), a database (Supabase/Postgres) behind the mock data, and
    dark mode

Say the word and I'll keep building in this same structure.

## Notes on the brief's guardrails

- All revenue/impact figures are mock/demo data, clearly labeled as such where shown
  (see homepage "Impact in Numbers" and the footer disclaimer). When you build the real
  Impact Dashboard, keep that labeling — don't present projected numbers as actual
  donations.
