"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

export type ProjectCard = {
  _id: string;
  title?: string;
  tech?: string;
  description?: string;
  link?: string;
  imageUrl?: string;
};

export default function Projects({ projects }: { projects: ProjectCard[] }) {
  const [active, setActive] = useState("Semua");

  // Kumpulkan tag teknologi unik dari semua proyek (dipisah koma)
  const tags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) =>
      p.tech
        ?.split(",")
        .map((t) => t.trim())
        .filter(Boolean)
        .forEach((t) => set.add(t))
    );
    return ["Semua", ...Array.from(set)];
  }, [projects]);

  const filtered =
    active === "Semua"
      ? projects
      : projects.filter((p) => p.tech?.toLowerCase().includes(active.toLowerCase()));

  return (
    <section id="projects" className="py-24 px-6 border-t border-[#2d2541]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-[#a78bfa] text-xs tracking-widest uppercase mb-3">
            Proyek
          </p>
          <h2 className="font-display text-4xl font-bold text-[#f3f0f8]">
            Karya yang <span className="italic text-[#a78bfa]">pernah dibuat</span>
          </h2>
        </div>

        {projects.length === 0 ? (
          <p
            className="rounded-2xl p-8 text-center text-[#a59eb5]"
            style={{ border: "1px dashed #2d2541" }}
          >
            Belum ada proyek. Tambahkan proyek pertama Anda lewat{" "}
            <Link href="/studio" className="font-semibold text-[#a78bfa] underline">
              /studio
            </Link>
            .
          </p>
        ) : (
          <>
            {tags.length > 1 && (
              <div className="mb-8 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setActive(tag)}
                    className="rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200"
                    style={
                      active === tag
                        ? { background: "#a78bfa", color: "#15121e" }
                        : { border: "1px solid #2d2541", color: "#a59eb5" }
                    }
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}

            <div className="grid md:grid-cols-3 gap-6">
              {filtered.map((project) => (
                <div
                  key={project._id}
                  className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 group"
                  style={{ background: "#15121e", border: "1px solid #2d2541" }}
                >
                  <div className="h-44 overflow-hidden bg-[#1f1a2e]">
                    {project.imageUrl ? (
                      <Image
                        src={project.imageUrl}
                        alt={project.title ?? "Gambar proyek"}
                        width={800}
                        height={500}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-5xl">
                        🚀
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    {project.tech ? (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tech
                          .split(",")
                          .map((t) => t.trim())
                          .filter(Boolean)
                          .map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 rounded font-mono text-xs text-[#a78bfa]"
                              style={{ background: "#a78bfa12", border: "1px solid #a78bfa22" }}
                            >
                              {t}
                            </span>
                          ))}
                      </div>
                    ) : null}
                    <h3 className="font-display font-bold text-xl text-[#f3f0f8] mb-1">
                      {project.title}
                    </h3>
                    {project.description ? (
                      <p className="text-sm text-[#a59eb5] leading-relaxed mb-3">
                        {project.description}
                      </p>
                    ) : null}
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-[#a78bfa]"
                      >
                        Lihat proyek
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
