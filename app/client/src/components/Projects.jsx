import React from "react";
import PropTypes from "prop-types";
import { Github, ExternalLink } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { featuredProjects } from "../content/projects";

const ProjectCard = ({ project }) => (
  <div className="bg-[#0f1117] rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-30px_rgba(0,0,0,0.8)] group">
    <h4 className="text-2xl font-semibold text-white mb-4 group-hover:text-gray-100 transition-colors">
      {project.name}
    </h4>
    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

    {project.highlights?.length > 0 && (
      <ul className="space-y-3 mb-6">
        {project.highlights.map((point) => (
          <li key={point} className="flex items-start gap-3 text-gray-200">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gray-500 flex-shrink-0" />
            <span className="leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    )}

    <div className="flex flex-wrap gap-2 mb-6">
      {(project.tech || []).map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 bg-white/5 text-gray-200 rounded-full text-sm border border-gray-700"
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
        className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-all border border-gray-800 hover:border-gray-700"
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
          className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all border border-gray-800 hover:border-gray-700"
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
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string),
    tech: PropTypes.arrayOf(PropTypes.string),
    github: PropTypes.string.isRequired,
    demo: PropTypes.string,
  }).isRequired,
};

const Projects = () => (
  <SectionWrapper
    id="projects"
    title="Featured Projects"
    subtitle="A selection of my recent work and contributions"
  >
    <div className="grid md:grid-cols-2 gap-8">
      {featuredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </SectionWrapper>
);

export default Projects;
