import { sdgInfo } from "@/lib/sdg";

export function SdgBadge({ number }: { number: number }) {
  const sdg = sdgInfo[number];
  if (!sdg) return null;

  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold text-white"
      style={{ backgroundColor: sdg.color }}
    >
      SDG {number} · {sdg.title}
    </span>
  );
}
