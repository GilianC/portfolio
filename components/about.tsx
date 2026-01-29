"use client"

import { Award, Briefcase, GraduationCap, MapPin } from "lucide-react"

export function About() {
  const stats = [
    { icon: GraduationCap, label: "Formation", value: "Bac+2" },
    { icon: Briefcase, label: "Projets", value: "15+" },
    { icon: Award, label: "Technologies", value: "10+" },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            À propos de moi
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Bio */}
            <div className="space-y-6">
              <div className="prose prose-neutral dark:prose-invert">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Développeur web passionné avec une forte expertise en développement full-stack.
                  Je crée des applications web modernes, performantes et accessibles.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Spécialisé dans l'écosystème <span className="text-foreground font-semibold">React/Next.js</span> pour 
                  le front-end et <span className="text-foreground font-semibold">Symfony/Node.js</span> pour 
                  le back-end. J'aime résoudre des problèmes complexes et apprendre de nouvelles technologies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Mon approche combine design élégant, code propre et méthodologies agiles pour 
                  livrer des solutions qui dépassent les attentes.
                </p>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>France</span>
              </div>
            </div>

            {/* Right Column - Stats Cards */}
            <div className="space-y-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={stat.label}
                    className="group relative overflow-hidden rounded-lg border bg-card p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10 transition-transform duration-300 group-hover:scale-150" />
                    
                    <div className="relative flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                    </div>
                  </div>
                )
              })}

              {/* CTA Card */}
              <div className="mt-8 p-6 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                <p className="text-sm text-muted-foreground mb-3">
                  Actuellement disponible pour de nouvelles opportunités
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Me contacter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
