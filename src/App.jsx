import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Showreel from "./components/Showreel"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">

      <Navbar />

      <Hero />

      <Showreel />

      <Services />

      <Portfolio />

      <Contact />

      <Footer />

    </div>
  )
}