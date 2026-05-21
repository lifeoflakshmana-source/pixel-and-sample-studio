import { Routes, Route } from "react-router-dom"
import ProjectPage from "./pages/ProjectPage"

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
import WhatsAppButton from "./components/WhatsAppButton"
import InstagramReels from "./components/InstagramReels"
import Pricing from "./components/Pricing"
import FAQ from "./components/FAQ"
import BookingCTA from "./components/BookingCTA"

export default function App() {
  return (

  <Routes>

    {/* Homepage */}
    <Route
      path="/"
      element={
        <>
      
      <SmoothScroll />

      <ScrollProgress />
      
      <Loader />
      
      <Navbar />

      <Hero />

      <AboutFounder />

      <Showreel />

      <Services />

      <Pricing />

      <FAQ />

      <Portfolio />

      <Testimonials />

      <InstagramReels />

      <BookingCTA />

      <Contact />

      <WhatsAppButton />

      <Footer />

      </>
      }
    />

    {/* Project Page */}
    <Route
      path="/project/:id"
      element={<ProjectPage />}
    />

  </Routes>

)
}