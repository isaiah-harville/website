import React from 'react';
import { Github, Linkedin, Mail, User } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: Github,
      color: 'hover:text-gray-800'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourprofile',
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      url: 'mailto:your.email@example.com',
      icon: Mail,
      color: 'hover:text-red-500'
    }
  ];

  return (
    <section id="about" className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
            <User size={64} className="text-white" />
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">
            Full Stack Developer
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Passionate about creating innovative web solutions with modern technologies.
            Specializing in React.js, Node.js, and cloud deployment.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 bg-white/10 rounded-full text-gray-300 transition-all duration-300 transform hover:scale-110 ${social.color}`}
              >
                <Icon size={24} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
