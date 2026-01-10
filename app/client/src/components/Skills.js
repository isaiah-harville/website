import React from 'react';
import PropTypes from 'prop-types';
import SectionWrapper from './SectionWrapper';
import { Code2, Brain, Wrench } from 'lucide-react';

const SkillCategory = ({ category, icon: Icon }) => (
  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 group">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
        <Icon size={24} className="text-blue-400" />
      </div>
      <h4 className="text-xl font-bold text-white">{category.title}</h4>
    </div>
    <div className="space-y-3">
      {category.skills.map((skill) => (
        <div
          key={skill}
          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
        >
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          <span>{skill}</span>
        </div>
      ))}
    </div>
  </div>
);

SkillCategory.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  icon: PropTypes.elementType.isRequired
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Software Engineering',
      skills: ['Python', 'C++', 'Rust', 'REST APIs', 'PostgreSQL', 'CI/CD (DevOps)'],
      icon: Code2
    },
    {
      title: 'AI / ML',
      skills: ['PyTorch', 'Adversarial ML', 'Reinforcement Learning', 'Computer Vision', 'Deep Learning', 'MLFlow', 'Weights & Biases'],
      icon: Brain
    },
    {
      title: 'Tools & Deployment',
      skills: ['Git', 'Docker', 'Kubernetes', 'Flux', 'Talos', 'Linux', 'gRPC', 'GitOps'],
      icon: Wrench
    },
  ];

  return (
    <SectionWrapper
      id="experience"
      title="Technical Skills"
      subtitle="Technologies and tools I work with"
      className="bg-gradient-to-b from-transparent to-black/20"
    >
      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <SkillCategory key={category.title} category={category} icon={category.icon} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
