// TrustStrip.tsx
import { ShieldCheck, CheckCircle2, Heart, GraduationCap } from "lucide-react";

export function TrustStrip() {
  return (
    <section id="trust" className="border-y border-[#1a1a2e]/10 bg-[#1a1a2e]">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-3 text-[#FBF6EC]/80 text-sm font-mono">
        <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-emerald-400" /> ID-verified students</span>
        <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> No fake profiles</span>
        <span className="flex items-center gap-2"><Heart size={16} className="text-orange-400" /> 12,000+ matches made</span>
        <span className="flex items-center gap-2"><GraduationCap size={16} className="text-violet-400" /> Live on 6 campuses</span>
      </div>
    </section>
  );
}