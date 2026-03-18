import React, { useState } from "react";
import PropTypes from "prop-types";
import { Send, CheckCircle } from "lucide-react";
import SectionWrapper from "./SectionWrapper.jsx";
import SocialLinks from "./SocialLinks.jsx";

const FormField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = true,
  rows,
  placeholder,
  theme,
}) => {
  const InputComponent = rows ? "textarea" : "input";

  return (
    <div>
      <label
        htmlFor={name}
        className={`block text-sm font-medium mb-2 ${theme.bodyText}`}
      >
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <InputComponent
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 ${theme.input}`}
        placeholder={placeholder}
      />
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  rows: PropTypes.number,
  placeholder: PropTypes.string,
  theme: PropTypes.object.isRequired,
};

const Contact = ({ site }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = formData.subject || site.contact.subjectDefault;
    const body = encodeURIComponent(
      `Hi ${site.contact.recipientName},\n\n${formData.message}\n\nFrom,\n${formData.name} (${formData.email})`,
    );
    const mailtoLink = `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${body}`;

    window.location.href = mailtoLink;
    setSubmitStatus({
      type: "success",
      message: site.contact.successMessage,
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <SectionWrapper
      id="contact"
      title={site.contact.title}
      subtitle={site.contact.subtitle}
      containerClassName="max-w-4xl"
      theme={site.theme}
    >
      <p className={`text-center mb-12 ${site.theme.bodyText}`}>
        {site.contact.intro}{" "}
        <a
          href={`mailto:${site.contact.email}`}
          className={`font-semibold underline underline-offset-4 ${site.theme.link}`}
        >
          {site.contact.email}
        </a>
      </p>

      <div
        className={`rounded-xl p-8 border mb-12 transition-all ${site.theme.card}`}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              theme={site.theme}
            />
            <FormField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              theme={site.theme}
            />
          </div>

          <FormField
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={site.contact.subjectPlaceholder}
            theme={site.theme}
          />

          <FormField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Your message..."
            theme={site.theme}
          />

          <button
            type="submit"
            aria-label="Send message"
            className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all border ${site.theme.primaryButton}`}
          >
            <Send size={18} />
            <span>Send Message</span>
          </button>

          {submitStatus && (
            <div
              className={`flex items-center justify-center gap-2 p-4 rounded-lg border ${site.theme.success}`}
            >
              <CheckCircle size={20} />
              <span>{submitStatus.message}</span>
            </div>
          )}
        </form>
      </div>

      <SocialLinks
        links={site.socialLinks}
        theme={site.theme}
        variant="buttons"
      />
    </SectionWrapper>
  );
};

Contact.propTypes = {
  site: PropTypes.shape({
    contact: PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      intro: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      subjectDefault: PropTypes.string.isRequired,
      subjectPlaceholder: PropTypes.string.isRequired,
      recipientName: PropTypes.string.isRequired,
      successMessage: PropTypes.string.isRequired,
    }).isRequired,
    socialLinks: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        icon: PropTypes.elementType.isRequired,
      }),
    ).isRequired,
    theme: PropTypes.object.isRequired,
  }).isRequired,
};

export default Contact;
