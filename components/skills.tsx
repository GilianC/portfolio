"use client"

import { Code2, Database, Layout, Server, Smartphone, Wrench } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Front-End",
      icon: Layout,
      skills: [
        { name: "React / Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "HTML / CSS", level: 95 },
      ],
    },
    {
      title: "Back-End",
      icon: Server,
      skills: [
        { name: "Symfony", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "API REST", level: 85 },
        { name: "PHP", level: 80 },
      ],
    },
    {
      title: "Base de données",
      icon: Database,
      skills: [
        { name: "MySQL / PostgreSQL", level: 80 },
        { name: "MongoDB", level: 70 },
      ],
    },
    {
      title: "Outils & DevOps",
      icon: Wrench,
      skills: [
        { name: "Git / GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "CI/CD", level: 70 },
        { name: "Linux", level: 75 },
      ],
    },
  ]

  const languages = [
    { name: "JavaScript", icon: Code2 },
    { name: "TypeScript", icon: Code2 },
    { name: "PHP", icon: Code2 },
    { name: "SQL", icon: Database },
  ]

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Compétences Techniques
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Une expertise variée pour créer des solutions complètes et performantes
          </p>

          {/* Skill Categories Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon
              return (
                <div
                  key={category.title}
                  className="group p-6 rounded-lg bg-background border hover:shadow-lg transition-all duration-300"
                  style={{
                    animationDelay: `${categoryIndex * 100}ms`,
                  }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: `${skill.level}%`,
                              animationDelay: `${categoryIndex * 100}ms`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Languages Quick View */}
          <div className="p-6 rounded-lg bg-background border">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-primary" />
              Langages de programmation
            </h3>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang) => {
                const Icon = lang.icon
                return (
                  <div
                    key={lang.name}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{lang.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
