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
            name: "SigKit",
            description: "Opensourced DSP Toolkit offering pre-trained modulation classification models for Python. Features PyTorch transforms, datasets, and a full training pipeline.",
            tech: ["Python", "PyTorch Lightning"],
            github: "https://github.com/isaiahharvi/sigkit",
            demo: "https://isaiahharvi.github.io/SigKit/api/modules.html"
          },
          {
            id: 2,
            name: "ORION",
            description: "1st Place Winner Hackathon Project | Online data visualization tool",
            tech: ["Python", "Typescript", "PostgreSQL", "FastAPI", "Kubernetes / Docker"],
            github: "https://github.com/isaiahharvi/orion",
            demo: "https://orion.harville.dev"
          },
          {
            id: 3,
            name: "Homelab",
            description: "Repository contaning my kubernetes cluster files. I manage a homelab that deploys all of my services, including this site.",
            tech: ["Kubernetes", "Docker", "FluxCD"],
            github: "https://github.com/isaiahharvi/homelab",
          },
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
                      className="px-3 py-1 bg-blue-500/30 text-blue-200 rounded-full text-sm"
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
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-white">Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
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
