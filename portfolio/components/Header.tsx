import { Head } from "$fresh/runtime.ts";
import DarkModeButton from "../islands/DarkModeButton.tsx";

export default function Header() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles/header.css" />
      </Head>
      
      <header class="header-container">
        <nav class="nav-links">
          <a href="/" class="nav-link">HOME</a>
          <a href="/projects" class="nav-link">PROJECTS</a>
          <a href="/about" class="nav-link">ABOUT ME</a>
        </nav>

        <div class="flex items-center">
          <button class="contact-button">
            CONTACT ME
          </button>
          <DarkModeButton />
        </div>
      </header>
    </>
  );
}