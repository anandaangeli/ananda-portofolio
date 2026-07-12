"use client";

import { useEffect, useState } from "react";
import { content } from "../content";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % content.roles.length),
      2200
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      {/* Blob berwarna di latar */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-blob absolute -left-20 top-24 h-72 w-72 rounded-full bg-pink-400/40 blur-3xl" />
        <div className="animate-blob animation-delay-2000 absolute right-0 top-40 h-72 w-72 rounded-full bg-indigo-400/40 blur-3xl" />
        <div className="animate-blob animation-delay-4000 absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-amber-300/40 blur-3xl" />
      </div>

      <p className="animate-float mb-6 inline-block rounded-full border border-fuchsia-300/60 bg-white/60 px-4 py-1.5 text-sm font-medium text-fuchsia-700 backdrop-blur dark:bg-white/5 dark:text-fuchsia-300">
        👋 Halo, selamat datang di portofolio saya
      </p>

      <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
        Saya{" "}
        <span className="animate-gradient bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
          {content.name}
        </span>
      </h1>

      <p className="mt-4 text-2xl font-semibold sm:text-3xl">
        Saya seorang{" "}
        <span
          key={roleIndex}
          className="animate-gradient bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 bg-clip-text text-transparent"
        >
          {content.roles[roleIndex]}
        </span>
      </p>

      <p className="mt-6 max-w-xl text-lg text-zinc-600 dark:text-zinc-300">
        {content.tagline}
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href="#projects"
          className="rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 px-8 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition-transform hover:scale-105"
        >
          Lihat Proyek
        </a>
        <a
          href="#contact"
          className="rounded-full border border-fuchsia-300 bg-white/60 px-8 py-3 font-semibold text-fuchsia-700 backdrop-blur transition-transform hover:scale-105 dark:bg-white/5 dark:text-fuchsia-300"
        >
          Hubungi Saya
        </a>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 text-sm text-zinc-500 dark:text-zinc-400"
        aria-label="Gulir ke bawah"
      >
        <span className="animate-float inline-block">↓ scroll</span>
      </a>
    </section>
  );
}
