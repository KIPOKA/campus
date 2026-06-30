// CampusVoices.tsx
import { PushPin } from "./PushPin";
import { Reveal } from "./Reveal";

const PIN_COLORS = ["bg-orange-500", "bg-violet-500", "bg-emerald-500"];

const VOICES = [
  { name: "Kemi N.", school: "UJ · Year 2", quote: "Matched with someone in my tutorial group. We're still arguing about who explains stats better.", rotate: "-rotate-3", bg: "bg-orange-50" },
  { name: "Daniel R.", school: "Stellenbosch · Year 4", quote: "Switched to friend mode after moving res. Found my whole new social circle in two weeks.", rotate: "rotate-2", bg: "bg-violet-50" },
  { name: "Amara O.", school: "UCT · Year 3", quote: "Knowing everyone is actually verified changed how I show up. No more guessing games.", rotate: "-rotate-1", bg: "bg-emerald-50" },
];

export function CampusVoices() {
  return (
    <section id="voices" className="max-w-6xl mx-auto px-6 py-24">
      <Reveal>
        <p className="text-xs font-mono font-bold text-orange-500 tracking-widest mb-3">OFFICE HOURS</p>
        <h2 className="text-4xl md:text-5xl text-[#1a1a2e] mb-16 max-w-xl" style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}>
          Pinned to the board this week.
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
        {VOICES.map((t, i) => (
          <Reveal key={t.name} delay={i * 100}>
            <div className={`relative ${t.rotate} hover:rotate-0 transition-transform duration-300`}>
              <PushPin color={PIN_COLORS[i]} />
              <div className={`${t.bg} rounded-sm shadow-lg p-6 pt-8`}>
                <p className="text-[#1a1a2e] text-base leading-snug mb-4" style={{ fontFamily: "Fraunces, serif", fontStyle: "italic" }}>
                  "{t.quote}"
                </p>
                <p className="text-sm font-semibold text-[#1a1a2e]">{t.name}</p>
                <p className="text-xs font-mono text-[#1a1a2e]/50">{t.school}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}