import { content } from "../content";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-[#2d2541]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-[#a78bfa] text-xs tracking-widest uppercase mb-3">
            Keahlian
          </p>
          <h2 className="font-display text-4xl font-bold text-[#f3f0f8]">
            Tech <span className="italic text-[#a78bfa]">Stack</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {content.skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl p-6 group hover:border-[#a78bfa44] transition-colors duration-300"
              style={{ background: "#15121e", border: "1px solid #2d2541" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl text-[#a78bfa]">{group.icon}</span>
                <h3 className="font-semibold text-[#f3f0f8]">{group.title}</h3>
              </div>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#a59eb5]">
                    <span className="w-1 h-1 rounded-full bg-[#a78bfa] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
