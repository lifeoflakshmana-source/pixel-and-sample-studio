import { motion } from "framer-motion"

export default function Showreel() {
  return (
    <section className="relative py-32 px-6 md:px-20 bg-black overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[140px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >

          <p className="uppercase tracking-[8px] text-blue-500 text-sm mb-4">
            Featured Reel
          </p>

          <h2 className="text-5xl md:text-7xl font-black uppercase leading-none">
            Showreel
            <br />
            2026
          </h2>

        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-2xl"
        >

          <video
            controls
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
          </video>

        </motion.div>

      </div>

    </section>
  )
}