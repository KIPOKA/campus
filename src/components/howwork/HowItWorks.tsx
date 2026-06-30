// HowItWorks.tsx
import { ShieldCheck, Sparkles, MessageCircle } from "lucide-react";
import { Reveal } from "../reveal/Reveal";

const STEPS = [
  { icon: ShieldCheck, title: "Verify your .edu", desc: "One email, one quick check. Only real, currently-enrolled students get in — so every profile you see is genuine.", color: "emerald" },
  { icon: Sparkles, title: "Set your intent", desc: "Dating, friends, or study buddy — pick one or all three. Switch anytime as your semester (and priorities) shift.", color: "orange" },
  { icon: MessageCircle, title: "Match on what matters", desc: "We surface shared courses, faculties, and interests first — so the first message writes itself.", color: "violet" },
];

const COLOR_MAP: Record<string, string> = {
  emerald: "bg-emerald-100 text-emerald-700",
  orange: "bg-orange-100 text-orange-600",
  violet: "bg-violet-100 text-violet-700",
};

export function HowItWorks() {
  return (
    <section id="how" className="max-w-6xl mx-auto px-6 py-24">
      <Reveal>
        <p className="text-xs font-mono font-bold text-orange-500 tracking-widest mb-3">THE SYLLABUS</p>
        <h2 className="text-4xl md:text-5xl text-[#1a1a2e] mb-16 max-w-xl" style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}>
          Three steps. Zero awkward cafeteria run-ins required.
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6">
        {STEPS.map((step, i) => (
          <Reveal key={step.title} delay={i * 120}>
            <div className="relative bg-white rounded-2xl p-7 h-full border border-[#1a1a2e]/10 shadow-[6px_6px_0_rgba(26,26,46,0.06)]">
              <div className={`w-11 h-11 rounded-full flex items-center justify-center mb-5 ${COLOR_MAP[step.color]}`}>
                <step.icon size={20} />
              </div>
              <h3 className="text-xl text-[#1a1a2e] mb-2" style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}>
                {step.title}
              </h3>
              <p className="text-sm text-[#1a1a2e]/65 leading-relaxed">{step.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}