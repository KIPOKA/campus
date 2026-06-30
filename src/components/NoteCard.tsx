// NoteCard.tsx
import { PushPin } from "./PushPin";

export function NoteCard({
  rotate,
  pin,
  children,
  className = "",
}: {
  rotate: string;
  pin?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${rotate} transition-transform duration-300 hover:rotate-0 hover:scale-[1.03] ${className}`}>
      {pin && <PushPin color={pin} />}
      {children}
    </div>
  );
}