"use client";

import { motion } from "framer-motion";

const Divider = () => {
  return (
    <div className="w-full flex justify-center bg-[#0f0f0f]">
        <motion.div
          className="h-[4px] w-[90vw] bg-gradient-to-r from-gray-200 via-transparent to-gray-200 rounded-full"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          style={{ transformOrigin: 'center' }}
        />
      </div>
  )
}

export default Divider