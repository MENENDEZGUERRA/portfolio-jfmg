import { Head } from "$fresh/runtime.ts";

const content = [
  {
    text: [
      "Greetings! I'm a 19 year old Computer Science student living in Guatemala and I'm currently a sophomore. Since I was very young, I have been fascinated by technology and computer science, and I have developed a great passion for creating video games, models and computer programs as a hobby.",
      "In my spare time, I like to experiment with different platforms and programming languages to improve my technical skills and learn new programming techniques."
    ],
    image: "https://source.unsplash.com/random/800x600?coding"
  },
  {
    text: [
      "In addition, I have gained experience in the field of robotics, which has allowed me to develop skills in robot design, programming and assembly.",
      "I have also had the opportunity to write for digital media, which has allowed me to develop skills in creating digital content and writing technical articles related to the world of technology."
    ],
    image: "https://source.unsplash.com/random/800x600?robotics"
  },
  {
    text: [
      "Despite my young age, I have managed to develop skills in various areas of technology and have participated in several independent software development and video game design projects.",
      "My goal is to continue learning and gaining experience in the field of technology, and I hope to be able to apply my skills in the working world in the near future. I am excited about the opportunities that the technology field brings me and I am confident that with dedication and effort I can achieve great things in this ever-evolving industry."
    ],
    image: "https://source.unsplash.com/random/800x600?future"
  }
];

export default function AboutSection() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles/about.css" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
      </Head>

      <section class="py-12 bg-gray-50">
        {content.map((section, index) => (
          <div class="about-section">
            <div class="about-text">
              {index === 0 && <h2>About Me</h2>}
              {section.text.map(paragraph => (
                <p>{paragraph}</p>
              ))}
            </div>
            <img
              src={section.image}
              alt="About section"
              class="about-image"
            />
          </div>
        ))}
      </section>
    </>
  );
}