import { useState } from "preact/hooks";
import { Head } from "$fresh/runtime.ts";

// Mock data
const projects = [
  {
    id: 1,
    name: "E-commerce Platform",
    description: "Plataforma completa de comercio electrónico con sistema de pagos integrado y panel de administración.",
    image: "/images/proyectos/tnd.png",
    repoUrl: "https://github.com/MENENDEZGUERRA/proyecto-ecommerce",
    demoUrl: "https://el-bazar-de-ulthar.deno.dev/productsPage"
  },
  {
    id: 2,
    name: "Libreria Online",
    description: "Aplicación de gestión de libros con sincronización en tiempo real y multiplataforma.",
    image: "/images/proyectos/lib.png",
    repoUrl: "https://github.com/MENENDEZGUERRA/library?tab=readme-ov-file#",
    demoUrl: "https://menendezguerra.github.io/library/"
  },
  {
    id: 3,
    name: "Calculadora Online",
    description: "Ejercicio Básico de una calculadora online con funcionalidades de suma, resta, multiplicación y división.",
    image: "/images/proyectos/calc.png",
    repoUrl: "menendezguerra.github.io/calculator-webpage/",
    demoUrl: "https://menendezguerra.github.io/calculator-webpage/"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles/projects.css" />
      </Head>

      <section id="projects" class="projects-container">
        {/* Listado lateral */}
        <div class="projects-list">
          {projects.map(project => (
            <div 
              class={`project-item ${selectedProject.id === project.id ? 'selected' : ''}`}
              onClick={() => setSelectedProject(project)}
            >
              <h3 class="text-xl font-semibold mb-2">{project.name}</h3>
            </div>
          ))}
        </div>

        {/* Detalles de los proyectos */}
        <div class="project-details">
          <img 
            src={selectedProject.image} 
            alt={selectedProject.name} 
            class="project-image"
          />
          <p class="text-lg mb-4">{selectedProject.description}</p>
          
          <div class="project-buttons">
            <a 
              href={selectedProject.repoUrl} 
              class="contact-button"
              target="_blank"
            >
              Ver Repositorio
            </a>
            <a 
              href={selectedProject.demoUrl} 
              class="contact-button bg-green-600 hover:bg-green-700"
              target="_blank"
            >
              Ver Demo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}