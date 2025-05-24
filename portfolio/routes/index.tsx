import { useSignal } from "@preact/signals";
import Header from "../components/Header.tsx";
import HeroSection from "../components/HeroSection.tsx"
import Projects from "../islands/Projects.tsx"
import AboutSection from "../components/AboutSection.tsx"


export default function Home() {
  const count = useSignal(3);
  return (
    
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <Header/>
      <hr></hr>
      <HeroSection/>
      <hr></hr>
      <Projects/>
      <hr></hr>
      <AboutSection/>
      <hr></hr>
    </div>
  );
}
