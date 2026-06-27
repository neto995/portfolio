import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <Footer />
    </main>
  );
}
