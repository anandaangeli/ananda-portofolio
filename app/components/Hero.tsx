"use client";

import { useLanguage } from "../language-context";
import { motion } from "framer-motion";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

// Bubble teknologi pudar. Posisi (x%, y%) diukur dari desain referensi, titik tengah bubble.
const bubbles = [
  { label: "C++", x: 61, y: 23 },
  { label: "Js", x: 92, y: 24 },
  { label: "</>", x: 27, y: 52 },
  { label: "PHP", x: 10, y: 70 },
  { label: "HTML", x: 31, y: 82 },
  { label: "CSS", x: 74, y: 74 },
];

const iconProps = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" } as const;
const MonitorIcon = () => (
  <svg {...iconProps}><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></svg>
);
const PhoneIcon = () => (
  <svg {...iconProps}><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></svg>
);

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;
  const count = (re: RegExp) => t.projectItems.filter((p) => re.test(p.tech ?? "")).length;
  const mobile = count(/android|react native|expo|kotlin|flutter/i);
  const stats = [
    { label: h.statWeb, value: count(/website|next\.?js|laravel|php/i), icon: <MonitorIcon /> },
    { label: h.statAndroid, value: mobile, icon: <PhoneIcon /> },
  ];

  return (
    <section
      id="home"
      className="relative z-10 bg-[var(--card-alt)] px-6 pt-28 pb-12 flex flex-col items-center text-center lg:h-[calc(100svh-3.5rem)] lg:min-h-[620px] lg:p-0 lg:block"
    >
      {/* Dekorasi (dipotong di tepi layar) */}
      <div className="hidden lg:block absolute inset-0 overflow-hidden pointer-events-none">
        {/* Foto pendukung kiri atas */}
        <motion.div {...fade(0.2)} className="absolute top-0 left-0 w-[17%] aspect-[3/4]">
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-br-[6rem] rounded-tr-[2rem] rounded-bl-[4rem] border-2 border-[var(--primary)]/25" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={h.photoBlob} alt="" className="relative w-full h-full object-cover rounded-br-[6rem] rounded-tr-[2rem] rounded-bl-[4rem]" />
        </motion.div>

        {/* Foto pendukung kanan, terpotong tepi layar */}
        <motion.div {...fade(0.3)} className="absolute left-[92%] top-[75%] w-[19%] aspect-square -translate-x-1/2 -translate-y-1/2">
          <div className="absolute -inset-4 rounded-full border-2 border-[var(--primary)]/25" />
          <div className="absolute -inset-1.5 rounded-full border border-[var(--primary)]/15" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={h.photoCircle} alt="" className="relative w-full h-full object-cover rounded-full" />
        </motion.div>

        {bubbles.map((b) => (
          <span
            key={b.label}
            style={{ left: `${b.x}%`, top: `${b.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center bg-white/60 text-xs font-medium text-[var(--muted-fg)]/50 shadow-[0_4px_20px_rgba(11,143,208,0.07)] dark:bg-white/5"
          >
            {b.label}
          </span>
        ))}
      </div>

      {/* Teks tengah */}
      <div className="relative w-full max-w-3xl lg:absolute lg:top-[33%] lg:left-1/2 lg:-translate-x-1/2">
        <h1 className="font-body text-[var(--fg)] tracking-tight leading-[1.2] text-[clamp(2rem,3.4vw,3.25rem)]">
          <motion.span {...fade(0.1)} className="block font-normal">{h.headline[0]}</motion.span>
          <motion.span {...fade(0.2)} className="block font-semibold text-[var(--primary)]">{h.headline[1]}</motion.span>
        </h1>

        <motion.p {...fade(0.35)} className="mt-5 mx-auto max-w-xl text-sm sm:text-base text-[var(--muted-fg)] leading-relaxed">
          {h.description}
        </motion.p>

        <motion.div {...fade(0.5)} className="mt-7 flex flex-wrap justify-center gap-3">
          <a href="#projects" className="px-8 py-3 rounded-full bg-[var(--primary)] text-white text-sm font-semibold shadow-md shadow-[var(--primary)]/30 hover:brightness-110 hover:-translate-y-0.5 transition-all">
            {h.ctaProjects}
          </a>
          <a href="/cv.pdf" download className="px-8 py-3 rounded-full bg-[var(--primary)]/15 text-[var(--primary)] text-sm font-semibold shadow-md shadow-[var(--primary)]/10 hover:-translate-y-0.5 transition-all">
            {h.ctaCv}
          </a>
        </motion.div>
      </div>

      {/* Kartu statistik: menyeberangi batas bawah hero seperti di desain */}
      <div className="relative mt-10 lg:mt-0 lg:absolute lg:left-1/2 lg:bottom-0 lg:-translate-x-1/2 lg:translate-y-1/2 z-20">
        <motion.div
          {...fade(0.65)}
          className="inline-grid grid-cols-2 gap-4 sm:gap-10 rounded-xl bg-[var(--card)] px-5 sm:px-8 py-4 shadow-[0_10px_40px_rgba(11,143,208,0.15)]"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-3 text-left">
              <span className="hidden sm:flex w-11 h-11 rounded-lg bg-[var(--primary)]/15 text-[var(--primary)] items-center justify-center">{s.icon}</span>
              <div>
                <p className="text-[11px] sm:text-xs text-[var(--fg)] leading-tight">{s.label}</p>
                <p className="text-lg font-bold text-[var(--fg)] leading-tight mt-0.5">{s.value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
