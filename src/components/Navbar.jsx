import { useEffect, useState } from "react"

export default function Navbar() {

  const [active, setActive] = useState("home")

  useEffect(() => {

  const sections = document.querySelectorAll("section[id]")

  const handleScroll = () => {

    sections.forEach((section) => {

      const top = window.scrollY
      const offset = section.offsetTop - 200
      const height = section.offsetHeight
      const id = section.getAttribute("id")

      if (
        top >= offset &&
        top < offset + height
      ) {
        setActive(id)
      }

    })

  }

  window.addEventListener("scroll", handleScroll)

  return () => {

    window.removeEventListener("scroll", handleScroll)

  }

}, [])

  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <>

      <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-2xl border-b border-white/10">

        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-10">

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="text-xl md:text-3xl font-black uppercase leading-none"
          >

            <span className="bg-gradient-to-r from-white via-purple-300 to-pink-400 bg-clip-text text-transparent tracking-[4px]">

              Pixel &

            </span>

            <br />

            <span className="text-white text-lg tracking-[3px]">

              Sample Studio

            </span>

          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[3px] text-gray-300">

            <a
  href="#home"
  className={`transition duration-300 ${
    active === "home"
      ? "text-purple-400"
      : "text-gray-300 hover:text-purple-400"
  }`}
>
  Home
</a>

            <a
  href="#about"
  className={`transition duration-300 ${
    active === "home"
      ? "text-purple-400"
      : "text-gray-300 hover:text-purple-400"
  }`}
>
  About
</a>

            <a
  href="#services"
  className={`transition duration-300 ${
    active === "home"
      ? "text-purple-400"
      : "text-gray-300 hover:text-purple-400"
  }`}
>
  Services
</a>

            <a
  href="#portfolio"
  className={`transition duration-300 ${
    active === "home"
      ? "text-purple-400"
      : "text-gray-300 hover:text-purple-400"
  }`}
>
  Portfolio
</a>

            <a
  href="#contact"
  className={`transition duration-300 ${
    active === "home"
      ? "text-purple-400"
      : "text-gray-300 hover:text-purple-400"
  }`}
>
  Contact
</a>

          </div>

          {/* Desktop Button */}
          <a
            href="#contact"
            className="hidden md:flex bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 px-6 py-3 rounded-2xl text-sm font-semibold hover:scale-[1.05] transition duration-300 shadow-[0_0_35px_rgba(168,85,247,0.35)]"
          >

            Start Project

          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5"
          >

            <span className={`w-7 h-[2px] bg-white transition ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>

            <span className={`w-7 h-[2px] bg-white transition ${menuOpen ? "opacity-0" : ""}`}></span>

            <span className={`w-7 h-[2px] bg-white transition ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>

          </button>

        </div>

      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-10 text-xl md:text-3xl uppercase tracking-[4px] transition duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >

        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="hover:text-purple-400 transition"
        >
          Home
        </a>

        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className="hover:text-purple-400 transition"
        >
          About
        </a>

        <a
          href="#services"
          onClick={() => setMenuOpen(false)}
          className="hover:text-purple-400 transition"
        >
          Services
        </a>

        <a
          href="#portfolio"
          onClick={() => setMenuOpen(false)}
          className="hover:text-purple-400 transition"
        >
          Portfolio
        </a>

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="hover:text-purple-400 transition"
        >
          Contact
        </a>

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-4 rounded-2xl text-lg font-semibold mt-6"
        >

          Start Project

        </a>

      </div>

    </>

  )
}