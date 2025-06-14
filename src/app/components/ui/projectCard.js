import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <div
      className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
    >
      <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
        <div className="text-center">
          <Code className="w-16 h-16 text-white mx-auto mb-2" />
          <p className="text-white font-medium">Project Screenshot</p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
        <p className="text-slate-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-indigo-600 bg-opacity-20 text-indigo-400 text-sm rounded-full font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={project.github}
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
            aria-label="View GitHub repository"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={project.demo}
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="View live demo"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;