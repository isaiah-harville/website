import React from "react";
import PropTypes from "prop-types";

const SectionWrapper = ({
  id,
  title,
  subtitle,
  children,
  className = "",
  containerClassName = "max-w-6xl",
}) => {
  return (
    <section id={id} className={`py-20 px-6 ${className}`}>
      <div className={`${containerClassName} mx-auto`}>
        {title && (
          <div className="text-center mb-16">
            <div className="site-accent-line mx-auto mb-5 h-px w-28"></div>
            <h2 className="site-display mb-4 text-4xl font-semibold md:text-5xl">
              {title}
            </h2>
            {subtitle && (
              <p className="site-text-muted mx-auto max-w-3xl text-xl leading-8">
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
};

export default SectionWrapper;
