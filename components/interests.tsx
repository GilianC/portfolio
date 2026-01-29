"use client"

import { Brain, Code, Palette, Rocket, Globe, Sparkles } from "lucide-react"

export function Interests() {
  const interests = [
    {
      title: "Intelligence Artificielle",
      description: "Exploration des LLMs, machine learning et leurs applications pratiques",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Open Source",
      description: "Contribution aux projets open source et partage de connaissances",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "UI/UX Design",
      description: "Création d'interfaces élégantes et expériences utilisateur intuitives",
      icon: Palette,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Innovation Tech",
      description: "Veille technologique et adoption de nouvelles technologies",
      icon: Rocket,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Web Performance",
      description: "Optimisation des performances et expérience utilisateur",
      icon: Sparkles,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Développement Durable",
      description: "Green IT et pratiques de développement éco-responsables",
      icon: Globe,
      color: "from-teal-500 to-green-500",
    },
  ]

  return (
    <section id="interests" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Centres d'Intérêt
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Les domaines qui me passionnent et guident mon apprentissage continu
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => {
              const Icon = interest.icon
              return (
                <div
                  key={interest.title}
                  className="group relative overflow-hidden rounded-lg border bg-card p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Gradient Background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative space-y-4">
                    {/* Icon with gradient background */}
                    <div className="inline-flex p-3 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                      <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {interest.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {interest.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 rounded-lg bg-background border text-center">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">Toujours en apprentissage.</span>
              {" "}Je consacre du temps chaque semaine à explorer de nouvelles technologies et améliorer mes compétences.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
