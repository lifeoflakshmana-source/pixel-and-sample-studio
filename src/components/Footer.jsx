export default function Footer() {

  return (

    <footer className="relative border-t border-white/10 bg-[#050505] overflow-hidden">

      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 py-20">

        <div className="grid md:grid-cols-3 gap-16">

          {/* Brand */}
          <div>

            <h2 className="text-3xl font-black uppercase tracking-[6px] bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              Pixel And
              <br />
              Sample Studio
            </h2>

            <p className="text-gray-400 mt-6 leading-relaxed max-w-sm">
              Premium cinematic video editing studio crafting
              immersive visual storytelling experiences for modern creators and brands.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <a href="#" className="hover:text-purple-400 transition">
                Home
              </a>

              <a href="#" className="hover:text-purple-400 transition">
                Portfolio
              </a>

              <a href="#" className="hover:text-purple-400 transition">
                Services
              </a>

              <a href="#" className="hover:text-purple-400 transition">
                Contact
              </a>

            </div>

          </div>

          {/* Social */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Connect
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <a
                href="https://www.instagram.com/pixelandsamplestudio/"
                target="_blank"
                className="hover:text-purple-400 transition"
              >
                Instagram
              </a>

              <a
                href="https://www.youtube.com/@PixelandSampleStudio"
                target="_blank"
                className="hover:text-purple-400 transition"
              >
                YouTube
              </a>

              <a
                href="mailto:klakshmanadattu@gmail.com"
                className="hover:text-purple-400 transition"
              >
                Email:pixelandsamplestudio@gmail.com
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 Pixel And Sample Studio. All Rights Reserved.
          </p>

          <p className="text-gray-600 text-sm">
            Crafted with cinematic precision.
          </p>

        </div>

      </div>

    </footer>
  )
}