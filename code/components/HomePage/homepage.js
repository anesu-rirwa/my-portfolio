"use client";

import Image from "next/image";

import React from 'react'
import { TypeAnimation } from "react-type-animation";

const HomePage = () => {
  return (
    <section className="min-h-[90vh] text-white flex flex-col items-center justify-center">
      <div className=" max-w-2xl bg-[#1c1c1c] p-6 rounded-2xl shadow-lg">
        <div className="space-y-2 flex flex-col items-center justify-center"> 
          <Image
            src="/images/profile.jpg"
            alt="Profile"
            width={200}
            height={200}
            className="border border-amber-600 mx-auto rounded-full mb-4 shadow-lg transition-transform transform hover:scale-110"
          />
          
          <p className="text-2xl font-semibold text-gray-200">Anesu Rirwa</p>
      
          <TypeAnimation
            sequence={[
              "Artificial Intelligence Engineer",
              2000,
              "Machine Learning Engineer",
              2000,
              "Data Analyst",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-lg text-gray-400"
          />
      
          <p className="text-sm text-gray-200">
            Passionate about turning data into actionable insights.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HomePage