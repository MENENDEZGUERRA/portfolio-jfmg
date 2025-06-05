// islands/AboutSection.tsx
import { Head } from "$fresh/runtime.ts";

const content = [
  {
    text: [
      "Greetings! I'm a 19 year old Computer Science student living in Guatemala and I'm currently a sophomore. Since I was very young, I have been fascinated by technology and computer science, and I have developed a great passion for creating video games, models and computer programs as a hobby.",
      "In my spare time, I like to experiment with different platforms and programming languages to improve my technical skills and learn new programming techniques."
    ],
    icon: "/images/yo.svg"
  },
  {
    text: [
      "In addition, I have gained experience in the field of robotics, which has allowed me to develop skills in robot design, programming and assembly.",
      "I have also had the opportunity to write for digital media, which has allowed me to develop skills in creating digital content and writing technical articles related to the world of technology."
    ],
    icon: "/images/lego.svg"
  },
  {
    text: [
      "Despite my young age, I have managed to develop skills in various areas of technology and have participated in several independent software development and video game design projects.",
      "My goal is to continue learning and gaining experience in the field of technology, and I hope to be able to apply my skills in the working world in the near future. I am excited about the opportunities that the technology field brings me and I am confident that with dedication and effort I can achieve great things in this ever-evolving industry."
    ],
    icon: "/images/game.svg"
  }
];

export default function AboutSection() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles/about.css" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
        <script 
          src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" 
          type="module" 
        />
        <style>{`
          .image-container {
            position: relative;
            width: 300px;
            height: 300px;
            margin: 0 auto;
          }

          .lottie-container {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
          }

          .icon-image {
            position: absolute;
            width: 150px;
            height: 150px;
            top: 50%;
            left: 50%;
            z-index: 1;
            filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.3));
            transition: transform 0.3s ease;
          }

          .image-container:hover .icon-image {
            transform: translate(-50%, -50%) scale(1.1);
          }

          .about-section:nth-child(1) .icon-image {
            transform: translate(-40%, -60%);
          }
          
          .about-section:nth-child(2) .icon-image {
            transform: translate(-60%, -40%);
          }
          
          .about-section:nth-child(3) .icon-image {
            transform: translate(-45%, -55%);
          }

          .about-section:nth-child(1):hover .icon-image {
            transform: translate(-40%, -60%) scale(1.1);
          }
          
          .about-section:nth-child(2):hover .icon-image {
            transform: translate(-60%, -40%) scale(1.1);
          }
          
          .about-section:nth-child(3):hover .icon-image {
            transform: translate(-45%, -55%) scale(1.1);
          }

          .mirrored {
            transform: scaleX(-1);
          }
        `}</style>
      </Head>

      <section id="about" class="py-12 bg-gray-50">
        {content.map((section, index) => (
          <div class="about-section">
            <div class="about-text">
              {index === 0 && <h2>About Me</h2>}
              {section.text.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <div class="image-container">
              <div class={`lottie-container ${index === 1 ? 'mirrored' : ''}`}>
                <dotlottie-player
                  src="https://lottie.host/acc2d539-a4e7-4a1d-ad66-c0eb7178fcc6/fmIidWZ1f7.lottie"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <img
                src={section.icon}
                alt="Section icon"
                class="icon-image"
              />
            </div>
          </div>
        ))}
      </section>
    </>
  );
}