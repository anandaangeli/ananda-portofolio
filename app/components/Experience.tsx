"use client";

import { useLanguage } from "../language-context";
import { motion } from "framer-motion";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 sm:py-32 px-6 relative">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[40rem] h-[40rem] rounded-full bg-[radial-gradient(circle,var(--primary)_0%,transparent_50%)] opacity-[0.02] blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-start">
          
          {/* Right: Sticky Header */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 flex flex-col lg:items-end text-left lg:text-right">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
              <span className="text-[var(--primary)] text-xs font-semibold tracking-widest uppercase">
                {t.experience.eyebrow}
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl font-bold text-[var(--fg)] tracking-tight mb-4 leading-snug"
            >
              {t.experience.heading1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] italic">{t.experience.headingAccent}</span>
            </motion.h2>
          </div>

          {/* Right: Content Flow (Timeline) */}
          <div className="lg:w-2/3 w-full relative">
            
            {/* The Vertical Line (Animated) */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-6 sm:left-10 top-2 w-px bg-gradient-to-b from-[var(--primary)] via-[var(--primary)]/30 to-transparent"
            />

            <div className="flex flex-col gap-12 sm:gap-16 pt-2">
              {t.experiences.map((exp, i) => (
                <div key={i} className="relative pl-16 sm:pl-24 group">
                  
                  {/* Timeline Dot (Animated) */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.2 + (i * 0.1), type: "spring" }}
                    className="absolute left-[20px] sm:left-[36px] top-1.5 w-4 h-4 rounded-full bg-[var(--bg)] border-2 border-[var(--primary)] group-hover:scale-[1.3] group-hover:bg-[var(--primary)] transition-all duration-300 shadow-[0_0_10px_rgba(167,139,250,0.3)] group-hover:shadow-[0_0_15px_rgba(167,139,250,0.6)]"
                  />

                  {/* Experience Card Component */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.3 + (i * 0.1), duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col"
                  >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-mono font-bold self-start mb-4 group-hover:bg-[var(--primary)] group-hover:text-[var(--bg)] transition-colors duration-300">
                       {exp.period}
                    </div>

                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[var(--fg)] mb-2 group-hover:text-[var(--primary)] transition-colors duration-300">
                      {exp.role}
                    </h3>
                    
                    <p className="font-mono text-sm sm:text-base text-[var(--muted-fg)] font-medium mb-5 flex items-center gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                      {exp.company}
                    </p>

                    <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 sm:p-6 shadow-sm group-hover:border-[var(--primary)]/30 group-hover:shadow-md transition-all duration-300 group-hover:-translate-y-1 relative overflow-hidden">
                      {/* Subtle hover gradient inside card */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <p className="relative z-10 text-[var(--fg)] font-medium leading-relaxed text-sm sm:text-base mb-4">
                        {exp.desc}
                      </p>
                      
                      {exp.points && (
                        <ul className="relative z-10 space-y-2.5">
                          {exp.points.map((point: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-3 text-[var(--muted-fg)] text-sm sm:text-base leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]/50 shrink-0 mt-2" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
