"use client";

import * as React from "react";
import { TbSunFilled } from "react-icons/tb";
import { BsMoonStarsFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { motion } from "framer-motion"; // Import motion from Framer Motion

import { Button } from "@/common/components/ui";
import { useHasMounted } from "@/common/lib/hooks";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const hasMounted = useHasMounted();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!hasMounted) return null;

  return (
    <div className="fixed top-5 right-5 z-[99] md:top-auto md:right-auto md:bottom-2 md:left-2">
      <Button
        className={`${(theme === "light") ? "bg-black" : "bg-white"} p-0 text-white opacity-80 dark:text-black`}
        size={"sm"}
        onClick={toggleTheme}
      >
        {/* Apply rotation only to the icon */}
        <motion.div
          initial={{ rotate: 0 }} // Initial state with no rotation
          animate={{
            rotate: theme === "light" ? 360 : 0, // Rotate 360 when switching from light to dark
          }}
          transition={{ duration: 0.5 }} // Animation duration
        >
          {theme === "light" ? (
            <TbSunFilled className="h-4 w-4" />
          ) : (
            <BsMoonStarsFill className="h-4 w-4" />
          )}
        </motion.div>
      </Button>
    </div>
  );
}
