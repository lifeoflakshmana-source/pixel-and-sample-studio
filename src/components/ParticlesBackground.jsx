import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

export default function ParticlesBackground() {

  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: false,
        },

        background: {
          color: "transparent",
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
      }}
      className="absolute inset-0 z-0"
    />
  )
}