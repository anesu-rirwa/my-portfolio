import Image from "next/image";
import SkillBadge from "../SkillsBadge/skillsBadge";
import MarqueeComponent from "./marquee";

import React from 'react'

const HomePage = () => {
  return (
    <section className="min-h-[90vh] bg-[#0f0f0f] text-white flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl bg-[#1c1c1c] p-6 rounded-2xl shadow-lg">
        <div className="space-y-4 flex flex-col items-center justify-center"> 
          <Image
            src="/images/profile.jpg"
            alt="Profile"
            width={200}
            height={200}
            className="border border-amber-600 mx-auto rounded-full"
          />
          
          <h1 className="text-4xl font-semibold text-gray-200">Anesu Rirwa</h1>
      
          <h2 className="text-2xl font-bold mt-2 text-gray-400">AI - Machine Learning - Data Analysis</h2>

          <p className="text-lg text-gray-200">
            Passionate about turning data into actionable insights.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HomePage