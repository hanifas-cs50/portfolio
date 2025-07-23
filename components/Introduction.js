"use client"

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const Introduction = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="max-w-screen-lg w-full h-full mx-auto px-8 flex flex-col justify-center"
    >
      <h1 className="mb-1 font-bold text-4xl text-white">Hi, I'm Hanif</h1>
      <h3 className="mb-3 text-justify text-lg text-yellow-400">
        Backend Developer | Data Analyst | System Architect in Training
      </h3>
      <p className="max-w-screen-md mb-4 text-justify text-lg">
        <span className="block mb-2">
          I build reliable backend systems and uncover insights from data to
          drive real impact.
        </span>
        <span className="block mb-2">
          From microservices to information systems, I turn ideas into
          production-ready tools. Let’s connect and build something purposeful
          together!
        </span>
      </p>
      <div className="flex gap-3">
        <p className="flex items-center">
          Find me here
          <span className="ml-2 font-bold text-xl">&#11106;</span>
        </p>
        <a
          href="mailto:your.email@example.com"
          aria-label="Email"
          className="text-white hover:scale-110 hover:text-yellow-300 focus:scale-110 focus:text-yellow-300 transition-colors"
        >
          <Mail />
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-white hover:scale-110 hover:text-yellow-300 focus:scale-110 focus:text-yellow-300 transition-colors"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/yourusername/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-white hover:scale-110 hover:text-yellow-300 focus:scale-110 focus:text-yellow-300 transition-colors"
        >
          <Linkedin />
        </a>
      </div>
    </motion.section>
  );
};

export default Introduction;
