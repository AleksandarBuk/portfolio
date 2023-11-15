import React from 'react';
import { technology } from '../constants';
const TechStack = () => {
  const techStack = technology[0];

  const renderTechList = (techList, bgColor) => {
    return techList.map((tech, index) => (
      <span key={index} className={`inline-block ${bgColor} text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2`}>
        {tech}
      </span>
    ));
  };

  return (
    <section id="technology" className="py-12 bg-gray-900 rounded-md">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-6">Technology</h2>
        <div className="space-y-4">
          {techStack.languages && (
            <div>
              <h3 className="text-2xl text-white font-semibold mb-3">Languages</h3>
              <div>{renderTechList(techStack.languages, 'bg-red-600')}</div>
            </div>
          )}
          {techStack.backend && (
            <div>
              <h3 className="text-2xl text-white font-semibold mb-3">Backend</h3>
              <div>{renderTechList(techStack.backend, 'bg-blue-600')}</div>
            </div>
          )}
          {techStack.frontend && (
            <div>
              <h3 className="text-2xl text-white font-semibold mb-3">Frontend</h3>
              <div>{renderTechList(techStack.frontend, 'bg-yellow-600')}</div>
            </div>
          )}
          {techStack.data_science && (
            <div>
              <h3 className="text-2xl text-white font-semibold mb-3">Data Science</h3>
              <div>{renderTechList(techStack.data_science, 'bg-green-600')}</div>
            </div>
          )}
          {techStack.machine_learning && (
            <div>
              <h3 className="text-2xl text-white font-semibold mb-3">Machine Learning</h3>
              <div>{renderTechList(techStack.machine_learning, 'bg-indigo-600')}</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
