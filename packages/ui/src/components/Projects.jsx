import React from "react";
import PropTypes from "prop-types";
import SectionWrapper from "./SectionWrapper.jsx";

const ProjectCard = ({ project, theme }) => (
  <div
    className={`rounded-xl p-8 border transition-all duration-200 hover:-translate-y-1.5 group ${theme.card}`}
  >
    <h4
      className={`text-2xl font-semibold mb-4 transition-colors ${theme.cardTitle}`}
    >
      {project.name}
    </h4>
    <p className={`mb-6 leading-relaxed ${theme.bodyText}`}>
      {project.description}
    </p>

    {project.highlights?.length > 0 && (
      <ul className="space-y-3 mb-6">
        {project.highlights.map((point) => (
          <li
            key={point}
            className={`flex items-start gap-3 ${theme.bodyTextStrong}`}
          >
            <span
              className={`mt-1 inline-block h-2 w-2 rounded-full flex-shrink-0 ${theme.bullet}`}
            />
            <span className="leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    )}

    <div className="flex flex-wrap gap-2 mb-6">
      {(project.tech || []).map((tech) => (
        <span
          key={tech}
          className={`px-3 py-1 rounded-full text-sm border ${theme.tag}`}
        >
          {tech}
        </span>
      ))}
    </div>

    {project.links?.length > 0 && (
      <div className="flex flex-wrap gap-4">
        {project.links.map((link, index) => {
          const Icon = link.icon;
          const isExternal = link.url.startsWith("http");
          const buttonTheme =
            index === 0 ? theme.primaryButton : theme.secondaryButton;

          return (
            <a
              key={`${project.id}-${link.label}`}
              href={link.url}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              aria-label={`Open ${project.name} ${link.label}`}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all border ${buttonTheme}`}
            >
              <Icon size={18} />
              <span className="font-medium">{link.label}</span>
            </a>
          );
        })}
      </div>
    )}
  </div>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string),
    tech: PropTypes.arrayOf(PropTypes.string),
    links: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        icon: PropTypes.elementType.isRequired,
      }),
    ),
  }).isRequired,
  theme: PropTypes.object.isRequired,
};

const Projects = ({ section, theme }) => (
  <SectionWrapper
    id="projects"
    title={section.title}
    subtitle={section.subtitle}
    theme={theme}
  >
    <div className="grid md:grid-cols-2 gap-8">
      {section.items.map((project) => (
        <ProjectCard key={project.id} project={project} theme={theme} />
      ))}
    </div>
  </SectionWrapper>
);

Projects.propTypes = {
  section: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  theme: PropTypes.object.isRequired,
};

export default Projects;
