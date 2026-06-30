// Footer.tsx
export function Footer() {
  return (
    <footer className="border-t border-[#1a1a2e]/10 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-lg text-[#1a1a2e]" style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}>
          camp<span className="text-orange-500">us</span>
        </span>
        <p className="text-xs font-mono text-[#1a1a2e]/40">
          © 2026 Campus, Inc. Built for students, by students.
        </p>
      </div>
    </footer>
  );
}