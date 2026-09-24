import Link from "next/link";
import { Compass, Zap, Share2, Gauge, Users } from "lucide-react";

const items = [
  { href: "/explore", label: "Explore", icon: Compass },
  { href: "/act", label: "Act", icon: Zap },
  { href: "/community", label: "Share", icon: Share2 },
  { href: "/impact", label: "Impact", icon: Gauge },
  { href: "/community", label: "Community", icon: Users },
];

export function MobileBottomNav() {
  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-40 flex h-16 items-stretch justify-around border-t border-slate-line bg-white/95 backdrop-blur md:hidden"
    >
      {items.map(({ href, label, icon: Icon }) => (
        <Link
          key={label}
          href={href}
          className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-soft"
        >
          <Icon className="h-5 w-5" />
          <span className="text-[11px] font-medium">{label}</span>
        </Link>
      ))}
    </nav>
  );
}
