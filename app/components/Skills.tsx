import { content } from "../content";
import Reveal from "./Reveal";

// Warna-warni bergiliran untuk tiap pil keahlian
const colors = [
  "from-pink-500 to-rose-500",
  "from-fuchsia-500 to-purple-500",
  "from-indigo-500 to-blue-500",
  "from-sky-500 to-cyan-500",
  "from-emerald-500 to-teal-500",
  "from-amber-500 to-orange-500",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24"
    >
      <Reveal>
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          <span className="bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent">
            Keahlian
          </span>{" "}
          & Teknologi
        </h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          Alat dan bahasa yang biasa saya pakai untuk membangun sesuatu.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <ul className="mt-10 flex flex-wrap gap-3">
          {content.skills.map((skill, i) => (
            <li
              key={skill}
              className={`cursor-default rounded-full bg-gradient-to-r ${
                colors[i % colors.length]
              } px-5 py-2.5 font-semibold text-white shadow-md transition-transform hover:-translate-y-1 hover:scale-105`}
            >
              {skill}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
