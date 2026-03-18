import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

function AppShell({ site }) {
  useEffect(() => {
    document.title = site.page.title;

    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.name = "description";
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.content = site.page.description;
  }, [site.page.description, site.page.title]);

  return (
    <ErrorBoundary>
      <div className={`min-h-screen ${site.theme.page}`}>
        <Header site={site} />
        <main className="relative">
          <Hero site={site} />
          <Projects section={site.projects} theme={site.theme} />
          <Skills section={site.skills} theme={site.theme} />
          <Contact site={site} />
        </main>
        <Footer site={site} />
      </div>
    </ErrorBoundary>
  );
}

AppShell.propTypes = {
  site: PropTypes.shape({
    page: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
    projects: PropTypes.object.isRequired,
    skills: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  }).isRequired,
};

export default AppShell;
