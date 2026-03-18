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
      className={`fixed top-0 w-full backdrop-blur-md border-b z-50 transition-all duration-300 ${
        site.theme.nav.border
      } ${scrolled ? site.theme.nav.scrolled : site.theme.nav.idle}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1
            className={`text-2xl font-semibold tracking-tight ${site.theme.nav.title}`}
          >
            {site.identity.wordmark}
          </h1>

          <div className="hidden md:flex space-x-2">
            {site.navItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 border border-transparent ${site.theme.nav.item}`}
                  aria-label={`Navigate to ${item.label}`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <button
            className={`md:hidden ${site.theme.nav.mobileButton}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {site.navItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-2 w-full px-4 py-3 rounded-lg transition-all duration-200 border border-transparent text-left ${site.theme.nav.item}`}
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
    }).isRequired,
    navItems: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        icon: PropTypes.elementType.isRequired,
      }),
    ).isRequired,
    theme: PropTypes.shape({
      nav: PropTypes.shape({
        border: PropTypes.string.isRequired,
        idle: PropTypes.string.isRequired,
        scrolled: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        item: PropTypes.string.isRequired,
        mobileButton: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Header;
