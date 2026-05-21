import { useState } from "react"
import Reveal from "./Reveal"
import ProjectModal from "./ProjectModal"
import { Link } from "react-router-dom"

export default function Portfolio() {

  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [

    {
      title: "Cinematic Reel",
      video: "/videos/project1.mp4",
    },

    {
      title: "Luxury Wedding",
      video: "/videos/project2.mp4",
    },

    {
      title: "Commercial Edit",
      video: "/videos/project3.mp4",
    },

    {
      title: "Real Estate Film",
      video: "/videos/project4.mp4",
    },

    {
      title: "Documentary Edit",
      video: "/videos/project5.mp4",
    },

    {
      title: "Music Sync",
      video: "/videos/project6.mp4",
    },

  ]

  return (

    <section
      id="portfolio"
      className="relative py-24 md:py-32 px-5 md:px-20 bg-gradient-to-b from-[#0a0014] to-black overflow-hidden"
    >

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
          <div className="mb-24 text-center">

            <p className="uppercase tracking-[6px] text-purple-400 text-sm mb-4">

              Portfolio

            </p>

            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-none">

              <span className="text-white">
                Featured
              </span>

              <br />

              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">

                Projects

              </span>

            </h2>

          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-10">

            {projects.map((project, index) => (

              <Link
                key={index}
                to={`/project/${index + 1}`}
                onClick={() => setSelectedProject(project)}
                className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-purple-500/40 transition duration-500"
              >

                {/* Video */}
                <video
                  src={project.video}
                  muted
                  loop
                  playsInline
                  preload="none"
                  loading="lazy"
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => {
                    e.target.pause()
                    e.target.currentTime = 0
                  }}
                  className="w-full h-[320px] md:h-[500px] object-cover group-hover:scale-105 transition duration-700 pointer-events-none"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition duration-700 pointer-events-none" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-8 pointer-events-none">

                  <p className="uppercase tracking-[4px] text-purple-400 text-xs mb-3">

                    Cinematic Editing

                  </p>

                  <h3 className="text-3xl font-black text-white leading-tight">

                    {project.title}

                  </h3>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </Reveal>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        closeModal={() => setSelectedProject(null)}
      />

    </section>

  )
}