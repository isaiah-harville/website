import React from "react";
import PropTypes from "prop-types";

export const LoadingCard = () => (
  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 animate-pulse">
    <div className="h-8 bg-white/20 rounded w-3/4 mb-4"></div>
    <div className="h-4 bg-white/20 rounded w-full mb-2"></div>
    <div className="h-4 bg-white/20 rounded w-5/6 mb-6"></div>
    <div className="flex gap-2 mb-6">
      <div className="h-6 w-20 bg-white/20 rounded-full"></div>
      <div className="h-6 w-24 bg-white/20 rounded-full"></div>
      <div className="h-6 w-16 bg-white/20 rounded-full"></div>
    </div>
    <div className="flex gap-4">
      <div className="h-10 w-24 bg-white/20 rounded-lg"></div>
      <div className="h-10 w-24 bg-white/20 rounded-lg"></div>
    </div>
  </div>
);

export const LoadingSpinner = ({ size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-16 h-16",
  };

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div
        className={`${sizeClasses[size]} border-4 border-white/20 border-t-white rounded-full animate-spin`}
      ></div>
    </div>
  );
};

LoadingSpinner.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  className: PropTypes.string,
};

export const LoadingGrid = ({ count = 3 }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {Array.from({ length: count }).map((_, i) => (
      <LoadingCard key={i} />
    ))}
  </div>
);

LoadingGrid.propTypes = {
  count: PropTypes.number,
};
