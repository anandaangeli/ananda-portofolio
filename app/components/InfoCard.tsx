import Icon, { type IconName } from "./Icon";

// Kartu bergaya desain referensi: kotak ikon biru muda, judul biru, keterangan kecil.
export default function InfoCard({
  icon,
  title,
  sub,
  meta,
  href,
  lines,
  text,
  logo,
  logoAlt,
  link,
}: {
  icon?: IconName;
  title: string;
  sub: string;
  meta: string;
  href?: string;
  lines?: string[];
  text?: string;
  logo?: string;
  logoAlt?: string;
  link?: { label: string; href: string };
}) {
  const body = (
    <div className="flex items-start gap-4 rounded-xl bg-[var(--card)] p-5 shadow-[0_8px_30px_rgba(11,143,208,0.10)] hover:-translate-y-0.5 transition-transform">
      {icon && (
        <span className="w-12 h-12 shrink-0 rounded-xl bg-[var(--primary)]/15 text-[var(--primary)] flex items-center justify-center">
          <Icon name={icon} />
        </span>
      )}
      <div className="min-w-0 flex-1">
        {logo && (
          <div className="mb-3 pb-3 border-b border-[var(--border)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo} alt={logoAlt ?? sub} className="h-8 w-auto max-w-[70%] object-contain object-left" />
          </div>
        )}
        <p className="text-base font-semibold text-[var(--primary)] leading-snug">{title}</p>
        <p className="text-sm text-[var(--fg)]">{sub}</p>
        {link && (
          <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--primary)] underline underline-offset-4 decoration-[var(--primary)]/40 hover:decoration-[var(--primary)]">
            {link.label} ↗
          </a>
        )}
        <p className="text-xs text-[var(--muted-fg)]">{meta}</p>
        {text && <p className="mt-3 text-sm text-[var(--muted-fg)] leading-relaxed">{text}</p>}
        {lines && (
          <ul className="mt-3 space-y-1.5 text-sm text-[var(--muted-fg)] leading-relaxed list-disc pl-4 marker:text-[var(--primary)]">
            {lines.map((l) => <li key={l}>{l}</li>)}
          </ul>
        )}
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noopener noreferrer" className="block">{body}</a> : body;
}
