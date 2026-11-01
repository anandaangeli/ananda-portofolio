"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../language-context";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

const SECTION_KEYS = ["home", "about", "pendidikan", "experience", "sertifikat", "projects", "contact"] as const;
const SECTION_IDS: string[] = [...SECTION_KEYS];

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

  const navLinks = SECTION_KEYS.map((key) => ({ href: `#${key}`, label: key === "contact" ? t.nav.contactLink : t.nav[key as keyof typeof t.nav] }));

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen ? "bg-[var(--card)]/85 backdrop-blur-xl border-b border-[var(--border)] shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16">
        {/* Brand / Logo: dua blok seperti referensi */}
        <a href="#home" className="flex items-center text-[13px] font-bold tracking-wider shrink-0">
          <span className="bg-[var(--primary)] text-white px-2 py-1">{t.name.split(" ")[0].toUpperCase()}</span>
          <span className="bg-[var(--primary)]/15 text-[var(--primary)] px-2 py-1">{t.name.split(" ")[2]?.toUpperCase()}</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative py-1 text-sm transition-colors duration-200 ${isActive ? "text-[var(--primary)] font-medium" : "text-[var(--fg)] hover:text-[var(--primary)]"}`}
              >
                {link.label}
                {isActive && (
                  <motion.span layoutId="nav-underline" className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-6 bg-[var(--primary)] rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">

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
            className="hidden sm:inline-flex px-4 py-2 text-xs font-bold bg-[var(--primary)] text-[var(--card)] rounded-full hover:bg-[var(--accent)] transition-all duration-300 hover:shadow-[0_0_15px_rgba(14,165,233,0.4)] hover:scale-105"
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
            className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 p-4 rounded-3xl bg-[var(--bg)]/90 backdrop-blur-xl border border-[var(--border)] shadow-2xl flex flex-col gap-2 origin-top"
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
            
            <div className="mt-4 pt-4 border-t border-[var(--border)] flex items-center justify-center px-4">
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


