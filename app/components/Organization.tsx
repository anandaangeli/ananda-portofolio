import { content } from "../content";

export default function Organization() {
  return (
    <section id="organization" className="py-24 px-6 border-t border-[#2d2541]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-[#a78bfa] text-xs tracking-widest uppercase mb-3">
            Organisasi
          </p>
          <h2 className="font-display text-4xl font-bold text-[#f3f0f8]">
            Kegiatan <span className="italic text-[#a78bfa]">Mahasiswa</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {content.organizations.map((org, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden hover:border-[#a78bfa44] transition-colors duration-300 group"
              style={{ background: "#15121e", border: "1px solid #2d2541" }}
            >
              <div className="h-40 overflow-hidden bg-[#1f1a2e]">
                <img
                  src={org.img}
                  alt={org.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div
                  className="inline-block px-2 py-0.5 rounded font-mono text-xs text-[#a78bfa] mb-4"
                  style={{ background: "#a78bfa15" }}
                >
                  {org.period}
                </div>
                <h3 className="font-semibold text-[#f3f0f8] mb-1">{org.name}</h3>
                <p className="text-sm text-[#a78bfa] mb-3 font-medium">{org.role}</p>
                <p className="text-sm text-[#a59eb5] leading-relaxed">{org.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
