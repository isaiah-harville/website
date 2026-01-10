// Section Wrapper Component
import React from 'react';
import PropTypes from 'prop-types';

const SectionWrapper = ({
  id,
  title,
  subtitle,
  children,
  className = '',
  containerClassName = 'max-w-6xl'
}) => {
  return (
    <section id={id} className={`py-20 px-6 ${className}`}>
      <div className={`${containerClassName} mx-auto`}>
        {title && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
  containerClassName: PropTypes.string
};

export default SectionWrapper;
