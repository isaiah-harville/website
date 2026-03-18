import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import { getSiteProfile } from "./sites";

function App() {
  const site = getSiteProfile();

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

export default App;
