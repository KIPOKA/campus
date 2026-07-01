// components/DashboardWidgets.tsx
import { useState } from "react";
import {
  Bell,
  ArrowRight,
  Lock,
  Mail,
  Sparkles,
  MapPin,
  CalendarDays,
} from "lucide-react";
import type { Event } from "../../../types/Types";

interface Props {
  events: Event[];
  onToggleEvent: (id: string) => void;
}

export function DashboardWidgets({ events, onToggleEvent }: Props) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <aside className="flex flex-col gap-5 w-full">
      {/* Newsletter widget */}
      <div className="bg-[#1e2240] rounded-2xl p-5 border border-white/06 shadow-lg">
        <h3 className="text-sm font-bold text-white/80 tracking-widest font-mono mb-4 flex items-center gap-2">
          <Bell size={14} className="text-orange-400" />
          JOIN THE NEWSLETTER
        </h3>
        {subscribed ? (
          <div className="text-center py-3">
            <Sparkles size={24} className="text-orange-400 mx-auto mb-2" />
            <p className="text-sm text-white/60 font-mono">
              You're on the list!
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <div className="relative">
              <Mail
                size={14}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
              />
              <input
                type="email"
                placeholder="yourname@gmail.com"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full pl-9 pr-4 py-3 bg-[#151830] border border-white/08 rounded-xl text-sm text-white/70 placeholder:text-white/25 focus:outline-none focus:border-orange-500/50 font-mono transition-all"
              />
            </div>
            <button
              onClick={() =>
                newsletterEmail.includes("@") && setSubscribed(true)
              }
              className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-bold rounded-xl hover:opacity-90 transition-opacity tracking-wider shadow-md"
            >
              SUBSCRIBE
            </button>
          </div>
        )}
      </div>

      {/* Quick sign in widget */}
      <div className="bg-[#1e2240] rounded-2xl p-5 border border-white/06 shadow-lg">
        <h3 className="text-sm font-bold text-white/80 tracking-widest font-mono mb-4">
          SIGN IN TO YOUR ACCOUNT
        </h3>
        <div className="flex flex-col gap-2">
          <div className="relative">
            <Mail
              size={14}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
            />
            <input
              type="email"
              placeholder="yourname@gmail.com"
              className="w-full pl-9 pr-4 py-3 bg-[#151830] border border-white/08 rounded-xl text-sm text-white/70 placeholder:text-white/25 focus:outline-none focus:border-orange-500/50 font-mono transition-all"
            />
          </div>
          <div className="relative">
            <Lock
              size={14}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-9 pr-4 py-3 bg-[#151830] border border-white/08 rounded-xl text-sm text-white/70 placeholder:text-white/25 focus:outline-none focus:border-orange-500/50 transition-all"
            />
          </div>
          <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-rose-500 text-white text-sm font-bold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-md">
            Sign in <ArrowRight size={16} />
          </button>
          <p className="text-center text-xs text-white/30 font-mono mt-1">
            .edu / .ac.za emails only
          </p>
        </div>
      </div>

      {/* Upcoming events widget */}
      <div className="bg-[#1e2240] rounded-2xl p-5 border border-white/06 shadow-lg">
        <h3 className="text-sm font-bold text-white/80 tracking-widest font-mono mb-4 flex items-center gap-2">
          <CalendarDays size={14} className="text-violet-400" />
          UPCOMING EVENTS
        </h3>
        <div className="flex flex-col gap-2">
          {events.slice(0, 3).map((event) => (
            <button
              key={event.id}
              onClick={() => onToggleEvent(event.id)}
              className={`w-full text-left flex items-start gap-3 p-3 rounded-xl border transition-all ${
                event.attending
                  ? "bg-emerald-500/10 border-emerald-500/30"
                  : "bg-white/03 border-white/06 hover:bg-white/06"
              }`}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${event.attending ? "bg-emerald-400" : "bg-white/20"}`}
              />
              <div className="min-w-0">
                <p
                  className={`text-xs font-bold truncate ${event.attending ? "text-emerald-300" : "text-white/60"}`}
                >
                  {event.title}
                </p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[10px] font-mono text-white/30 flex items-center gap-1">
                    <CalendarDays size={9} /> {event.date}
                  </span>
                  <span className="text-[10px] font-mono text-white/30 flex items-center gap-1 truncate">
                    <MapPin size={9} /> {event.location}
                  </span>
                </div>
              </div>
              {event.attending && (
                <span className="text-[9px] font-mono font-bold bg-emerald-500 text-white px-2 py-0.5 rounded-full shrink-0">
                  GOING
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
