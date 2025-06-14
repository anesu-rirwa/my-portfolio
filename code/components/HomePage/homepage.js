'use client';

import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <section
      id="dashboard"
      className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] px-4 py-12 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl backdrop-blur-lg bg-white/5 border border-gray-700 rounded-3xl p-8 shadow-xl flex flex-col items-center space-y-6"
      >
        {/* Profile Image */}
        <div className="relative group">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="rounded-full p-1 bg-gradient-to-tr from-amber-500 to-pink-500 group-hover:animate-pulse transition"
          >
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              width={180}
              height={180}
              className="rounded-full border-4 border-[#1c1c1c] object-cover"
            />
          </motion.div>
        </div>

        {/* Name */}
        <motion.h1
          className="text-3xl sm:text-4xl font-extrabold text-center text-gray-100"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Anesu Rirwa
        </motion.h1>

        {/* Typewriter Role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-lg sm:text-xl text-gray-400"
        >
          <TypeAnimation
            sequence={[
              'AI Engineer',
              2000,
              'Machine Learning Engineer',
              2000,
              'Data Analyst',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="inline-block"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-sm text-gray-300 max-w-md text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Passionate about turning data into actionable insights that make a difference.
        </motion.p>

        {/* CTA (Optional) */}
        <motion.a
          href="#projects"
          className="mt-4 inline-block px-6 py-2 rounded-full bg-teal-500 hover:bg-teal-400 transition text-white text-sm font-medium shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
        >
          View My Work ↓
        </motion.a>
      </motion.div>
    </section>
  );
}
