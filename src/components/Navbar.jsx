export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/5 backdrop-blur-2xl border-b border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.08)]">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <h1 className="text-2xl font-black tracking-[6px] uppercase bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
          Pixel & Sample
        </h1>

        <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-wider">
          <a
        href="#"
        className="hover:text-purple-400 transition duration-300"
        >
        Home
        </a>
          <a
        href="#"
        className="hover:text-purple-400 transition duration-300"
        >
        Projects
        </a>
          <a
        href="#"
        className="hover:text-purple-400 transition duration-300"
        >
        Services
        </a>
          <a
        href="#"
        className="hover:text-purple-400 transition duration-300"
        >
        Contact
        </a>
        </div>

        <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-purple-600 transition px-5 py-2 rounded-xl text-sm font-semibold">
          Start Project
        </button>

      </div>
    </nav>
  )
}