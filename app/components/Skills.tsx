"use client";

import * as React from "react";
import { useLanguage } from "../language-context";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  SiHtml5, SiCss, SiJavascript, SiReact, SiExpo, 
  SiNodedotjs, SiExpress, SiPhp, SiPython, SiDjango, SiMysql, SiPostgresql,
  SiFigma
} from "react-icons/si";
import { TbBrain, TbDeviceGamepad2, TbPalette } from "react-icons/tb";

const categoryIcons = {
  "Frontend": (
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  ),
  "Backend & Database": (
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
  ),
  "Tools & Lainnya": (
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  ),
  "Tools & Others": (
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  )
};

const itemIcons: Record<string, React.ReactNode> = {
  "HTML & CSS": (
    <div className="flex -space-x-1">
      <SiHtml5 className="text-[#E34F26] w-4 h-4" />
      <SiCss className="text-[#1572B6] w-4 h-4" />
    </div>
  ),
  "JavaScript": <SiJavascript className="text-[#F7DF1E] bg-black/10 rounded-sm w-4 h-4" />,
  "React": <SiReact className="text-[#61DAFB] w-4 h-4" />,
  "React Native (Expo)": <SiExpo className="text-[var(--fg)] w-4 h-4" />,
  "Node.js": <SiNodedotjs className="text-[#339933] w-4 h-4" />,
  "Express": <SiExpress className="text-[var(--fg)] w-4 h-4" />,
  "PHP": <SiPhp className="text-[#777BB4] w-4 h-4" />,
  "Python": <SiPython className="text-[#3776AB] w-4 h-4" />,
  "Django": <SiDjango className="text-[#092E20] dark:text-[#44B78B] w-4 h-4" />,
  "MySQL": <SiMysql className="text-[#4479A1] w-4 h-4" />,
  "PostgreSQL": <SiPostgresql className="text-[#4169E1] w-4 h-4" />,
  "Figma": <SiFigma className="text-[#F24E1E] w-4 h-4" />,
  "Canva": <TbPalette className="text-[#00C4CC] w-4 h-4" />,
  "Phaser.js (2D Game Dev)": <TbDeviceGamepad2 className="text-[var(--fg)] w-4 h-4" />,
  "NLP": <TbBrain className="text-[#FF6B6B] w-4 h-4" />
};

export default function Skills() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const activeGroup = t.skillGroups[activeTab];
  const ActiveIcon = categoryIcons[activeGroup.title as keyof typeof categoryIcons];

  return (
    <section id="skills" className="py-24 sm:py-32 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-1/4 w-[30rem] h-[30rem] rounded-full bg-[radial-gradient(circle,var(--primary)_0%,transparent_60%)] opacity-[0.03] blur-[80px] -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto z-10 relative flex flex-col items-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 backdrop-blur-sm mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
            <span className="text-[var(--primary)] text-xs font-semibold tracking-widest uppercase">
              {t.skills.eyebrow}
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-bold text-[var(--fg)] tracking-tight leading-tight"
          >
            {t.skills.heading1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] italic pr-2">{t.skills.headingAccent}</span>
          </motion.h2>
        </div>

        {/* Interactive App Layout */}
        <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
          
          {/* Left: Tab Menu */}
          <div className="w-full lg:w-1/3 flex flex-row lg:flex-col gap-2.5 overflow-x-auto pb-4 lg:pb-0 hide-scrollbar">
            {t.skillGroups.map((group, index) => {
              const IconEl = categoryIcons[group.title as keyof typeof categoryIcons];
              const isActive = activeTab === index;
              
              return (
                <button 
                  key={group.title}
                  onClick={() => setActiveTab(index)}
                  className={`relative flex items-center gap-3 px-5 py-4 rounded-2xl text-left transition-all duration-300 min-w-[180px] lg:min-w-0 shrink-0 ${
                    isActive 
                      ? 'text-[var(--bg)] shadow-md' 
                      : 'text-[var(--muted-fg)] bg-[var(--card)] border border-[var(--border)] hover:bg-[var(--card-alt)] hover:text-[var(--fg)]'
                  }`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabBg"
                      className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-2xl"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <div className={`relative z-10 p-2 rounded-xl flex items-center justify-center ${isActive ? 'bg-white/20' : 'bg-[var(--bg)] border border-[var(--border)]'}`}>
                     {IconEl ? IconEl : <span className="text-lg">{group.icon}</span>}
                  </div>
                  <span className={`relative z-10 font-semibold text-base ${isActive ? 'text-white' : 'text-[var(--fg)]'}`}>
                    {group.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Tab Content Window */}
          <div className="w-full lg:w-2/3">
             <div className="relative min-h-[320px] w-full bg-[var(--card)] border border-[var(--border)] rounded-[2rem] p-6 sm:p-10 overflow-hidden shadow-xl">
                {/* Subtle Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#818cf80a_1px,transparent_1px),linear-gradient(to_bottom,#818cf80a_1px,transparent_1px)] bg-[size:24px_24px]" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -15, filter: "blur(8px)" }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 flex flex-col h-full"
                  >
                     <div className="flex items-center gap-5 mb-8 pb-6 border-b border-[var(--border)]">
                        <div className="text-[var(--primary)] bg-[var(--primary)]/10 p-3 rounded-xl border border-[var(--primary)]/20 shadow-[0_0_15px_rgba(167,139,250,0.1)]">
                           <div className="w-7 h-7 sm:w-8 sm:h-8 [&>svg]:w-full [&>svg]:h-full">
                              {ActiveIcon}
                           </div>
                        </div>
                        <div>
                          <p className="text-[var(--primary)] font-mono text-xs tracking-widest uppercase mb-1">Stack Overview</p>
                          <h3 className="text-2xl sm:text-3xl font-display font-bold text-[var(--fg)]">{activeGroup.title}</h3>
                        </div>
                     </div>

                     <div className="flex flex-wrap gap-3">
                        {activeGroup.items.map((item, idx) => {
                           const SkillIcon = itemIcons[item];
                           return (
                             <motion.div 
                               key={item}
                               initial={{ opacity: 0, scale: 0.95 }}
                               animate={{ opacity: 1, scale: 1 }}
                               transition={{ delay: idx * 0.05 + 0.1, type: "spring" }}
                               className="px-4 py-2 rounded-xl bg-[var(--card-alt)] border border-[var(--border)] text-[var(--fg)] font-medium text-sm shadow-sm flex items-center gap-2.5 hover:border-[var(--primary)]/50 hover:bg-[var(--primary)]/5 transition-colors group cursor-default"
                             >
                                {SkillIcon ? (
                                  <div className="group-hover:scale-110 transition-transform duration-300">
                                    {SkillIcon}
                                  </div>
                                ) : (
                                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--border)] group-hover:bg-[var(--primary)] transition-colors" />
                                )}
                                {item}
                             </motion.div>
                           );
                        })}
                     </div>
                  </motion.div>
                </AnimatePresence>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
