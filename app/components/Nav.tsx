"use client";

import { useEffect, useState } from "react";
import { content } from "../content";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Tentang" },
  { href: "#skills", label: "Keahlian" },
  { href: "#projects", label: "Proyek" },
  { href: "#contact", label: "Kontak" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "bg-white/70 shadow-sm backdrop-blur-md dark:bg-black/50"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-500 bg-clip-text text-lg font-extrabold text-transparent"
        >
          {content.name.split(" ")[0]}✦
        </a>

        {/* Menu desktop */}
        <ul className="hidden gap-8 text-sm font-medium sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-zinc-600 transition-colors hover:text-fuchsia-600 dark:text-zinc-300 dark:hover:text-fuchsia-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Tombol menu mobile */}
        <button
          type="button"
          aria-label="Buka menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-2xl sm:hidden"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Menu mobile */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-black/5 bg-white/90 px-6 py-4 backdrop-blur-md sm:hidden dark:border-white/10 dark:bg-black/80">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-zinc-700 transition-colors hover:bg-fuchsia-50 hover:text-fuchsia-600 dark:text-zinc-200 dark:hover:bg-white/5"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
