import { motion, useScroll } from "framer-motion"

export default function ScrollProgress() {

  const { scrollYProgress } = useScroll()

  return (

    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[999999] origin-left bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 shadow-[0_0_20px_rgba(168,85,247,0.6)]"
      style={{
        scaleX: scrollYProgress,
      }}
    />

  )
}