// Modes.tsx
import { Heart, Users, BookOpen } from "lucide-react";
import { Reveal } from "./Reveal";

const MODES = [
  { icon: Heart, title: "Dating", desc: "Real chemistry with someone who actually goes to your school.", tag: "Most popular", ring: "ring-orange-400/40", iconBg: "bg-orange-500/20 text-orange-400" },
  { icon: Users, title: "Friends", desc: "New cities, new campuses, new people — build your crew from scratch.", tag: "Low pressure", ring: "ring-violet-400/40", iconBg: "bg-violet-500/20 text-violet-300" },
  { icon: BookOpen, title: "Study buddy", desc: "Find someone in your actual course before the next deadline hits.", tag: "Grade-saving", ring: "ring-emerald-400/40", iconBg: "bg-emerald-500/20 text-emerald-300" },
];

export function Modes() {
  return (
    <section id="modes" className="bg-[#1a1a2e] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs font-mono font-bold text-orange-400 tracking-widest mb-3">ELECTIVES</p>
          <h2 className="text-4xl md:text-5xl text-[#FBF6EC] mb-16 max-w-xl" style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}>
            Pick your mode. Or don't — take them all.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {MODES.map((mode, i) => (
            <Reveal key={mode.title} delay={i * 120}>
              <div className={`rounded-2xl bg-white/5 backdrop-blur-sm p-7 h-full ring-1 ${mode.ring} hover:bg-white/10 transition-colors`}>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center ${mode.iconBg}`}>
                    <mode.icon size={20} />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#FBF6EC]/50 tracking-wide">
                    {mode.tag.toUpperCase()}
                  </span>
                </div>
                <h3 className="text-xl text-[#FBF6EC] mb-2" style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}>
                  {mode.title}
                </h3>
                <p className="text-sm text-[#FBF6EC]/60 leading-relaxed">{mode.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}