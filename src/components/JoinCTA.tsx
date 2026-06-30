// JoinCTA.tsx
import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";

export function JoinCTA() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  return (
    <section id="join" className="max-w-6xl mx-auto px-6 pb-28">
      <Reveal>
        <div className="relative rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center overflow-hidden" style={{ backgroundColor: "#1a1a2e" }}>
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-violet-500/20 blur-3xl" />

          <p className="text-xs font-mono font-bold text-orange-400 tracking-widest mb-4 relative">
            ENROLLMENT OPEN
          </p>
          <h2 className="text-4xl md:text-5xl text-[#FBF6EC] mb-6 relative" style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}>
            Your campus is already here.
            <br />
            <span className="italic text-orange-400">Go find it.</span>
          </h2>

          {!joined ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email.includes("@")) setJoined(true);
              }}
              className="relative max-w-md mx-auto flex flex-col sm:flex-row gap-3 mt-8"
            >
              <input
                type="email"
                required
                placeholder="you@university.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-3.5 rounded-full bg-white/10 text-[#FBF6EC] placeholder:text-[#FBF6EC]/40 border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-400 font-mono text-sm"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold px-6 py-3.5 rounded-full flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Verify me <ArrowRight size={18} />
              </button>
            </form>
          ) : (
            <div className="relative mt-8 inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 font-mono text-sm px-5 py-3 rounded-full">
              <CheckCircle2 size={18} />
              Check your inbox — verification link sent.
            </div>
          )}
          <p className="relative text-[#FBF6EC]/40 text-xs font-mono mt-5">
            .edu / .ac.za emails only · We never post to socials for you
          </p>
        </div>
      </Reveal>
    </section>
  );
}