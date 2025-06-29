import React from 'react';
import { Github, Linkedin, Mail, User } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/isaiahharvi',
      icon: Github,
      color: 'hover:text-gray-800'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/isaiahharville',
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      url: 'mailto:isaiah@harville.dev',
      icon: Mail,
      color: 'hover:text-red-500'
    }
  ];

  return (
    <section id="about" className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          {/* <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center"> */}
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
             <img
                src="https://media.licdn.com/dms/image/v2/D5603AQEalXn5oF8iUg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1710020124672?e=1756944000&v=beta&t=LcnZuf8X9Z8l6kszUjILOlhpvTCYkbIzHCYXEF7Ffyw"
              alt="Isaiah Harville"
              className="w-full h-full object-cover"
            />
            {/* <User size={64} className="text-white" /> */}
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">
            Isaiah Harville
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Software Engineer with a specialization in Machine Learning.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400 mb-6">
            <span>Part-Time M.S. Computer Science @ Georgia Tech</span>
            </div>
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
