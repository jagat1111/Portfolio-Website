'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black text-white">
      <motion.div
        className="flex flex-col items-center justify-center gap-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <motion.div
          className="h-16 w-16 border-4 border-white border-t-transparent rounded-full animate-spin"
          aria-label="Loading Spinner"
        />
        <motion.p
          className="text-lg font-semibold tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
}
