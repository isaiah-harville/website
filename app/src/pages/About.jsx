import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  useEffect(() => {
    // Dynamically load the LinkedIn script
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Cleanup the script to avoid duplicate loads
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-500 mb-4">About Me</h1>
        <p className="text-lg text-gray-700 mb-6">
          I am a software engineer specializing in building modern and intuitive web applications. Connect with me on LinkedIn below:
        </p>
        <div
          className="badge-base LI-profile-badge"
          data-locale="en_US"
          data-size="large"
          data-theme="dark"
          data-type="VERTICAL"
          data-vanity="isaiahharville"
          data-version="v1"
        >
          <a
            className="badge-base__link LI-simple-link"
            href="https://www.linkedin.com/in/isaiahharville?trk=profile-badge"
          >
            Isaiah Harville
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
