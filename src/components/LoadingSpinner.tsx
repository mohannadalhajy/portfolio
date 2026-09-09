"use client";

import { motion } from "framer-motion";

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <motion.div
        className="flex gap-2"
        initial="hidden"
        animate="visible"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-emerald-500 rounded-full"
            variants={{
              hidden: { scale: 0, opacity: 0 },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 0.6,
                },
              },
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
