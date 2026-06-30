// AuthPage.tsx
import { useState } from "react";
import { GraduationCap, Heart } from "lucide-react";
import { AuthCard } from "../form/AuthCard";

type Mode = "signin" | "signup";

export default function AuthPage() {
  const [mode, setMode] = useState<Mode>("signin");

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-4 py-12"
      style={{
        fontFamily: "Inter, sans-serif",
        backgroundColor: "#fbecec",
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(227, 12, 12, 0.06) 1px, transparent 0)",
        backgroundSize: "22px 22px",
      }}
    >
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center gap-3 mb-10">
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

        <AuthCard mode={mode} onModeChange={setMode} />

        <p className="text-center text-sm text-[#1a1a2e]/50 mt-6">
          {mode === "signin" ? "New to campUs?" : "Already verified?"}{" "}
          <button
            type="button"
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            className="font-semibold text-[#1a1a2e] hover:text-orange-600 transition-colors"
          >
            {mode === "signin" ? "Create an account" : "Sign in instead"}
          </button>
        </p>
      </div>
    </div>
  );
}