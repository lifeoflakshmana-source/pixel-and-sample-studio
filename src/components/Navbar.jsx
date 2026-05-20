export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <h1 className="text-2xl font-bold tracking-widest uppercase">
          Pixel & Sample
        </h1>

        <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-wider">
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>

        <button className="bg-blue-500 hover:bg-blue-600 transition px-5 py-2 rounded-xl text-sm font-semibold">
          Start Project
        </button>

      </div>
    </nav>
  )
}