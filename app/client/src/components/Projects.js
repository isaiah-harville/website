import React from 'react';
import PropTypes from 'prop-types';
import { Github, ExternalLink } from 'lucide-react';
import { projectsAPI } from '../services/api';
import useApiData from '../hooks/useApiData';
import { LoadingGrid } from './LoadingComponents';
import SectionWrapper from './SectionWrapper';

const fallbackProjects = [
  {
    id: 1,
    name: "SigKit",
    description: "Open-sourced DSP Toolkit offering pre-trained modulation classification models for Python. Features PyTorch transforms, datasets, and a full training pipeline.",
    tech: ["Python", "PyTorch Lightning", "Signal Processing"],
    github: "https://github.com/isaiah-harville/sigkit",
    demo: "https://isaiah-harville.github.io/SigKit/api/modules.html"
  },
  {
    id: 2,
    name: "ORION",
    description: "1st Place Winner Hackathon Project | Online data visualization tool for real-time analytics and insights.",
    tech: ["Python", "TypeScript", "PostgreSQL", "FastAPI", "Kubernetes"],
    github: "https://github.com/isaiah-harville/orion",
    demo: "https://orion.harville.dev"
  },
  {
    id: 3,
    name: "Homelab",
    description: "Repository containing my Kubernetes cluster files. I manage a homelab that deploys all of my services, including this site.",
    tech: ["Kubernetes", "Docker", "Flux", "GitOps"],
    github: "https://github.com/isaiah-harville/homelab",
  },
];

const ProjectCard = ({ project }) => (
  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:border-blue-400/30 group">
    <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
      {project.name}
    </h4>
    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

    <div className="flex flex-wrap gap-2 mb-6">
      {project.tech.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
        >
          {tech}
        </span>
      ))}
    </div>

    <div className="flex gap-4">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.name} on GitHub`}
        className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-600 rounded-lg transition-all hover:scale-105"
      >
        <Github size={18} />
        <span className="text-white font-medium">Code</span>
      </a>
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.name} demo`}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all hover:scale-105"
        >
          <ExternalLink size={18} />
          <span className="text-white font-medium">Demo</span>
        </a>
      )}
    </div>
  </div>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string.isRequired,
    demo: PropTypes.string
  }).isRequired
};

const Projects = () => {
  const { data: projects, loading } = useApiData(
    () => projectsAPI.getFeatured(),
    fallbackProjects
  );

  return (
    <SectionWrapper
      id="projects"
      title="Featured Projects"
      subtitle="A selection of my recent work and contributions"
    >
      {loading ? (
        <LoadingGrid count={3} />
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </SectionWrapper>
  );
};

export default Projects;
