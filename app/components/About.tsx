import { content } from "../content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          <span className="bg-gradient-to-r from-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
            Tentang
          </span>{" "}
          Saya
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-center">
        {/* Kartu avatar dekoratif */}
        <Reveal>
          <div className="animate-float mx-auto flex h-56 w-56 items-center justify-center rounded-3xl bg-gradient-to-br from-pink-400 via-fuchsia-500 to-indigo-500 text-7xl shadow-xl shadow-fuchsia-500/30">
            🧑‍💻
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="space-y-4 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            {content.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
