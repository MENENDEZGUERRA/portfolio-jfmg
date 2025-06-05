import { Head } from "$fresh/runtime.ts";
import DarkModeButton from "../islands/DarkModeButton.tsx";

export default function Header() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles/header.css" />
        <style>{`html { scroll-behavior: smooth; }`}</style>
      </Head>
      
      <header class="header-container">
        <nav class="nav-links">
          <a href="#home" class="nav-link">HOME</a>
          <a href="#projects" class="nav-link">PROJECTS</a>
          <a href="#about" class="nav-link">ABOUT ME</a>
        </nav>

        <div class="flex items-center gap-4">
          <a href="#contact" class="contact-button">
            CONTACT ME
          </a>
          <a 
            href="/docs/cv.pdf" 
            download="cv.pdf"
            class="contact-button"
          >
            DOWNLOAD CV
          </a>
          <DarkModeButton />
        </div>
      </header>
    </>
  );
}