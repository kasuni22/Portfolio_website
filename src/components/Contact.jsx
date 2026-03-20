import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, Youtube } from 'lucide-react';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  return (
    <section 
      id="contact" 
      className={`py-20 relative overflow-hidden transition-colors duration-300 w-full ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500 opacity-5 rounded-full blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-amber-500 opacity-5 rounded-full blur-3xl z-0 pointer-events-none"></div>

      <div className="container px-5 mx-auto relative z-10">
        
        {/* Title Block */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="sm:text-4xl text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text inline-block">
            Get In Touch
          </h1>
          <p className={`text-lg transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Have a project in mind? Let's work together
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
          
          {/* LEFT COLUMN — Contact Info */}
          <div className="lg:w-1/3 flex flex-col" data-aos="fade-right">
            <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Let's Talk
            </h2>
            <p className={`mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>

            <div className="space-y-4 mb-8">
              {/* Location */}
              <div className={`flex items-center p-4 rounded-xl border shadow-sm transition-colors duration-300 ${
                darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                <div className="p-3 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full text-white mr-4 shadow-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className={`font-bold text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Location</h3>
                  <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Negombo, Sri Lanka</p>
                </div>
              </div>

              {/* Email */}
              <div className={`flex items-center p-4 rounded-xl border shadow-sm transition-colors duration-300 ${
                darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                <div className="p-3 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full text-white mr-4 shadow-sm">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className={`font-bold text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</h3>
                  <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>kasunimadeesha@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className={`flex items-center p-4 rounded-xl border shadow-sm transition-colors duration-300 ${
                darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                <div className="p-3 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full text-white mr-4 shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className={`font-bold text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Phone</h3>
                  <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>+94 77 123 4567</p>
                </div>
              </div>
            </div>

            {/* Social Media Row */}
            <div className="flex gap-4">
              <motion.a 
                href="#"
                whileHover={{ scale: 1.2 }}
                className={`p-3 rounded-full border border-orange-500 text-orange-500 flex items-center justify-center transition-colors ${
                  darkMode ? 'hover:bg-gray-800' : 'hover:bg-orange-50'
                }`}
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                href="#"
                whileHover={{ scale: 1.2 }}
                className={`p-3 rounded-full border border-orange-500 text-orange-500 flex items-center justify-center transition-colors ${
                  darkMode ? 'hover:bg-gray-800' : 'hover:bg-orange-50'
                }`}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                href="#"
                whileHover={{ scale: 1.2 }}
                className={`p-3 rounded-full border border-orange-500 text-orange-500 flex items-center justify-center transition-colors ${
                  darkMode ? 'hover:bg-gray-800' : 'hover:bg-orange-50'
                }`}
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a 
                href="#"
                whileHover={{ scale: 1.2 }}
                className={`p-3 rounded-full border border-orange-500 text-orange-500 flex items-center justify-center transition-colors ${
                  darkMode ? 'hover:bg-gray-800' : 'hover:bg-orange-50'
                }`}
              >
                <Youtube size={20} />
              </motion.a>
            </div>
          </div>

          {/* RIGHT COLUMN — Contact Form */}
          <div className="lg:w-2/3" data-aos="fade-left">
            <div className={`p-8 rounded-2xl border shadow-md transition-colors duration-300 ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="flex flex-col">
                    <label className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Full Name
                    </label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className={`w-full rounded-xl border p-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Email Address
                    </label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className={`w-full rounded-xl border p-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col">
                  <label className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Subject
                  </label>
                  <input 
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can I help you?"
                    className={`w-full rounded-xl border p-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Message
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message here..."
                    rows={5}
                    className={`w-full rounded-xl border p-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-none ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  ></textarea>
                </div>

                {/* Submit / Success */}
                <div>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium text-lg flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-shadow"
                  >
                    <span>Send Message</span>
                    <Send size={18} />
                  </motion.button>

                  {isSuccess && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-500 font-medium text-sm mt-4 text-center"
                    >
                      Message sent successfully! I'll get back to you soon.
                    </motion.p>
                  )}
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
