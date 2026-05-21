import { useEffect, useState } from "react"

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

    <>

      {/* Main Dot */}
      <div
        className="fixed z-[999] pointer-events-none w-3 h-3 rounded-full bg-white mix-blend-difference transition-transform duration-75"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />

    </>

  )
}