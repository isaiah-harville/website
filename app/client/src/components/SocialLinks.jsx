import React from "react";
import PropTypes from "prop-types";

const SocialLinks = ({ links, variant = "icons", className = "" }) => {
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
              className="site-icon-button flex items-center justify-center rounded-full p-4 transition-all duration-200 hover:scale-105"
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
              className="site-action-button flex items-center gap-3 rounded-full px-6 py-3 font-medium transition-all duration-200"
            >
              <Icon size={20} />
              <span>{social.name}</span>
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
  variant: PropTypes.oneOf(["icons", "buttons"]),
  className: PropTypes.string,
};

export default SocialLinks;
