import { content } from "../content";

export default function Hero() {
  const nameWords = content.name.split(" ");

  return (
    <section className="min-h-screen flex items-center pt-24 pb-12 px-6 md:pt-16" id="home">
      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:gap-12 items-center py-10 md:py-20">
        {/* Teks */}
        <div>
          <p className="font-mono text-[#a78bfa] text-sm tracking-widest mb-4 uppercase">
            Halo, saya
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-[1.1] text-[#f3f0f8] mb-4">
            {nameWords.map((word, i) => (
              <span key={i} className={i === 1 ? "italic text-[#a78bfa]" : undefined}>
                {word}{" "}
              </span>
            ))}
          </h1>
          <p className="text-[#a59eb5] text-lg font-medium mb-4 mt-6">
            {content.heroSubtitle}
          </p>
          <p className="text-[#746c87] leading-relaxed max-w-md mb-8">
            {content.heroDescription}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="px-6 py-3 bg-[#a78bfa] text-[#15121e] font-semibold rounded-full hover:bg-[#c084fc] transition-colors duration-200 text-sm"
            >
              Unduh CV
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-[#2d2541] text-[#f3f0f8] font-semibold rounded-full hover:border-[#a78bfa] hover:text-[#a78bfa] transition-colors duration-200 text-sm w-full sm:w-auto text-center"
            >
              Lihat Proyek
            </a>
          </div>
        </div>

        {/* Foto */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div
              className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden"
              style={{ border: "1px solid #2d2541" }}
            >
              <img
                src={content.heroPhoto}
                alt={content.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl -z-10"
              style={{ border: "1px solid #a78bfa33" }}
            />
            <div
              className="absolute -top-3 -left-3 w-12 h-12 rounded-full flex items-center justify-center font-mono text-xs text-[#a78bfa]"
              style={{ background: "#15121e", border: "1px solid #2d2541" }}
            >
              IT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
