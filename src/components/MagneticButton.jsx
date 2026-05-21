import { motion } from "framer-motion"
import { useRef } from "react"

export default function MagneticButton({ children }) {

  const ref = useRef(null)

  const handleMouseMove = (e) => {

    const element = ref.current

    const rect = element.getBoundingClientRect()

    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    element.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
  }

  const handleMouseLeave = () => {
    ref.current.style.transform = `translate(0px,0px)`
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
      className="bg-purple-500 hover:bg-purple-600 transition px-8 py-4 rounded-2xl text-lg font-semibold duration-300"
    >
      {children}
    </motion.button>
  )
}