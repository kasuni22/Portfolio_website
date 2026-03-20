import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = ({ darkMode }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'React', 'Laravel', 'Vue', 'Firebase', 'Python'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with cart and checkout.',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Real-time collaborative task tracking and kanban board.',
      tech: ['React', 'Firebase', 'Tailwind'],
    },
    {
      id: 3,
      title: 'Restaurant Website',
      description: 'Elegant website with menu and table reservation system.',
      tech: ['Laravel', 'MySQL', 'Tailwind'],
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'Content management system with markdown support.',
      tech: ['Vue', 'Laravel', 'MySQL'],
    },
    {
      id: 5,
      title: 'Weather App',
      description: 'Live weather forecasting using external APIs.',
      tech: ['React', 'Python', 'API'],
    },
    {
      id: 6,
      title: 'Student Portal',
      description: 'Academic tracking and course registration system.',
      tech: ['Laravel', 'MySQL', 'Bootstrap'],
    },
  ];

  const getGradient = (tech) => {
    switch (tech) {
      case 'React': return 'from-cyan-500 to-blue-500';
      case 'Laravel': return 'from-red-500 to-rose-600';
      case 'Vue': return 'from-emerald-400 to-green-500';
      case 'Firebase': return 'from-yellow-400 to-orange-500';
      case 'Python': return 'from-blue-500 to-indigo-600';
      default: return 'from-orange-400 to-amber-500';
    }
  };

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.tech.includes(activeFilter));

  return (
    <section
      id="projects"
      className={`py-20 transition-colors duration-300 w-full ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="container px-5 mx-auto">

        {/* Title Block */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="sm:text-4xl text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text inline-block">
            My Projects
          </h1>
          <p className={`text-lg transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Things I have built
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up" data-aos-delay="100">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white border border-transparent shadow-md'
                  : 'border border-orange-500 text-orange-500 bg-transparent hover:bg-orange-500/10'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -5 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(249,115,22,0.3)] flex flex-col ${
                darkMode
                  ? 'bg-gray-800 border-gray-700'
                  : 'bg-white border-gray-200'
              }`}
            >
              {/* Image Placeholder */}
              <div className={`h-48 w-full bg-gradient-to-br ${getGradient(project.tech[0])}`}></div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className={`text-xl font-bold mb-2 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h2>
                <p className={`text-sm mb-4 truncate transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className={`text-xs px-3 py-1 rounded-full font-medium transition-colors duration-300 ${
                        darkMode
                          ? 'bg-orange-900/30 text-orange-400'
                          : 'bg-orange-100 text-orange-600'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href="#"
                    className="flex-1 text-center py-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium text-sm hover:opacity-90 transition-opacity"
                  >
                    Live Demo
                  </a>
                  <a
                    href="#"
                    className={`flex-1 text-center py-2 rounded-lg border border-orange-500 text-orange-500 font-medium text-sm transition-colors duration-300 ${
                      darkMode ? 'hover:bg-gray-700' : 'hover:bg-orange-50'
                    }`}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
