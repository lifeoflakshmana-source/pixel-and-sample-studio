import { motion } from "framer-motion"
import Reveal from "./Reveal"

export default function Contact() {

  return (

    <section
      id="contact"
      className="relative py-32 px-6 md:px-20 bg-gradient-to-b from-[#050505] to-black overflow-hidden"
    >

      {/* Purple Glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-purple-600/20 blur-[150px] rounded-full"></div>

      {/* Pink Glow */}
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-pink-500/10 blur-[150px] rounded-full"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10">

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />

      </div>

      <Reveal>

        <div className="relative z-10 max-w-5xl mx-auto text-center">

          {/* Small Heading */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="uppercase tracking-[8px] text-purple-400 text-sm mb-6"
          >

            Let’s Create

          </motion.p>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black uppercase leading-none"
          >

            <span className="text-white">
              Ready To Build
            </span>

            <br />

            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
              Something Cinematic?
            </span>

          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto"
          >

            Whether it’s reels, cinematic films, YouTube content,
            or commercial storytelling — Pixel And Sample Studio
            delivers premium visual experiences.

          </motion.p>

          {/* Contact Form */}
          <form
            action="https://formsubmit.co/klakshmanadattu@gmail.com"
            method="POST"
            className="mt-14 grid gap-6"
          >

            {/* Hidden Fields */}
            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

            <input
              type="hidden"
              name="_next"
              value="https://www.pixelandsamplestudio.com"
            />

            <input
              type="hidden"
              name="_subject"
              value="New Pixel & Sample Studio Enquiry"
            />

            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              aria-label="Your Name"
              className="bg-white/[0.04] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-purple-500 focus:bg-white/[0.06] transition backdrop-blur-xl text-white placeholder:text-gray-500"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              aria-label="Your Email"
              className="bg-white/[0.04] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-purple-500 focus:bg-white/[0.06] transition backdrop-blur-xl text-white placeholder:text-gray-500"
            />

            {/* Project Type */}
            <div className="relative">

  <select
    name="project"
    required
    defaultValue=""
    className="
      w-full
      appearance-none
      bg-white/[0.04]
      border border-white/10
      rounded-2xl
      px-6
      py-5
      text-white
      outline-none
      focus:border-purple-500
      backdrop-blur-xl
      transition
      duration-300
    "
  >

    <option value="" disabled className="bg-black text-gray-400">
      Select Project Type
    </option>

    <option className="bg-[#0b0b0b] text-white">
      Cinematic Editing
    </option>

    <option className="bg-[#0b0b0b] text-white">
      Wedding Film
    </option>

    <option className="bg-[#0b0b0b] text-white">
      YouTube Editing
    </option>

    <option className="bg-[#0b0b0b] text-white">
      Commercial Video
    </option>

    <option className="bg-[#0b0b0b] text-white">
      Reels / Shorts
    </option>

  </select>

  {/* Custom Arrow */}
  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-purple-400 text-sm">

    ▼

  </div>

</div>

            {/* Message */}
            <textarea
              name="message"
              rows="6"
              placeholder="Tell us about your project..."
              required
              aria-label="Message"
              className="bg-white/[0.04] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-purple-500 focus:bg-white/[0.06] transition backdrop-blur-xl text-white placeholder:text-gray-500"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 hover:scale-[1.03] transition duration-300 px-8 py-5 rounded-2xl text-lg font-semibold shadow-[0_0_40px_rgba(168,85,247,0.35)]"
            >

              Send Message

            </button>

          </form>

        </div>

      </Reveal>

    </section>

  )
}