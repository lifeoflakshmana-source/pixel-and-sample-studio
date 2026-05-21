import Reveal from "./Reveal"

export default function AboutFounder() {

  return (

    <section className="relative py-32 px-6 md:px-20 bg-[#050505] overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[100px] rounded-full"></div>

      <Reveal>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          {/* Image */}
          <div className="relative">

            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-[40px] blur-2xl"></div>

            <img
              src="/images/founder.jpg"
              alt="Founder"
              className="relative rounded-[40px] border border-white/10 object-cover w-full h-[700px]"
            />

          </div>

          {/* Content */}
          <div>

            <p className="uppercase tracking-[6px] text-purple-400 text-sm mb-6">
              Founder
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-none mb-10">

              Lakshmana
              <br />
              Dattu

            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">

              I build cinematic visual experiences that blend emotion,
              storytelling, rhythm, and modern editing aesthetics.

              Pixel And Sample Studio was created to transform
              ordinary footage into immersive cinematic experiences.

            </p>

            <p className="text-gray-500 leading-relaxed mb-10">

              From cinematic reels and wedding films to commercial edits
              and YouTube storytelling — every frame is crafted with
              precision, energy, and emotional impact.

            </p>

            <div className="flex gap-6 flex-wrap">

              <div className="border border-white/10 rounded-2xl px-6 py-4 bg-white/5">
                <h3 className="text-3xl font-black text-purple-400">
                  50+
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  Projects Edited
                </p>
              </div>

              <div className="border border-white/10 rounded-2xl px-6 py-4 bg-white/5">
                <h3 className="text-3xl font-black text-purple-400">
                  3+
                </h3>

                <p className="text-gray-400 text-sm mt-2">
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