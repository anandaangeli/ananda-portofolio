"use client";

import { useLanguage } from "../language-context";
import { motion } from "framer-motion";
import Icon from "./Icon";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay },
});

export default function Education() {
  const { t } = useLanguage();
  const e = t.education;
  const s = t.educationSection;

  const rows = e.rows;

  return (
    <section id="pendidikan" className="py-20 sm:py-24 px-6 bg-[var(--card-alt)]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-10 md:gap-16 items-start">
        {/* Kiri: judul + IPK sebagai penekanan */}
        <motion.div {...inView()}>
          <h2 className="text-3xl font-bold text-[var(--fg)]">{s.title}</h2>
          <p className="mt-2 text-sm text-[var(--muted-fg)]">{e.period}</p>

          <div className="mt-8 inline-block rounded-xl bg-[var(--card)] px-6 py-5 shadow-[0_10px_40px_rgba(11,143,208,0.12)]">
            <p className="text-xs text-[var(--muted-fg)]">{s.gpa}</p>
            <p className="mt-1 text-5xl font-bold text-[var(--primary)] leading-none">
              {e.gpaValue}
              <span className="ml-2 text-lg font-medium text-[var(--muted-fg)]">/ {e.gpaMax}</span>
            </p>
          </div>
        </motion.div>

        {/* Kanan: kartu dengan pola label biru + nilai, seperti kartu kontak di desain */}
        <motion.div {...inView(0.1)} className="rounded-xl bg-[var(--card)] p-5 sm:p-6 shadow-[0_8px_30px_rgba(11,143,208,0.10)]">
          <div className="flex items-center gap-4 pb-5 border-b border-[var(--border)]">
            <span className="w-12 h-12 shrink-0 rounded-xl bg-[var(--primary)]/15 text-[var(--primary)] flex items-center justify-center">
              <Icon name="cap" />
            </span>
            <div>
              <p className="text-lg font-semibold text-[var(--primary)] leading-snug">{e.institution}</p>
              <p className="text-sm text-[var(--fg)]">{e.degree}</p>
            </div>
          </div>

          <dl className="pt-5 grid gap-4">
            {rows.map((r) => (
              <div key={r.label}>
                <dt className="text-sm font-semibold text-[var(--primary)]">{r.label}</dt>
                <dd className="text-base text-[var(--fg)]">
                  {r.href ? (
                    <a href={r.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-[var(--primary)]/40 hover:text-[var(--primary)] transition-colors">
                      {r.value} ↗
                    </a>
                  ) : (
                    r.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
