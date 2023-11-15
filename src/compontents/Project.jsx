import { projects } from "../constants";
import React, { useState } from 'react';

const Project = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="py-12
    "> {/* Changed to bg-gray-900 for contrast */}
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-6">Projects</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`bg-gray-900 p-6 rounded-lg shadow-lg transition-all duration-300 transform ${hoveredProject === index ? 'scale-105 shadow-2xl bg-blue-800' : ''}`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <h1 className="text-3xl font-poppins font-bold text-white mb-3">{project.name}</h1>
              {hoveredProject === index ? (
                <p className="text-blue-200">{project.description}</p>
              ) : (
                <ul className="list-disc font-poppins list-inside text-blue-200">
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
