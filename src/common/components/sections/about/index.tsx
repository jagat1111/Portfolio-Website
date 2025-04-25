'use client';

import { useSectionInView } from '@/common/lib/hooks';
import portfolioImg from '@/../public/images/coderPic.png';
import { smoothScrollTo } from '@/common/lib/utils';
import SectionDivider from '@/common/components/shared/section-divider';
import SectionHeading from '@/common/components/shared/section-heading';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import Link from 'next/link';

export default function About() {
  const { ref } = useSectionInView('about', 0.4);
  const divRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      className="z-50 flex w-full flex-col items-center justify-start px-4 py-8 leading-8 dark:bg-darkBg dark:text-white md:scroll-mt-4 lg:scroll-mt-24"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175, ease: 'easeInOut' }}
      id="about"
    >
      <div className="flex w-full flex-col items-center">
        <SectionHeading>About Me</SectionHeading>
        <motion.div
          className="w-full overflow-hidden pt-10 md:pt-12 sm:max-w-[90%] md:max-w-[80%] lg:max-w-[1040px] xl:max-w-[1180px]"
          ref={divRef}
          style={{
            scale: scaleProgess,
            opacity: opacityProgess,
            willChange: 'transform, opacity',
            transform: 'translateZ(0)',
          }}
        >
          <div className="group relative w-full flex flex-col items-center gap-8 lg:flex-row lg:items-center">

            {/* Image - moved above text to appear left in lg:flex-row */}
            <div className="relative h-60 w-60 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-[300px] lg:w-[300px] xl:h-[400px] xl:w-[400px]">
              <div className="absolute inset-0 z-10 rounded-full bg-gradient-to-b from-[#212121] via-[#585756] to-[#f0e7e4] opacity-40" />
              <div className="absolute inset-0">
                <Image
                  src={portfolioImg}
                  alt="portfolio image"
                  placeholder="blur"
                  fill
                  className="z-20 rounded-full object-cover"
                />
              </div>

            </div>

            {/* Text Content */}
            <div className="text-md z-40 flex flex-col gap-4 font-semibold tracking-wide text-primary sm:text-center lg:text-left lg:max-w-[580px] lg:text-lg xl:max-w-[650px]">
              <span>
                I&apos;m a Front-end developer with expertise in TypeScript,
                React & Next.js. Proven ability to deliver user-centered web
                applications with a focus on intuitive experiences and user
                interaction.
              </span>
              <span>
                Seeking Web Development opportunities where I can leverage my
                skills to create meaningful connections between products and
                users.
              </span>
              <p className="flex flex-col items-center lg:items-start">
                <span>So if you are interested,</span>
                <Link
                  href={'contact'}
                  onClick={(e) => smoothScrollTo({ e, id: 'contact' })}
                  className="mt-2 w-fit group"
                >
                  <span className="relative inline-block text-lg sm:text-xl font-bold uppercase rounded-xl p-2 text-black dark:text-white bg-[#ffcbb4] dark:bg-zinc-700 shadow-lg shadow-slate-400/40 transition-all duration-500">
                    <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 dark:opacity-0 group-hover:dark:opacity-100 transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left rounded-xl z-0"></span>
                    <span className="relative z-10">Contact me!</span>
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <SectionDivider />
    </motion.section>
  );
}
