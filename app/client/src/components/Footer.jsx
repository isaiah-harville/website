import React from "react";
import PropTypes from "prop-types";

const Footer = ({ site }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="mt-8 border-t px-6 py-10"
      style={{
        borderColor: "var(--border)",
        background: "var(--footer-bg)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
          <p className="site-text-soft">
            © {currentYear} {site.identity.footerName}
          </p>
          <p className="site-text-soft">{site.footer.note}</p>
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
    footer: PropTypes.shape({
      note: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Footer;
