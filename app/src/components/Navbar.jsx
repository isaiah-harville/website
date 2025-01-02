import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-500">My Portfolio</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-gray-600 hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-600 hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-gray-600 hover:text-blue-500">
              Projects
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/your-github-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
