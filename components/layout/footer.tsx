import Link from "next/link";
import { LumoraWordmark } from "./logo";

const columns = [
  {
    title: "Platform",
    links: [
      { href: "/explore", label: "Explore" },
      { href: "/act", label: "Take Action" },
      { href: "/community", label: "Community" },
      { href: "/impact", label: "Impact Dashboard" },
    ],
  },
  {
    title: "Causes",
    links: [
      { href: "/causes", label: "All Causes" },
      { href: "/causes/environment", label: "Environment" },
      { href: "/causes/education", label: "Education" },
      { href: "/causes/clean-water", label: "Clean Water" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/impact", label: "How It Works" },
      { href: "/impact", label: "Transparency Report" },
      { href: "/login", label: "Join Lumora" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-line bg-white">
      <div className="container-content grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <LumoraWordmark />
          <p className="mt-4 max-w-xs text-sm text-slate">
            Learn. Act. Create Impact. Everyday engagement, turned into real-world change.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <p className="mb-4 text-sm font-semibold text-ink">{col.title}</p>
            <ul className="space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-slate hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-line py-6">
        <p className="container-content text-xs text-slate-soft">
          © {new Date().getFullYear()} Lumora. Impact figures throughout this product are demo data
          for prototype purposes unless labeled as a verified report.
        </p>
      </div>
    </footer>
  );
}
