import { motion } from "framer-motion"
import { useEffect } from "react"

export default function ProjectModal({ project, closeModal }) {

  useEffect(() => {

    if (project) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.body.style.overflow = "auto"
    }

  }, [project])

  if (!project) return null

  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[99999] flex items-center justify-center p-6"
    >

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-[#0f0f0f] border border-white/10 rounded-[40px] overflow-hidden max-w-5xl w-full"
      >

        {/* Video */}
        <video
  src={project.video}
  preload="none"
  controls
  muted
  playsInline
  className="w-full h-[500px] object-cover"
/>

        {/* Content */}
        <div className="p-8">

          <div className="flex items-center justify-between">

            <div>

              <p className="uppercase tracking-[6px] text-purple-400 text-sm mb-3">
                Featured Project
              </p>

              <h2 className="text-4xl font-black">
                {project.title}
              </h2>

            </div>

            <button
              onClick={closeModal}
              className="text-white text-3xl hover:text-purple-400 transition"
            >
              ×
            </button>

          </div>

          <p className="text-gray-400 mt-6 leading-relaxed">
            Cinematic storytelling project crafted with premium editing,
            emotional pacing, modern transitions, and immersive sound design.
          </p>

        </div>

      </motion.div>

    </motion.div>
  )
}