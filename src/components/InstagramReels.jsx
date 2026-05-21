import Reveal from "./Reveal"

export default function InstagramReels() {

  const reels = [

    {
      title: "Cinematic Wedding Reel",
      link: "https://www.instagram.com/pixelandsamplestudio/",
      image: "/images/reel1.jpg",
    },

    {
      title: "Luxury Commercial Edit",
      link: "https://www.instagram.com/pixelandsamplestudio/",
      image: "/images/reel2.jpg",
    },

    {
      title: "YouTube Storytelling",
      link: "https://www.instagram.com/pixelandsamplestudio/",
      image: "/images/reel3.jpg",
    },

  ]

  return (

    <section className="relative py-24 md:py-32 px-5 md:px-20 bg-gradient-to-b from-black to-[#0a0014] overflow-hidden">

      {/* Purple Glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-purple-600/20 blur-[150px] rounded-full"></div>

      {/* Pink Glow */}
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-pink-500/15 blur-[150px] rounded-full"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10">

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />

      </div>

      <Reveal>

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-24">

            <p className="uppercase tracking-[6px] text-pink-400 text-sm mb-4">

              Instagram Reels

            </p>

            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-none">

              <span className="text-white">
                Social
              </span>

              <br />

              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">

                Showcase

              </span>

            </h2>

          </div>

          {/* Reels Grid */}
          <div className="grid md:grid-cols-3 gap-8">

            {reels.map((reel, index) => (

              <a
                key={index}
                href={reel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-purple-500/40 transition duration-500"
              >

                {/* Image */}
                <img
                  src={reel.image}
                  alt={reel.title}
                  className="w-full h-[600px] object-cover group-hover:scale-105 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition duration-700"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-8">

                  <p className="uppercase tracking-[4px] text-pink-400 text-xs mb-3">

                    Instagram Reel

                  </p>

                  <h3 className="text-2xl font-black text-white leading-tight">

                    {reel.title}

                  </h3>

                </div>

              </a>

            ))}

          </div>

        </div>

      </Reveal>

    </section>

  )
}