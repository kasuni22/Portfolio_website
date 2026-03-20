import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Instagram, Youtube, MapPin, Mail, Phone, ChevronUp } from 'lucide-react';

const Footer = ({ darkMode }) => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 300) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 300) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className={`relative transition-colors duration-300 w-full ${darkMode ? 'bg-gray-950' : 'bg-gray-100'}`}>
      {/* Top Accent Line */}
      <div className="w-full h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400"></div>

      <div className="container px-5 pt-16 pb-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 text-center lg:text-left mb-16">
          
          {/* LEFT COLUMN: Brand */}
          <div className="flex flex-col items-center lg:items-start">
            <h2 className={`text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Kasuni Madeesha<span className="text-orange-500">.</span>
            </h2>
            <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              CS Undergraduate & MERN Stack Developer
            </p>
            <p className={`text-sm max-w-xs mb-6 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              Building modern web applications with clean, scalable solutions.
            </p>
            
            <div className="flex gap-3">
              <motion.a 
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className={`p-2 rounded-full border border-orange-500/30 text-orange-400 flex items-center justify-center transition-colors ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-orange-50'
                }`}
              >
                <Github size={18} />
              </motion.a>
              <motion.a 
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className={`p-2 rounded-full border border-orange-500/30 text-orange-400 flex items-center justify-center transition-colors ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-orange-50'
                }`}
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a 
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className={`p-2 rounded-full border border-orange-500/30 text-orange-400 flex items-center justify-center transition-colors ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-orange-50'
                }`}
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a 
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className={`p-2 rounded-full border border-orange-500/30 text-orange-400 flex items-center justify-center transition-colors ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-orange-50'
                }`}
              >
                <Youtube size={18} />
              </motion.a>
            </div>
          </div>

          {/* MIDDLE COLUMN: Quick Links */}
          <div className="flex flex-col items-center lg:items-start lg:pl-10">
            <h3 className="font-bold text-orange-400 mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className={`text-sm flex items-center justify-center lg:justify-start gap-1.5 transition-colors duration-300 ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  } hover:text-orange-400`}
                >
                  <span className="text-orange-400">›</span>
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Info */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="font-bold text-orange-400 mb-4">Contact Info</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <MapPin className="text-orange-400 w-4 h-4 flex-shrink-0" />
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Negombo, Sri Lanka
                </span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 group cursor-pointer">
                <Mail className="text-orange-400 w-4 h-4 flex-shrink-0 group-hover:text-amber-500 transition-colors" />
                <span className={`text-sm transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'} group-hover:text-orange-400`}>
                  kasunimadeesha@gmail.com
                </span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 group cursor-pointer">
                <Phone className="text-orange-400 w-4 h-4 flex-shrink-0 group-hover:text-amber-500 transition-colors" />
                <span className={`text-sm transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'} group-hover:text-orange-400`}>
                  +94 77 123 4567
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar Segment */}
        <div className={`pt-8 border-t flex flex-col lg:flex-row items-center justify-between gap-4 ${
          darkMode ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            © 2025 Kasuni Madeesha. All rights reserved.
          </p>
          <p className={`text-sm flex items-center gap-1.5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            Made with <span className="text-red-400">♥</span> using React & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Scroll To Top Button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollTop}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg hover:shadow-[0_0_20px_rgba(249,115,22,0.6)] transition-shadow"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
