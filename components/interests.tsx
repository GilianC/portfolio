export function Interests() {
  const interests = [
    "Développement web",
    "Technologies open source",
    "Intelligence artificielle",
    "Design UI/UX",
  ]

  return (
    <section id="interests" className="py-20 bg-muted">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
          Centres d'intérêt
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {interests.map((interest) => (
            <div
              key={interest}
              className="p-4 bg-background rounded-lg font-medium"
            >
              {interest}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
