import { content } from "../content";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-[#2d2541]">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-mono text-[#a78bfa] text-xs tracking-widest uppercase mb-3">
          Tentang & Pendidikan
        </p>
        <h2 className="font-display text-4xl font-bold text-[#f3f0f8] mb-8">
          Sedikit tentang <span className="italic text-[#a78bfa]">saya</span>
        </h2>
        <p className="text-[#a59eb5] leading-relaxed mb-12 text-lg">{content.aboutIntro}</p>

        <div
          className="rounded-2xl p-8 text-left"
          style={{ background: "#15121e", border: "1px solid #2d2541" }}
        >
          <div className="flex items-start gap-6">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
              style={{ background: "#1f1a2e" }}
            >
              🎓
            </div>
            <div>
              <p className="font-mono text-[#a78bfa] text-xs tracking-widest uppercase mb-1">
                Pendidikan
              </p>
              <h3 className="font-display text-2xl font-bold text-[#f3f0f8] mb-1">
                {content.education.institution}
              </h3>
              <p className="text-[#a59eb5] mb-4">{content.education.degree}</p>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono text-[#a78bfa]"
                style={{ background: "#a78bfa15", border: "1px solid #a78bfa33" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] animate-pulse" />
                {content.education.note}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
