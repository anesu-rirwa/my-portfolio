import Image from "next/image";
import SkillBadge from "../SkillsBadge/skillsBadge";
import MarqueeComponent from "./marquee";

import React from 'react'

const HomePage = () => {
  return (
    <section className="flex flex-col items-center justify-center h-[80vh] bg-gray-50 p-4">
      <Image
        src="/images/profile.jpg"
        alt="Profile"
        width={200}
        height={200}
        className="border border-amber-600 mx-auto rounded-full"
      />
      
      <h1 className="text-2xl font-bold mt-4">Anesu Rirwa</h1>
  
      <h2 className="text-xl font-bold mt-2 text-gray-600">AI - Machine Learning - Data Analysis</h2>

      <p className="mt-2 mb-3 text-gray-600">
        Passionate about turning data into actionable insights.
      </p>

        <MarqueeComponent />
    </section>
  )
}

export default HomePage