import Image from 'next/image';
import Head from 'next/head';
import SectionDivider from "@/common/components/shared/section-divider";
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import SectionHeading from '../../shared/section-heading';

const internships = [
  {
    title: "Cyber Security Intern",
    company: "Goldman Sachs",
    year: "2024",
    image: "goldman.png",
    url: "https://drive.google.com/file/d/1spPId60umQ0n_pUD-N1Q5m6mPVGQks35/view",
  },
  {
    title: "Cyber Security & Ethical Hacking traning",
    company: "Board Infinity",
    year: "2024",
    image: "board.png",
    url: "https://drive.google.com/file/d/1orgvd57Z57JWrXwJGJGqfEIsdmUhgE0c/view?usp=sharing",
  },
];

export default function Internship() {
  const { theme } = useTheme();

  return (
    <>
      <section id='Internship' className="min-h-screen px-4 py-16 dark:bg-darkBg dark:text-white">
        <SectionHeading>Internships & Trainings</SectionHeading>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2 max-w-3xl mx-auto justify-center">
          {internships.map((internship, index) => (
            <motion.a
              key={index}
              href={internship.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              whileHover={{ scale: 1.1 }} // Increase hover scale for a more noticeable effect
              className="dark:bg-white/5 dark:border-white/10 rounded-xl p-6 shadow-xl border hover:shadow-[#ffcbb4]/90 dark:hover:shadow-[#ffcbb4]/20 transition transform cursor-pointer flex flex-col items-center text-center"
            >
              <Image
                src={internship.image}
                alt={internship.title}
                width={500}
                height={300}
                className="rounded-lg mb-6"
              />
              <h2 className="text-xl font-semibold text-white mb-2">{internship.title}</h2>
              <p className="text-sm text-neutral-400">{internship.company} • {internship.year}</p>
            </motion.a>
          ))}
        </div>
      </section>

      <div className="mt-20 flex w-full justify-center">
        <SectionDivider />
      </div>
    </>
  );
}
