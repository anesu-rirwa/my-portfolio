import Image from "next/image";
import Link from "next/link";

import React from 'react'

const ProjectsCard = ({project}) => {
  return (
    <div className="bg-[#1c1c1c] border border-gray-200 rounded-lg p-4 shadow-md">
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={400}
        className="rounded-md"
      />
      <h3 className="text-lg text-gray-200 font-semibold mt-2">{project.title}</h3>
      
      <p className="text-gray-400 text-sm">{project.description}</p>
      
        <div className="space-x-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md bg-gray-200 px-1.5 py-1 text-xs text-[#1c1c1c] ring-1 ring-gray-200/10 ring-inset mt-2 hover:bg-gray-300 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      
      <div className="flex space-x-4 mt-4
      justify-end">
        {/* Assuming project.github and project.demo are valid URLs */}
        <Link href={project.github} className="px-2 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          View Code
        </Link>
        
        <Link href={project.demo} className="px-2 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          Live Demo
        </Link>
      </div>
    </div>
  )
}

export default ProjectsCard
