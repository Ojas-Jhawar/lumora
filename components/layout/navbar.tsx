import Link from "next/link";
import { Search, Bell, Zap } from "lucide-react";
import { LumoraWordmark } from "./logo";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/explore", label: "Explore" },
  { href: "/act", label: "Act" },
  { href: "/community", label: "Share" },
  { href: "/impact", label: "Impact" },
  { href: "/community", label: "Community" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-line bg-paper/90 backdrop-blur">
      <div className="container-content flex h-16 items-center justify-between">
        <Link href="/" aria-label="Lumora home">
          <LumoraWordmark />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-slate hover:text-ink transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-label="Search"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-slate hover:bg-slate-line/40 sm:flex"
          >
            <Search className="h-4.5 w-4.5" />
          </button>
          <button
            aria-label="Notifications"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-slate hover:bg-slate-line/40 sm:flex"
          >
            <Bell className="h-4.5 w-4.5" />
          </button>
          <Link
            href="/profile"
            className="hidden h-9 w-9 items-center justify-center rounded-full bg-lavender-tint text-sm font-semibold text-lavender-deep sm:flex"
            aria-label="Your profile"
          >
            AS
          </Link>
          <Button size="sm" className="hidden sm:inline-flex">
            <Zap className="h-4 w-4" /> Take Action
          </Button>
          <Link href="/login" className="text-sm font-semibold text-ink sm:hidden">
            Sign in
          </Link>
        </div>
      </div>
    </header>
  );
}
