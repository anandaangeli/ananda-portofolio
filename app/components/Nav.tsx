"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../language-context";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

const SECTION_KEYS = ["about", "skills", "experience", "projects", "organization", "certificates"] as const;
const SECTION_IDS = ["home", ...SECTION_KEYS];

export default function Nav() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const initials = t.name
    .split(" ")
    .map((word) => word[0])
    .join("");

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const navLinks = SECTION_KEYS.map((key) => ({ href: `#${key}`, label: t.nav[key] }));

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl transition-all duration-300">
      <nav
        className={`flex items-center justify-between px-4 sm:px-6 h-14 sm:h-16 rounded-full transition-all duration-300 border ${
          scrolled || menuOpen
            ? "border-[var(--border)] shadow-lg backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
        style={{
          background: (scrolled || menuOpen) ? (mounted && theme === "light" ? "rgba(255, 255, 255, 0.85)" : "rgba(21, 18, 30, 0.85)") : "transparent",
        }}
      >
        {/* Brand / Logo */}
        <a href="#home" className="flex items-center gap-3 group shrink-0">
          <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] opacity-80 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 font-display text-sm font-bold text-white tracking-wider">
              {initials}
            </span>
          </div>
          <span className="hidden sm:block text-sm font-semibold text-[var(--fg)] tracking-tight group-hover:text-[var(--primary)] transition-colors">
            {t.name.split(" ")[0]} {t.name.split(" ")[1]}
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1 bg-[var(--card-alt)]/50 border border-[var(--border)] p-1 rounded-full backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-1.5 text-xs font-medium transition-colors duration-200 rounded-full"
                style={{ color: isActive ? "var(--bg)" : "var(--muted-fg)" }}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 bg-[var(--fg)] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:block">
            <LangToggle lang={lang} setLang={setLang} />
          </div>

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 sm:p-2.5 rounded-full text-[var(--muted-fg)] hover:text-[var(--primary)] hover:bg-[var(--card)] transition-colors border border-transparent hover:border-[var(--border)]"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path><circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>
              ) : (
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path></svg>
              )}
            </button>
          )}

          <a
            href="#contact"
            className="hidden sm:inline-flex px-4 py-2 text-xs font-bold bg-[var(--primary)] text-[var(--card)] rounded-full hover:bg-[var(--accent)] transition-all duration-300 hover:shadow-[0_0_15px_rgba(167,139,250,0.4)] hover:scale-105"
          >
            {t.nav.contact}
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-label={t.nav.openMenu}
            aria-expanded={menuOpen}
            className="lg:hidden text-[var(--fg)] p-2 ml-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-5 space-y-1.5">
              <span
                className="block h-0.5 bg-current transition-all duration-300 ease-in-out"
                style={{ transform: menuOpen ? "rotate(45deg) translateY(6px)" : "" }}
              />
              <span
                className="block h-0.5 bg-current transition-all duration-300 ease-in-out"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block h-0.5 bg-current transition-all duration-300 ease-in-out"
                style={{ transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "" }}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 mt-3 p-4 rounded-3xl bg-[var(--bg)]/90 backdrop-blur-xl border border-[var(--border)] shadow-2xl flex flex-col gap-2 origin-top"
          >
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium rounded-xl transition-colors"
                  style={{ 
                    background: isActive ? "var(--primary)" : "transparent",
                    color: isActive ? "var(--card)" : "var(--fg)" 
                  }}
                >
                  {link.label}
                </a>
              );
            })}
            
            <div className="mt-4 pt-4 border-t border-[var(--border)] flex items-center justify-between px-4">
              <LangToggle lang={lang} setLang={setLang} />
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="px-6 py-2 text-sm font-bold bg-[var(--primary)] text-[var(--card)] rounded-full"
              >
                {t.nav.contact}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function LangToggle({
  lang,
  setLang,
  className,
}: {
  lang: "id" | "en";
  setLang: (lang: "id" | "en") => void;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center rounded-full p-0.5 text-[10px] font-mono font-bold tracking-wider ${className ?? ""}`}
      style={{ background: "var(--card-alt)", border: "1px solid var(--border)" }}
      role="group"
      aria-label="Language"
    >
      {(["id", "en"] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLang(option)}
          className="relative z-10 px-3 py-1 rounded-full transition-colors duration-200 uppercase"
          style={{ color: lang === option ? "var(--bg)" : "var(--muted-fg)" }}
        >
          {lang === option && (
            <motion.span
              layoutId="lang-indicator"
              className="absolute inset-0 rounded-full -z-10"
              style={{ background: "var(--fg)" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
          )}
          {option}
        </button>
      ))}
    </div>
  );
}
