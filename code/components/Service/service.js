'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaBrain, FaChartLine, FaCogs, FaProjectDiagram } from 'react-icons/fa';
import { AiOutlineLineChart, AiOutlineBarChart } from 'react-icons/ai';
import { MdOutlineModelTraining, MdOutlineInsights } from 'react-icons/md';
import { BiAnalyse } from 'react-icons/bi';
import { PiStrategyBold } from 'react-icons/pi';

const webServices = [
  {
    title: 'Predictive Modeling',
    description: 'Build machine learning models to forecast business outcomes, from customer churn to sales trends.',
    icon: <MdOutlineModelTraining className="text-4xl text-gray-200" />,
  },
  {
    title: 'Data Analysis & Visualization',
    description: 'Turn raw data into actionable insights using statistical techniques and intuitive visual dashboards.',
    icon: <AiOutlineBarChart className="text-4xl text-gray-200" />,
  },
  {
    title: 'AI-Powered Automation',
    description: 'Automate repetitive tasks using intelligent systems that save time and reduce human error.',
    icon: <FaCogs className="text-4xl text-gray-200" />,
  },
  {
    title: 'Business Intelligence',
    description: 'Craft dashboards and KPIs using BI tools like Tableau, Power BI, and Excel for real-time decisions.',
    icon: <AiOutlineLineChart className="text-4xl text-gray-200" />,
  },
  {
    title: 'Natural Language Processing',
    description: 'Develop NLP solutions like chatbots, sentiment analysis, and document classification.',
    icon: <FaBrain className="text-4xl text-gray-200" />,
  },
  {
    title: 'Strategic Data Consulting',
    description: 'Advise on how to use AI/ML for competitive advantage, from strategy to deployment.',
    icon: <PiStrategyBold className="text-4xl text-gray-200" />,
  },
  {
    title: 'Experimentation & A/B Testing',
    description: 'Design experiments and test hypotheses with statistical rigor to drive growth.',
    icon: <BiAnalyse className="text-4xl text-gray-200" />,
  },
  {
    title: 'Data Storytelling',
    description: 'Communicate insights clearly with compelling data narratives and presentation-ready visuals.',
    icon: <MdOutlineInsights className="text-4xl text-gray-200" />,
  },
];

const mobileServices = [
  {
    title: 'Predictive Modeling',
    description: 'Build machine learning models to forecast business outcomes, from customer churn to sales trends.',
    icon: <MdOutlineModelTraining className="text-4xl text-gray-200" />,
  },
  {
    title: 'AI-Powered Automation',
    description: 'Automate repetitive tasks using intelligent systems that save time and reduce human error.',
    icon: <FaCogs className="text-4xl text-gray-200" />,
  },
  {
    title: 'Business Intelligence',
    description: 'Craft dashboards and KPIs using BI tools like Tableau, Power BI, and Excel for real-time decisions.',
    icon: <AiOutlineLineChart className="text-4xl text-gray-200" />,
  },
  {
    title: 'Strategic Data Consulting',
    description: 'Advise on how to use AI/ML for competitive advantage, from strategy to deployment.',
    icon: <PiStrategyBold className="text-4xl text-gray-200" />,
  },
];

export default function Services() {
  return (
    <section className="py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-2xl md:text-4xl font-bold text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What I Do Best
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          From analysis to automation, I provide cutting-edge AI and data solutions to help you grow, optimize, and innovate.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
          {webServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#1c1c1c] rounded-xl p-6 text-left flex flex-col justify-between min-h-[240px] sm:hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-gray-200 font-semibold text-xl mb-2 group-hover:text-teal-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </motion.div>
          ))}

          {mobileServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#1c1c1c] rounded-xl p-6 text-left flex flex-col justify-between min-h-[240px] md:hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-gray-200 font-semibold text-xl mb-2 group-hover:text-teal-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
