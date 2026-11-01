"use client";

import { useLanguage } from "../language-context";
import { motion } from "framer-motion";
import InfoCard from "./InfoCard";

// Pengalaman kerja saja (freelance & magang), rincian tugas diambil dari CV.
export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 sm:py-24 px-6 bg-[var(--card)]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[var(--fg)] mb-6">{t.achievement.experience}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {t.experiences.map((e, i) => (
            <motion.div
              key={e.role + e.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="[&>div]:h-full"
            >
              <InfoCard title={e.role} sub={e.company} meta={e.period} lines={e.points} logo={e.logo} logoAlt={e.logoAlt} link={e.link} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
