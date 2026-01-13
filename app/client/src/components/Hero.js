import React, { useState } from 'react';
import SocialLinks from './SocialLinks';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="about" className="pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-gradient"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-12 animate-fadeIn">
          {/* Profile Image */}
          <div className="w-40 h-40 mx-auto mb-8 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-full animate-spin-slow opacity-75 blur-md"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 bg-gradient-to-br from-purple-400 to-blue-500">
              <img
                src={profileImage}
                alt="Isaiah Harville - Software Engineer"
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  setImageError(true);
                  setImageLoaded(true);
                }}
              />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white animate-shimmer">
            Isaiah Harville
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed">
            Software Engineer specializing in{' '}
            <span className="text-blue-400 font-semibold">Machine Learning</span>
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-8">
            <span className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
              🎓 M.S. Computer Science @ Georgia Tech
            </span>
          </div>
        </div>

        {/* Social Links */}
        <SocialLinks variant="icons" className="mb-12 animate-fadeIn" />

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-scroll"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
