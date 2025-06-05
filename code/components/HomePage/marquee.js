import Marquee from "react-fast-marquee";
import {skills} from "@/data/data"; 

import React from 'react'

const MarqueeComponent = () => {
  return (
    <div className="w-[100vw] overflow-hidden">
        <Marquee
            className="bg-gray-50 rounded-lg"
            speed={50}
            gradient={false}
        >
            {skills.map((skill, index) => (
            <span key={index} className="mx-4 text-sm font-semibold">
                {skill}
            </span>
            ))}
        </Marquee>
    </div>
  )
}

export default MarqueeComponent