import React, { useState } from "react";
import SocialLinks from "./SocialLinks";
import profileImage from "../assets/profile.jpg";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="about" className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-gradient"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-12 animate-fadeIn">
          <div className="w-40 h-40 mx-auto mb-8 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-full animate-spin-slow opacity-75 blur-md"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 bg-gradient-to-br from-purple-400 to-blue-500">
              <img
                src={profileImage}
                alt="Isaiah Harville - Software Engineer"
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageLoaded(true)}
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white animate-shimmer">
            Isaiah Harville
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed">
            Software Engineer specializing in{" "}
            <span className="text-blue-400 font-semibold">
              Machine Learning
            </span>
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-8">
            <span className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
              🎓 M.S. Computer Science @ Georgia Tech
            </span>
          </div>
        </div>

        <SocialLinks variant="icons" className="mb-12 animate-fadeIn" />
      </div>
    </section>
  );
};

export default Hero;
