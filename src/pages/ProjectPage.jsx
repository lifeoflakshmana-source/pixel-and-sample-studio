import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function ProjectPage() {

  const { id } = useParams()

  const projects = {

    1: {
      title: "Cinematic Reel",
      category: "Short Form Editing",
    },

    2: {
      title: "Luxury Wedding",
      category: "Wedding Film",
    },

    3: {
      title: "Commercial Edit",
      category: "Commercial Advertisement",
    },

    4: {
      title: "Real Estate Film",
      category: "Real Estate Cinematic",
    },

    5: {
      title: "Documentary Edit",
      category: "Storytelling Edit",
    },

    6: {
      title: "Music Sync",
      category: "Music Video Editing",
    },

  }

  const project = projects[id]

  return (

    <motion.section
  initial={{ opacity: 0, scale: 0.96 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 1.04 }}
  transition={{
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  }} className="relative min-h-screen bg-black text-white overflow-hidden px-6 md:px-20 py-32">
        
      {/* Purple Glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-purple-600/20 blur-[150px] rounded-full"></div>

      {/* Pink Glow */}
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-pink-500/10 blur-[150px] rounded-full"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10">

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />

      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-3 mb-12 text-gray-400 hover:text-purple-400 transition duration-300"
        >

          ← Back To Portfolio

        </Link>

        {/* Heading */}
        <div className="mb-16">

          <p className="uppercase tracking-[6px] text-purple-400 text-sm mb-6">

            Featured Project

          </p>

          <h1 className="text-5xl md:text-8xl font-black leading-none">

            <span className="bg-gradient-to-r from-white via-purple-300 to-pink-400 bg-clip-text text-transparent">

              {project.title}

            </span>

          </h1>

          <p className="mt-6 text-gray-400 text-lg tracking-[3px] uppercase">

            {project.category}

          </p>

        </div>

        {/* Video Container */}
        <div className="relative rounded-[40px] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_0_60px_rgba(168,85,247,0.12)] mb-20">

          {/* Hover Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/0 to-pink-500/0 hover:from-purple-500/10 hover:to-pink-500/10 transition duration-700 z-10 pointer-events-none"></div>

          <video
            src={`/videos/project${id}.mp4`}
            controls
            playsInline
            preload="metadata"
            className="w-full rounded-[40px] object-cover"
          />

        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16">

          {/* Overview */}
          <div className="bg-white/[0.04] border border-white/10 rounded-[36px] p-10 backdrop-blur-xl">

            <p className="uppercase tracking-[4px] text-purple-400 text-sm mb-5">

              Project Overview

            </p>

            <h2 className="text-3xl font-black mb-6 text-white">

              Cinematic Storytelling

            </h2>

            <p className="text-gray-400 leading-relaxed text-lg">

              This cinematic project was crafted with premium editing,
              immersive storytelling, emotional pacing, modern transitions,
              luxury color grading, and high-end visual aesthetics.

            </p>

          </div>

          {/* Creative Process */}
          <div className="bg-white/[0.04] border border-white/10 rounded-[36px] p-10 backdrop-blur-xl">

            <p className="uppercase tracking-[4px] text-pink-400 text-sm mb-5">

              Creative Process

            </p>

            <h2 className="text-3xl font-black mb-6 text-white">

              Precision & Emotion

            </h2>

            <p className="text-gray-400 leading-relaxed text-lg">

              Every frame was designed to create emotional engagement,
              cinematic atmosphere, premium rhythm, immersive sound design,
              and visually impactful storytelling experiences.

            </p>

          </div>

        </div>

        {/* CTA */}
        <div className="mt-24 text-center">

          <h3 className="text-4xl md:text-5xl font-black leading-tight mb-8">

            <span className="text-white">

              Ready To Build

            </span>

            <br />

            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">

              Your Cinematic Project?

            </span>

          </h3>

          <a
            href="/#contact"
            className="inline-block bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 px-10 py-5 rounded-2xl text-lg font-semibold hover:scale-[1.03] transition duration-300 shadow-[0_0_40px_rgba(168,85,247,0.35)]"
          >

            Start Your Project

          </a>

        </div>

      </div>

    </motion.section>

  )
}