import Reveal from "./Reveal"

export default function Testimonials() {

  const testimonials = [

    {
      name: "Ajay Kumar",
      role: "Wedding Client",
      text: "Pixel And Sample Studio transformed our wedding footage into an emotional cinematic experience. Every transition and music sync felt magical.",
    },

    {
      name: "Rahul Varma",
      role: "YouTube Creator",
      text: "The editing quality, pacing, and storytelling completely elevated my content. It genuinely feels like a premium production studio.",
    },

    {
      name: "Sneha Reddy",
      role: "Commercial Brand Client",
      text: "Professional workflow, cinematic visuals, and luxury presentation. The final edit exceeded expectations.",
    },

  ]

  return (

    <section className="relative py-24 md:py-32 px-5 md:px-20 bg-gradient-to-b from-[#0a0014] to-black overflow-hidden">

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

              Testimonials

            </p>

            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-none">

              <span className="text-white">
                What Clients
              </span>

              <br />

              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">

                Say About Us

              </span>

            </h2>

          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-8">

            {testimonials.map((item, index) => (

              <div
                key={index}
                className="group relative glass-card rounded-[36px] p-8 hover:border-purple-500/40 hover:bg-white/[0.06] transition duration-500 backdrop-blur-xl overflow-hidden"
              >

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition duration-700"></div>

                <div className="relative z-10">

                  {/* Stars */}
                  <div className="flex mb-6 text-purple-400 text-2xl tracking-[4px]">

                    ★★★★★

                  </div>

                  {/* Review Text */}
                  <p className="text-gray-300 leading-relaxed mb-10 text-lg">

                    "{item.text}"

                  </p>

                  {/* Client Info */}
                  <div>

                    <h3 className="font-black text-2xl text-white">

                      {item.name}

                    </h3>

                    <p className="text-gray-500 mt-2 text-sm uppercase tracking-[3px]">

                      {item.role}

                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </Reveal>

    </section>

  )
}