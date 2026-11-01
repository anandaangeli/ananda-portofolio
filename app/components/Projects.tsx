"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLanguage } from "../language-context";

export type ProjectCard = {
  _id: string;
  title?: string;
  tech?: string;
  description?: string;
  link?: string;
  imageUrl?: string;
};

const Arrow = ({ dir }: { dir: "left" | "right" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={dir === "left" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
  </svg>
);

export default function Projects() {
  const { t } = useLanguage();
  const projects = t.projectItems;
  const [openId, setOpenId] = useState<string | null>(null);
  const [index, setIndex] = useState(0);
  const scroller = useRef<HTMLDivElement>(null);
  const opened = projects.find((p) => p._id === openId);

  const go = useCallback(
    (i: number) => {
      const el = scroller.current;
      if (!el) return;
      const target = (i + projects.length) % projects.length;
      el.scrollTo({ left: target * el.clientWidth, behavior: "smooth" });
    },
    [projects.length]
  );

  const onScroll = () => {
    const el = scroller.current;
    if (el) setIndex(Math.round(el.scrollLeft / el.clientWidth));
  };

  // Tutup modal dengan Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenId(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="projects" className="py-20 sm:py-24 px-6 bg-[var(--card)]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-bold text-[var(--fg)]">{t.projects.heading}</h2>
          <p className="text-sm text-[var(--muted-fg)] tabular-nums">
            {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </p>
        </div>

        {/* Tab nama proyek */}
        <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label={t.projects.heading}>
          {projects.map((project, i) => (
            <button
              key={project._id}
              type="button"
              role="tab"
              aria-selected={i === index}
              onClick={() => go(i)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                i === index
                  ? "bg-[var(--primary)] text-white shadow-md shadow-[var(--primary)]/30"
                  : "bg-[var(--card-alt)] text-[var(--muted-fg)] hover:text-[var(--primary)]"
              }`}
            >
              {project.short}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative" aria-roledescription="carousel">
          <div
            ref={scroller}
            onScroll={onScroll}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") go(index + 1);
              if (e.key === "ArrowLeft") go(index - 1);
            }}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden rounded-3xl focus:outline-none"
          >
            {projects.map((project, i) => (
              <article
                key={project._id}
                aria-roledescription="slide"
                aria-label={`${i + 1} / ${projects.length}`}
                className="w-full shrink-0 snap-center"
              >
                <div className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-6 md:gap-10 items-center rounded-3xl bg-[var(--card-alt)] p-4 sm:p-6 md:p-8">
                  {/* Cover */}
                  <div className="relative rounded-2xl overflow-hidden bg-[var(--card)] border border-[var(--border)] shadow-[0_14px_44px_rgba(11,143,208,0.18)]">
                    <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-2">
                      <span className="rounded-full bg-[var(--card)]/90 backdrop-blur px-3 py-1 text-[11px] font-semibold text-[var(--primary)] shadow">{project.category}</span>
                      {project.status && (
                        <span className="rounded-full bg-[var(--primary)] px-3 py-1 text-[11px] font-semibold text-white shadow">{project.status}</span>
                      )}
                    </div>
                    {project.imageUrl && (
                      <Image
                        src={project.imageUrl}
                        alt={project.title ?? t.projects.imageAlt}
                        width={1200}
                        height={750}
                        priority={i === 0}
                        className="w-full h-auto aspect-[16/10] object-cover object-top"
                      />
                    )}
                  </div>

                  {/* Isi */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[var(--fg)] leading-tight">{project.title}</h3>
                    <p className="mt-3 text-sm sm:text-base text-[var(--muted-fg)] leading-relaxed">{project.description}</p>

                    <ul className="mt-5 space-y-2.5">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3 text-sm sm:text-[15px] text-[var(--fg)]">
                          <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-[var(--primary)]/15 text-[var(--primary)] flex items-center justify-center text-[11px] font-bold">✓</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.tech?.split(",").map((x) => x.trim()).filter(Boolean).map((tech) => (
                        <span key={tech} className="px-2.5 py-1 rounded-full bg-[var(--card)] border border-[var(--border)] text-[11px] text-[var(--muted-fg)]">{tech}</span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {(project.gallery || project.video) && (
                        <button
                          type="button"
                          onClick={() => setOpenId(project._id)}
                          className="px-6 py-3 rounded-full bg-[var(--primary)] text-white text-sm font-semibold shadow-md shadow-[var(--primary)]/30 hover:brightness-110 hover:-translate-y-0.5 transition-all"
                        >
                          ▶ {t.projects.viewDetail}
                        </button>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 rounded-full border border-[var(--primary)]/40 bg-[var(--card)] text-[var(--primary)] text-sm font-semibold hover:bg-[var(--primary)]/10 transition-colors"
                        >
                          {t.projects.viewProject} ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Panah */}
          <button
            type="button"
            aria-label="Sebelumnya"
            onClick={() => go(index - 1)}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[var(--card)] border border-[var(--border)] text-[var(--primary)] items-center justify-center shadow-lg hover:bg-[var(--primary)] hover:text-white transition-colors"
          >
            <Arrow dir="left" />
          </button>
          <button
            type="button"
            aria-label="Berikutnya"
            onClick={() => go(index + 1)}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[var(--card)] border border-[var(--border)] text-[var(--primary)] items-center justify-center shadow-lg hover:bg-[var(--primary)] hover:text-white transition-colors"
          >
            <Arrow dir="right" />
          </button>
        </div>

        {/* Titik penunjuk (mobile) */}
        <div className="mt-5 flex justify-center gap-2 md:hidden">
          {projects.map((project, i) => (
            <button
              key={project._id}
              type="button"
              aria-label={project.short}
              onClick={() => go(i)}
              className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-[var(--primary)]" : "w-2 bg-[var(--primary)]/30"}`}
            />
          ))}
        </div>
      </div>

      {opened && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm overflow-y-auto p-4 sm:p-8"
          onClick={() => setOpenId(null)}
          role="dialog"
          aria-modal="true"
          aria-label={opened.title}
        >
          <div
            className="relative max-w-4xl mx-auto rounded-3xl bg-[var(--bg)] border border-[var(--border)] p-6 sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpenId(null)}
              className="absolute top-4 right-4 px-3 py-1.5 rounded-lg text-sm font-semibold bg-[var(--card)] border border-[var(--border)] text-[var(--fg)] hover:bg-[var(--card-alt)]"
            >
              ✕ {t.projects.close}
            </button>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[var(--fg)] pr-24 mb-2">{opened.title}</h3>
            <p className="text-xs font-mono text-[var(--muted-fg)] mb-6">{opened.tech}</p>

            {opened.video && (
              <>
                <h4 className="font-semibold text-[var(--fg)] mb-2">{t.projects.demoVideo}</h4>
                <video
                  src={opened.video}
                  controls
                  preload="metadata"
                  poster={opened.imageUrl}
                  className={`rounded-2xl border border-[var(--border)] mb-1 bg-black ${opened.portrait ? "mx-auto block max-w-[260px]" : "w-full"}`}
                />
                <p className="text-xs text-[var(--muted-fg)] mb-6">{opened.note ?? t.projects.note}</p>
              </>
            )}

            <ul className="space-y-3 mb-8 text-sm text-[var(--muted-fg)] leading-relaxed list-disc pl-5">
              {opened.details?.map((d) => <li key={d}>{d}</li>)}
            </ul>

            {opened.gallery && (
              <>
                <h4 className="font-semibold text-[var(--fg)] mb-3">{t.projects.gallery}</h4>
                <div className={opened.portrait ? "grid grid-cols-2 sm:grid-cols-4 gap-3" : "grid sm:grid-cols-2 gap-4"}>
                  {opened.gallery.map((g) => (
                    <figure key={g.src} className="rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card)]">
                      <Image src={g.src} alt={g.caption} width={opened.portrait ? 390 : 1440} height={opened.portrait ? 844 : 900} className="w-full h-auto" />
                      <figcaption className="px-3 py-2 text-xs text-[var(--muted-fg)]">{g.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
