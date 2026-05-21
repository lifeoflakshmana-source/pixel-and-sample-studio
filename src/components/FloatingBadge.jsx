import { motion } from "framer-motion"

export default function FloatingBadge() {

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 40,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        delay: 2,
        duration: 1,
      }}

      className="fixed bottom-6 left-6 z-[9999]"
    >

      <div className="glass-card rounded-2xl px-5 py-4 flex items-center gap-4 shadow-[0_0_40px_rgba(168,85,247,0.18)]">

        {/* Pulse Dot */}
        <div className="relative">

          <div className="w-3 h-3 rounded-full bg-green-400"></div>

          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping"></div>

        </div>

        {/* Text */}
        <div>

          <p className="text-white text-sm font-semibold">

            Now Booking Projects

          </p>

          <p className="text-gray-400 text-xs">

            Limited Slots Available

          </p>

        </div>

      </div>

    </motion.div>

  )
}