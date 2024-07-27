import { About } from "@/components/about";
import Contact from "@/components/contact";
import { HeroSection } from "@/components/hero-sections";
import Project from "@/components/project";

HeroSection
export default function Home() {
  return (
    <main className="bg-custom-100 overflow-hidden flex items-center justify-between mx-auto sm:px-6 flex-col">
     <HeroSection />  
     <About />
     <Project />
     <Contact />
    </main>
  );
}
