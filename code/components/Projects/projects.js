'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ProjectsCard from './projectCard';
import { projectsList } from '@/data/data';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className=" text-gray-200 p-6 px-4 md:px-12"
    >
      <div className="text-center md:mt-12">
        <motion.h2
          className="text-2xl md:text-4xl font-bold mt-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          A collection of real-world solutions I’ve built using AI, ML, and data analysis.
        </motion.p>
      </div>

      {/* Grid layout */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projectsList.map((project, index) => (
          <motion.div key={index} variants={item}>
            <ProjectsCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
