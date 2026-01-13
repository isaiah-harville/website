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
        className="block text-sm font-medium text-gray-300 mb-2"
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
        className="w-full px-4 py-3 bg-black/40 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-700 transition-all"
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

const Contact = () => {
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
    const subject = formData.subject || "Let's connect";
    const body = encodeURIComponent(
      `Hi Isaiah,\n\n${formData.message}\n\nFrom,\n${formData.name} (${formData.email})`,
    );
    const mailtoLink = `mailto:isaiah@harville.dev?subject=${encodeURIComponent(subject)}&body=${body}`;

    window.location.href = mailtoLink;
    setSubmitStatus({
      type: "success",
      message: "Opening your email client so you can send this message.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <SectionWrapper
      id="contact"
      title="Let's Connect"
      subtitle="I'm always interested in new opportunities and collaborations."
      containerClassName="max-w-4xl"
    >
      <p className="text-center text-gray-300 mb-12">
        Feel free to reach out directly at{" "}
        <a
          href="mailto:isaiah@harville.dev"
          className="text-gray-100 hover:text-white font-semibold underline underline-offset-4"
        >
          isaiah@harville.dev
        </a>
      </p>

      <div className="bg-[#0f1117] rounded-xl p-8 border border-gray-800 mb-12 hover:border-gray-700 transition-all">
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
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white font-medium transition-all border border-gray-800 hover:border-gray-700"
          >
            <Send size={18} />
            <span>Send Message</span>
          </button>

          {submitStatus && (
            <div className="flex items-center justify-center gap-2 p-4 rounded-lg bg-white/5 text-gray-200 border border-gray-800">
              <CheckCircle size={20} />
              <span>{submitStatus.message}</span>
            </div>
          )}
        </form>
      </div>

      <SocialLinks variant="buttons" />
    </SectionWrapper>
  );
};

export default Contact;
