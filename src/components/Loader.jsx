import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Loader() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)

  }, [])

  return (

    <AnimatePresence>

      {loading && (

        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 bg-black z-[999999] flex items-center justify-center overflow-hidden"
        >

          {/* Glow */}
          <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full"></div>

          <div className="relative z-10 text-center">

            {/* Logo */}
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-8xl font-black uppercase tracking-[10px] bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent"
            >

              Pixel &
              <br />
              Sample

            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-gray-500 tracking-[6px] uppercase mt-8 text-sm"
            >
              Cinematic Visual Experiences
            </motion.p>

            {/* Loading Line */}
            <div className="w-[250px] h-[2px] bg-white/10 rounded-full mx-auto mt-10 overflow-hidden">

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2 }}
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
              />

            </div>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  )
}