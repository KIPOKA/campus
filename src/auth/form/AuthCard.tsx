// AuthCard.tsx
import { useState } from "react";
import { ShieldCheck, ArrowRight, Eye, EyeOff, Mail, Lock, User } from "lucide-react";

type Mode = "signin" | "signup";

interface AuthCardProps {
  mode: Mode;
  onModeChange: (mode: Mode) => void;
}

export function AuthCard({ mode, onModeChange }: AuthCardProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // wire up your auth call here
    console.log(mode, form);
  };

  return (
    <div className="bg-white rounded-2xl border border-[#1a1a2e]/10 shadow-[6px_6px_0_rgba(26,26,46,0.08)] p-8">
      <div className="flex bg-[#FBF6EC] rounded-full p-1 mb-7">
        <button
          type="button"
          onClick={() => onModeChange("signin")}
          className={`flex-1 text-sm font-semibold py-2 rounded-full transition-colors ${
            mode === "signin" ? "bg-[#1a1a2e] text-[#FBF6EC]" : "text-[#1a1a2e]/60"
          }`}
        >
          Sign in
        </button>
        <button
          type="button"
          onClick={() => onModeChange("signup")}
          className={`flex-1 text-sm font-semibold py-2 rounded-full transition-colors ${
            mode === "signup" ? "bg-[#1a1a2e] text-[#FBF6EC]" : "text-[#1a1a2e]/60"
          }`}
        >
          Sign up
        </button>
      </div>

      <h1
        className="text-2xl text-[#1a1a2e] mb-1.5"
        style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}
      >
        {mode === "signin" ? "Welcome back" : "Join your campus"}
      </h1>
      <p className="text-sm text-[#1a1a2e]/60 mb-6">
        {mode === "signin"
          ? "Sign in with your verified student account."
          : "Verified students only — your .edu email keeps everyone real."}
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {mode === "signup" && (
          <div>
            <label className="text-xs font-mono font-bold text-[#1a1a2e]/50 tracking-wide mb-1.5 block">
              FULL NAME
            </label>
            <div className="relative">
              <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#1a1a2e]/40" />
              <input
                type="text"
                required
                placeholder="Full name"
                value={form.name}
                onChange={handleChange("name")}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FBF6EC] border border-[#1a1a2e]/10 text-sm text-[#1a1a2e] placeholder:text-[#1a1a2e]/30 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>
        )}

        <div>
          <label className="text-xs font-mono font-bold text-[#1a1a2e]/50 tracking-wide mb-1.5 block">
            UNIVERSITY EMAIL
          </label>
          <div className="relative">
            <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#1a1a2e]/40" />
            <input
              type="email"
              required
              placeholder="you@university.edu"
              value={form.email}
              onChange={handleChange("email")}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FBF6EC] border border-[#1a1a2e]/10 text-sm text-[#1a1a2e] placeholder:text-[#1a1a2e]/30 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-mono font-bold text-[#1a1a2e]/50 tracking-wide mb-1.5 block">
            PASSWORD
          </label>
          <div className="relative">
            <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#1a1a2e]/40" />
            <input
              type={showPassword ? "text" : "password"}
              required
              minLength={8}
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange("password")}
              className="w-full pl-10 pr-10 py-3 rounded-xl bg-[#FBF6EC] border border-[#1a1a2e]/10 text-sm text-[#1a1a2e] placeholder:text-[#1a1a2e]/30 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#1a1a2e]/40 hover:text-[#1a1a2e]/70"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>
         <div>
          <label className="text-xs font-mono font-bold text-[#1a1a2e]/50 tracking-wide mb-1.5 block">
            Confirm Password
          </label>
          <div className="relative">
            <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#1a1a2e]/40" />
            <input
              type={showPassword ? "text" : "password"}
              required
              minLength={8}
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange("password")}
              className="w-full pl-10 pr-10 py-3 rounded-xl bg-[#FBF6EC] border border-[#1a1a2e]/10 text-sm text-[#1a1a2e] placeholder:text-[#1a1a2e]/30 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#1a1a2e]/40 hover:text-[#1a1a2e]/70"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        {mode === "signin" && (
          <div className="flex justify-end -mt-1">
            <a href="#forgot" className="text-xs font-medium text-orange-600 hover:text-orange-700">
              Forgot password?
            </a>
          </div>
        )}

        <button
          type="submit"
          className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold py-3.5 rounded-full hover:bg-orange-600 transition-colors"
        >
          {mode === "signin" ? "Sign in" : "Create account"}
          <ArrowRight size={18} />
        </button>
      </form>

      {mode === "signup" && (
        <div className="flex items-center gap-2 mt-5 text-xs text-[#1a1a2e]/50 bg-emerald-50 text-emerald-800 rounded-lg px-3 py-2.5">
          <ShieldCheck size={14} className="shrink-0" />
          We'll send a one-time code to confirm your university email before activating your account.
        </div>
      )}

      <p className="text-center text-xs text-[#1a1a2e]/40 mt-6 font-mono">
        .edu / .ac.za emails only
      </p>
    </div>
  );
}