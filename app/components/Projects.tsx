"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import Reveal from "./Reveal";

export type ProjectCard = {
  _id: string;
  title?: string;
  tech?: string;
  description?: string;
  link?: string;
  imageUrl?: string;
};

const cardColors = [
  "from-pink-500/20 to-rose-500/20",
  "from-fuchsia-500/20 to-purple-500/20",
  "from-indigo-500/20 to-blue-500/20",
  "from-emerald-500/20 to-teal-500/20",
  "from-amber-500/20 to-orange-500/20",
  "from-sky-500/20 to-cyan-500/20",
];

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
      : projects.filter((p) =>
          p.tech?.toLowerCase().includes(active.toLowerCase())
        );

  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24"
    >
      <Reveal>
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          <span className="bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent">
            Proyek
          </span>{" "}
          Saya
        </h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          Beberapa karya yang pernah saya kerjakan.
        </p>
      </Reveal>

      {projects.length === 0 ? (
        <p className="mt-10 rounded-2xl border border-dashed border-fuchsia-300 p-8 text-center text-zinc-500 dark:text-zinc-400">
          Belum ada proyek. Tambahkan proyek pertama Anda lewat{" "}
          <Link href="/studio" className="font-semibold underline">
            /studio
          </Link>
          .
        </p>
      ) : (
        <>
          {/* Filter berdasarkan teknologi */}
          {tags.length > 1 && (
            <Reveal>
              <div className="mt-8 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setActive(tag)}
                    className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                      active === tag
                        ? "bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white shadow"
                        : "border border-black/10 text-zinc-600 hover:border-fuchsia-400 hover:text-fuchsia-600 dark:border-white/15 dark:text-zinc-300"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </Reveal>
          )}

          <ul className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {filtered.map((project, i) => (
              <Reveal key={project._id} delay={(i % 2) * 120}>
                <li className="group relative h-full overflow-hidden rounded-3xl border border-black/8 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-fuchsia-500/20 dark:border-white/10 dark:bg-zinc-900">
                  {/* Lapisan gradient saat hover */}
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${
                      cardColors[i % cardColors.length]
                    } opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  <div className="relative">
                    {project.imageUrl ? (
                      <Image
                        src={project.imageUrl}
                        alt={project.title ?? "Gambar proyek"}
                        width={800}
                        height={500}
                        className="aspect-8/5 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex aspect-8/5 w-full items-center justify-center bg-gradient-to-br from-fuchsia-100 to-indigo-100 text-5xl dark:from-fuchsia-950 dark:to-indigo-950">
                        🚀
                      </div>
                    )}

                    <div className="flex flex-col gap-3 p-6">
                      <h3 className="text-xl font-bold">{project.title}</h3>

                      {project.tech ? (
                        <div className="flex flex-wrap gap-2">
                          {project.tech
                            .split(",")
                            .map((t) => t.trim())
                            .filter(Boolean)
                            .map((t) => (
                              <span
                                key={t}
                                className="rounded-full bg-fuchsia-100 px-2.5 py-0.5 text-xs font-medium text-fuchsia-700 dark:bg-fuchsia-500/15 dark:text-fuchsia-300"
                              >
                                {t}
                              </span>
                            ))}
                        </div>
                      ) : null}

                      {project.description ? (
                        <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                          {project.description}
                        </p>
                      ) : null}

                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-auto inline-flex w-fit items-center gap-1 font-semibold text-fuchsia-600 dark:text-fuchsia-400"
                        >
                          Lihat proyek
                          <span className="transition-transform group-hover:translate-x-1">
                            →
                          </span>
                        </a>
                      ) : null}
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
