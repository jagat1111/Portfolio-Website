"use client";

import * as React from "react";
import { TbSunFilled } from "react-icons/tb";
import { BsMoonStarsFill } from "react-icons/bs";
import { useTheme } from "next-themes";

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
    <Button
      className={`${(theme==="light")?"bg-black":"bg-white"} p-0 text-white opacity-80 dark:text-black`}
      size={"sm"}
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <TbSunFilled className="h-4 w-4" />
      ) : (
        <BsMoonStarsFill className="h-4 w-4" />
      )}
    </Button>
  );
}
