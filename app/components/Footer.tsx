import { content } from "../content";

export default function Footer() {
  const socials = content.socials.filter((s) => s.url);

  return (
    <footer id="contact" className="py-16 px-6 border-t border-[#2d2541] text-center">
      <div className="max-w-xl mx-auto">
        <p className="font-display text-2xl font-bold text-[#f3f0f8] mb-2">{content.name}</p>
        <p className="text-[#746c87] text-sm mb-8">{content.heroSubtitle}</p>

        <div className="flex justify-center gap-5 mb-10">
          {socials.map((social) => (
            <a key={social.label} href={social.url} className="group flex flex-col items-center gap-1.5">
              <span
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg text-[#a59eb5] group-hover:text-[#a78bfa] group-hover:border-[#a78bfa44] transition-colors duration-200"
                style={{ background: "#15121e", border: "1px solid #2d2541" }}
              >
                {social.emoji}
              </span>
              <span className="text-xs text-[#746c87] group-hover:text-[#a59eb5] transition-colors">
                {social.label}
              </span>
            </a>
          ))}
        </div>

        <p className="text-xs text-[#2d2541] font-mono">
          © {new Date().getFullYear()} {content.name}. Built with <span className="text-[#ef4444]">♥</span> & Code.
        </p>
      </div>
    </footer>
  );
}
