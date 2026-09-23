import { content } from "../content";

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 px-6 border-t border-[#2d2541]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-[#a78bfa] text-xs tracking-widest uppercase mb-3">
            Sertifikat
          </p>
          <h2 className="font-display text-4xl font-bold text-[#f3f0f8]">
            Pencapaian & <span className="italic text-[#a78bfa]">Kredensial</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {content.certificates.map((cert, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{
                background: cert.placeholder ? "#0f0c18" : "#15121e",
                border: `1px solid ${cert.placeholder ? "#2d2541" : cert.color + "44"}`,
                opacity: cert.placeholder ? 0.5 : 1,
              }}
            >
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10"
                style={{ background: cert.color }}
              />
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-4"
                style={{ background: cert.color + "20" }}
              >
                🏅
              </div>
              <p className="font-mono text-xs mb-2" style={{ color: cert.color }}>
                {cert.year}
              </p>
              <h3 className="font-semibold text-[#f3f0f8] mb-1">{cert.title}</h3>
              <p className="text-xs text-[#746c87]">{cert.issuer}</p>
              {cert.placeholder && (
                <p className="text-xs text-[#2d2541] mt-2 font-mono">— placeholder —</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
