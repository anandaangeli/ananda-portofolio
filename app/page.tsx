import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Organization from "./components/Organization";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Organization />
        <Projects />
        <Certificates />
      </main>
      <Footer />
    </div>
  );
}
