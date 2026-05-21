import { useState } from "react"
import Reveal from "./Reveal"

export default function FAQ() {

  const faqs = [

    {
      question: "What types of videos do you edit?",
      answer:
        "We specialize in cinematic reels, wedding films, YouTube content, commercial edits, luxury storytelling, and premium social media videos.",
    },

    {
      question: "How long does delivery take?",
      answer:
        "Delivery timelines depend on project complexity. Most edits are delivered within 3–7 days with premium quality assurance.",
    },

    {
      question: "Do you offer revisions?",
      answer:
        "Yes. Every project includes revision support to ensure the final edit perfectly matches your vision and expectations.",
    },

    {
      question: "Can you edit videos for brands and businesses?",
      answer:
        "Absolutely. We create high-end commercial edits, advertisements, and cinematic brand storytelling content.",
    },

  ]

  const [active, setActive] = useState(null)

  return (

    <section className="relative py-24 md:py-32 px-5 md:px-20 bg-gradient-to-b from-[#050505] to-[#0a0014] overflow-hidden">

      {/* Purple Glow */}
      <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] bg-purple-600/20 blur-[150px] rounded-full"></div>

      {/* Pink Glow */}
      <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] bg-pink-500/10 blur-[150px] rounded-full"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10">

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />

      </div>

      <Reveal>

        <div className="relative z-10 max-w-5xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-24">

            <p className="uppercase tracking-[6px] text-purple-400 text-sm mb-4">

              FAQ

            </p>

            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-none">

              <span className="text-white">
                Frequently Asked
              </span>

              <br />

              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">

                Questions

              </span>

            </h2>

          </div>

          {/* FAQ Items */}
          <div className="flex flex-col gap-6">

            {faqs.map((faq, index) => (

              <div
                key={index}
                className="glass-card rounded-[32px] overflow-hidden backdrop-blur-xl hover:border-purple-500/40 transition duration-500"
              >

                {/* Question Button */}
                <button
                  onClick={() =>
                    setActive(active === index ? null : index)
                  }
                  className="w-full flex items-center justify-between text-left p-8"
                >

                  <span className="text-lg md:text-xl font-bold text-white">

                    {faq.question}

                  </span>

                  <span className="text-3xl text-purple-400">

                    {active === index ? "−" : "+"}

                  </span>

                </button>

                {/* Answer */}
                {active === index && (

                  <div className="px-8 pb-8 text-gray-400 leading-relaxed text-lg">

                    {faq.answer}

                  </div>

                )}

              </div>

            ))}

          </div>

        </div>

      </Reveal>

    </section>

  )
}