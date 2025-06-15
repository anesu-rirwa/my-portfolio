'use client';

import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import myImage from '../../public/images/me.jpg'; // Adjust the path as necessary

export default function HomePage() {
  return (
    <section
      id="dashboard"
      className="min-h-[90vh] flex items-center justify-center sm:px-4 px-8 py-24 text-gray-200"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-full w-[80%] max-w-2xl backdrop-blur-lg bg-[#1c1c1c] rounded-3xl p-8 shadow-xl flex flex-col md:flex-row items-center justify-center"
      >
        {/* Profile Image */}
        <div className="relative w-[90%] group md:w-[40%]">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Image
              src={myImage}
              alt="Profile"
              className=" border-[#1c1c1c] group-hover:scale-105 transition duration-300 shadow-lg object-cover"
            />
          </motion.div>
        </div>

        <div className='md:space-y-4 space-y-2 md:w-[60%] flex flex-col items-center justify-center text-center mt-4 d:mt-0'>
          {/* Name */}
          <motion.h1
            className="text-2xl sm:text-3xl font-extrabold text-center text-gray-1000"
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
              className="text-sm text-gray-300 max-w-md text-center md:w-[80%]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Passionate about turning data into actionable insights that make a difference.
            </motion.p>

            {/* CTA (Optional) */}
            <motion.a
              href="#projects"
              className="mt-4 inline-block px-6 py-2 rounded-full bg-gray-200 hover:bg-teal-400  hover:text-gray-200 hover:font-bold text-[#1c1c1c] text-sm font-medium shadow-md transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
            >
              View My Work ↓
            </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
