import React, { useState, useEffect } from "react";
import { User, Code, Briefcase, MessageSquare, Menu, X } from "lucide-react";
import useSmoothScroll from "../hooks/useSmoothScroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollToSection = useSmoothScroll();

  const navItems = [
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: Code },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "contact", label: "Contact", icon: MessageSquare },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full backdrop-blur-md border-b border-gray-800 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 shadow-lg" : "bg-black/60"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-100 tracking-tight">
            IRH — Portfolio
          </h1>

          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 text-gray-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-gray-700"
                  aria-label={`Navigate to ${item.label}`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="flex items-center space-x-2 w-full px-4 py-3 rounded-lg transition-all duration-200 text-gray-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-gray-700"
                  aria-label={`Navigate to ${item.label}`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
