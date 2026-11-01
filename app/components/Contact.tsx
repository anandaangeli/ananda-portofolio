"use client";

import { useLanguage } from "../language-context";
import { motion } from "framer-motion";
import Icon, { type IconName } from "./Icon";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay },
});

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contactSection;
  const socials = t.socials.filter((s) => s.group === "sosial" && s.url);
  const contacts = t.socials.filter((s) => s.group === "kontak" && s.url);
  const email = contacts.find((s) => s.label === "Email");

  return (
    <>
      <section id="contact" className="pt-20 sm:pt-24 pb-12 px-6 bg-[var(--card-alt)]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16 items-center">
          {/* Kiri: pengantar */}
          <motion.div {...inView()}>
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--card)] border border-[var(--border)] px-4 py-1.5 text-xs font-semibold text-[var(--fg)] shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {c.availability}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[var(--fg)]">{c.title}</h2>
            <p className="mt-4 text-sm sm:text-base text-[var(--muted-fg)] leading-relaxed max-w-md">{c.intro}</p>

            <div className="mt-7 flex items-center gap-4">
              <div className="w-16 h-16 shrink-0 rounded-full bg-[var(--card)] p-1 shadow-lg shadow-[var(--primary)]/15">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.hero.photo} alt={t.name} className="w-full h-full rounded-full object-cover object-[center_18%]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--fg)]">{t.name}</p>
                <p className="text-xs text-[var(--primary)] font-medium">{t.about.roleBadge}</p>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <span className="text-xs text-[var(--muted-fg)]">{c.social}</span>
              <div className="flex gap-2">
                {socials.map((s) => (
                  <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="w-10 h-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center shadow-md shadow-[var(--primary)]/30 hover:scale-110 transition-transform">
                    <Icon name={s.icon as IconName} size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Kanan: kartu kontak dalam lingkaran */}
          <motion.div {...inView(0.1)} className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-x-6 -inset-y-10 rounded-full border border-[var(--primary)]/25 hidden sm:block">
              <span className="absolute -top-1 left-1/2 w-2.5 h-2.5 rounded-full bg-[var(--primary)]" />
              <span className="absolute top-1/2 -right-1 w-2.5 h-2.5 rounded-full bg-[var(--primary)]" />
            </div>
            <div className="relative flex flex-col gap-4 py-2">
              {contacts.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl bg-[var(--card)] p-4 shadow-[0_8px_30px_rgba(11,143,208,0.12)] hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(11,143,208,0.22)] transition-all">
                  <span className="w-11 h-11 shrink-0 rounded-lg bg-[var(--primary)]/15 text-[var(--primary)] flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                    <Icon name={s.icon as IconName} size={20} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-[var(--primary)]">{s.label}</p>
                    <p className="text-base text-[var(--fg)] truncate">{s.display}</p>
                  </div>
                  <span className="w-9 h-9 shrink-0 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Banner ajakan */}
      <section className="px-6 pt-6 pb-20 bg-[var(--card-alt)]">
        <motion.div
          {...inView()}
          className="relative max-w-5xl mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b8fd0] to-[#0a5f9e] px-6 py-12 sm:px-12 sm:py-14 text-center text-white shadow-2xl shadow-[#0b8fd0]/30"
        >
          <span className="absolute -top-16 -left-10 w-56 h-56 rounded-full bg-white/10" />
          <span className="absolute -bottom-20 -right-10 w-72 h-72 rounded-full bg-white/10" />
          <div className="relative">
            <h2 className="text-2xl sm:text-4xl font-bold leading-tight max-w-2xl mx-auto">{c.ctaTitle}</h2>
            <p className="mt-4 text-sm sm:text-base text-white/85 max-w-xl mx-auto">{c.ctaText}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {email && (
                <a href={email.url} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#0a5f9e] text-sm sm:text-base font-semibold shadow-lg hover:-translate-y-0.5 transition-transform">
                  <Icon name="mail" size={18} /> {c.ctaEmail}
                </a>
              )}
              <a href="/cv.pdf" download className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/70 text-white text-sm sm:text-base font-semibold hover:bg-white/15 transition-colors">
                ⬇ {c.ctaCv}
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
