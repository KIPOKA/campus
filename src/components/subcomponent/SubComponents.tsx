// ─── Sub-components ───────────────────────────────────────────────────────────

import { GraduationCap, Heart } from "lucide-react";
export function CampUsLogo({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Go to homepage"
      className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded-lg"
    >
      <div className="relative w-16 h-16 shrink-0">
        <Heart
          size={18}
          aria-hidden
          className="text-orange-200 absolute top-0 left-2"
          fill="currentColor"
        />
        <span
          aria-hidden
          className="absolute top-1 left-0 text-[#1a1a2e]/40 text-sm rotate-12 select-none"
        >
          ⌒
        </span>
        <span
          aria-hidden
          className="absolute top-3 -right-3 text-[#1a1a2e]/40 text-sm -rotate-12 select-none"
        >
          ))
        </span>
        <span
          aria-hidden
          className="absolute bottom-2 -left-3 text-[#1a1a2e]/40 text-xs select-none"
        >
          ⌒
        </span>

        <div className="absolute bottom-0 left-1 w-12 h-12 rounded-full bg-[#1a1a2e] flex items-center justify-center">
          <GraduationCap size={22} className="text-[#FBF6EC]" aria-hidden />
        </div>

        <Heart
          size={26}
          aria-hidden
          className="text-orange-500 absolute top-2 right-0"
          fill="currentColor"
        />
      </div>

      <span
        className="text-3xl tracking-tight text-[#1a1a2e]"
        style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}
      >
        camp<span className="text-orange-500">Us</span>
      </span>
    </button>
  );
}
