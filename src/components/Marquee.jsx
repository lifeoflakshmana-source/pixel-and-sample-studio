export default function Marquee() {

  return (

    <section className="relative overflow-hidden py-10 bg-black border-y border-white/10">

      {/* Glow */}
      <div className="absolute inset-0 bg-purple-500/5 blur-[80px]"></div>

      <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">

        <div className="flex items-center gap-16 text-4xl sm:text-5xl md:text-7xl font-black uppercase px-8">

          <span className="text-white">
            Cinematic Editing
          </span>

          <span className="text-purple-400">
            •
          </span>

          <span className="text-white">
            Luxury Storytelling
          </span>

          <span className="text-pink-400">
            •
          </span>

          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Pixel & Sample Studio
          </span>

          <span className="text-purple-400">
            •
          </span>

        </div>

        <div className="flex items-center gap-16 text-4xl sm:text-5xl md:text-7xl font-black uppercase px-8">

          <span className="text-white">
            Cinematic Editing
          </span>

          <span className="text-purple-400">
            •
          </span>

          <span className="text-white">
            Luxury Storytelling
          </span>

          <span className="text-pink-400">
            •
          </span>

          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Pixel & Sample Studio
          </span>

          <span className="text-purple-400">
            •
          </span>

        </div>

      </div>

    </section>

  )
}