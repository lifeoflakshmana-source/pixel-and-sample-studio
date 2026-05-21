import { motion } from "framer-motion"
import { useState } from "react"
import Reveal from "./Reveal"
import ProjectModal from "./ProjectModal"

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

    <section className="relative py-32 px-6 bg-black">

      <Reveal>

        <div className="max-w-7xl mx-auto">

          <div className="mb-20">

            <p className="uppercase tracking-[6px] text-purple-400 text-sm mb-4">
              Portfolio
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-none">
              Featured
              <br />
              Projects
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-10">

            {projects.map((project, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 cursor-pointer"
              >

                <video
  src={project.video}
  preload="none"
  muted
  playsInline
  preload="metadata"
  className="w-full h-[500px] object-cover group-hover:scale-110 transition duration-700 pointer-events-none"
/>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />

                <div className="absolute bottom-0 left-0 p-8 pointer-events-none">

                  <p className="uppercase tracking-[4px] text-purple-400 text-xs mb-3">
                    Cinematic Editing
                  </p>

                  <h3 className="text-3xl font-bold">
                    {project.title}
                  </h3>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </Reveal>

      <ProjectModal
        project={selectedProject}
        closeModal={() => setSelectedProject(null)}
      />

    </section>
  )
}