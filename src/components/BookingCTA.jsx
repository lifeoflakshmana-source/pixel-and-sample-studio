import Reveal from "./Reveal"

export default function BookingCTA() {

  return (

    <section className="relative py-40 px-6 md:px-20 bg-gradient-to-b from-[#0a0014] to-[#050505] overflow-hidden">

      {/* Purple Glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-purple-600/20 blur-[150px] rounded-full"></div>

      {/* Pink Glow */}
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-pink-500/15 blur-[150px] rounded-full"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10">

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />

      </div>

      <Reveal>

        <div className="max-w-5xl mx-auto text-center relative z-10">

          {/* Small Heading */}
          <p className="uppercase tracking-[6px] text-purple-400 text-sm mb-6">

            Book Your Project

          </p>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-8xl font-black leading-none mb-10">

            <span className="text-white">

              Let’s Create

            </span>

            <br />

            <span className="text-white">

              Something

            </span>

            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">

              {" "}Cinematic

            </span>

          </h2>

          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto mb-14">

            Whether you need cinematic reels, luxury wedding films,
            YouTube storytelling, or premium commercial edits —
            Pixel And Sample Studio transforms ideas into immersive visual experiences.

          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">

            {/* Primary CTA */}
            <a
              href="#contact"
              className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 px-10 py-5 rounded-2xl text-lg font-semibold hover:scale-[1.04] transition duration-300 shadow-[0_0_40px_rgba(168,85,247,0.35)]"
            >

              Start Your Project

            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/917659097008"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/10 bg-white/[0.04] backdrop-blur-xl px-10 py-5 rounded-2xl text-lg font-semibold hover:border-purple-500/40 hover:bg-white/[0.06] transition duration-300"
            >

              Chat On WhatsApp

            </a>

          </div>

        </div>

      </Reveal>

    </section>
  )
}