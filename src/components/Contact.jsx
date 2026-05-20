import { motion } from "framer-motion"
import Reveal from "./Reveal"

export default function Contact() {
  return (
    <section className="relative py-32 px-6 md:px-20 bg-black overflow-hidden">
        <Reveal>
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
        <form
  action="https://formsubmit.co/pixelandsamplestudio@gmail.com"
  method="POST"
  input type="hidden" name="_captcha" value="false"
  className="mt-12 grid gap-6"
>
    

  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-purple-500 transition"
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
    className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-purple-500 transition"
  />

  <select
    name="project"
    className="bg-black border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-purple-500 transition"
  >

    <option>Project Type</option>
    <option>Cinematic Editing</option>
    <option>Wedding Film</option>
    <option>YouTube Editing</option>
    <option>Commercial Video</option>
    <option>Reels / Shorts</option>

  </select>

  <textarea
    name="message"
    rows="5"
    placeholder="Tell us about your project..."
    required
    className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-purple-500 transition"
  />

  <button
    type="submit"
    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-[1.02] transition duration-300 px-8 py-4 rounded-2xl text-lg font-semibold"
  >
    Send Message
  </button>

</form>

      </div>
      </Reveal>
    </section>
  )
}