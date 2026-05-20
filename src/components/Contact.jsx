import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section className="relative py-32 px-6 md:px-20 bg-black overflow-hidden">

      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-500/10 blur-[140px] rounded-full"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[8px] text-purple-500 text-sm mb-6"
        >
          Let’s Create
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black uppercase leading-none"
        >
          Ready To Build
          <br />
          Something Cinematic?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Whether it’s reels, cinematic films, YouTube content,
          or commercial storytelling — Pixel And Sample Studio
          delivers premium visual experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col md:flex-row justify-center gap-4"
        >

          <a
            href="mailto:klakshmanadattu@gmail.com"
            className="bg-purple-500 hover:bg-blue-600 transition px-8 py-4 rounded-2xl text-lg font-semibold"
          >
            Email Us
          </a>

          <a
            href="https://www.instagram.com/pixelandsamplestudio/"
            className="border border-white/20 hover:border-purple-500 transition px-8 py-4 rounded-2xl text-lg font-semibold"
          >
            Instagram
          </a>

        </motion.div>

      </div>
    </section>
  )
}