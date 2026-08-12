import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MissionVision from "./components/MissionVision";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <MissionVision />
        <Services />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <Whatsapp />
    </>
  );
}