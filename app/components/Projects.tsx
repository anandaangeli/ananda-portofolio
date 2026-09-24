"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useLanguage } from "../language-context";
import { motion } from "framer-motion";

export type ProjectCard = {
  _id: string;
  title?: string;
  tech?: string;
  description?: string;
  link?: string;
  imageUrl?: string;
};

export default function Projects() {
  const { t } = useLanguage();
  const projects = t.projectItems;
  const [active, setActive] = useState(t.projects.filterAll);

  // Kumpulkan tag teknologi unik dari semua proyek (dipisah koma)
  const tags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) =>
      p.tech
        ?.split(",")
        .map((tech) => tech.trim())
        .filter(Boolean)
        .forEach((tech) => set.add(tech))
    );
    return [t.projects.filterAll, ...Array.from(set)];
  }, [projects, t.projects.filterAll]);

  const filtered =
    active === t.projects.filterAll
      ? projects
      : projects.filter((p) => p.tech?.toLowerCase().includes(active.toLowerCase()));

  return (
    <section id="projects" className="py-24 sm:py-32 px-6 border-t border-[var(--border)] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full bg-[radial-gradient(circle,var(--primary)_0%,transparent_50%)] opacity-[0.03] blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="mb-12 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
            <span className="text-[var(--primary)] text-xs font-semibold tracking-widest uppercase">
              {t.projects.eyebrow}
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-[var(--fg)] tracking-tight"
          >
            {t.projects.heading1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] italic">{t.projects.headingAccent}</span>
          </motion.h2>
        </div>

        {projects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl p-12 text-center text-[var(--muted-fg)] bg-[var(--card)] border border-dashed border-[var(--primary)]/30 shadow-sm"
          >
            <p className="text-lg mb-4">{t.projects.empty}</p>
            <Link href="/studio" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--primary)] text-[var(--bg)] font-semibold hover:opacity-90 transition-opacity">
              Buka Sanity Studio →
            </Link>
          </motion.div>
        ) : (
          <>
            {tags.length > 1 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-3"
              >
                {tags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setActive(tag)}
                    className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      active === tag 
                        ? "text-[var(--bg)] shadow-md" 
                        : "text-[var(--muted-fg)] bg-[var(--card)] border border-[var(--border)] hover:bg-[var(--card-alt)] hover:text-[var(--fg)]"
                    }`}
                  >
                    {active === tag && (
                      <motion.div 
                        layoutId="activeFilterBg"
                        className="absolute inset-0 bg-[var(--primary)] rounded-xl"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{tag}</span>
                  </button>
                ))}
              </motion.div>
            )}

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* <AnimatePresence> doesn't work perfectly with simple map unless configured with keys, we'll just use normal map but with motion items */}
              {filtered.map((project, i) => (
                <motion.div
                  key={project._id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-[2rem] overflow-hidden flex flex-col bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)]/50 shadow-sm hover:shadow-2xl hover:shadow-[var(--primary)]/10 transition-all duration-500 group"
                >
                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden bg-black/5">
                    {project.imageUrl ? (
                      <Image
                        src={project.imageUrl}
                        alt={project.title ?? t.projects.imageAlt}
                        width={800}
                        height={500}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-5xl bg-[var(--card-alt)]">
                        🚀
                      </div>
                    )}
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Project Info */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col relative">
                    <div className="flex flex-wrap gap-2 mb-4 relative z-10 -mt-10">
                      {project.tech
                        ?.split(",")
                        .map((tech) => tech.trim())
                        .filter(Boolean)
                        .map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full font-mono text-[10px] font-bold text-[var(--bg)] bg-[var(--fg)] shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                    </div>

                    <h3 className="font-display font-bold text-2xl text-[var(--fg)] mb-3 group-hover:text-[var(--primary)] transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-[var(--muted-fg)] leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {project.link && (
                      <div className="mt-auto pt-4 border-t border-[var(--border)]">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] hover:opacity-80 transition-opacity"
                        >
                          {t.projects.viewProject}
                          <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
