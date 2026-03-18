import React, { useState } from "react";
import PropTypes from "prop-types";
import { Send, CheckCircle } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SocialLinks from "./SocialLinks";

const FormField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = true,
  rows,
  placeholder,
}) => {
  const InputComponent = rows ? "textarea" : "input";

  return (
    <div>
      <label
        htmlFor={name}
        className="site-text-muted mb-2 block text-sm font-medium"
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
        className="site-input rounded-2xl px-4 py-3"
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
    >
      <p className="site-text-muted mb-12 text-center text-lg">
        {site.contact.intro}{" "}
        <a
          href={`mailto:${site.contact.email}`}
          className="site-link-text font-semibold underline underline-offset-4"
        >
          {site.contact.email}
        </a>
      </p>

      <div className="site-surface mb-12 rounded-[1.75rem] p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
            <FormField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
            />
          </div>

          <FormField
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What would you like to discuss?"
          />

          <FormField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Your message..."
          />

          <button
            type="submit"
            aria-label="Send message"
            className="site-action-button flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 font-medium"
          >
            <Send size={18} />
            <span>Send Message</span>
          </button>

          {submitStatus && (
            <div className="site-surface-soft site-text-muted flex items-center justify-center gap-2 rounded-2xl p-4">
              <CheckCircle size={20} />
              <span>{submitStatus.message}</span>
            </div>
          )}
        </form>
      </div>

      <SocialLinks links={site.socialLinks} variant="buttons" />
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
  }).isRequired,
};

export default Contact;
