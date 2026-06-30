// PushPin.tsx
export function PushPin({ color = "bg-orange-500" }: { color?: string }) {
  return (
    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-20">
      <div className={`w-4 h-4 rounded-full ${color} shadow-[0_2px_4px_rgba(0,0,0,0.35)] ring-2 ring-white/40`} />
    </div>
  );
}