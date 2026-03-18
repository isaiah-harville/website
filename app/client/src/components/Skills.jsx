import React from "react";
import PropTypes from "prop-types";
import SectionWrapper from "./SectionWrapper";

const SkillCategory = ({ category, icon: Icon }) => (
  <div className="site-surface group rounded-[1.75rem] p-8 transition-all duration-200 hover:-translate-y-1.5">
    <div className="mb-6 flex items-center gap-3">
      <div className="site-surface-soft rounded-2xl p-3">
        <Icon size={24} />
      </div>
      <h4 className="site-display text-2xl font-semibold">{category.title}</h4>
    </div>
    <div className="space-y-3">
      {category.skills.map((skill) => (
        <div
          key={skill}
          className="site-text-muted flex items-center gap-3"
        >
          <div className="site-accent-dot h-2 w-2 rounded-full"></div>
          <span>{skill}</span>
        </div>
      ))}
    </div>
  </div>
);

SkillCategory.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  icon: PropTypes.elementType.isRequired,
};

const Skills = ({ section }) => (
  <SectionWrapper id="strengths" title={section.title} subtitle={section.subtitle}>
    <div className="grid gap-8 md:grid-cols-3">
      {section.categories.map((category) => (
        <SkillCategory
          key={category.title}
          category={category}
          icon={category.icon}
        />
      ))}
    </div>
  </SectionWrapper>
);

Skills.propTypes = {
  section: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        skills: PropTypes.arrayOf(PropTypes.string).isRequired,
        icon: PropTypes.elementType.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default Skills;
