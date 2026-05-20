import { motion } from "framer-motion"

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 2.5,
        duration: 1,
      }}
      className="fixed inset-0 bg-black z-[9999] flex items-center justify-center pointer-events-none"
    >

      <div className="text-center">

        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-black uppercase tracking-widest"
        >
          Pixel And
          <br />
          Sample Studio
        </motion.h1>

        {/* Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "220px" }}
          transition={{
            delay: 0.8,
            duration: 1.2,
          }}
          className="h-[2px] bg-purple-500 mx-auto mt-8"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.5,
            duration: 1,
          }}
          className="uppercase tracking-[6px] text-purple-500 text-xs mt-6"
        >
          Cinematic Visual Storytelling
        </motion.p>

      </div>

    </motion.div>
  )
}