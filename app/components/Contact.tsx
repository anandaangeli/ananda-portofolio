import { content } from "../content";
import Reveal from "./Reveal";

export default function Contact() {
  const socials = content.socials.filter((s) => s.url);

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden px-6 py-28"
    >
      {/* Latar gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-pink-500/10 via-fuchsia-500/10 to-indigo-500/10" />

      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Mari{" "}
            <span className="bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
              terhubung
            </span>
            !
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
            Punya proyek, pertanyaan, atau sekadar ingin menyapa? Jangan ragu
            menghubungi saya lewat salah satu kanal di bawah.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target={social.url.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-fuchsia-300/60 bg-white/70 px-6 py-3 font-semibold text-fuchsia-700 shadow-sm backdrop-blur transition-transform hover:-translate-y-1 hover:scale-105 dark:bg-white/5 dark:text-fuchsia-300"
              >
                <span className="text-xl">{social.emoji}</span>
                {social.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <footer className="mt-20 text-center text-sm text-zinc-500 dark:text-zinc-400">
        © {new Date().getFullYear()} {content.name}. Dibuat dengan Next.js &
        Sanity. ✨
      </footer>
    </section>
  );
}
