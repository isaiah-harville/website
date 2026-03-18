import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Menu, X } from "lucide-react";
import useSmoothScroll from "../hooks/useSmoothScroll";

const Header = ({ site }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollToSection = useSmoothScroll();

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
      className={`site-nav-shell fixed top-0 z-50 w-full border-b backdrop-blur-md transition-all duration-300 ${
        scrolled ? "site-nav-scrolled" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="site-display text-2xl font-semibold tracking-tight">
              {site.identity.wordmark}
            </p>
            <p className="site-text-soft hidden md:block mt-1 text-xs uppercase tracking-[0.28em]">
              {site.identity.role}
            </p>
          </div>

          <div className="hidden md:flex space-x-2">
            {site.navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="site-nav-button flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
                  aria-label={`Navigate to ${item.label}`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <button
            className="site-icon-button md:hidden rounded-full p-3"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="site-surface md:hidden mt-4 space-y-2 rounded-3xl p-3">
            {site.navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="site-nav-button flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left"
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

Header.propTypes = {
  site: PropTypes.shape({
    identity: PropTypes.shape({
      wordmark: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    }).isRequired,
    navItems: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        icon: PropTypes.elementType.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default Header;
