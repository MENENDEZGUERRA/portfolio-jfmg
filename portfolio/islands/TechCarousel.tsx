// islands/TechCarousel.tsx

import { useRef, useEffect } from "preact/hooks";

const technologies = [
  { name: "Deno", color: "#58d1c9" },
  { name: "Vite", color: "#bd34fe" },
  { name: "Unity", color: "#ffffff" },
  { name: "Blender", color: "#f5792a" },
  { name: "React", color: "#61dafb" },
  { name: "Deno Fresh", color: "#00cc66" },
  { name: "C#", color: "#9b4f96" },
];

export default function TechCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  // No need to clone nodes manually, just render twice in JSX

  // Calculate the width for one set of items
  const itemWidth = 8 * 16; // 8rem (w-32) in px, 1rem = 16px
  const gapWidth = 1.5 * 16; // mx-4 = 1rem left + 1rem right, so 2rem = 32px, but gap between items is 2*mx-4
  const totalItems = technologies.length * 2;
  const containerWidth = technologies.length * itemWidth * 2;

  return (
    <div class="relative w-full py-12 overflow-hidden">
      {/* Glowing gradient background */}
      <div class="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a]"></div>

      {/* Carousel container */}
      <div
        ref={containerRef}
        class="flex"
        style={{
          width: `${containerWidth}px`,
          animation: "scroll 40s linear infinite",
        }}
      >
        {/* Render two sets for seamless looping */}
        {[...technologies, ...technologies].map((tech, index) => (
          <TechCard key={index} tech={tech} />
        ))}
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .glow-hover {
            transition: filter 0.3s ease, transform 0.3s ease;
          }
          .glow-hover:hover {
            filter: drop-shadow(0 0 20px currentColor);
            transform: scale(1.15) translateY(-5px);
          }
        `}
      </style>
    </div>
  );
}

function TechCard({ tech }: { tech: { name: string; color: string } }) {
  return (
    <div
      class="carousel-item flex flex-col items-center justify-center mx-4 w-32 h-40"
      style={{ color: tech.color }}
    >
      <div class="glow-hover text-5xl mb-3">
        {getIcon(tech.name)}
      </div>
      <span class="text-sm font-medium tracking-wide">{tech.name}</span>
    </div>
  );
}

function getIcon(name: string) {
  switch (name) {
    case "Deno":
      return <div class="i-logos-deno w-12 h-12" />;
    case "Vite":
      return <div class="i-logos-vitejs w-12 h-12" />;
    case "Unity":
      return <div class="i-logos-unity w-12 h-12" />;
    case "Blender":
      return <div class="i-logos-blender w-12 h-12" />;
    case "React":
      return <div class="i-logos-react w-12 h-12" />;
    case "Deno Fresh":
      return <div class="i-logos-fresh w-12 h-12" />;
    case "C#":
      return <div class="i-logos-c-sharp w-12 h-12" />;
    default:
      return <div class="i-carbon-unknown w-12 h-12" />;
  }
}