import { useSignal } from "@preact/signals";
import Header from "../components/Header.tsx";
import HeroSection from "../components/HeroSection.tsx"
import Projects from "../islands/Projects.tsx"
import ContactSection from "../components/ContactSection.tsx"
import AboutSection from "../islands/AboutSection.tsx";
import TechCarousel from "../islands/TechCarousel.tsx";


export default function Home() {
  const count = useSignal(3);
  return (
    
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <Header/>
      <hr></hr>
      <HeroSection/>
      <hr></hr>
      <TechCarousel></TechCarousel>
      <hr></hr>
      <Projects/>
      <hr></hr>
      <AboutSection></AboutSection>
      <hr></hr>
      <ContactSection/>
    </div>
  );
}
