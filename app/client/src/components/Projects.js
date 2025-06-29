import React, { useState, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projectsAPI } from '../services/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await projectsAPI.getFeatured();
        setProjects(response.data.data);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
        // Fallback to mock data
        setProjects([
          {
            id: 1,
            name: "E-Commerce Platform",
            description: "Full-stack e-commerce solution with payment integration and admin dashboard.",
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            github: "https://github.com/yourusername/project-one",
            demo: "https://project-one-demo.com"
          },
          {
            id: 2,
            name: "Task Management App",
            description: "Collaborative task management with real-time updates and team features.",
            tech: ["React", "Express", "Socket.io", "PostgreSQL"],
            github: "https://github.com/yourusername/project-two",
            demo: "https://project-two-demo.com"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-white text-center mb-16">Featured Projects</h3>

        {loading ? (
          <div className="text-center text-gray-300">Loading projects...</div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2"
              >
                <h4 className="text-2xl font-bold text-white mb-4">{project.name}</h4>
                <p className="text-gray-300 mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-white">Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span className="text-white">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
