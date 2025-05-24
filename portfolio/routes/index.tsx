import { useSignal } from "@preact/signals";
import Header from "../components/Header.tsx";
import HeroSection from "../components/HeroSection.tsx"


export default function Home() {
  const count = useSignal(3);
  return (
    
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <Header/>
      <hr></hr>
      <HeroSection/>
      <hr></hr>
    </div>
  );
}
