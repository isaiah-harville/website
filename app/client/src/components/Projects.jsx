import React from "react";
import PropTypes from "prop-types";
import SectionWrapper from "./SectionWrapper";

const HighlightCard = ({ item }) => (
  <article className="site-surface group rounded-[1.75rem] p-8 transition-all duration-200 hover:-translate-y-1.5">
    <h4 className="site-display text-3xl font-semibold leading-tight">
      {item.name}
    </h4>

    <p className="site-text-muted mt-4 leading-8">{item.description}</p>

    {item.highlights?.length > 0 && (
      <ul className="mt-6 space-y-3">
        {item.highlights.map((point) => (
          <li key={point} className="site-text-muted flex items-start gap-3">
            <span className="site-accent-dot mt-2 inline-block h-2 w-2 rounded-full flex-shrink-0" />
            <span className="leading-7">{point}</span>
          </li>
        ))}
      </ul>
    )}

    <div className="mt-6 flex flex-wrap gap-2">
      {(item.tags || []).map((tag) => (
        <span
          key={tag}
          className="site-pill rounded-full px-3 py-1 text-sm font-medium"
        >
          {tag}
        </span>
      ))}
    </div>

    {item.links?.length > 0 && (
      <div className="mt-6 flex flex-wrap gap-3">
        {item.links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${item.name} ${link.label}`}
              className="site-action-button flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
            >
              <Icon size={18} />
              <span>{link.label}</span>
            </a>
          );
        })}
      </div>
    )}
  </article>
);

HighlightCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.string),
    links: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        icon: PropTypes.elementType.isRequired,
      }),
    ),
  }).isRequired,
};

const Projects = ({ section }) => (
  <SectionWrapper id="highlights" title={section.title} subtitle={section.subtitle}>
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {section.items.map((item) => (
        <HighlightCard key={item.id} item={item} />
      ))}
    </div>
  </SectionWrapper>
);

Projects.propTypes = {
  section: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        highlights: PropTypes.arrayOf(PropTypes.string),
        tags: PropTypes.arrayOf(PropTypes.string),
        links: PropTypes.arrayOf(
          PropTypes.shape({
            label: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            icon: PropTypes.elementType.isRequired,
          }),
        ),
      }),
    ).isRequired,
  }).isRequired,
};

export default Projects;
