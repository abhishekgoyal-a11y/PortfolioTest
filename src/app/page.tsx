import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { CareerSnapshot } from "@/components/sections/CareerSnapshot";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { AIQASection } from "@/components/sections/AIQASection";
import { HowIWork } from "@/components/sections/HowIWork";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <CareerSnapshot />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <AIQASection />
        <HowIWork />
        <GitHubSection />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
