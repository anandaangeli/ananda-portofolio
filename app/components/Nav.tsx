"use client";

import { useEffect, useState } from "react";
import { content } from "../content";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#organization", label: "Organization" },
  { href: "#certificates", label: "Certificates" },
];

const initials = content.name
  .split(" ")
  .map((word) => word[0])
  .join("");

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(12,10,19,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid #2d2541" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-display text-xl font-bold text-[#a78bfa] tracking-tight">
          {initials}
          <span className="text-[#f3f0f8] text-sm font-mono ml-1 opacity-40">.dev</span>
        </a>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm text-[#a59eb5] hover:text-[#f3f0f8] transition-colors duration-200 rounded"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 px-4 py-1.5 text-sm font-semibold bg-[#a78bfa] text-[#15121e] rounded-full hover:bg-[#c084fc] transition-colors duration-200"
          >
            Contact Me
          </a>
        </div>

        {/* Tombol menu mobile */}
        <button
          type="button"
          aria-label="Buka menu"
          aria-expanded={menuOpen}
          className="md:hidden text-[#f3f0f8] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-5 space-y-1.5">
            <span
              className="block h-0.5 bg-current transition-all duration-200"
              style={{ transform: menuOpen ? "rotate(45deg) translateY(8px)" : "" }}
            />
            <span
              className="block h-0.5 bg-current transition-all duration-200"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block h-0.5 bg-current transition-all duration-200"
              style={{ transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "" }}
            />
          </div>
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#2d2541] bg-[#0c0a13] px-6 py-4 flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[#a59eb5] hover:text-[#f3f0f8] py-2 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 text-center px-4 py-2 text-sm font-semibold bg-[#a78bfa] text-[#15121e] rounded-full"
          >
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
}
