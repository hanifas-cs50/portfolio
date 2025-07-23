"use client";

import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-screen-lg w-full mx-auto px-6 py-6 grid justify-center sm:flex sm:justify-between text-sm border-b border-gray-600"
      >
        <h3 className="mb-2 sm:mb-0 font-medium text-white">
          &copy; {year} Hanif As — All Rights Reserved.
        </h3>
        <div className="flex justify-center sm:justify-end gap-4">
          <a
            href="mailto:hanifas424@gmail.com"
            aria-label="Email"
            className="text-white hover:text-yellow-300 focus:text-yellow-300 transition-colors"
          >
            Mail
          </a>
          <a
            href="https://github.com/hanifas-cs50"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white hover:text-yellow-300 focus:text-yellow-300 transition-colors"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/yourusername/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white hover:text-yellow-300 focus:text-yellow-300 transition-colors"
          >
            Linkedin
          </a>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-screen-lg w-full mx-auto px-8 pt-6 pb-8 text-center text-xs"
      >
        Inspired by
        <a
          href="https://anggamys.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="font-semibold hover:text-white transition-colors"
        >
          {" "}
          anggamys{" "}
        </a>
        &
        <a
          href="https://v3.brittanychiang.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="font-semibold hover:text-white transition-colors"
        >
          {" "}
          Brittany Chiang
        </a>
      </motion.section>
    </>
  );
};

export default Footer;
