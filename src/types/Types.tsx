export interface NavLink {
  href: string;
  label: string;
}

// src/pages/profile/types.ts
export type Intent = "Dating" | "Friends" | "Study buddy";

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  attending: boolean;
}

export interface Profile {
  name: string;
  age: number;
  university: string;
  faculty: string;
  major: string;
  year: number;
  bio: string;
  intents: Intent[];
  courses: string[];
  interests: string[];
  photos: string[];
  stats: { matches: number; likes: number; chats: number };
  events: Event[];
  verified: boolean;
}
