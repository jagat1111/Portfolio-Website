'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/common/lib/hooks';
import SectionHeading from '@/common/components/shared/section-heading';
import SectionDivider from '@/common/components/shared/section-divider';

const educationData = [
  {
    title: 'Bachelor of Technology (CSE)',
    location: 'Lovely Professional University',
    description:
      'Specialized in Computer Science with strong focus on software engineering.',
    date: '2022 - 2026',
  },
  {
    title: 'Intermediate',
    location: 'ODM Public School',
    description:
      'Studied Science and Math, excelled academically with a deep interest in tech.',
    date: '2021-2022',
  },
  {
    title: 'Matriculation',
    location: 'Delhi Public School',
    description: 'Began exploring computers and programming fundamentals.',
    date: '2019-2020',
  },
];

export default function Education() {
  const { ref } = useSectionInView('Education');
  const { theme } = useTheme();

  return (
    <section
      id="Education"
      ref={ref}
      className="w-full px-4 py-16 scroll-mt-20 dark:bg-darkBg dark:text-white"
    >
      <SectionHeading>EDUCATION</SectionHeading>

      <div className="mt-12 flex flex-col items-center gap-12 lg:flex-row lg:justify-around">
  {educationData.map((item, index) => (
    <motion.div
      key={index}
      className="
        relative max-w-sm w-full rounded-xl border p-6 shadow-xl
        transition-all dark:bg-white/5 dark:border-white/10 dark:text-white 
        bg-white border-gray-200 text-black
        hover:dark:shadow-xl hover:shadow-xl hover:shadow-[#ffcbb4]/90 dark:hover:shadow-[#ffcbb4]/20
      "
      initial={{ opacity: 0, scale: 0.8, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.1, y: -8 }} // Increased scale and lifted higher
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        type: 'spring',
        stiffness: 800, // Increased stiffness for faster animation
        damping: 30, // Reduced damping for quicker stop
        delay: 0.1, // Minimal delay to ensure it pops fast
      }}
    >
      <p className="text-sm text-gray-500 dark:text-gray-400">{item.date}</p>
      <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
      <p className="text-sm font-medium text-gray-600 dark:text-white/75">{item.location}</p>
      <p className="mt-3 text-sm text-gray-700 dark:text-white/70">{item.description}</p>
    </motion.div>
  ))}
</div>


      <div className="mt-20 flex w-full justify-center">
        <SectionDivider />
      </div>
    </section>
  );
}
