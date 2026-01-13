import React, { useState } from "react";
import SocialLinks from "./SocialLinks";
import profileImage from "../assets/profile.jpg";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="about" className="pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-10">
          <div className="w-36 h-36 mx-auto mb-8 rounded-full overflow-hidden border border-gray-800 bg-[#0f1117] shadow-[0_15px_40px_-25px_rgba(0,0,0,0.7)]">
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

          <h1 className="text-5xl md:text-6xl font-semibold text-white mb-4 tracking-tight">
            Isaiah Harville
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Software Engineer focused on building reliable systems and products with modern ML tooling.
          </p>

          <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-300 mt-6">
            <span className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-gray-800">
              🎓 M.S. Computer Science @ Georgia Tech
            </span>
          </div>
        </div>

        <SocialLinks variant="icons" className="mb-6" />
      </div>
    </section>
  );
};

export default Hero;
