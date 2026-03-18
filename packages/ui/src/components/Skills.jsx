import React from "react";
import PropTypes from "prop-types";
import SectionWrapper from "./SectionWrapper.jsx";

const SkillCategory = ({ category, icon: Icon, theme }) => (
  <div
    className={`rounded-xl p-8 border transition-all duration-200 transform hover:-translate-y-1.5 group ${theme.card}`}
  >
    <div className="flex items-center gap-3 mb-6">
      <div className={`p-3 rounded-lg border ${theme.iconBox}`}>
        <Icon size={24} className={theme.iconColor} />
      </div>
      <h4 className={`text-xl font-semibold ${theme.cardTitle}`}>
        {category.title}
      </h4>
    </div>
    <div className="space-y-3">
      {category.skills.map((skill) => (
        <div key={skill} className={`flex items-center gap-2 ${theme.bodyText}`}>
          <div className={`w-2 h-2 rounded-full ${theme.bullet}`}></div>
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
  theme: PropTypes.object.isRequired,
};

const Skills = ({ section, theme }) => (
  <SectionWrapper
    id="experience"
    title={section.title}
    subtitle={section.subtitle}
    className={theme.sectionAlt}
    theme={theme}
  >
    <div className="grid md:grid-cols-3 gap-8">
      {section.categories.map((category) => (
        <SkillCategory
          key={category.title}
          category={category}
          icon={category.icon}
          theme={theme}
        />
      ))}
    </div>
  </SectionWrapper>
);

Skills.propTypes = {
  section: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  theme: PropTypes.object.isRequired,
};

export default Skills;
