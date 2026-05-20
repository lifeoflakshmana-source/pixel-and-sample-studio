import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {

    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }

  }, [])

  return (
    <motion.div
      animate={{
        x: position.x - 15,
        y: position.y - 15,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
      className="hidden md:block fixed top-0 left-0 w-[30px] h-[30px] rounded-full bg-purple-500/80 blur-[1px] pointer-events-none z-[99999] mix-blend-screen"
    />
  )
}