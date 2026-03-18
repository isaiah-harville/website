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
  }, [site]);

  return (
    <ErrorBoundary>
      <div
        className="site-shell site-body relative isolate min-h-screen"
        style={site.theme.variables}
      >
        <div
          className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
          aria-hidden="true"
        >
          {site.theme.backgroundLayers.map((layer) => (
            <div
              key={layer.key}
              className={layer.className}
              style={layer.style}
            />
          ))}
        </div>

        <Header site={site} />
        <main className="relative">
          <Hero site={site} />
          <Projects section={site.highlights} />
          <Skills section={site.strengths} />
          <Contact site={site} />
        </main>
        <Footer site={site} />
      </div>
    </ErrorBoundary>
  );
}

export default App;
