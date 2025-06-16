import React from 'react';
import ProjectCard from '../ui/projectCard';
import FadeInSection from '../FadeInSection';

const projects = [
  {
    title: 'E-Commerce Dashboard',
    description: 'A modern admin dashboard built with React and Tailwind CSS, featuring real-time analytics and user management.',
    technologies: ['React', 'Tailwind', 'JavaScript'],
    gradient: 'from-indigo-500 to-purple-600',
    github: '#',
    demo: '#'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with drag-and-drop functionality and real-time updates.',
    technologies: ['React', 'Next.js', 'Tailwind'],
    gradient: 'from-green-500 to-blue-600',
    github: '#',
    demo: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing modern web development practices and clean design principles.',
    technologies: ['JavaScript', 'Tailwind', 'HTML5'],
    gradient: 'from-purple-500 to-pink-600',
    github: '#',
    demo: '#'
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-slate-800">
      <FadeInSection>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
            {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div> */}
            <div className='text-4xl flex justify-center'>
              Comming soon ...
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default ProjectsSection;