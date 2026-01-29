import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { SmoothScroll } from "@/components/smooth-scroll"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gilian CANNIER - Développeur Web Full-Stack",
  description:
    "Portfolio de Gilian CANNIER, développeur web full-stack passionné. Spécialisé en React, Next.js, Symfony et technologies modernes. Disponible pour de nouveaux projets.",
  keywords: [
    "Gilian CANNIER",
    "développeur web",
    "full-stack",
    "React",
    "Next.js",
    "Symfony",
    "TypeScript",
    "portfolio",
  ],
  authors: [{ name: "Gilian CANNIER" }],
  creator: "Gilian CANNIER",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Gilian CANNIER - Développeur Web Full-Stack",
    description: "Portfolio de Gilian CANNIER, développeur web full-stack passionné.",
    siteName: "Gilian CANNIER Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gilian CANNIER - Développeur Web Full-Stack",
    description: "Portfolio de Gilian CANNIER, développeur web full-stack passionné.",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          <SmoothScroll />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
