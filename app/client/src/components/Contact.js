import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Send, CheckCircle, XCircle } from 'lucide-react';
import { contactAPI } from '../services/api';
import SectionWrapper from './SectionWrapper';
import SocialLinks from './SocialLinks';

const FormField = ({ label, name, type = 'text', value, onChange, required = true, rows, placeholder }) => {
  const InputComponent = rows ? 'textarea' : 'input';

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-2">
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
        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
  placeholder: PropTypes.string
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await contactAPI.sendMessage(formData);
      setSubmitStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please reach out directly at isaiah@harville.dev'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper
      id="contact"
      title="Let's Connect"
      subtitle="I'm always interested in new opportunities and collaborations."
      containerClassName="max-w-4xl"
    >
      <p className="text-center text-gray-400 mb-12">
        Feel free to reach out directly at{' '}
        <a href="mailto:isaiah@harville.dev" className="text-blue-400 hover:text-blue-300 font-semibold">
          isaiah@harville.dev
        </a>
      </p>

      {/* Contact Form */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-12 hover:bg-white/[0.12] transition-all">
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
            disabled={isSubmitting}
            aria-label="Send message"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed rounded-lg text-white font-medium transition-all transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <Send size={18} />
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          </button>

          {submitStatus && (
            <div className={`flex items-center justify-center gap-2 p-4 rounded-lg ${
              submitStatus.type === 'success'
                ? 'bg-green-500/20 text-green-200 border border-green-500/30'
                : 'bg-red-500/20 text-red-200 border border-red-500/30'
            }`}>
              {submitStatus.type === 'success' ? (
                <CheckCircle size={20} />
              ) : (
                <XCircle size={20} />
              )}
              <span>{submitStatus.message}</span>
            </div>
          )}
        </form>
      </div>

      {/* Social Links */}
      <SocialLinks variant="buttons" />
    </SectionWrapper>
  );
};

export default Contact;
