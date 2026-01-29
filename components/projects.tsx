"use client"

import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "DotTxt",
      description: "Projet commercial de gestion et organisation de notes avec interface moderne et intuitive. Application web complète pour la prise de notes et la gestion de documents.",
      image: "/projects/dottxt.png",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Commercial"],
      github: "https://github.com/GilianC/dottxt",
      demo: undefined,
      featured: true,
    },
    {
      title: "HabitFlow",
      description: "Application de suivi d'habitudes quotidiennes avec interface élégante. Permet de créer, suivre et analyser vos habitudes pour améliorer votre productivité.",
      image: "/projects/habitflow.png",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Productivity"],
      github: "https://github.com/GilianC/habitracker",
      demo: undefined,
      featured: true,
    },
    {
      title: "NY-VR",
      description: "Expérience de réalité virtuelle immersive explorant New York. Jeu interactif en VR avec navigation dans un environnement 3D réaliste de la ville.",
      image: "/projects/ny-vr.png",
      tags: ["A-Frame", "JavaScript", "WebVR", "3D"],
      github: undefined,
      demo: undefined,
      featured: true,
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Projets Réalisés
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Mes projets personnels et commerciaux développés avec passion
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-lg border bg-card transition-all duration-300 hover:shadow-xl hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full z-10">
                      Featured
                    </div>
                  )}
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3 z-10">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Voir le code de ${project.title} sur GitHub`}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Voir la démo de ${project.title}`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium bg-muted rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="mt-12 text-center">
            <a
              href="https://github.com/GilianC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
            >
              <Github className="w-5 h-5" />
              Voir plus sur GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
