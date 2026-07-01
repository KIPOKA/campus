// DashboardPage.tsx
import { useState } from "react";
import {
  DashboardNav,
  DashboardSidebar,
  DashboardProfileCard,
  DashboardWidgets,
} from "./components";
import type { Profile, Intent, Event } from "../../types/Types";

const DEFAULT_PROFILE: Profile = {
  name: "Amara Okafor",
  age: 20,
  university: "UCT",
  faculty: "Engineering & the Built Environment",
  major: "Electrical Engineering",
  year: 2,
  bio: "Second year EE student who survives on cold brew and logic gates. Into live music, hiking, and pretending I'll go to gym.",
  intents: ["Dating", "Friends"] as Intent[],
  courses: ["ENG201", "MATH210", "PHY202", "EEE213"],
  interests: ["Photography", "Running", "Live music", "Cooking"],
  photos: [],
  stats: { matches: 23, likes: 841, chats: 49 },
  events: [
    {
      id: "1",
      title: "Open mic night",
      date: "Fri 14 Mar",
      location: "Student Union",
      attending: true,
    },
    {
      id: "2",
      title: "Engineering faculty braai",
      date: "Sat 15 Mar",
      location: "Rugby Field",
      attending: false,
    },
    {
      id: "3",
      title: "Jazz on the Vlei",
      date: "Sun 16 Mar",
      location: "Rondebosch Common",
      attending: true,
    },
    {
      id: "4",
      title: "Postgrad mixer",
      date: "Wed 19 Mar",
      location: "Library Café",
      attending: false,
    },
  ],
  verified: true,
};

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile>(DEFAULT_PROFILE);

  const toggleEvent = (id: string) =>
    setProfile((p) => ({
      ...p,
      events: p.events.map((e) =>
        e.id === id ? { ...e, attending: !e.attending } : e,
      ),
    }));

  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "Inter, sans-serif",
        backgroundColor: "#f4fbec",
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)",
        backgroundSize: "24px 24px",
      }}
    >
      <DashboardNav />

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr_240px] gap-6 items-start">
          <DashboardSidebar />
          <DashboardProfileCard profile={profile} />
          <DashboardWidgets
            events={profile.events}
            onToggleEvent={toggleEvent}
          />
        </div>
      </div>
    </div>
  );
}
