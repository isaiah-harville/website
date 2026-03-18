import React from "react";
import PropTypes from "prop-types";

const SocialLinks = ({ links, theme, variant = "icons", className = "" }) => {
  if (variant === "icons") {
    return (
      <div className={`flex justify-center gap-4 ${className}`}>
        {links.map((social) => {
          const Icon = social.icon;
          const isExternal = social.url.startsWith("http");

          return (
            <a
              key={social.name}
              href={social.url}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              aria-label={social.name}
              className={`p-4 rounded-full transition-all duration-200 transform hover:scale-105 border ${theme.socialIcon}`}
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
        {links.map((social) => {
          const Icon = social.icon;
          const isExternal = social.url.startsWith("http");

          return (
            <a
              key={social.name}
              href={social.url}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              aria-label={social.name}
              className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-200 border ${theme.socialButton}`}
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
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
    }),
  ).isRequired,
  theme: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(["icons", "buttons"]),
  className: PropTypes.string,
};

export default SocialLinks;
