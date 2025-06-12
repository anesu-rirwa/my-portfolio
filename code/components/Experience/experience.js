"use client"

import React from 'react';
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';
import { SiTensorflow, SiPython, SiReact, SiNextdotjs, SiGithub, SiPytorch, SiScikitlearn, SiPandas, SiMysql, SiTableau, SiJavascript } from 'react-icons/si';
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import Link from 'next/link';
import {motion} from 'framer-motion';

const Experience = () => {
  return (
    <section className="min-h-screen text-white p-6 flex flex-col items-center">
      <div className='text-center my-12'>
        <motion.h2
            className="text-2xl md:text-4xl font-bold text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Experience & Education
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

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 bg-[#1c1c1c] p-6 rounded-2xl shadow-lg">
        
        {/* Left Panel */}
        <div className="col-span-1 flex flex-col">
          {/* Education Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-200">Education</h3>
            
              <div className="border-l-2 border-gray-600 pl-4 space-y-2">
                <div className='flex flex-row justify-between items-center'>
                  <h4 className="font-semibold">University of Zimbabwe</h4>
                  <p className="text-sm text-gray-400">2020 - 2024</p>
                </div>

                <p className="text-sm text-gray-300 mt-1 ">BSc. Honours Degree in AI and Machine Learning</p>
                  
                <p className="text-sm text-gray-300">Grade: Upper Second Class (2:1)</p>

                <p className="text-sm text-gray-400 italic text-justify">Thesis: Optimizing customer service operations for small and medium-sized enterprises using
                Artificial Intelligence and Machine Learning​</p>
              </div>
              
          </div>

          {/* Download Resume */}
          <Link
            href="/resume.pdf"
            className="mt-6 inline-flex items-center px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition w-[70%] justify-center"
            download
          >
            <FaDownload className="mr-2" /> Download Resume
          </Link>
        </div>

        {/* Right Panel */}
        <div className="col-span-2 space-y-6">
          <h3 className="text-lg font-semibold text-gray-200">Work Experience</h3>
          
          <div className="space-y-4">
            {[
              {
                company: 'Gifted Community Foundation',
                role: 'Data Analyst',
                period: '2025 - Present',
                description: `Empowered data-driven decision-making by expertly collecting, cleaning, and analyzing complex organizational data. Designed and deployed intuitive reports and interactive dashboards that elucidated key patterns in outreach effectiveness, highlighted critical donation trends, and thoroughly evaluated student sponsorship impact, enabling stakeholders to optimize strategies and allocate resources more effectively.`
              },
              {
                company: 'Uncommon.org',
                role: 'Volunteer Mentor',
                period: '2023 - 2025',
                description: `Providing one-on-one guidance and support to Uncommon.org students throughout their learning journey.`
              },
              {
                company: 'Webgems',
                role: 'Software Engineer Intern',
                period: '2022 - 2023',
                description: `Developed and deployed two responsive websites and four cross-platform mobile applications using WordPress, React, and Ionic, ensuring adherence to industry best practices and high performance standards.

Authored two comprehensive technical documentation guides and developed ten practical tutorials across WordPress, Ionic, and React frameworks. This initiative streamlined team onboarding, accelerated training processes, and significantly improved overall team efficiency and knowledge sharing.

Consistently delivered multiple complex coding projects on time and within scope, demonstrating strong adaptability and meticulous attention to detail in fast-paced development environments.`
              },
            ].map((job, index) => (
              <div key={index} className="border-l-2 border-gray-600 pl-4">
                <h4 className="font-semibold">{job.company}</h4>
                <p className="text-sm text-gray-400">{job.role} · {job.period}</p>
                <p className="text-sm text-gray-300 mt-1 text-justify" style={{ whiteSpace: 'pre-wrap' }}>{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stack */}
      <div className="mt-6">
        <div className="flex flex-wrap gap-4 text-2xl">
          <div title="Python" className="hover:scale-110 transition-transform duration-200">
            <SiPython className="text-2xl md:text-4xl mb-4" />
          </div>

          <div title="MySQL" className="hover:scale-110 transition-transform duration-200">
            <SiMysql className="text-2xl md:text-4xl mb-4 " />
          </div>

          <div title="Tensorflow" className="hover:scale-110 transition-transform duration-200">
            <SiTensorflow className="text-2xl md:text-4xl mb-4 " />
          </div>

          <div title="Pytorch" className="hover:scale-110 transition-transform duration-200">
            <SiPytorch className="text-2xl md:text-4xl mb-4" />
          </div>

          <div title="Scikit Learn" className="hover:scale-110 transition-transform duration-200">
            <SiScikitlearn className="text-2xl md:text-4xl mb-4" />
          </div>

          <div title="Tableau" className="hover:scale-110 transition-transform duration-200">
            <SiTableau className="text-2xl md:text-4xl mb-4" />
          </div>

          <div title="Excel" className="hover:scale-110 transition-transform duration-200">
            <PiMicrosoftExcelLogoFill className="text-2xl md:text-4xl mb-4" />
          </div>

          <div title="Javascript" className="hover:scale-110 transition-transform duration-200">
            <SiJavascript className="text-2xl md:text-4xl mb-4" />
          </div>
            
          <div title="React" className="hover:scale-110 transition-transform duration-200">
            <SiReact className="text-2xl md:text-4xl mb-4" />
          </div>

          <div title="Next.js" className="hover:scale-110 transition-transform duration-200">
            <SiNextdotjs className="text-2xl md:text-4xl mb-4" />
          </div>

          <div title="Github" className="hover:scale-110 transition-transform duration-200">
            <SiGithub className="text-2xl md:text-4xl mb-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

/* 
  <h2 className="text-xl font-semibold">Anesu Rirwa</h2>
  <p className="text-sm text-gray-400 mb-4">AI / Machine Learning Engineer & Data Analyst</p>

  <div className="flex mt-2 mb-8 space-x-4 text-lg">
    <Link href="#"><FaLinkedin /></Link>
    <Link href="#"><FaGithub /></Link>
  </div>
*/