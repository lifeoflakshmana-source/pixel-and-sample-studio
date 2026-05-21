export default function GrainOverlay() {

  return (

    <div
      className="fixed inset-0 pointer-events-none opacity-[0.035] z-[999]"
      style={{
        backgroundImage:
          "url('https://grainy-gradients.vercel.app/noise.svg')",
      }}
    />

  )
}