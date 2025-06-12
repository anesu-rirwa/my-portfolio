"use client"
import React from 'react'
import { motion } from 'framer-motion'

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3
    }
  }
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
}

const Profile = () => {
  return (
    <motion.section
      className="min-h-screen text-white p-6 flex flex-col items-center"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className='text-center my-12'>
        <motion.h2
            className="text-2xl md:text-4xl font-bold text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Here is a summary of my professional journey, showcasing my education and work experience in the fields of AI, Machine Learning, and Data Analysis.
          </motion.p>
      </div>

      <motion.div
        className="flex flex-col md:flex-row justify-center mt-4 md:space-x-12 space-y-8 md:space-y-0 max-w-6xl w-full"
        variants={containerVariants}
      >
        {/* Column 1 */}
        <motion.div
          className="w-full md:w-1/2 px-4"
          variants={fadeInUp}
        >
          <h2 className="text-xl font-semibold mt-2">My Journey Begins</h2>
          <p className="mt-2 text-gray-400 text-sm text-justify leading-relaxed">
            Growing up in Zimbabwe, I was always captivated by the patterns hidden in everyday life, how weather changed our routines, how people made decisions, and how small trends led to big outcomes. The insatiable curiosity I harbored as a child ultimately found its true identity in the world of data.
            <br /><br />
            While studying Artificial Intelligence and Machine Learning at the University of Zimbabwe, I saw how models could not only uncover insights but actually predict outcomes, automate processes, and power decisions. I dove in headfirst, learning to wrangle messy datasets, visualize stories through dashboards, and build systems that learn from data.
            <br /><br />
            It was not just about the tech. It was about impact, using AI to solve local and global problems.
          </p>
        </motion.div>

        {/* Column 2 */}
        <motion.div
          className="w-full md:w-1/2 px-4"
          variants={fadeInUp}
        >
          <h2 className="text-xl font-semibold mt-2">Who I am Today</h2>
          <p className="mt-2 text-gray-400 text-sm text-justify leading-relaxed">
            Today, I am an AI/ML Engineer and Data Analyst who thrives at the intersection of intelligent systems and real-world impact. I have built predictive models for housing markets, dashboards that uncover user behavior, and recommender systems that personalize experiences.
            <br /><br />
            My work blends technical precision with curiosity and creativity. I believe every dataset has a story and I specialize in finding the signal, not just the noise. Whether it is reducing churn, optimizing energy use, or summarizing documents with GPT-3, I build solutions that are scalable, insightful, and human-centered.
            <br /><br />
            My mission? To use AI for good. To build smarter systems that empower people, elevate communities, and drive meaningful change.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Profile
