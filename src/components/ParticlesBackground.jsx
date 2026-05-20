import { useEffect, useMemo, useState } from "react"
import Particles from "@tsparticles/react"
import { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

export default function ParticlesBackground() {

  const [init, setInit] = useState(false)

  useEffect(() => {

    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })

  }, [])

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },

      fpsLimit: 60,

      particles: {
        number: {
          value: 40,
        },

        color: {
          value: "#A855F7",
        },

        links: {
          enable: true,
          color: "#A855F7",
          distance: 140,
          opacity: 0.15,
          width: 1,
        },

        move: {
          enable: true,
          speed: 1,
        },

        opacity: {
          value: 0.3,
        },

        size: {
          value: {
            min: 1,
            max: 3,
          },
        },
      },

      detectRetina: true,
    }),
    []
  )

  if (!init) return null

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="absolute inset-0 z-0"
    />
  )
}