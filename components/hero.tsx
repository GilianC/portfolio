"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "Développeur Web Full-Stack"
  
  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 100)
    
    return () => clearInterval(interval)
  }, [])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-8 text-center">
          {/* Avatar with gradient ring */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-accent p-1">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-4xl md:text-5xl font-bold">
                GC
              </div>
            </div>
          </div>

          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Gilian <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">CANNIER</span>
            </h1>
            
            <div className="h-8 md:h-10">
              <p className="text-xl md:text-2xl text-muted-foreground font-mono">
                {text}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              Passionné par la création d'expériences web modernes et performantes.
              Spécialisé en React, Next.js, Symfony et technologies cloud.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <a
              href="https://github.com/GilianC"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-muted hover:bg-primary transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6 group-hover:text-primary-foreground transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-muted hover:bg-primary transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6 group-hover:text-primary-foreground transition-colors" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="group p-3 rounded-full bg-muted hover:bg-primary transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6 group-hover:text-primary-foreground transition-colors" />
            </a>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={scrollToAbout}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:text-primary transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
