export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Gilian CANNIER
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Développeur Web Full-Stack
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
