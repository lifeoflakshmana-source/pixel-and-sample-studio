import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Reveal({ children }) {

  const ref = useRef()

  useEffect(() => {

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 100,
        filter: "blur(20px)",
      },

      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.6,
        ease: "power4.out",
      }
    )

  }, [])

  return (
    <div ref={ref}>
      {children}
    </div>
  )
}