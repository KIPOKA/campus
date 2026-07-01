// components/DashboardProfileCard.tsx
import { ShieldCheck, Heart, Users, BookOpen } from "lucide-react";
import type { Intent, Profile } from "../../../types/Types";

interface Props {
  profile: Profile;
}

const INTENT_COLORS: Record<Intent, string> = {
  Dating: "from-orange-400 to-rose-500",
  Friends: "from-violet-500 to-purple-600",
  "Study buddy": "from-emerald-400 to-teal-500",
};

const INTENT_ICONS: Record<Intent, typeof Heart> = {
  Dating: Heart,
  Friends: Users,
  "Study buddy": BookOpen,
};

const STAT_LABELS = [
  { key: "matches" as const, label: "Matches" },
  { key: "likes" as const, label: "Likes" },
  { key: "chats" as const, label: "Chats" },
];

export function DashboardProfileCard({ profile }: Props) {
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="bg-[#1e2240] rounded-2xl overflow-hidden border border-white/06 shadow-lg flex flex-col">
      {/* Collapse handle */}
      <div className="flex justify-center pt-3 pb-1">
        <div className="w-8 h-1 rounded-full bg-white/15" />
      </div>

      {/* Avatar */}
      <div className="flex flex-col items-center px-6 pt-4 pb-5">
        <div className="relative mb-4">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400 to-violet-600 scale-110 blur-md opacity-50" />
          <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-violet-400 via-violet-500 to-purple-700 border-4 border-[#1e2240] flex items-center justify-center shadow-xl">
            <span
              className="text-4xl font-bold text-white"
              style={{ fontFamily: "Fraunces, serif" }}
            >
              {initials}
            </span>
          </div>
          {profile.verified && (
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-[#1e2240] shadow-md">
              <ShieldCheck size={14} className="text-white" />
            </div>
          )}
        </div>

        <h2
          className="text-xl font-bold text-white mb-1"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          {profile.name}
        </h2>
        <p className="text-sm text-white/50 text-center leading-relaxed max-w-[200px] mb-1">
          {profile.major} · Year {profile.year}
        </p>
        <p className="text-xs text-white/30 font-mono mb-4">
          {profile.university}
        </p>

        {/* Intent pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-5">
          {profile.intents.map((intent) => {
            const Icon = INTENT_ICONS[intent as Intent];
            return (
              <span
                key={intent}
                className={`inline-flex items-center gap-1.5 text-[11px] font-bold text-white px-3 py-1 rounded-full bg-gradient-to-r ${INTENT_COLORS[intent as Intent]} shadow-md`}
              >
                <Icon size={11} fill="rgba(255,255,255,0.6)" />
                {intent}
              </span>
            );
          })}
        </div>

        {/* Bio excerpt */}
        <p className="text-xs text-white/40 text-center leading-relaxed line-clamp-2 mb-5 px-2">
          {profile.bio}
        </p>

        {/* Coloured progress bar */}
        <div className="w-full h-1.5 rounded-full overflow-hidden flex mb-5">
          <div className="flex-1 bg-gradient-to-r from-orange-400 to-rose-500" />
          <div className="w-px bg-[#1e2240]" />
          <div className="flex-1 bg-gradient-to-r from-violet-500 to-purple-600" />
          <div className="w-px bg-[#1e2240]" />
          <div className="flex-[0.5] bg-gradient-to-r from-emerald-400 to-teal-500" />
          <div className="w-px bg-[#1e2240]" />
          <div className="flex-[0.3] bg-gradient-to-r from-blue-400 to-indigo-500" />
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 divide-x divide-white/06 border-t border-white/06">
        {STAT_LABELS.map(({ key, label }) => (
          <div key={key} className="flex flex-col items-center py-4 gap-0.5">
            <span
              className="text-2xl font-bold text-white"
              style={{ fontFamily: "Fraunces, serif" }}
            >
              {profile.stats[key]}
            </span>
            <span className="text-[10px] font-mono text-white/35 tracking-wide">
              {label.toUpperCase()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
