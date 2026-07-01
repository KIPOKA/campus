// hook/NavbarActions.ts
import { useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// ─── Section Scroll ───────────────────────────────────────────────────────────
export function useSectionNav(onNavigate?: () => void) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const scrollToSection = useCallback(
    (href: string) => {
      const tryScroll = () => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
      };

      if (pathname === "/") {
        tryScroll();
      } else {
        navigate(`/${href}`);
        setTimeout(tryScroll, 100);
      }

      onNavigate?.();
    },
    [pathname, navigate, onNavigate],
  );

  return { scrollToSection };
}

// ─── Get Started ──────────────────────────────────────────────────────────────
export function useGetStarted(onNavigate?: () => void) {
  const navigate = useNavigate();

  const handleGetStarted = useCallback(() => {
    navigate("/signin");
    onNavigate?.();
  }, [navigate, onNavigate]);

  return { handleGetStarted };
}

// ─── Mobile Menu ──────────────────────────────────────────────────────────────
export function useMobileMenu() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggle = useCallback(() => setMobileOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setMobileOpen(false), []);

  return { mobileOpen, toggle, closeMenu };
}
