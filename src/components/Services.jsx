import { motion } from "framer-motion"

const services = [
  "Cinematic Editing",
  "YouTube Content",
  "Reels & Shorts",
  "Wedding Films",
  "Commercial Videos",
  "Motion Graphics",
]

export default function Services() {
  return (
    <section className="relative py-32 px-6 md:px-20 bg-black overflow-hidden">

      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[8px] text-blue-500 text-sm mb-4">
            Services
          </p>

          <h2 className="text-5xl md:text-7xl font-black uppercase leading-none">
            What We
            <br />
            Create
          </h2>

        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group relative bg-white/5 border border-white/10 rounded-[32px] p-10 overflow-hidden backdrop-blur-xl"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-blue-500/5"></div>

              {/* Number */}
              <div className="text-6xl font-black text-blue-500/40 mb-8">
                0{index + 1}
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold mb-6">
                {service}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                Premium cinematic editing crafted with emotional storytelling,
                modern pacing, and high-end visual presentation.
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}