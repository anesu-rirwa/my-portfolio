import Image from "next/image";
import Link from "next/link";

import React from 'react'

const ProjectsCard = ({project}) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={400}
        className="rounded-md"
      />
      <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
      <p className="text-gray-600">{project.description}</p>
      <div className="flex space-x-2 mt-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4 mt-4">
        <Link href={project.github} className="text-blue-500">
          View Code
        </Link>
        <Link href={project.demo} className="text-blue-500">
          Live Demo
        </Link>
      </div>
    </div>
  )
}

export default ProjectsCard