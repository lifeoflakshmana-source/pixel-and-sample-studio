import Reveal from "./Reveal"

export default function Pricing() {

  const plans = [

    {
      title: "Starter",
      price: "₹4,999",
      features: [
        "Short Form Editing",
        "Basic Color Grading",
        "Music Sync",
        "1080p Export",
      ],
    },

    {
      title: "Professional",
      price: "₹14,999",
      featured: true,
      features: [
        "Cinematic Editing",
        "Advanced Transitions",
        "Sound Design",
        "Color Grading",
        "4K Export",
      ],
    },

    {
      title: "Luxury",
      price: "Custom",
      features: [
        "Premium Commercial Editing",
        "Luxury Storytelling",
        "High-End Cinematic Workflow",
        "Advanced Motion Design",
        "Priority Delivery",
      ],
    },

  ]

  return (

    <section className="relative py-24 md:py-32 px-5 md:px-20 bg-gradient-to-b from-black to-[#0a0014] overflow-hidden">

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

              Pricing

            </p>

            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-none">

              <span className="text-white">
                Flexible Creative
              </span>

              <br />

              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">

                Packages

              </span>

            </h2>

          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">

            {plans.map((plan, index) => (

              <div
                key={index}
                className={`relative rounded-[40px] p-10 border overflow-hidden transition duration-500 hover:-translate-y-3 backdrop-blur-xl ${
                  plan.featured
                    ? "bg-gradient-to-b from-purple-500/20 via-fuchsia-500/10 to-pink-500/10 border-purple-500 shadow-[0_0_50px_rgba(168,85,247,0.25)]"
                    : "glass-card hover:border-purple-500/40"
                }`}
              >

                {/* Featured Badge */}
                {plan.featured && (

                  <div className="absolute top-6 right-6 bg-gradient-to-r from-purple-500 to-pink-500 text-xs px-4 py-2 rounded-full uppercase tracking-[2px] font-semibold shadow-[0_0_25px_rgba(168,85,247,0.35)]">

                    Popular

                  </div>

                )}

                {/* Plan Name */}
                <h3 className="text-3xl font-black mb-6 text-white">

                  {plan.title}

                </h3>

                {/* Price */}
                <div className="text-5xl font-black mb-10">

                  <span className="bg-gradient-to-r from-white via-purple-300 to-pink-400 bg-clip-text text-transparent">

                    {plan.price}

                  </span>

                </div>

                {/* Features */}
                <div className="flex flex-col gap-5 mb-12">

                  {plan.features.map((feature, idx) => (

                    <div
                      key={idx}
                      className="flex items-center gap-4 text-gray-300"
                    >

                      <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 shadow-[0_0_12px_rgba(168,85,247,0.5)]"></div>

                      <span className="leading-relaxed">

                        {feature}

                      </span>

                    </div>

                  ))}

                </div>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className="block text-center bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 py-4 rounded-2xl font-semibold hover:scale-[1.03] transition duration-300 shadow-[0_0_40px_rgba(168,85,247,0.35)]"
                >

                  Get Started

                </a>

              </div>

            ))}

          </div>

        </div>

      </Reveal>

    </section>

  )
}