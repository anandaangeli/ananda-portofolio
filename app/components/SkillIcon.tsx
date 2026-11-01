import type { IconType } from "react-icons";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiPhp, SiPostgresql } from "react-icons/si";

// Logo teknologi dengan warna resminya. Kunci dipakai di content.ts (about.mainSkills[].icons).
const icons: Record<string, { Icon: IconType; color: string }> = {
  html: { Icon: FaHtml5, color: "#E34F26" },
  css: { Icon: FaCss3Alt, color: "#1572B6" },
  javascript: { Icon: SiJavascript, color: "#F7DF1E" },
  typescript: { Icon: SiTypescript, color: "#3178C6" },
  react: { Icon: SiReact, color: "#149ECA" },
  nextjs: { Icon: SiNextdotjs, color: "var(--fg)" },
  nodejs: { Icon: SiNodedotjs, color: "#339933" },
  php: { Icon: SiPhp, color: "#777BB4" },
  postgresql: { Icon: SiPostgresql, color: "#4169E1" },
};

export default function SkillIcon({ name, size = 20 }: { name: string; size?: number }) {
  const found = icons[name];
  if (!found) return null;
  const { Icon, color } = found;
  return <Icon size={size} color={color} aria-hidden="true" />;
}
