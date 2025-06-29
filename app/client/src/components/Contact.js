import React, { useState } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { contactAPI } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: Github,
      color: 'hover:text-gray-800'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourprofile',
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      url: 'mailto:your.email@example.com',
      icon: Mail,
      color: 'hover:text-red-500'
    }
  ];

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
      await contactAPI.send(formData);
      setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-4xl font-bold text-white text-center mb-8">Let's Connect</h3>
        <p className="text-xl text-gray-300 text-center mb-12">
          I'm always interested in new opportunities and collaborations.
        </p>

        {/* Contact Form */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="What would you like to discuss?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 rounded-lg text-white font-medium transition-colors"
            >
              <Send size={18} />
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </button>

            {submitStatus && (
              <div className={`text-center p-3 rounded-lg ${
                submitStatus.type === 'success'
                  ? 'bg-green-500/20 text-green-200'
                  : 'bg-red-500/20 text-red-200'
              }`}>
                {submitStatus.message}
              </div>
            )}
          </form>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-8">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-3 px-6 py-4 bg-white/10 rounded-lg text-gray-300 hover:bg-white/20 transition-all duration-300 ${social.color}`}
              >
                <Icon size={24} />
                <span className="text-lg">{social.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
