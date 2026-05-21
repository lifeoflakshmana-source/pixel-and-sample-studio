import { motion } from "framer-motion"
import MagneticButton from "./MagneticButton"
import Reveal from "./Reveal"

export default function Hero() {
  return (
    <section className="relative h-screen bg-black overflow-hidden flex items-center justify-center">
        {/* Floating Purple Light */}
<div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[150px] animate-pulse"></div>

{/* Floating Pink Light */}
<div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[150px] animate-pulse"></div>

  <div className="absolute inset-0 opacity-20">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:80px_80px]" />
  </div>

      {/* Background Glow */}
      <motion.div
  animate={{
    scale: [1, 1.2, 1],
    opacity: [0.4, 0.7, 0.4],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
  }}
  className="absolute w-[700px] h-[700px] bg-purple-500/20 blur-[150px] rounded-full"
/>

      {/* Content */}
      <div className="relative z-10 text-center px-6 bg-black/40-[2px]">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="uppercase tracking-[8px] text-purple-500 text-sm mb-6"
        >
          Cinematic Video Editing
        </motion.p>

        <Reveal>

  <motion.h1
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
    className="floating-animation text-4xl sm:text-5xl md:text-8xl font-black uppercase leading-none tracking-tight"
  >

    <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
      Pixel And
    </span>

    <br />

    Sample Studio

  </motion.h1>

</Reveal>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="max-w-2xl mx-auto mt-8 text-gray-400 text-lg leading-relaxed"
        >
          Crafting cinematic visuals, emotional storytelling,
          and premium edits that transform ordinary footage
          into unforgettable experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-10 flex flex-col md:flex-row gap-4 justify-center"
        >

          <MagneticButton>
            View Projects
            </MagneticButton>

          <button className="border border-white/20 hover:border-purple-500 transition px-8 py-4 rounded-2xl text-lg font-semibold">
            Contact Us
          </button>

        </motion.div>

      </div>

    </section>
  )
}