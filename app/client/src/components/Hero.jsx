import React, { useState } from "react";
import PropTypes from "prop-types";
import SocialLinks from "./SocialLinks";

const Hero = ({ site }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { hero } = site;

  return (
    <section id="about" className="pt-32 pb-24 px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)]">
        <div className="text-center lg:text-left">
          <p className="site-text-soft mb-5 text-sm uppercase tracking-[0.32em]">
            {hero.eyebrow}
          </p>

          <h1 className="site-display text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
            {hero.name}
          </h1>

          <p className="site-text-muted mt-4 text-xl font-medium md:text-2xl">
            {hero.role}
          </p>

          <p className="site-text-muted mx-auto mt-6 max-w-3xl text-lg leading-8 lg:mx-0">
            {hero.summary}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            {hero.badges.map((badge) => (
              <span
                key={badge}
                className="site-pill rounded-full px-4 py-2 text-sm font-medium"
              >
                {badge}
              </span>
            ))}
          </div>

          <SocialLinks
            links={site.socialLinks}
            variant="icons"
            className="mt-10 justify-center lg:justify-start"
          />
        </div>

        <aside className="site-surface rounded-[2rem] p-6 sm:p-8">
          <div className="site-avatar-frame relative mx-auto flex h-72 w-72 max-w-full items-center justify-center overflow-hidden rounded-[2rem]">
            {hero.avatar.type === "image" ? (
              <img
                src={hero.avatar.src}
                alt={hero.avatar.alt}
                className={`h-full w-full object-cover transition-opacity duration-500 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageLoaded(true)}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.9),transparent_28%),linear-gradient(145deg,rgba(255,255,255,0.92),rgba(255,229,240,0.78))]">
                <span className="site-display text-7xl font-semibold tracking-[0.18em] text-[color:var(--accent-strong)]">
                  {hero.avatar.initials}
                </span>
              </div>
            )}
          </div>

          <div className="mt-6">
            <div className="site-accent-line mx-auto mb-5 h-px w-24 lg:mx-0" />
            <h2 className="site-display text-3xl font-semibold leading-tight">
              {hero.spotlightTitle}
            </h2>
            <p className="site-text-muted mt-4 text-base leading-7">
              {hero.spotlightText}
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

Hero.propTypes = {
  site: PropTypes.shape({
    hero: PropTypes.shape({
      eyebrow: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
      badges: PropTypes.arrayOf(PropTypes.string).isRequired,
      spotlightTitle: PropTypes.string.isRequired,
      spotlightText: PropTypes.string.isRequired,
      avatar: PropTypes.shape({
        type: PropTypes.oneOf(["image", "monogram"]).isRequired,
        src: PropTypes.string,
        alt: PropTypes.string,
        initials: PropTypes.string,
      }).isRequired,
    }).isRequired,
    socialLinks: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        icon: PropTypes.elementType.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default Hero;
