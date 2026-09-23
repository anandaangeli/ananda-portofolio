import { content } from "../content";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-[#2d2541]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-[#a78bfa] text-xs tracking-widest uppercase mb-3">
            Pengalaman
          </p>
          <h2 className="font-display text-4xl font-bold text-[#f3f0f8]">
            Magang & <span className="italic text-[#a78bfa]">Kerja</span>
          </h2>
        </div>

        <div className="relative">
          <div
            className="absolute left-4 md:left-8 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, #a78bfa, #a78bfa44, transparent)" }}
          />

          <div className="space-y-10 pl-12 md:pl-20">
            {content.experiences.map((exp, i) => (
              <div key={i} className="relative group">
                <div
                  className="absolute -left-8 md:-left-12 top-1 w-3 h-3 rounded-full border-2 border-[#a78bfa] group-hover:bg-[#a78bfa] transition-colors duration-200"
                  style={{ background: "#0c0a13" }}
                />

                <div
                  className="rounded-2xl p-6 group-hover:border-[#a78bfa44] transition-colors duration-300"
                  style={{ background: "#15121e", border: "1px solid #2d2541" }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-[#f3f0f8]">{exp.role}</h3>
                    <span className="font-mono text-xs text-[#a78bfa] shrink-0">{exp.period}</span>
                  </div>
                  <p className="text-sm text-[#746c87] mb-3 font-mono">{exp.company}</p>
                  <p className="text-sm text-[#a59eb5] leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
