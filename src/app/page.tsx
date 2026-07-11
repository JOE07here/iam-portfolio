import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RecruiterSnapshot from "@/components/RecruiterSnapshot";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import EducationLanguages from "@/components/EducationLanguages";
import Research from "@/components/Research";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <main id="main">
        <Hero />
        <RecruiterSnapshot />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <EducationLanguages />
        <Research />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
