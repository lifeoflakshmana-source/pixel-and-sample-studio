import { motion } from "framer-motion"

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 2.5,
        duration: 1,
      }}
      className="fixed inset-0 bg-black z-[9999] flex items-center justify-center pointer-events-none"
    >

      <video
  src="/videos/logo-intro.mp4"
  autoPlay
  muted
  playsInline
  className="w-[300px] md:w-[500px] object-contain"
/>

    </motion.div>
  )
}