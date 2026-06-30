import { useState } from "react";
import { GraduationCap, Menu, X, Heart } from "lucide-react";

const LINKS = [
  { href: "#how", label: "How it works" },
  { href: "#modes", label: "Modes" },
  { href: "#trust", label: "Safety" },
  { href: "#voices", label: "Campus voices" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#FBF6EC]/85 border-b border-[#1a1a2e]/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center justify-center gap-3 ">
          <div className="relative w-16 h-16 shrink-0">
            {/* small floating heart, top-left */}
            <Heart
              size={18}
              className="text-orange-200 absolute top-0 left-2"
              fill="currentColor"
            />

            {/* squiggle / motion marks */}
            <span className="absolute top-1 left-0 text-[#1a1a2e]/40 text-sm rotate-12 select-none">⌒</span>
            <span className="absolute top-3 -right-3 text-[#1a1a2e]/40 text-sm -rotate-12 select-none">))</span>
            <span className="absolute bottom-2 -left-3 text-[#1a1a2e]/40 text-xs select-none">⌒</span>

            {/* main circle badge */}
            <div className="absolute bottom-0 left-1 w-12 h-12 rounded-full bg-[#1a1a2e] flex items-center justify-center">
              <GraduationCap size={22} className="text-[#FBF6EC]" />
            </div>

            {/* big heart overlapping top-right of circle */}
            <Heart
              size={26}
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
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#1a1a2e]/70">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#1a1a2e] transition-colors"
            >
            
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#join"
            className="hidden sm:inline-flex text-sm font-semibold bg-[#1a1a2e] text-[#FBF6EC] px-4 py-2 rounded-full hover:bg-[#2a2a4a] transition-colors"
          >
            Get verified
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-[#1a1a2e]/15 text-[#1a1a2e]"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#1a1a2e]/10 bg-[#FBF6EC] px-6 py-4 flex flex-col gap-4">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-[#1a1a2e]/80 hover:text-[#1a1a2e] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#join"
            onClick={() => setOpen(false)}
            className="text-sm font-semibold bg-[#1a1a2e] text-[#FBF6EC] px-4 py-2.5 rounded-full text-center"
          >
            Get verified
          </a>
        </div>
      )}
    </nav>
  );
}