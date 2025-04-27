import Image from 'next/image';
import Head from 'next/head';
import SectionDivider from "@/common/components/shared/section-divider";
import { useSectionInView } from "@/common/lib/hooks";
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import SectionHeading from '../../shared/section-heading';

const certificates = [
  {
    title: "Fundamentals of Red Hat Enterprise Linux",
    issuer: "IBM Red Hat",
    year: "2025",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~APZBLBR5N0Q2/CERTIFICATE_LANDING_PAGE~APZBLBR5N0Q2.jpeg",
    url: "https://drive.google.com/file/d/1Pxf9nxSRShYZKTEF923BcGIa1GRRYXZS/view?usp=sharing",
  },
  {
    title: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    year: "2024",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~D1GL0UT60T6H/CERTIFICATE_LANDING_PAGE~D1GL0UT60T6H.jpeg",
    url: "https://drive.google.com/file/d/1MwslnzSw2CvYYsYOGxxeiDq3FU82KZzd/view?usp=sharing",
  },
  {
    title: "Digital Forensics Essentials (DFE)",
    issuer: "EC-Council",
    year: "2024",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~GP1E7PXMZ7JC/CERTIFICATE_LANDING_PAGE~GP1E7PXMZ7JC.jpeg",
    url: "https://drive.google.com/file/d/1b3ZbLt8_dXYyDt0mPz9FeIdmvciyfhfz/view?usp=sharing",
  },
  {
    title: "Divide and Conquer, Sorting and Searching, and Randomized Algorithms",
    issuer: "Stanford University Online",
    year: "2024",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~MMUV6JPPT6GT/CERTIFICATE_LANDING_PAGE~MMUV6JPPT6GT.jpeg",
    url: "https://drive.google.com/file/d/1eR7usWGd74zl3bT42ijIuR7X9siabQXy/view?usp=sharing",
  },
  {
    title: "CompTIA Linux+",
    issuer: "Cybrary",
    year: "2024",
    image: "cybrary.png",
    url: "https://drive.google.com/file/d/1lmg1UXl4_GqiPQrWkrsueGC93qRqpACc/view?usp=drive_link",
  },
  {
    title: "Introduction to Hardware and Operating Systems",
    issuer: "IBM",
    year: "2023",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~XLWV98MRXY33/CERTIFICATE_LANDING_PAGE~XLWV98MRXY33.jpeg",
    url: "https://drive.google.com/file/d/11spOPeM7sk8lVo5joryz_RJc3T7SbnKM/view?usp=sharing",
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
