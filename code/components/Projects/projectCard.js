import Link from "next/link";
import React from 'react';

const ProjectsCard = ({ project }) => {
  const hasCode = project.github;
  const hasDemo = project.demo;

  return (
    <div className="bg-[#1c1c1c] border border-gray-400 rounded-lg p-4 shadow-md h-full flex flex-col justify-around">
      <h3 className="text-lg text-gray-200 font-semibold mt-2">{project.title}</h3>

      <p className="text-gray-400 text-sm">{project.description}</p>

      <div className="space-x-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center rounded-md bg-gray-200 px-1.5 py-1 text-xs text-[#1c1c1c] ring-1 ring-gray-200/10 ring-inset mt-2"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-4 justify-end items-center">
        {hasCode && (
          <Link
            href={project.github}
            target="_blank"
            className="px-2 py-1.5 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            View Code
          </Link>
        )}

        {hasDemo && (
          <Link
            href={project.demo}
            target="_blank"
            className="px-2 py-1.5 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            Live Demo
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectsCard;
