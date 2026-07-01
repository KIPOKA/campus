// components/DashboardNav.tsx
import { useState } from "react";
import {
  Settings,
  User,
  MessageCircle,
  Heart,
  GraduationCap,
} from "lucide-react";

const TABS = [
  { label: "Settings", icon: Settings },
  { label: "Account", icon: User },
  { label: "Messages", icon: MessageCircle, badge: 5 },
  { label: "Favourites", icon: Heart },
];

export function DashboardNav() {
  const [active, setActive] = useState("Settings");

  return (
    <nav className="bg-[#1a1a2e] border-b border-white/06 px-6 py-0 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center">
        {TABS.map(({ label, icon: Icon, badge }) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            className={`relative flex items-center gap-2 px-6 py-4 text-sm font-semibold transition-all border-b-2 ${
              active === label
                ? "text-white border-orange-500"
                : "text-white/40 border-transparent hover:text-white/70"
            }`}
          >
            <Icon size={15} />
            {label}
            {badge && (
              <span className="absolute top-3 right-3 w-5 h-5 bg-orange-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-md">
                {badge}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm text-white/50 font-medium">Me</span>
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center ring-2 ring-orange-500/50 shadow-lg">
          <GraduationCap size={16} className="text-white" />
        </div>
      </div>
    </nav>
  );
}
