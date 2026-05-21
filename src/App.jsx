import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Showreel from "./components/Showreel"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Loader from "./components/Loader"
import SmoothScroll from "./components/SmoothScroll"
import ScrollProgress from "./components/ScrollProgress"
import AboutFounder from "./components/AboutFounder"
import Testimonials from "./components/Testimonials"


export default function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      
      <SmoothScroll />

      <ScrollProgress />
      
      <Loader />
      
      <Navbar />

      <Hero />

      <AboutFounder />

      <Showreel />

      <Services />

      <Portfolio />

      <Testimonials />

      <Contact />

      <Footer />

    </div>
  )
}