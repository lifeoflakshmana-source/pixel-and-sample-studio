import { motion } from "framer-motion"
import Reveal from "./Reveal"

export default function Showreel() {

  return (

    <section className="relative py-32 px-6 md:px-20 bg-black overflow-hidden">

      {/* Purple Glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-purple-600/20 blur-[150px] rounded-full"></div>

      {/* Pink Glow */}
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-pink-500/10 blur-[150px] rounded-full"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10">

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />

      </div>

      <Reveal>

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >

            <p className="uppercase tracking-[8px] text-purple-400 text-sm mb-4">

              Featured Reel

            </p>

            <h2 className="text-5xl md:text-7xl font-black uppercase leading-none">

              <span className="text-white">
                Showreel
              </span>

              <br />

              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">

                2026

              </span>

            </h2>

          </motion.div>

          {/* Video Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[40px] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_0_60px_rgba(168,85,247,0.12)]"
          >

            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/0 to-pink-500/0 hover:from-purple-500/10 hover:to-pink-500/10 transition duration-700 z-10 pointer-events-none"></div>

            {/* Video */}
            <video
              src="/videos/showreel.mp4"
              controls
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />

          </motion.div>

        </div>

      </Reveal>

    </section>

  )
}