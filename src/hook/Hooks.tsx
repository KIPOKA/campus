// components/Navbar.tsx
import { useCallback, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
// hook/NavbarHooks.ts

// ─── Scroll Lock ──────────────────────────────────────────────────────────────
export function useScrollLock(active: boolean) {
  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);
}

// ─── Close Menu on Route Change ───────────────────────────────────────────────
export function useCloseOnRouteChange(onClose: () => void) {
  const { pathname } = useLocation();
  useEffect(() => {
    onClose();
  }, [pathname]);
}

// ─── Close Menu on Escape Key ─────────────────────────────────────────────────
export function useCloseOnEscape(onClose: () => void, active: boolean) {
  useEffect(() => {
    if (!active) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [active, onClose]);
}
