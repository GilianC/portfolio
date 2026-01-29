export function Projects() {
  const projects = [
    {
      title: "Projet 1",
      description: "Description du projet 1",
    },
    {
      title: "Projet 2",
      description: "Description du projet 2",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
          Projets
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 bg-muted rounded-lg space-y-2"
            >
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-muted-foreground">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
