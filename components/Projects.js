"use client";

import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="max-w-screen-lg w-full mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-[175px_1fr]"
    >
      <h3 className="h-min mb-6 px-4 font-medium uppercase text-lg text-white border-l-4 border-yellow-400">
        Projects
      </h3>
      
      <section className="mb-8 grid grid-cols-2 gap-8">
        <a href="#">
          <h5 className="font-medium text-white">Project Title 1</h5>
          <p className="mb-2 text-sm">Project Description, consectetur adipiscing elit.</p>
          <div className="flex gap-2 text-xs">
            <button className="px-2 py-1.5 rounded hover:bg-yellow-400 font-medium hover:text-gray-800 border border-yellow-400">
              React Native
            </button>
            <button className="px-2 py-1.5 rounded hover:bg-yellow-400 font-medium hover:text-gray-800 border border-yellow-400">
              SQLite
            </button>
          </div>
        </a>
        <a href="#">
          <h5 className="font-medium text-white">Project Title 2</h5>
          <p className="mb-2 text-sm">Project Description, consectetur adipiscing elit.</p>
          <div className="flex gap-2 text-xs">
            <button className="px-2 py-1.5 rounded hover:bg-yellow-400 font-medium hover:text-gray-800 border border-yellow-400">
              React Native
            </button>
            <button className="px-2 py-1.5 rounded hover:bg-yellow-400 font-medium hover:text-gray-800 border border-yellow-400">
              SQLite
            </button>
          </div>
        </a>
        <a href="#">
          <h5 className="font-medium text-white">Project Title 3</h5>
          <p className="mb-2 text-sm">Project Description, consectetur adipiscing elit.</p>
          <div className="flex gap-2 text-xs">
            <button className="px-2 py-1.5 rounded hover:bg-yellow-400 font-medium hover:text-gray-800 border border-yellow-400">
              React Native
            </button>
            <button className="px-2 py-1.5 rounded hover:bg-yellow-400 font-medium hover:text-gray-800 border border-yellow-400">
              SQLite
            </button>
          </div>
        </a>
        <a href="#">
          <h5 className="font-medium text-white">Project Title 4</h5>
          <p className="mb-2 text-sm">Project Description, consectetur adipiscing elit.</p>
          <div className="flex gap-2 text-xs">
            <button className="px-2 py-1.5 rounded hover:bg-yellow-400 font-medium hover:text-gray-800 border border-yellow-400">
              React Native
            </button>
            <button className="px-2 py-1.5 rounded hover:bg-yellow-400 font-medium hover:text-gray-800 border border-yellow-400">
              SQLite
            </button>
          </div>
        </a>
      </section>
      
      {/* <ul className="mb-4 pt-0.5 space-y-4">
        <li>
          <h5 className="font-medium text-white">Todo</h5>
          <p className="mb-2 text-sm">Todo App using React Native.</p>
          <div className="flex gap-2 text-xs">
            <button className="px-2 py-1.5 rounded hover:bg-yellow-400 font-medium hover:text-gray-800 border border-yellow-400">
              React Native
            </button>
            <button className="px-2 py-1.5 rounded hover:bg-yellow-400 font-medium hover:text-gray-800 border border-yellow-400">
              SQLite
            </button>
          </div>
        </li>
        <li>
          <h5 className="font-medium text-white">Todo</h5>
          <p className="mb-2 text-sm">Todo App using React Native.</p>
          <div className="flex gap-2 text-xs">
            <button className="px-2 py-1.5 rounded hover:bg-yellow-400 font-medium hover:text-gray-800 border border-yellow-400">
              React Native
            </button>
            <button className="px-2 py-1.5 rounded hover:bg-yellow-400 font-medium hover:text-gray-800 border border-yellow-400">
              SQLite
            </button>
          </div>
        </li>
      </ul> */}

      <a
        className="col-1 md:col-2 flex items-center text-xs hover:text-white"
        href="https://github.com/hanifas-cs50"
      >
        More Projects
        <span className="ml-2 font-bold text-xl">&#11106;</span>{" "}
      </a>
    </motion.section>
  );
};

export default Projects;
