import { StaticImage } from "gatsby-plugin-image"
import AppShell from "../components/AppShell"

function HomePage() {
  return (
    <AppShell>
      <main className="container max-w-6xl">
        <section className="relative">
          <StaticImage
            src="https://anztheme.com/assets/anztheme.com/code-ab55892e9e976025b2001a3301f8f07f88b2e8131a5b50142da74d96081cd7e8.jpg"
            alt="Hero Image"
            className="h-[60vh] max-h-60 w-full md:max-h-80 xl:max-h-[25rem]"
          />

          <div className="absolute right-4 -bottom-12 flex h-16 w-16 items-center justify-center rounded-full bg-[#0e6fd7] p-12 xl:right-8 xl:-bottom-24 xl:h-44 xl:w-44">
            <p className="font-montserrat rotate-[20deg] text-center text-xs font-bold text-white xl:text-2xl">
              Welcome, <br /> ka-CpE!
            </p>
          </div>
        </section>
      </main>
    </AppShell>
  )
}

export default HomePage
