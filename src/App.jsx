import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Showreel from "./components/Showreel"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Loader from "./components/Loader"
import CustomCursor from "./components/CustomCursor"
import SmoothScroll from "./components/SmoothScroll"
import GrainOverlay from "./components/GrainOverlay"
import ScrollProgress from "./components/ScrollProgress"
import MouseGlowTrail from "./components/MouseGlowTrail"


export default function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      
      <SmoothScroll />

      <MouseGlowTrail />

      <ScrollProgress />
      
      <GrainOverlay />
      
      <CustomCursor />
      
      <Loader />
      
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