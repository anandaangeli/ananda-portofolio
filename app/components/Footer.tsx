"use client";

import { useLanguage } from "../language-context";
import Icon, { type IconName } from "./Icon";

export default function Footer() {
  const { t } = useLanguage();
  const [first, , last] = t.name.split(" ");
  const contacts = t.socials.filter((s) => s.group === "kontak" && s.url);
  const socials = t.socials.filter((s) => s.group === "sosial" && s.url);

  const links = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#pendidikan", label: t.nav.pendidikan },
    { href: "#experience", label: t.nav.experience },
    { href: "#sertifikat", label: t.nav.sertifikat },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contactLink },
  ];

  return (
    <footer className="bg-[#0a1f33] text-white/75">
      <div className="max-w-5xl mx-auto px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1.3fr] gap-10 md:gap-12">
          {/* Merek */}
          <div>
            <a href="#home" className="inline-flex text-[13px] font-bold tracking-wider">
              <span className="bg-[#0b8fd0] text-white px-2 py-1">{first.toUpperCase()}</span>
              <span className="bg-white/15 text-[#7cc9f0] px-2 py-1">{last?.toUpperCase()}</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">{t.footer.tagline}</p>
            <div className="mt-5 flex gap-2">
              {socials.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#0b8fd0] transition-colors">
                  <Icon name={s.icon as IconName} size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">{t.footer.navTitle}</h3>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-6 gap-y-2.5 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-white hover:translate-x-0.5 inline-block transition-all">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">{t.footer.contactTitle}</h3>
            <ul className="space-y-3 text-sm">
              {contacts.map((s) => (
                <li key={s.label}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 hover:text-white transition-colors">
                    <span className="mt-0.5 text-[#7cc9f0] shrink-0"><Icon name={s.icon as IconName} size={16} /></span>
                    <span className="break-words min-w-0">{s.display}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/55">
          <p>© {new Date().getFullYear()} {t.name}. Hak Cipta Dilindungi.</p>
          <p>{t.footer.builtWith} <span className="text-[#7cc9f0]">♥</span> {t.footer.andCode}</p>
          <a href="#home" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-white/80 hover:bg-white/10 hover:text-white transition-colors">
            ↑ {t.footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
