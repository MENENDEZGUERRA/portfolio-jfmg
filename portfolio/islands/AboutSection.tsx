// islands/AboutSection.tsx
import { Head } from "$fresh/runtime.ts";

const content = [
  {
    text: [
      "Greetings! I'm a 19 year old Computer Science student living in Guatemala and I'm currently a sophomore. Since I was very young, I have been fascinated by technology and computer science, and I have developed a great passion for creating video games, models and computer programs as a hobby.",
      "In my spare time, I like to experiment with different platforms and programming languages to improve my technical skills and learn new programming techniques."
    ],
    blob: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#074a07" d="M41.5,-59.5C49.8,-51.1,49.7,-33.6,50.7,-19.2C51.7,-4.7,53.8,6.7,52.4,18.9C51.1,31.1,46.3,44.1,36.9,52.9C27.5,61.8,13.7,66.5,-2.5,69.6C-18.7,72.7,-37.4,74.2,-52.5,67.1C-67.7,60,-79.4,44.3,-85.8,26.2C-92.3,8.1,-93.5,-12.4,-87.1,-29.2C-80.7,-46,-66.6,-59.2,-51.3,-64.5C-36.1,-69.7,-19.5,-67.1,-2.3,-64.1C14.9,-61.1,29.7,-57.7,41.5,-59.5Z" transform="translate(100 100)" />
      </svg>
    ),
    icon: "/images/yo.svg"
  },
  {
    text: [
      "In addition, I have gained experience in the field of robotics, which has allowed me to develop skills in robot design, programming and assembly.",
      "I have also had the opportunity to write for digital media, which has allowed me to develop skills in creating digital content and writing technical articles related to the world of technology."
    ],
    blob: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#074a07" d="M44.7,-61.6C56.4,-54.3,62.5,-38.4,67.6,-22.2C72.7,-6,76.7,10.6,71.3,22.5C65.9,34.4,51.1,41.7,37.1,49.9C23.1,58.1,9.9,67.3,-6.1,74.6C-22.1,81.9,-44.3,87.4,-58.3,79.1C-72.3,70.7,-78.2,48.5,-81.8,27.5C-85.4,6.6,-86.7,-13.1,-79.2,-29.3C-71.7,-45.5,-55.3,-58.1,-38.5,-63.9C-21.8,-69.8,-4.6,-68.8,11.3,-65.7C27.2,-62.6,41.3,-57.3,44.7,-61.6Z" transform="translate(100 100)" />
      </svg>
    ),
    icon: "/images/lego.svg"
  },
  {
    text: [
      "Despite my young age, I have managed to develop skills in various areas of technology and have participated in several independent software development and video game design projects.",
      "My goal is to continue learning and gaining experience in the field of technology, and I hope to be able to apply my skills in the working world in the near future. I am excited about the opportunities that the technology field brings me and I am confident that with dedication and effort I can achieve great things in this ever-evolving industry."
    ],
    blob: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#074a07" d="M42.9,-59.7C55.1,-53.9,63.6,-40.7,69.2,-25.8C74.8,-10.9,77.6,5.7,73.3,19.3C69,32.9,57.7,43.6,45.1,53.5C32.5,63.4,18.7,72.6,2.9,69.1C-12.8,65.7,-28.5,49.6,-41.4,36.2C-54.3,22.8,-64.4,12.1,-67.9,-1.2C-71.4,-14.5,-68.4,-28.9,-59.2,-38.3C-50.1,-47.6,-34.7,-51.9,-20.3,-56.3C-5.9,-60.7,7.6,-65.1,22.1,-65.5C36.6,-65.8,52.1,-62.1,59.7,-54.2C67.3,-46.4,67,-34.5,65.6,-23.3C64.2,-12.1,61.7,-1.6,59.5,9.6C57.3,20.8,55.4,32.6,49.6,41.1C43.8,49.6,34.1,54.8,23.4,59.2C12.7,63.6,1.1,67.2,-12.3,67.1C-25.7,67,-39.9,63.1,-46.7,54.1C-53.5,45.1,-52.8,31,-54.3,18.2C-55.8,5.5,-59.4,-6,-58.2,-16.8C-57,-27.6,-51,-37.8,-43.1,-48.5C-35.3,-59.2,-25.6,-70.5,-12.6,-76.2C0.3,-81.9,16.5,-82.1,30.7,-77.8C44.9,-73.5,57.1,-64.7,42.9,-59.7Z" transform="translate(100 100)" />
      </svg>
    ),
    icon: "/images/game.svg"
  }
];

export default function AboutSection() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles/about.css" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
        <style>{`
          .image-container {
            position: relative;
            width: 300px;
            height: 300px;
            margin: 0 auto;
          }

          .blob-svg {
            position: absolute;
            width: 100%;
            height: 100%;
            filter: url(#wave);
          }

          .icon-image {
            position: absolute;
            width: 150px;
            height: 150px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
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
        `}</style>
      </Head>

      {/* SVG Filter Definition */}
      <svg style="display: none;">
        <filter id="wave">
          <feTurbulence type="turbulence" baseFrequency="0.01 0.02" numOctaves="3" result="turbulence">
            <animate attributeName="baseFrequency" dur="8s" values="0.01 0.02; 0.02 0.01; 0.01 0.02" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="15" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

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
              <div class="blob-svg">
                {section.blob}
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