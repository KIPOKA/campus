// Hero.tsx
import { ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import { NoteCard } from "./NoteCard";

const PIN_COLORS = ["bg-orange-500", "bg-violet-500", "bg-emerald-500", "bg-rose-500"];

export function Hero() {
  return (
    <header className="relative max-w-6xl mx-auto px-6 pt-16 pb-28 md:pt-24 md:pb-36">
      <div className="absolute top-6 right-10 w-28 h-7 bg-orange-300/60 rotate-12 hidden lg:block" />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-mono font-bold px-3 py-1.5 rounded-full mb-6 tracking-wide">
            <ShieldCheck size={14} />
            .EDU VERIFIED ONLY
          </div>
          <h1 className="text-[2.75rem] leading-[1.05] md:text-6xl md:leading-[1.03] text-[#1a1a2e] mb-6" style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}>
            Met on the way
            <br />
            to your <span className="italic text-orange-500">9am.</span>
          </h1>
          <p className="text-lg text-[#1a1a2e]/70 max-w-md mb-8 leading-relaxed">
            Dating, friendship, and study partners — built only for verified students who share your campus, your courses, and your 2am library energy.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#join" className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold px-6 py-3.5 rounded-full hover:bg-orange-600 transition-colors shadow-[4px_4px_0_#1a1a2e]">
              Join with your .edu email
              <ArrowRight size={18} />
            </a>
            <a href="#how" className="inline-flex items-center justify-center gap-2 border-2 border-[#1a1a2e] text-[#1a1a2e] font-semibold px-6 py-3.5 rounded-full hover:bg-[#1a1a2e] hover:text-[#FBF6EC] transition-colors">
              See how it works
            </a>
          </div>
          <p className="text-xs text-[#1a1a2e]/50 mt-4 font-mono">
            Free to join · No bots · Real students only
          </p>
        </div>

        <div className="relative h-[420px] md:h-[480px]">
          <div
            className="absolute inset-0 rounded-2xl shadow-inner"
            style={{
              backgroundColor: "#C9A876",
              backgroundImage:
                "radial-gradient(circle at 20% 30%, rgba(0,0,0,0.08) 0%, transparent 6%), radial-gradient(circle at 70% 60%, rgba(0,0,0,0.08) 0%, transparent 6%), radial-gradient(circle at 40% 80%, rgba(0,0,0,0.06) 0%, transparent 5%)",
            }}
          />
          <div className="absolute inset-0 p-6 md:p-8">
            <NoteCard rotate="-rotate-6" pin={PIN_COLORS[0]} className="absolute top-2 left-2 w-44 bg-white rounded-md shadow-lg p-3">
              <div className="w-full h-24 rounded bg-gradient-to-br from-violet-200 to-violet-300 mb-2 flex items-center justify-center">
                <span className="text-2xl font-bold text-violet-600" style={{ fontFamily: "Fraunces, serif" }}>SA</span>
              </div>
              <p className="text-sm font-semibold text-[#1a1a2e]">Sofia, 21</p>
              <p className="text-xs text-[#1a1a2e]/60">Psychology · Wits</p>
              <span className="inline-block mt-1.5 text-[10px] font-mono font-bold bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">
                OPEN TO DATING
              </span>
            </NoteCard>

            <NoteCard rotate="rotate-3" pin={PIN_COLORS[2]} className="absolute top-6 right-0 w-40 bg-white rounded-md shadow-lg p-3">
              <div className="w-full h-20 rounded bg-gradient-to-br from-emerald-200 to-emerald-300 mb-2 flex items-center justify-center">
                <span className="text-2xl font-bold text-emerald-700" style={{ fontFamily: "Fraunces, serif" }}>TM</span>
              </div>
              <p className="text-sm font-semibold text-[#1a1a2e]">Thabo, 22</p>
              <p className="text-xs text-[#1a1a2e]/60">Econ · Same as you in ECON201</p>
            </NoteCard>

            <NoteCard rotate="-rotate-2" pin={PIN_COLORS[1]} className="absolute bottom-4 left-6 w-48 bg-[#fff8e6] rounded-md shadow-lg p-4">
              <p className="text-sm text-[#1a1a2e] leading-snug" style={{ fontFamily: "Fraunces, serif", fontStyle: "italic" }}>
                "We matched over a shared elective and now we're study partners every Tuesday."
              </p>
              <p className="text-[10px] font-mono text-[#1a1a2e]/50 mt-2">— Lerato, UCT</p>
            </NoteCard>

            <NoteCard rotate="rotate-6" pin={PIN_COLORS[3]} className="absolute bottom-0 right-2 w-36 bg-white rounded-md shadow-lg p-3">
              <div className="flex items-center gap-1.5 mb-1.5">
                <MapPin size={12} className="text-rose-500" />
                <span className="text-[10px] font-mono font-bold text-rose-600">CAMPUS EVENT</span>
              </div>
              <p className="text-sm font-semibold text-[#1a1a2e]">Open mic night</p>
              <p className="text-xs text-[#1a1a2e]/60">Fri · Student Union</p>
            </NoteCard>
          </div>
        </div>
      </div>
    </header>
  );
}