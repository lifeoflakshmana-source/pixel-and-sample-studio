import Reveal from "./Reveal"

export default function Services() {

  const services = [

    {
      title: "Cinematic Editing",
      description:
        "Luxury cinematic edits crafted with immersive pacing, transitions, color grading, and emotional storytelling.",
    },

    {
      title: "Wedding Films",
      description:
        "Emotion-driven wedding films designed to preserve timeless memories with cinematic elegance.",
    },

    {
      title: "YouTube Content",
      description:
        "High-retention YouTube edits optimized for storytelling, pacing, audience engagement, and premium visuals.",
    },

    {
      title: "Commercial Ads",
      description:
        "Modern commercial edits for brands, businesses, and products with cinematic production aesthetics.",
    },

  ]

  return (

    <section
      id="services"
      className="relative py-24 md:py-32 px-5 md:px-20 bg-gradient-to-b from-[#050505] to-[#0a0014] overflow-hidden"
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

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-24">

            <p className="uppercase tracking-[6px] text-purple-400 text-sm mb-4">

              Services

            </p>

            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-none">

              <span className="text-white">
                Premium Editing
              </span>

              <br />

              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">

                Solutions

              </span>

            </h2>

          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 gap-8">

            {services.map((service, index) => (

              <div
                key={index}
                className="group relative glass-card rounded-[40px] p-10 hover:border-purple-500/40 hover:bg-white/[0.06] transition duration-500 overflow-hidden backdrop-blur-xl"
              >

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition duration-700"></div>

                {/* Card Content */}
                <div className="relative z-10">

                  {/* Number Box */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 via-fuchsia-500 to-pink-500 shadow-[0_0_40px_rgba(168,85,247,0.35)] flex items-center justify-center text-2xl font-black mb-8">

                    0{index + 1}

                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-black mb-6 text-white">

                    {service.title}

                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed text-lg">

                    {service.description}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </Reveal>

    </section>

  )
}