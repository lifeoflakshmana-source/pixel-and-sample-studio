import { motion } from "framer-motion"
import Reveal from "./Reveal"
import MagneticButton from "./MagneticButton"

export default function Hero() {

  return (

    <section
      id="home"
      className="relative h-screen overflow-hidden flex items-center justify-center bg-[#050505]"
    >
      {/* Floating Particles */}

<div className="absolute inset-0 overflow-hidden">

  {Array.from({ length: 20 }).map((_, i) => {

    const size = 2 + (i % 5)
    const top = (i * 13) % 100
    const left = (i * 17) % 100
    const duration = 2 + (i % 4)

    return (

      <div
        key={i}
        className="absolute rounded-full bg-white/10 animate-pulse"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
          animationDuration: `${duration}s`,
        }}
      />

    )

  })}

</div>

      {/* Top Left Purple Glow */}
      <div className="absolute top-[-250px] left-[-250px] w-[700px] h-[700px] bg-purple-700/30 rounded-full blur-[180px]"></div>

      {/* Bottom Right Pink Glow */}
      <div className="absolute bottom-[-250px] right-[-250px] w-[700px] h-[700px] bg-pink-600/20 rounded-full blur-[180px]"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10">

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />

      </div>

      {/* Animated Center Glow */}
      <motion.div

  animate={{
    scale: [1, 1.2, 1],
    opacity: [0.25, 0.45, 0.25],
    x: [-40, 40, -40],
    y: [-20, 20, -20],
  }}

  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut",
  }}

  className="absolute w-[900px] h-[900px] bg-purple-500/20 blur-[180px] rounded-full"
/>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6">

        {/* Small Heading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="uppercase tracking-[8px] text-purple-400 text-sm mb-6"
        >
          Cinematic Video Editing
        </motion.p>

        <Reveal>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="floating-animation text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none tracking-tight"
          >

            <span className="bg-gradient-to-r from-white via-purple-300 to-pink-400 bg-clip-text text-transparent">
              Pixel And
            </span>

            <br />

            <span className="text-white">
              Sample Studio
            </span>

          </motion.h1>

          {/* Description */}
          <p className="text-gray-300 mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">

            Premium cinematic video editing, wedding films,
            reels, YouTube content, and commercial storytelling
            crafted with luxury visuals and emotional impact.

          </p>

        </Reveal>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex flex-col md:flex-row gap-4 justify-center"
        >

          <MagneticButton>
            View Projects
          </MagneticButton>

          <button className="border border-white/50 hover:border-purple-500 hover:bg-purple-500/10 transition duration-300 px-8 py-4 rounded-2xl text-lg font-semibold backdrop-blur-sm">

            Contact Us

          </button>

        </motion.div>

      </div>

    </section>

  )
}