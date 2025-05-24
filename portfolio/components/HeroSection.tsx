import { Head } from "$fresh/runtime.ts";

export default function HeroSection() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles/hero.css" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
      </Head>

      <section class="hero-container">
        <div 
          class="hero-image"
          style={{ backgroundImage: "url('/images/milhouse.gif')", backgroundSize: "cover" }}
        ></div>
        <div class="hero-overlay"></div>
        <h1 class="hero-text">
          MENENDEZ GUERRA
        </h1>
      </section>
    </>
  );
}