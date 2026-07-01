// components/DashboardSidebar.tsx
import {
  MessageCircle,
  UserPlus,
  CalendarDays,
  Settings,
  BarChart2,
  Monitor,
  Smartphone,
  Globe,
} from "lucide-react";

const MENU_ITEMS = [
  { label: "Messages", icon: MessageCircle, badge: 24, color: "bg-orange-500" },
  { label: "Invites", icon: UserPlus, badge: 3, color: "bg-violet-500" },
  { label: "Events", icon: CalendarDays, badge: 5, color: "bg-emerald-500" },
  { label: "Account Settings", icon: Settings },
  { label: "Statistics", icon: BarChart2 },
];

const OS_STATS = [
  {
    label: "Windows",
    icon: Monitor,
    value: 62,
    color: "from-orange-400 to-rose-500",
  },
  {
    label: "Android",
    icon: Smartphone,
    value: 28,
    color: "from-violet-500 to-purple-600",
  },
  {
    label: "Other",
    icon: Globe,
    value: 10,
    color: "from-emerald-400 to-teal-500",
  },
];

export function DashboardSidebar() {
  return (
    <aside className="flex flex-col gap-5 w-full">
      {/* Menu box */}
      <div className="bg-[#1e2240] rounded-2xl overflow-hidden border border-white/06 shadow-lg">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-3.5">
          <h3 className="text-sm font-bold text-white tracking-widest font-mono">
            MENU BOX
          </h3>
        </div>
        <div className="divide-y divide-white/06">
          {MENU_ITEMS.map(({ label, icon: Icon, badge, color }) => (
            <button
              key={label}
              className="w-full flex items-center justify-between px-5 py-3.5 text-sm text-white/70 hover:text-white hover:bg-white/04 transition-all group"
            >
              <div className="flex items-center gap-3">
                <Icon
                  size={15}
                  className="text-white/40 group-hover:text-white/70 transition-colors"
                />
                {label}
              </div>
              {badge && (
                <span
                  className={`text-[11px] font-bold text-white px-2.5 py-0.5 rounded-full ${color} shadow-sm`}
                >
                  {badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* OS Audience stats */}
      <div className="bg-[#1e2240] rounded-2xl p-5 border border-white/06 shadow-lg">
        <h3 className="text-xs font-bold text-white/40 tracking-widest font-mono mb-4">
          OS AUDIENCE STATS
        </h3>
        <div className="flex flex-col gap-4">
          {OS_STATS.map(({ label, icon: Icon, value, color }) => (
            <div key={label}>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <Icon size={14} />
                  {label}
                </div>
                <span className="text-xs font-mono font-bold text-white/50">
                  {value}%
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-white/08 overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${color} shadow-sm transition-all duration-700`}
                  style={{ width: `${value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
