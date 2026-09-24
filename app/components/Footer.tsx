"use client";

import { useLanguage } from "../language-context";

export default function Footer() {
  const { t } = useLanguage();
  const socials = t.socials.filter((s) => s.url);

  return (
    <footer id="contact" className="border-t border-[var(--border)] bg-[var(--card-alt)] pt-20 pb-8 mt-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-2">
            <h2 className="font-display text-2xl font-bold text-[var(--fg)] mb-4 tracking-tight">
              {t.name}
            </h2>
            <p className="text-[var(--muted-fg)] text-sm leading-relaxed mb-6 max-w-sm">
              Informatics Engineering Graduate. Berkomitmen untuk merancang dan mengembangkan solusi teknologi yang efisien, terstruktur, dan profesional.
            </p>
            <a 
              href="mailto:anandaangeli22@gmail.com" 
              className="inline-block px-6 py-3 bg-[var(--primary)] text-[var(--bg)] font-semibold text-sm rounded hover:bg-[var(--primary)]/90 transition-colors"
            >
              Hubungi via Email
            </a>
          </div>

          {/* Column 2: Sitemap */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-[var(--fg)] mb-5 text-sm uppercase tracking-widest opacity-80">
              Peta Situs
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-[var(--muted-fg)]">
              <li><a href="#about" className="hover:text-[var(--primary)] transition-colors">{t.nav.about}</a></li>
              <li><a href="#skills" className="hover:text-[var(--primary)] transition-colors">{t.nav.skills}</a></li>
              <li><a href="#experience" className="hover:text-[var(--primary)] transition-colors">{t.nav.experience}</a></li>
              <li><a href="#projects" className="hover:text-[var(--primary)] transition-colors">{t.nav.projects}</a></li>
              <li><a href="#certificates" className="hover:text-[var(--primary)] transition-colors">{t.nav.certificates}</a></li>
            </ul>
          </div>

          {/* Column 3: Social & Contact */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-[var(--fg)] mb-5 text-sm uppercase tracking-widest opacity-80">
              Koneksi
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-[var(--muted-fg)]">
              {socials.map((social) => (
                <li key={social.label}>
                  <a 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 hover:text-[var(--primary)] transition-colors"
                  >
                    <span className="opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                      {social.emoji}
                    </span>
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--border)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--muted-fg)] font-mono">
          <p>© {new Date().getFullYear()} {t.name}. Hak Cipta Dilindungi.</p>
          <p>
            {t.footer.builtWith} <span className="text-[var(--primary)]">♥</span> {t.footer.andCode}
          </p>
        </div>

      </div>
    </footer>
  );
}
