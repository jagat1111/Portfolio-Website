import Image from 'next/image';
import Head from 'next/head';
import SectionDivider from "@/common/components/shared/section-divider";
import { useSectionInView } from "@/common/lib/hooks";
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import SectionHeading from '../../shared/section-heading';

const certificates = [
  {
    title: "R Programming",
    issuer: "Coursera",
    year: "2024",
    image: "images/rProgramming.png",
    url: "https://coursera.org/share/6910f4e935bfda6b6baa642ce1450962",
  },
  {
    title: "Data Visualization",
    issuer: "Coursera",
    year: "2024",
    image: "images/dataVisualization.png",
    url: "https://coursera.org/share/0332bfb51b1a0ba06ba19c1b681dc62d",
  },
  {
    title: "Build AI Apps with ChatGPT",
    issuer: "Coursera",
    year: "2024",
    image: "images/buildWithAi.png",
    url: "https://coursera.org/share/6e22582dec7d37172e306c54d127d6d9",
  },
  {
    title: "C++ Programming",
    issuer: "Coursera",
    year: "2024",
    image: "images/cpp.png",
    url: "https://coursera.org/share/7094c289e814dcd43a0f4ba4713e64ee",
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "Udemy",
    year: "2024",
    image: "images/dsa.png",
    url: "https://www.udemy.com/certificate/UC-225c8f30-65b2-4b53-a8ab-859883f626cf/",
  },
  {
    title: "Software Development Processes and Methodologies",
    issuer: "Udemy",
    year: "2024",
    image: "images/softwareCertificate.png",
    url: "https://coursera.org/share/e73cd2b2b037b9f220dcf30c077916e2",
  },
];

export default function Certificate() {
  const { ref } = useSectionInView('Certificate');
  const { theme } = useTheme();

  return (
    <>
      <section id='Certificate' ref={ref} className="min-h-screen dar px-4 py-16 dark:bg-darkBg dark:text-white">
        <SectionHeading>Certificates</SectionHeading>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              whileHover={{ scale: 1.09 }}
              className="dark:bg-white/5 dark:border-white/10 rounded-xl p-4 shadow-xl border hover:shadow-[#ffcbb4]/90 dark:hover:shadow-[#ffcbb4]/20 transition transform cursor-pointer"
            >
              <Image
                src={cert.image}
                alt={cert.title}
                width={500}
                height={300}
                className="rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold">{cert.title}</h2>
              <p className="text-sm text-neutral-400">{cert.issuer} • {cert.year}</p>
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
