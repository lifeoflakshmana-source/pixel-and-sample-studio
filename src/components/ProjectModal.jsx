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
      onClick={closeModal}
      className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[99999] flex items-center justify-center p-6 overflow-y-auto"
    >

      {/* Background Glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-600/20 blur-[150px] rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-pink-500/10 blur-[150px] rounded-full"></div>

      {/* Modal */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-[#0b0b0b]/90 backdrop-blur-2xl border border-white/10 rounded-[40px] overflow-hidden max-w-5xl w-full shadow-[0_0_60px_rgba(168,85,247,0.15)]"
      >

        {/* Video */}
        <div className="relative overflow-hidden">

          <video
            src={project.video}
            controls
            muted
            playsInline
            preload="metadata"
            className="w-full h-[500px] object-cover"
          />

          {/* Video Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>

        </div>

        {/* Content */}
        <div className="p-8 md:p-10">

          {/* Header */}
          <div className="flex items-start justify-between gap-6">

            <div>

              <p className="uppercase tracking-[6px] text-purple-400 text-sm mb-4">

                Featured Project

              </p>

              <h2 className="text-4xl md:text-5xl font-black leading-tight">

                <span className="bg-gradient-to-r from-white via-purple-300 to-pink-400 bg-clip-text text-transparent">

                  {project.title}

                </span>

              </h2>

            </div>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl flex items-center justify-center text-3xl hover:border-purple-500/40 hover:text-purple-400 transition duration-300"
            >

              ×

            </button>

          </div>

          {/* Description */}
          <p className="text-gray-400 mt-8 leading-relaxed text-lg max-w-3xl">

            Cinematic storytelling project crafted with premium editing,
            emotional pacing, modern transitions, immersive sound design,
            luxury visual aesthetics, and high-end cinematic workflow.

          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-4 mt-10">

            <div className="px-5 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-sm text-gray-300">

              Cinematic Editing

            </div>

            <div className="px-5 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-sm text-gray-300">

              Color Grading

            </div>

            <div className="px-5 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-sm text-gray-300">

              Sound Design

            </div>

            <div className="px-5 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-sm text-gray-300">

              Storytelling

            </div>

          </div>

        </div>

      </motion.div>

    </motion.div>

  )
}