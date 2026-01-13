import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import PropTypes from "prop-types";

export const socialLinksData = [
  {
    name: "GitHub",
    url: "https://github.com/isaiah-harville",
    icon: Github,
    color: "hover:text-gray-300 hover:bg-gray-800/50",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/isaiah-harvillelle",
    icon: Linkedin,
    color: "hover:text-blue-400 hover:bg-blue-600/20",
  },
  {
    name: "Email",
    url: "mailto:isaiah@harville.dev",
    icon: Mail,
    color: "hover:text-red-400 hover:bg-red-600/20",
  },
];

const SocialLinks = ({ variant = "icons", className = "" }) => {
  if (variant === "icons") {
    return (
      <div className={`flex justify-center gap-4 ${className}`}>
        {socialLinksData.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className={`p-4 bg-white/10 rounded-full text-gray-300 transition-all duration-300 transform hover:scale-110 ${social.color}`}
            >
              <Icon size={24} />
            </a>
          );
        })}
      </div>
    );
  }

  if (variant === "buttons") {
    return (
      <div className={`flex flex-wrap justify-center gap-4 ${className}`}>
        {socialLinksData.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className={`flex items-center gap-3 px-6 py-3 bg-white/10 rounded-lg text-gray-300 hover:bg-white/20 transition-all duration-300 ${social.color}`}
            >
              <Icon size={20} />
              <span className="font-medium">{social.name}</span>
            </a>
          );
        })}
      </div>
    );
  }

  return null;
};

SocialLinks.propTypes = {
  variant: PropTypes.oneOf(["icons", "buttons"]),
  className: PropTypes.string,
};

export default SocialLinks;
