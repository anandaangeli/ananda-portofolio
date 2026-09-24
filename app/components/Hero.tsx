"use client";

import { useLanguage } from "../language-context";
import { motion } from "framer-motion";

export default function Hero() {
  const { t } = useLanguage();
  const nameWords = t.name.split(" "); // Ananda Gracia Angeli

  // Animations configuration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.1 } 
    }
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
  } as const;

  const rightVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
  } as const;

  const photoVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  } as const;

  // A new animation: floating pulse
  const floatingAnimation = {
    y: ["-8px", "8px", "-8px"],
    transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" as const }
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center pt-24 pb-16 px-6 overflow-hidden" id="home">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f20_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f20_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full -z-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #a78bfa15 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto w-full z-10 relative mt-4">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-4"
        >
          {/* LEFT COLUMN - Title & Identity */}
          <motion.div 
            variants={leftVariants}
            className="flex-1 flex flex-col items-center text-center lg:items-end lg:text-right w-full lg:pr-8 order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 backdrop-blur-sm mb-6 hover:bg-[var(--primary)]/20 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
              </span>
              <span className="text-[var(--primary)] text-xs font-semibold tracking-wide uppercase">
                {t.hero.badge}
              </span>
            </div>

            <span className="block text-xl md:text-2xl font-medium text-[var(--muted-fg)] mb-2 font-sans">{t.hero.greeting}</span>
            <h1 className="font-display text-4xl sm:text-5xl xl:text-[3.5rem] font-bold leading-[1.1] text-[var(--fg)] tracking-tight">
              {nameWords[0]} <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[var(--primary)] to-[var(--accent)]">
                {nameWords.slice(1).join(" ")}
              </span>
            </h1>
            <h2 className="text-lg md:text-xl font-light text-[var(--fg)] mt-5 max-w-sm">
              {t.hero.subtitle}
            </h2>
          </motion.div>

          {/* CENTER COLUMN - Photo */}
          <motion.div 
            variants={photoVariants}
            className="flex-shrink-0 relative order-1 lg:order-2 w-56 h-56 md:w-64 md:h-64 lg:w-[280px] lg:h-[280px] mb-8 lg:mb-0"
          >
            {/* Spinning ring around the photo */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" } as const}
              className="absolute -inset-6 md:-inset-8 rounded-full border border-dashed border-[var(--primary)]/30 z-0"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" } as const}
              className="absolute -inset-10 md:-inset-12 rounded-full border border-[var(--accent)]/10 z-0 hidden lg:block"
            />

            <div className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-[var(--card)] shadow-[0_0_40px_rgba(167,139,250,0.15)] z-10 bg-[var(--card-alt)]">
              {/* Image with original colors */}
              <img
                src={t.hero.photo}
                alt={t.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Small Floating Orbs/Icons around the center */}
            <motion.div 
              animate={floatingAnimation}
              className="absolute -top-2 -right-2 lg:-right-6 bg-[var(--card-alt)]/80 backdrop-blur-md border border-[var(--primary)]/30 w-12 h-12 flex items-center justify-center rounded-full shadow-xl z-30"
            >
              <div className="text-xl">🚀</div>
            </motion.div>
            <motion.div 
              animate={{...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1.5 }}}
              className="absolute bottom-2 -left-2 lg:-left-6 bg-[var(--card-alt)]/80 backdrop-blur-md border border-[#f472b6]/30 w-12 h-12 flex items-center justify-center rounded-full shadow-xl z-30"
            >
              <div className="text-xl text-[#f472b6]">🤖</div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - Desc & Action */}
          <motion.div 
            variants={rightVariants}
            className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left w-full lg:pl-8 order-3 lg:order-3"
          >
            <p className="text-[var(--muted-fg)] leading-relaxed max-w-sm mb-8 text-base">
              {t.hero.description}
            </p>
            
            <div className="flex flex-col gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="group relative px-8 py-3.5 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-[var(--card)] font-bold rounded-full transition-all duration-300 text-sm overflow-hidden text-center hover:scale-105 shadow-[0_0_20px_rgba(167,139,250,0.3)]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {t.hero.ctaProjects}
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
              </a>
              <a
                href="/cv.pdf"
                download
                className="group px-8 py-3.5 border border-[var(--border)] bg-transparent text-[var(--fg)] font-semibold rounded-full hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all duration-300 text-sm text-center inline-flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                {t.hero.ctaCv}
              </a>
            </div>
            
            {/* Status / Highlight Display */}
            <div className="mt-10 p-4 rounded-2xl bg-[var(--card)] border border-[var(--border)] flex items-center gap-4 w-full max-w-sm shadow-sm hover:border-[var(--primary)]/50 transition-colors duration-300">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-[var(--fg)]">{t.hero.status}</p>
                <p className="text-xs text-[var(--muted-fg)] font-medium">{t.hero.statusNote}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden lg:flex"
      >
        <span className="text-[var(--muted-fg-dark)] text-[10px] uppercase tracking-[0.2em] font-medium">{t.hero.scrollDown}</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-8 bg-gradient-to-b from-[var(--primary)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
