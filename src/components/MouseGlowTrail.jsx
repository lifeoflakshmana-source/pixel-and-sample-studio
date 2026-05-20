import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function MouseGlowTrail() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {

    const moveMouse = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", moveMouse)

    return () => {
      window.removeEventListener("mousemove", moveMouse)
    }

  }, [])

  return (
    <motion.div
      animate={{
        x: position.x - 150,
        y: position.y - 150,
      }}
      transition={{
        type: "tween",
        ease: "linear",
        duration: 0.25,
      }}
      className="hidden md:block fixed top-0 left-0 w-[300px] h-[300px] rounded-full bg-purple-500/20 blur-[120px] pointer-events-none z-[1]"
    />
  )
}