import About from "@/components/About"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Portfolio from "@/components/Portfolio"
import Skills from "@/components/Skills"

export default function Home() {
  return (
    <main className="mt-20 sm:mt-32 border-[1px] border-orange-500 before:content-['main'] before:text-orange-500">
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
