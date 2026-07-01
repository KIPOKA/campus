// AuthPage.tsx
import { useState } from "react";
import { AuthCard } from "../form/AuthCard";
import Navbar from "../../pages/navigation/NavBar";

type Mode = "signin" | "signup";

export default function AuthPage() {
  const [mode, setMode] = useState<Mode>("signin");

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen w-full flex items-center justify-center px-4 py-12"
        style={{
          fontFamily: "Inter, sans-serif",
          backgroundColor: "#f4fbec",
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(227, 12, 12, 0.06) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      >
        <div className="w-full max-w-md">
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
    </>
  );
}
