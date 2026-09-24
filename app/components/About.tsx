"use client";

import { useLanguage } from "../language-context";
import { motion } from "framer-motion";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 sm:py-32 px-6 relative">
      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left: Sticky Header */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
              <span className="text-[var(--primary)] text-xs font-semibold tracking-widest uppercase">
                {t.about.eyebrow}
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl font-bold text-[var(--fg)] tracking-tight mb-4 leading-snug"
            >
              {t.about.heading1} <span className="text-[var(--primary)]">{t.about.headingAccent}</span>
            </motion.h2>
          </div>

          {/* Right: Content Flow */}
          <div className="lg:w-2/3 flex flex-col gap-8 sm:gap-10 pt-4 lg:pt-0">
            {/* Intro Text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-[var(--muted-fg)] leading-relaxed text-base sm:text-lg font-light">
                {t.about.intro}
              </p>
            </motion.div>

            {/* Separator */}
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              className="w-full h-px bg-gradient-to-r from-[var(--border)] to-transparent origin-left"
            />

            {/* Education Timeline */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <h3 className="text-xl font-display font-semibold text-[var(--fg)] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center text-lg border border-[var(--primary)]/20 shadow-inner">
                  🎓
                </span>
                {t.about.eyebrowEdu}
              </h3>

              {/* Minimalist Education Card */}
              <div className="group relative w-full">
                {/* Subtle hover glow effect behind the card */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
                
                <div className="relative bg-[var(--card)] border border-[var(--border)] rounded-3xl p-6 sm:p-10 hover:border-[var(--primary)]/40 hover:shadow-2xl hover:shadow-[var(--primary)]/5 transition-all duration-500 group-hover:-translate-y-1">
                  
                  <div className="flex flex-col mb-6">
                    <h4 className="text-2xl sm:text-3xl font-bold text-[var(--fg)] mb-2 leading-tight">
                      {t.education.institution}
                    </h4>
                    <p className="inline-flex items-center gap-2 text-[var(--primary)] font-medium text-sm sm:text-base">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></span>
                      {t.education.degree}
                    </p>
                  </div>
                  
                  {/* Research Box */}
                  <div className="bg-[var(--card-alt)] border border-[var(--border)] rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-5 group/research hover:border-[var(--primary)]/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center text-xl shrink-0 group-hover/research:scale-110 group-hover/research:rotate-12 transition-transform duration-300 shadow-sm">
                      🔬
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--muted-fg)] mb-1.5">
                        {t.about.thesisLabel || "Thesis / Research"}
                      </p>
                      <p className="text-sm font-semibold text-[var(--fg)] leading-relaxed">
                        {t.education.note}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
