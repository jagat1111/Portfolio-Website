"use client";

import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

interface SubmitBtnProps {
  isSubmitting: boolean;
}

export default function SubmitBtn({ isSubmitting }: SubmitBtnProps) {
  return (
    <motion.button
      className="group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-gray-900 px-4 text-sm text-white outline-none transition-all hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10"
      type="submit"
      disabled={isSubmitting}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.05 }}
    >
      {isSubmitting ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />{" "}
        </>
      )}
    </motion.button>
  );
}
