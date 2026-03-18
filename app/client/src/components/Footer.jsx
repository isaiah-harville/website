import React from "react";
import PropTypes from "prop-types";

const Footer = ({ site }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-8 px-6 border-t ${site.theme.footer}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className={`${site.theme.footerText} text-center`}>
            © {currentYear} {site.identity.footerName}
          </p>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  site: PropTypes.shape({
    identity: PropTypes.shape({
      footerName: PropTypes.string.isRequired,
    }).isRequired,
    theme: PropTypes.shape({
      footer: PropTypes.string.isRequired,
      footerText: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Footer;
