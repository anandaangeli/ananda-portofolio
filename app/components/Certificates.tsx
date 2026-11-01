"use client";

import { useLanguage } from "../language-context";
import { motion } from "framer-motion";
import InfoCard from "./InfoCard";

export default function Certificates() {
  const { t } = useLanguage();

  return (
    <section id="sertifikat" className="py-20 sm:py-24 px-6 bg-[var(--card-alt)]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[var(--fg)] mb-6">{t.achievement.achievement}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {t.certificateItems.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="[&>div]:h-full"
            >
              <InfoCard title={c.title} sub={c.issuer} meta={c.year} text={c.description} logo={c.logo} logoAlt={c.logoAlt} link={{ label: t.achievement.viewCertificate, href: c.pdfUrl }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
