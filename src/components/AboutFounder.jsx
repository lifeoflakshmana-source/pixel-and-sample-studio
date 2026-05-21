import Reveal from "./Reveal"

export default function AboutFounder() {

  return (

    <section
      id="about"
      className="relative py-24 md:py-32 px-5 md:px-20 bg-gradient-to-b from-[#050505] to-[#0a0014] overflow-hidden"
    >

      {/* Purple Glow */}
      <div className="absolute top-[-150px] right-[-150px] w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full"></div>

      {/* Pink Glow */}
      <div className="absolute bottom-[-150px] left-[-150px] w-[400px] h-[400px] bg-pink-500/10 blur-[120px] rounded-full"></div>

      <Reveal>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          {/* Image Side */}
          <div className="relative group">

            {/* Outer Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-fuchsia-500/10 to-pink-500/20 rounded-[40px] blur-3xl"></div>

            {/* Image */}
            <img
              src="/images/founder.jpg"
              alt="Lakshmana Dattu Founder"
              className="relative rounded-[40px] border border-white/10 object-cover w-full h-[700px] bg-white/[0.03] backdrop-blur-xl group-hover:scale-[1.02] transition duration-700"
            />

          </div>

          {/* Content */}
          <div>

            {/* Small Heading */}
            <p className="uppercase tracking-[6px] text-purple-400 text-sm mb-6">

              Founder

            </p>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-none mb-10">

              <span className="bg-gradient-to-r from-white via-purple-300 to-pink-400 bg-clip-text text-transparent">

                Lakshmana

              </span>

              <br />

              <span className="text-white">

                Dattu

              </span>

            </h2>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed mb-8">

              I build cinematic visual experiences that blend emotion,
              storytelling, rhythm, and modern editing aesthetics.

              Pixel And Sample Studio was created to transform
              ordinary footage into immersive cinematic experiences.

            </p>

            {/* Second Description */}
            <p className="text-gray-500 leading-relaxed mb-12">

              From cinematic reels and wedding films to commercial edits
              and YouTube storytelling — every frame is crafted with
              precision, energy, and emotional impact.

            </p>

            {/* Stats */}
            <div className="flex gap-6 flex-wrap">

              {/* Projects */}
              <div className="border border-white/10 rounded-3xl px-8 py-6 bg-white/[0.04] backdrop-blur-xl hover:border-purple-500/40 hover:bg-white/[0.06] transition duration-500">

                <h3 className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">

                  50+

                </h3>

                <p className="text-gray-400 text-sm mt-2 tracking-wide">

                  Projects Edited

                </p>

              </div>

              {/* Experience */}
              <div className="border border-white/10 rounded-3xl px-8 py-6 bg-white/[0.04] backdrop-blur-xl hover:border-purple-500/40 hover:bg-white/[0.06] transition duration-500">

                <h3 className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">

                  3+

                </h3>

                <p className="text-gray-400 text-sm mt-2 tracking-wide">

                  Years Experience

                </p>

              </div>

            </div>

          </div>

        </div>

      </Reveal>

    </section>

  )
}