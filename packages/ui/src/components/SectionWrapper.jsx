import React from "react";
import PropTypes from "prop-types";

const SectionWrapper = ({
  id,
  title,
  subtitle,
  children,
  className = "",
  containerClassName = "max-w-6xl",
  theme,
}) => {
  return (
    <section id={id} className={`py-20 px-6 ${className}`}>
      <div className={`${containerClassName} mx-auto`}>
        {title && (
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme.sectionTitle}`}>
              {title}
            </h2>
            {subtitle && (
              <p className={`text-xl max-w-3xl mx-auto ${theme.sectionSubtitle}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

SectionWrapper.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  theme: PropTypes.object.isRequired,
};

export default SectionWrapper;
