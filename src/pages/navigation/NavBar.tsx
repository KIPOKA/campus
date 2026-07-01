// Navbar.tsx
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CampUsLogo } from "../../components/subcomponent/SubComponents";
import { NAV_LINKS } from "../../constants/Constants";
import {
  useScrollLock,
  useCloseOnRouteChange,
  useCloseOnEscape,
} from "../../hook/Hooks";
import {
  useSectionNav,
  useGetStarted,
  useMobileMenu,
} from "../../services/Services";

export default function Navbar() {
  const navigate = useNavigate();
  const { mobileOpen, toggle, closeMenu } = useMobileMenu();
  const { scrollToSection } = useSectionNav(closeMenu);
  const { handleGetStarted } = useGetStarted(closeMenu);

  // ─── Effects ───────────────────────────────────────────────────────────────
  useScrollLock(mobileOpen);
  useCloseOnRouteChange(closeMenu);
  useCloseOnEscape(closeMenu, mobileOpen);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#FBF6EC]/85 border-b border-[#1a1a2e]/10">
      <nav
        className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <CampUsLogo onClick={() => navigate("/")} />

        <ul
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#1a1a2e]/70"
          role="list"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <button
                onClick={() => scrollToSection(href)}
                className="hover:text-[#1a1a2e] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={handleGetStarted}
            className="hidden md:inline-flex text-sm font-semibold bg-[#1a1a2e] text-[#FBF6EC] px-5 py-2 rounded-full hover:bg-[#2a2a4a] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
          >
            Get started
          </button>

          <button
            onClick={toggle}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-[#1a1a2e]/15 text-[#1a1a2e] hover:bg-[#1a1a2e]/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? (
              <X size={18} aria-hidden />
            ) : (
              <Menu size={18} aria-hidden />
            )}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-label="Mobile navigation"
          className="md:hidden border-t border-[#1a1a2e]/10 bg-[#FBF6EC] px-6 py-5 flex flex-col gap-4"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <button
              key={href}
              onClick={() => scrollToSection(href)}
              className="text-sm font-medium text-[#1a1a2e]/80 hover:text-[#1a1a2e] transition-colors text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded"
            >
              {label}
            </button>
          ))}

          <button
            onClick={handleGetStarted}
            className="mt-1 inline-flex justify-center text-sm font-semibold bg-[#1a1a2e] text-[#FBF6EC] px-4 py-2.5 rounded-full hover:bg-[#2a2a4a] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
          >
            Get started
          </button>
        </div>
      )}
    </header>
  );
}
