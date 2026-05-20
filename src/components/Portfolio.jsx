import { motion } from "framer-motion"

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
    title: "YouTube Documentary",
    video: "/videos/project5.mp4",
  },

  {
    title: "Music Sync Edit",
    video: "/videos/project6.mp4",
  },
]

export default function Portfolio() {
  return (
    <section className="relative py-32 px-6 md:px-20 bg-black overflow-hidden">

      {/* Glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[8px] text-purple-500 text-sm mb-4">
            Selected Works
          </p>

          <h2 className="text-5xl md:text-7xl font-black uppercase leading-none">
            Featured
            <br />
            Projects
          </h2>

        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10"
            >

              {/* Image */}
              <video
  src={project.video}
  autoPlay
  muted
  loop
  playsInline
  className="w-full h-[500px] object-cover group-hover:scale-110 transition duration-700"
/>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-purple-500/10"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8">

                <p className="uppercase tracking-[4px] text-purple-500 text-sm mb-3">
                  Project
                </p>

                <h3 className="text-3xl font-black">
                  {project.title}
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  )
}