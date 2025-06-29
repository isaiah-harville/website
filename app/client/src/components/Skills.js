import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Software Engineering',
      skills: ['Python', 'C++', 'Rust', 'Rest APIs', 'PostgreSQL', 'CI/CD (DevOps)']
    },
    {
      title: 'AI / ML',
      skills: ['PyTorch', 'Adversarial ML', 'Reinforcement Learning', 'ML Flow', 'W&B']
    },
    {
      title: 'Tools & Deployment',
      skills: ['Git', 'Docker', 'Kubernetes', 'Linux', 'gRPC']
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-white text-center mb-16">Technical Skills</h3>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h4 className="text-xl font-bold text-white mb-4">{category.title}</h4>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div key={skill} className="text-gray-300">{skill}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
