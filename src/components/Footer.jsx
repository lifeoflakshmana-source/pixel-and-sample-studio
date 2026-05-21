export default function Footer() {

  return (

    <footer className="relative border-t border-white/10 bg-black overflow-hidden">

      {/* Purple Glow */}
      <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-purple-600/15 blur-[140px] rounded-full"></div>

      {/* Pink Glow */}
      <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-pink-500/10 blur-[140px] rounded-full"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10">

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 py-24">

        <div className="grid md:grid-cols-3 gap-16">

          {/* Brand */}
          <div>

            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-[6px] leading-tight">

              <span className="bg-gradient-to-r from-white via-purple-300 to-pink-400 bg-clip-text text-transparent">

                Pixel And

              </span>

              <br />

              <span className="text-white">

                Sample Studio

              </span>

            </h2>

            <p className="text-gray-400 mt-6 leading-relaxed max-w-sm text-lg">

              Premium cinematic video editing studio crafting
              immersive visual storytelling experiences
              for creators, brands, and modern businesses.

            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-bold mb-8 text-white">

              Quick Links

            </h3>

            <div className="flex flex-col gap-5 text-gray-400">

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

          </div>

          {/* Connect */}
          <div>

            <h3 className="text-xl font-bold mb-8 text-white">

              Connect

            </h3>

            <div className="flex flex-col gap-5 text-gray-400">

              <a
                href="https://www.instagram.com/pixelandsamplestudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition duration-300"
              >
                Instagram
              </a>

              <a
                href="https://www.youtube.com/@PixelandSampleStudio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition duration-300"
              >
                YouTube
              </a>

              <a
                href="mailto:pixelandsamplestudio@gmail.com"
                className="hover:text-purple-400 transition duration-300"
              >
                pixelandsamplestudio@gmail.com
              </a>

              <a
                href="https://wa.me/917659097008"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition duration-300"
              >
                WhatsApp
              </a>

            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm tracking-wide">

            © 2026 Pixel And Sample Studio. All Rights Reserved.

          </p>

          <p className="text-gray-600 text-sm tracking-wide">

            Crafted with cinematic precision.

          </p>

        </div>

      </div>

    </footer>

  )
}