import { Routes, Route, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

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
import Marquee from "./components/Marquee"
import GrainOverlay from "./components/GrainOverlay"
import CustomCursor from "./components/CustomCursor"

export default function App() {

  const location = useLocation()

  return (

    <>

      <SmoothScroll />

      <Loader />

      <GrainOverlay />

      <CustomCursor />

      <ScrollProgress />

      <AnimatePresence mode="wait">

        <Routes
          location={location}
          key={location.pathname}
        >

          {/* Homepage */}
          <Route
            path="/"
            element={

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >

                <Navbar />

                <Hero />

                <Marquee />

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

              </motion.div>

            }
          />

          {/* Project Page */}
          <Route
            path="/project/:id"
            element={<ProjectPage />}
          />

        </Routes>

      </AnimatePresence>

    </>

  )
}