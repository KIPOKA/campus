import { GraduationCap } from "lucide-react";

export default function NavbarMain() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#FBF6EC]/85 border-b border-[#1a1a2e]/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#1a1a2e] flex items-center justify-center">
            <GraduationCap size={16} className="text-[#FBF6EC]" />
          </div>
          <span className="text-4xl tracking-tight text-[#1a1a2e]">
            camp<span className="text-orange-500">us</span>
          </span>
        </div>
      </div>
    </nav>
  );
}