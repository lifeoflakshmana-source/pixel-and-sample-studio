export default function Navbar() {

  return (

    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-2xl border-b border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.08)]">

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10">

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl md:text-3xl font-black tracking-[6px] uppercase leading-none"
        >

          <span className="bg-gradient-to-r from-white via-purple-300 to-pink-400 bg-clip-text text-transparent">

            Pixel &

          </span>

          <br />

          <span className="text-white text-lg tracking-[4px]">

            Sample Studio

          </span>

        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[3px] text-gray-300">

          <a
            href="#home"
            className="hover:text-purple-400 transition duration-300"
          >
            Home
          </a>

          <a
            href="#about"
            className="hover:text-purple-400 transition duration-300"
          >
            About
          </a>

          <a
            href="#services"
            className="hover:text-purple-400 transition duration-300"
          >
            Services
          </a>

          <a
            href="#portfolio"
            className="hover:text-purple-400 transition duration-300"
          >
            Portfolio
          </a>

          <a
            href="#contact"
            className="hover:text-purple-400 transition duration-300"
          >
            Contact
          </a>

        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 hover:scale-[1.05] transition duration-300 px-6 py-3 rounded-2xl text-sm font-semibold shadow-[0_0_35px_rgba(168,85,247,0.35)]"
        >

          Start Project

        </a>

      </div>

    </nav>

  )
}