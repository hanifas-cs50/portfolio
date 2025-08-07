"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import skills from "@/data/skills.json";

const Skills = () => {
  const [more, setMore] = useState(true);
  const skillEntries = Object.entries(skills);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="max-w-screen-lg w-full mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-[175px_1fr]"
    >
      <h3 className="h-min mb-6 px-4 font-medium uppercase text-lg text-white border-l-4 border-yellow-400">
        Skills
      </h3>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6">
        {/* md:grid-cols-4  */}
        {(more ? skillEntries.slice(0, 3) : skillEntries).map(
          ([category, items]) => {
            return (
              <div key={category}>
                <h5 className="mb-3 px-3 py-2 font-bold text-gray-800 bg-yellow-400 rounded">
                  {category}
                </h5>
                <ul className="px-3 text-sm">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          }
        )}
        <p
          className="col-span-2 sm:col-span-3 text-center text-xs hover:text-white cursor-pointer"
          onClick={() => setMore(!more)}
        >
          {more ? "Show More" : "Show Less"}
        </p>
      </div>
    </motion.section>
  );
};

export default Skills;
