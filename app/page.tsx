import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects, { type ProjectCard } from "./components/Projects";
import Contact from "./components/Contact";

type SanityProject = {
  _id: string;
  title?: string;
  image?: unknown;
  tech?: string;
  description?: string;
  link?: string;
};

// Ambil semua proyek dari Sanity, terbaru di atas.
const PROJECTS_QUERY = `*[_type == "project"] | order(_createdAt desc){
  _id,
  title,
  image,
  tech,
  description,
  link
}`;

export default async function Home() {
  const projects = await client.fetch<SanityProject[]>(PROJECTS_QUERY);

  // Ubah ke bentuk sederhana + URL gambar siap pakai (agar bisa dikirim ke Client Component)
  const cards: ProjectCard[] = projects.map((p) => ({
    _id: p._id,
    title: p.title,
    tech: p.tech,
    description: p.description,
    link: p.link,
    imageUrl: p.image
      ? urlFor(p.image).width(800).height(500).url()
      : undefined,
  }));

  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects projects={cards} />
        <Contact />
      </main>
    </>
  );
}
