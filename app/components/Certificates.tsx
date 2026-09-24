"use client";

import * as React from "react";
import { useLanguage } from "../language-context";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Certificates() {
  const { t } = useLanguage();
  const [selectedCert, setSelectedCert] = useState<any | null>(null);

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCert]);

  return (
    <section id="certificates" className="py-24 sm:py-32 px-6 relative">
      <div className="max-w-6xl mx-auto z-10 relative">
        
        {/* Headings */}
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
            <span className="text-[var(--primary)] text-xs font-semibold tracking-widest uppercase">
              {t.certificates.eyebrow}
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-[var(--fg)] tracking-tight"
          >
            {t.certificates.heading1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] italic">{t.certificates.headingAccent}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[var(--muted-fg)] mt-4 max-w-lg"
          >
            Klik pada sertifikat untuk melihat berkas asli dan detail kompetensi.
          </motion.p>
        </div>

        {/* Certificate Cards (Grid 2 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {t.certificateItems.map((cert, i) => (
            <motion.div
              key={i}
              layoutId={`cert-card-${cert.title}-${t.certificates.eyebrow}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, type: "spring", bounce: 0.2, duration: 0.8 }}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)]/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col relative"
            >
              {/* Decorative Background Glow on Hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" 
                style={{ backgroundColor: cert.color }} 
              />

              {/* Info Container */}
              <div className="p-8 flex flex-col flex-1 relative z-10 w-full">
                <div 
                  className="inline-flex px-3 py-1.5 rounded-lg text-xs font-mono font-bold self-start mb-4"
                  style={{ backgroundColor: `${cert.color}15`, color: cert.color, border: `1px solid ${cert.color}30` }}
                >
                  Tahun {cert.year}
                </div>
                <h3 className="font-display font-bold text-[var(--fg)] text-xl sm:text-2xl leading-snug mb-2 group-hover:text-[var(--primary)] transition-colors">
                  {cert.title}
                </h3>
                <p className="text-[var(--primary)] text-sm font-semibold mb-6 flex items-center gap-2 opacity-90">
                  <span className="text-lg">🏛️</span> {cert.issuer}
                </p>
                
                {cert.description && (
                   <p className="text-[var(--muted-fg)] leading-relaxed text-sm mb-6 flex-1">
                     {cert.description}
                   </p>
                )}

                <div className="mt-auto inline-flex items-center gap-2 text-[var(--primary)] text-sm font-bold opacity-80 group-hover:opacity-100 transition-all group-hover:translate-x-1 duration-300">
                  <span className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">🔍</span>
                  Lihat Berkas
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* POPUP MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedCert(null)}
            />

            {/* Modal Container */}
            <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
              <motion.div 
                layoutId={`cert-card-${selectedCert.title}-${t.certificates.eyebrow}`}
                className="w-full max-w-5xl h-[90vh] sm:h-[85vh] bg-[var(--bg)] border border-[var(--border)] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col pointer-events-auto relative"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-red-500 transition-colors duration-300 shadow-xl"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                {/* Top: Large Image / PDF Viewer */}
                <div className="w-full flex-1 relative bg-[var(--card-alt)] flex items-center justify-center border-b border-[var(--border)] overflow-hidden">
                  {selectedCert.image ? (
                    <motion.img 
                      layoutId={`cert-img-${selectedCert.title}`}
                      src={selectedCert.image} 
                      alt={selectedCert.title} 
                      className="w-full h-full object-contain p-2 sm:p-4 drop-shadow-xl"
                    />
                  ) : selectedCert.pdfUrl ? (
                    <iframe 
                      src={`${selectedCert.pdfUrl}#toolbar=0`} 
                      className="w-full h-full bg-white"
                      title={selectedCert.title}
                    />
                  ) : null}
                </div>

                {/* Bottom: Certificate Details */}
                <div className="w-full p-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between bg-[var(--card)] gap-4 shrink-0">
                  <div>
                    <h3 className="font-display font-bold text-[var(--fg)] text-xl sm:text-2xl mb-1">
                      {selectedCert.title}
                    </h3>
                    <p className="text-[var(--primary)] font-semibold text-sm">
                      🏛️ {selectedCert.issuer}
                    </p>
                  </div>
                  
                  {/* Action buttons (e.g. download PDF if available) */}
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    {selectedCert.pdfUrl && (
                      <a 
                        href={selectedCert.pdfUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[var(--primary)] text-[var(--bg)] font-bold text-sm rounded-xl hover:opacity-90 transition-opacity"
                      >
                        Buka Tab Baru ↗
                      </a>
                    )}
                    <div 
                      className="inline-flex px-4 py-2.5 rounded-xl font-mono font-bold text-sm shrink-0 items-center justify-center"
                      style={{ backgroundColor: `${selectedCert.color}15`, color: selectedCert.color, border: `1px solid ${selectedCert.color}30` }}
                    >
                      Tahun {selectedCert.year}
                    </div>
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
