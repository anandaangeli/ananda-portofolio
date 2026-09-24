"use client";

import * as React from "react";
import { useLanguage } from "../language-context";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Organization() {
  const { t } = useLanguage();
  const [selectedOrg, setSelectedOrg] = useState<any | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedOrg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedOrg]);

  return (
    <section id="organization" className="py-24 sm:py-32 px-6 relative">
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-[radial-gradient(ellipse_at_center,var(--primary)_0%,transparent_50%)] opacity-[0.03] blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
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
                {t.organization.eyebrow}
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl font-bold text-[var(--fg)] tracking-tight mb-4 leading-snug"
            >
              {t.organization.heading1} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] italic">{t.organization.headingAccent}</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="text-[var(--muted-fg)] mt-4 max-w-sm hidden lg:block"
            >
              Klik pada kartu untuk melihat detail dokumentasi kegiatan.
            </motion.p>
          </div>

          {/* Right: Organization Cards */}
          <div className="lg:w-2/3 w-full grid sm:grid-cols-2 gap-6">
            {t.organizations.map((org, i) => (
              <motion.div
                key={org.name}
                layoutId={`org-card-${org.name}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.15, type: "spring", bounce: 0.2, duration: 0.6 }}
                onClick={() => setSelectedOrg(org)}
                className="group cursor-pointer bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)]/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[var(--primary)]/10 transition-all duration-300 flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="relative h-56 w-full overflow-hidden bg-black">
                  <motion.img 
                    layoutId={`org-img-${org.name}`}
                    src={org.img} 
                    alt={org.name} 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  
                  {/* Floating Date Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white text-xs font-mono font-medium">
                    {org.period}
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-5 left-5 right-5">
                     <h3 className="font-display font-bold text-white text-xl leading-tight">
                       {org.name}
                     </h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-[var(--primary)] font-semibold text-sm mb-3">
                    {org.role}
                  </p>
                  
                  <p className="text-[var(--muted-fg)] text-sm leading-relaxed line-clamp-3">
                    {org.desc}
                  </p>

                  <div className="mt-auto pt-6 flex items-center text-[var(--primary)] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">
                    Lihat detail <span className="ml-1">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* POPUP MODAL */}
      <AnimatePresence>
        {selectedOrg && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedOrg(null)}
            />

            {/* Modal Container */}
            <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 md:p-12 pointer-events-none">
              <motion.div 
                layoutId={`org-card-${selectedOrg.name}`}
                className="w-full max-w-4xl max-h-[90vh] bg-[var(--card)] border border-[var(--border)] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row pointer-events-auto relative"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedOrg(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-[var(--primary)] transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                {/* Left: Image (Hero of the Modal) */}
                <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-black">
                  <motion.img 
                    layoutId={`org-img-${selectedOrg.name}`}
                    src={selectedOrg.img} 
                    alt={selectedOrg.name} 
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-transparent to-transparent" />
                  
                  {/* Mobile Title overlay (hidden on desktop) */}
                  <div className="absolute bottom-6 left-6 right-6 md:hidden">
                    <h3 className="font-display font-bold text-white text-2xl leading-tight mb-2">
                       {selectedOrg.name}
                    </h3>
                    <div className="inline-flex px-3 py-1 rounded-md bg-white/20 backdrop-blur-md text-white text-xs font-mono font-medium border border-white/10">
                      {selectedOrg.period}
                    </div>
                  </div>
                </div>

                {/* Right: Content details */}
                <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col bg-[var(--card)] overflow-y-auto hide-scrollbar">
                  
                  {/* Desktop Title */}
                  <div className="hidden md:block mb-8">
                    <h3 className="font-display font-bold text-[var(--fg)] text-3xl mb-4 leading-tight">
                       {selectedOrg.name}
                    </h3>
                    <div className="inline-flex px-3 py-1.5 rounded-lg bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-mono font-bold tracking-wide">
                      Periode: {selectedOrg.period}
                    </div>
                  </div>

                  {/* Role */}
                  <div className="mb-8 pb-8 border-b border-[var(--border)]">
                    <p className="text-xs text-[var(--muted-fg)] uppercase tracking-widest font-semibold mb-1">Posisi / Jabatan</p>
                    <p className="text-[var(--primary)] font-bold text-xl">
                      {selectedOrg.role}
                    </p>
                  </div>
                  
                  {/* Description & Additional Info */}
                  <div className="prose prose-sm dark:prose-invert">
                    <p className="text-[var(--muted-fg)] leading-relaxed text-base mb-6">
                      {selectedOrg.desc}
                    </p>
                    
                    <h4 className="text-[var(--fg)] font-bold mb-3">Sorotan Kegiatan</h4>
                    <ul className="space-y-3">
                       <li className="flex gap-3 items-start">
                         <span className="w-5 h-5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center shrink-0 mt-0.5">✓</span> 
                         <span className="text-[var(--muted-fg)]">Memimpin dan mengkoordinasikan anggota dalam menjalankan program kerja utama organisasi.</span>
                       </li>
                       <li className="flex gap-3 items-start">
                         <span className="w-5 h-5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center shrink-0 mt-0.5">✓</span> 
                         <span className="text-[var(--muted-fg)]">Berperan aktif dalam menjaga alur komunikasi dan dokumentasi yang baik antar divisi.</span>
                       </li>
                       <li className="flex gap-3 items-start">
                         <span className="w-5 h-5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center shrink-0 mt-0.5">✓</span> 
                         <span className="text-[var(--muted-fg)]">Berhasil melaksanakan kegiatan kolaboratif berskala internal maupun eksternal kampus.</span>
                       </li>
                    </ul>
                  </div>

                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
