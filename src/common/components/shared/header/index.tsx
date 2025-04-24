"use client";

import { links } from "@/common/lib/data";
import { smoothScrollTo } from "@/common/lib/utils";
import { useActiveSectionContext } from "@/common/stores/active-section";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (e: any, id: string) => {
    smoothScrollTo({ e, id });
    setActiveSection(id as 'about' | 'home' | 'projects' | 'Education' | 'skills' | 'Certificate' | 'contact');
    setTimeOfLastClick(Date.now());
    setMenuOpen(false);
  };

  return (
    <header className="relative z-[99]">
      {/* Hamburger button */}
      <div className="fixed left-4 top-4 z-50 lg:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-full border border-[#ffcbb4] dark:border-[#ddbea9] bg-black/30 dark:bg-white/20 backdrop-blur-md transition hover:scale-105"
        >
          {menuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
        </button>
      </div>

      {/* Desktop nav */}
      <nav className="hidden lg:block fixed left-1/2 top-6 -translate-x-1/2 z-40">
        <ul className="flex h-12 items-center justify-center gap-6 rounded-full border border-[#f4f3ee] border-opacity-40 bg-white/80 dark:bg-black/80 px-6 text-sm font-medium shadow-lg backdrop-blur-md">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                href={link.id}
                onClick={(e) => handleClick(e, link.id)}
                className={`relative px-3 py-2 transition-colors ${
                  activeSection === link.id ? "text-black dark:text-white" : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-[#ffcbb4] dark:bg-[#ddbea9]"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sidebar menu for mobile */}
      <motion.aside
        className="fixed top-0 rounded-md left-0 z-40 h-full w-64 dark:bg-black/90 opacity-80 bg-white/90 p-6 shadow-lg backdrop-blur-md border-r dark:border-white/20 border-black/20 lg:hidden"
        initial={{ x: "-100%" }}
        animate={{ x: menuOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.3 }}
      >
        <ul className="flex flex-col gap-6 mt-16">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                href={link.id}
                onClick={(e) => handleClick(e, link.id)}
                className="block dark:text-white text-black text-lg font-semibold uppercase hover:text-[#ffcbb4] dark:hover:text-[#ddbea9] transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.aside>
    </header>
  );
}
