export function Skills() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Symfony",
  ]

  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
          Compétences
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="p-4 bg-background rounded-lg text-center font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
