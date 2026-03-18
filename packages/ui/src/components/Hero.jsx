import React, { useState } from "react";
import PropTypes from "prop-types";
import SocialLinks from "./SocialLinks.jsx";

const Hero = ({ site }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { avatar } = site.hero;

  return (
    <section id="about" className="pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-10">
          <div
            className={`w-36 h-36 mx-auto mb-8 rounded-full overflow-hidden border ${site.theme.hero.avatarFrame}`}
          >
            {avatar.type === "image" ? (
              <img
                src={avatar.src}
                alt={avatar.alt}
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageLoaded(true)}
              />
            ) : (
              <div
                className={`flex h-full w-full items-center justify-center text-4xl font-semibold tracking-[0.12em] ${site.theme.hero.avatarMonogram}`}
              >
                {avatar.initials}
              </div>
            )}
          </div>

          <h1
            className={`text-5xl md:text-6xl font-semibold mb-4 tracking-tight ${site.theme.hero.name}`}
          >
            {site.hero.name}
          </h1>

          <p
            className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${site.theme.hero.summary}`}
          >
            {site.hero.summary}
          </p>

          <div className="flex flex-wrap justify-center gap-3 text-sm mt-6">
            {site.hero.badges.map((badge) => (
              <span
                key={badge}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border ${site.theme.hero.badge}`}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <SocialLinks
          links={site.socialLinks}
          theme={site.theme}
          variant="icons"
          className="mb-6"
        />
      </div>
    </section>
  );
};

Hero.propTypes = {
  site: PropTypes.shape({
    hero: PropTypes.shape({
      name: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
      badges: PropTypes.arrayOf(PropTypes.string).isRequired,
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
    theme: PropTypes.shape({
      hero: PropTypes.shape({
        avatarFrame: PropTypes.string.isRequired,
        avatarMonogram: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        badge: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Hero;
