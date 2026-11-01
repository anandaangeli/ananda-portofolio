import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { content } from "./content";
import { seo, siteUrl } from "./seo";

const t = content.id;

// Data terstruktur (schema.org) agar mesin pencari mengenali ini sebagai profil seorang developer.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: `${seo.name} — Portofolio`,
      inLanguage: "id-ID",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: t.name,
      url: siteUrl,
      image: `${siteUrl}${t.hero.photo}`,
      jobTitle: t.hero.role,
      description: seo.description,
      alumniOf: { "@type": "CollegeOrUniversity", name: t.education.institution },
      knowsAbout: t.skillGroups.flatMap((g) => g.items),
      sameAs: t.socials.filter((s) => s.group === "sosial").map((s) => s.url),
    },
  ],
};

// Urutan section: Intro, About, Pendidikan, Pengalaman, Sertifikat, Project, Contact
export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Certificates />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
