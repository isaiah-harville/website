import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Your Name. Built with React.js and Node.js
        </p>
      </div>
    </footer>
  );
};

export default Footer;
