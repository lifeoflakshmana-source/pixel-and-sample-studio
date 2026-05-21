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

    <section className="relative py-32 px-6 md:px-20 bg-black overflow-hidden">

      {/* Glow */}
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full"></div>

      <Reveal>

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[6px] text-purple-400 text-sm mb-4">
              Testimonials
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-none">
              What Clients
              <br />
              Say About Us
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {testimonials.map((item, index) => (

              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-[32px] p-8 hover:border-purple-500/40 transition duration-500"
              >

                <div className="flex mb-6 text-purple-400 text-2xl">
                  ★★★★★
                </div>

                <p className="text-gray-300 leading-relaxed mb-8">
                  "{item.text}"
                </p>

                <div>

                  <h3 className="font-bold text-xl">
                    {item.name}
                  </h3>

                  <p className="text-gray-500 mt-2 text-sm">
                    {item.role}
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