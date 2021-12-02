import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import AppShell from "../components/AppShell"

function HomePage() {
  return (
    <AppShell>
      <section>
        <StaticImage
          src="https://anztheme.com/assets/anztheme.com/code-ab55892e9e976025b2001a3301f8f07f88b2e8131a5b50142da74d96081cd7e8.jpg"
          className="img-fluid"
        />
      </section>

      <section></section>
    </AppShell>
  )
}

export default HomePage
