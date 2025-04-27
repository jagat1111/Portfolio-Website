"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/common/lib/hooks";
import SubmitBtn from "./_components/submit-btn";
import SectionHeading from "@/common/components/shared/section-heading";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { ref } = useSectionInView("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState("");

  // ✅ Hardcoded EmailJS public values
  const serviceID = "service_ve6slta"; // replace this
  const templateID = "template_mtqwtvc"; // replace this
  const publicKey = "VwHLyRBxoKa4w-YmP"; // replace this

  /*
  NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_ve6slta
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_mtqwtvc
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=VwHLyRBxoKa4w-YmP
  */

  useEffect(() => {
    emailjs.init(publicKey);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!formRef.current) return;

      // Create hidden input fields
      const hiddenNameInput = document.createElement("input");
      hiddenNameInput.type = "hidden";
      hiddenNameInput.name = "name";
      hiddenNameInput.value = email;
      formRef.current.appendChild(hiddenNameInput);

      const hiddenEmailInput = document.createElement("input");
      hiddenEmailInput.type = "hidden";
      hiddenEmailInput.name = "email";
      hiddenEmailInput.value = email;
      formRef.current.appendChild(hiddenEmailInput);

      await emailjs.sendForm(serviceID, templateID, formRef.current);

      // Remove hidden inputs after sending
      formRef.current.removeChild(hiddenNameInput);
      formRef.current.removeChild(hiddenEmailInput);

      toast.success("Email sent successfully!");
      formRef.current.reset();
      setEmail("");
    } catch (error) {
      console.error("Failed to send email:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to send email";
      toast.error(errorMessage);
      toast.error("Please contact me directly at jagat0422@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="flex w-full scroll-mt-12 flex-col items-center py-20 pb-44 text-center dark:bg-darkBg dark:text-white"
      initial={{ opacity: 0.8 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Hit me up!</SectionHeading>
      <div className="w-[min(100%,38rem)] px-4">
        <p className="mb-20 mt-6 text-gray-700 dark:text-white/80">
          Please contact me directly at{" "}
          <a className="underline" href="mailto:jagat0422@gmail.com">
            jagat0422@gmail.com
          </a>{" "}
          or through this form.
        </p>

        <form
          ref={formRef}
          className="mt-10 flex flex-col dark:text-black"
          onSubmit={handleSubmit}
        >
          <input
            className="h-14 rounded-lg border bg-gray-50 px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:placeholder:text-darkBg dark:focus:bg-opacity-100"
            name="from_email"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="my-3 h-52 resize-none rounded-lg border bg-gray-50 p-4 transition-all dark:bg-opacity-80 dark:outline-none dark:placeholder:text-darkBg dark:focus:bg-opacity-100"
            name="message"
            placeholder="Your message 👋"
            required
            maxLength={5000}
          />
          <div className="flex justify-center">
            <SubmitBtn isSubmitting={isSubmitting} />
          </div>
        </form>
      </div>
    </motion.section>
  );
}
