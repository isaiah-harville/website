import React from "react";
import PropTypes from "prop-types";
import SectionWrapper from "./SectionWrapper";
import { skillCategories } from "../content/skills";

const SkillCategory = ({ category, icon: Icon }) => (
  <div className="bg-[#0f1117] rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-200 transform hover:-translate-y-1.5 group">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-3 bg-white/5 rounded-lg border border-gray-800 group-hover:border-gray-700">
        <Icon size={24} className="text-gray-200" />
      </div>
      <h4 className="text-xl font-semibold text-white">{category.title}</h4>
    </div>
    <div className="space-y-3">
      {category.skills.map((skill) => (
        <div
          key={skill}
          className="flex items-center gap-2 text-gray-300"
        >
          <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
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

const Skills = () => {
  return (
    <SectionWrapper
      id="experience"
      title="Technical Skills"
      subtitle="Technologies and tools I work with"
      className="bg-black/20"
    >
      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <SkillCategory
            key={category.title}
            category={category}
            icon={category.icon}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
