// Sumber tunggal URL situs & teks SEO. Dipakai layout, robots, sitemap, dan JSON-LD.
// Isi NEXT_PUBLIC_SITE_URL di Vercel (mis. https://namadomain.com) bila memakai domain sendiri.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "https://anandaangeli-portofolio.vercel.app")
).replace(/\/$/, "");

export const seo = {
  name: "Ananda Gracia Angeli",
  title: "Ananda Gracia Angeli — Pengembang Web Fullstack | Siap Magang",
  description:
    "Portofolio Ananda Gracia Angeli, lulusan Teknik Informatika & pengembang web fullstack yang siap magang. Proyek: SIMAPALA, React, Node.js, Laravel, PostgreSQL.",
  keywords: [
    "Ananda Gracia Angeli",
    "portofolio web developer",
    "pengembang web",
    "pengembang web fullstack",
    "fresh graduate teknik informatika",
    "magang web developer",
    "magang developer",
    "pengembang aplikasi Android",
    "MagangHub Kemnaker",
    "fullstack developer",
    "frontend developer",
    "backend developer",
    "React",
    "Next.js",
    "Node.js",
    "Laravel",
    "PostgreSQL",
    "freelance web developer Indonesia",
  ],
};
