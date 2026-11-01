"use client";

import { useLanguage } from "../language-context";
import { motion } from "framer-motion";
import SkillIcon from "./SkillIcon";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay },
});

const personMask =
  "linear-gradient(#000,#000) top / 100% 59% no-repeat, radial-gradient(circle closest-side at 50% 59%, #000 99.5%, transparent 100%) center / 100% 100% no-repeat";

export default function About() {
  const { t } = useLanguage();
  const [first, ...rest] = t.name.split(" ");

  return (
    <section id="about" className="pt-28 sm:pt-36 pb-20 sm:pb-28 px-6 bg-[var(--card)] relative">
      <div className="max-w-5xl mx-auto">
        {/* Hello, I'm ... */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 md:gap-16 items-center">
          {/* Foto cut-out: bagian atas keluar dari lingkaran (seperti referensi) */}
          <motion.div {...inView()} className="relative mx-auto mt-12 w-60 sm:w-72 aspect-square">
            <div className="absolute inset-0 rounded-full bg-[var(--card-alt)] overflow-hidden">
              {/* aksen garis miring seperti referensi */}
              <div className="absolute -left-4 top-6 w-28 h-28 rotate-45 bg-[repeating-linear-gradient(90deg,var(--primary)_0_3px,transparent_3px_9px)] opacity-25" />
            </div>
            {/* Topeng: area di atas garis tengah lingkaran tampil penuh, di bawahnya dipotong mengikuti lingkaran */}
            <div className="absolute -left-[7.5%] -top-[22%] w-[115%] h-[122%]" style={{ WebkitMask: personMask, mask: personMask }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/foto-ananda-cutout.png" alt={t.name} className="w-full h-full object-contain object-bottom" />
            </div>
            <span className="absolute top-[22%] -right-5 w-14 h-11 rounded-lg bg-[var(--primary)] text-white text-lg font-bold flex items-center justify-center shadow-lg shadow-[var(--primary)]/30">
              {"</>"}
            </span>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-xl bg-[var(--card)] px-6 py-2.5 text-center shadow-[0_8px_30px_rgba(11,143,208,0.15)]">
              <p className="text-sm font-semibold text-[var(--fg)] whitespace-nowrap">{t.name}</p>
              <p className="text-xs font-bold text-[var(--primary)] whitespace-nowrap">{t.about.roleBadge}</p>
            </div>
          </motion.div>

          {/* Teks + skill */}
          <motion.div {...inView(0.1)}>
            <h2 className="text-3xl font-bold text-[var(--fg)] tracking-tight">
              {t.about.hello} <span className="text-[var(--primary)]">{first} {rest.join(" ")}</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[var(--muted-fg)] leading-relaxed">{t.about.intro}</p>

            <p className="mt-6 mb-3 text-sm font-semibold text-[var(--fg)]">{t.about.skillsLabel}</p>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
              {t.about.mainSkills.map((s) => (
                <div key={s.name} className="relative h-11 rounded-lg bg-[var(--card)] shadow-[0_6px_22px_rgba(11,143,208,0.10)] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="absolute inset-y-0 left-0 bg-[var(--primary)]/15"
                  />
                  <span className="relative z-10 flex h-full items-center gap-2.5 px-4 text-sm sm:text-base font-medium text-[var(--fg)]">
                    <span className="flex items-center gap-1.5 shrink-0">
                      {s.icons.map((i) => <SkillIcon key={i} name={i} />)}
                    </span>
                    {s.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
