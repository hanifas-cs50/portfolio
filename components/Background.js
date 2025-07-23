"use client"

import { motion } from "framer-motion";

const Background = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="max-w-screen-lg w-full mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-[175px_1fr]"
    >
      <h3 className="h-min mb-4 px-4 font-medium uppercase text-lg text-white border-l-4 border-yellow-400">
        Background
      </h3>
      <p className="mb-4 text-justify">
        <span className="block mb-2">
          I&apos;m a computer science student at
          <span className="font-medium text-yellow-400/90">
            {" "}
            Universitas Muhammadiyah Sidoarjo{" "}
          </span>
          with a passion for
          <span className="font-medium text-yellow-400/90">
            {" "}
            backend systems{" "}
          </span>
          and
          <span className="font-medium text-yellow-400/90"> data analysis</span>
          . I build clean, modular architectures—whether it&apos;s APIs,
          microservices, or data dashboards—that solve real problems.
        </span>

        <span className="block">
          Beyond code, I&apos;ve contributed to community tech outreach and hands-on
          training projects, always aiming to apply tech meaningfully.
        </span>
      </p>
    </motion.section>
  );
};

export default Background;
