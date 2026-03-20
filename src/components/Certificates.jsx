import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award } from 'lucide-react';

const Certificates = ({ darkMode }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web Development', 'Programming', 'Database', 'Cloud', 'Design'];

  const certificates = [
    {
      id: 1,
      title: 'React - The Complete Guide',
      organization: 'Udemy',
      category: 'Web Development',
      date: 'Dec 2024',
    },
    {
      id: 2,
      title: 'Laravel PHP Framework',
      organization: 'Coursera',
      category: 'Web Development',
      date: 'Oct 2024',
    },
    {
      id: 3,
      title: 'Python for Everybody',
      organization: 'University of Michigan / Coursera',
      category: 'Programming',
      date: 'Aug 2024',
    },
    {
      id: 4,
      title: 'Firebase & Firestore Mastery',
      organization: 'Udemy',
      category: 'Cloud',
      date: 'Jun 2024',
    },
    {
      id: 5,
      title: 'MySQL Database Design',
      organization: 'LinkedIn Learning',
      category: 'Database',
      date: 'Apr 2024',
    },
    {
      id: 6,
      title: 'UI/UX Design Fundamentals',
      organization: 'Google',
      category: 'Design',
      date: 'Feb 2024',
    },
  ];

  const filteredCertificates = activeFilter === 'All'
    ? certificates
    : certificates.filter(cert => cert.category === activeFilter);

  return (
    <section 
      id="certificates" 
      className={`py-20 transition-colors duration-300 w-full ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="container px-5 mx-auto">
        
        {/* Title Block */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="sm:text-4xl text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text inline-block">
            My Certificates
          </h1>
          <p className={`text-lg transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Courses & achievements I have completed
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up" data-aos-delay="100">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md border border-transparent'
                  : 'border border-orange-500 text-orange-500 bg-transparent hover:bg-orange-500/10'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -5 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(249,115,22,0.3)] flex flex-col relative ${
                darkMode
                  ? 'bg-gray-800 border-gray-700'
                  : 'bg-white border-gray-200'
              }`}
            >
              {/* Top Accent Strip */}
              <div className="h-3 w-full bg-gradient-to-r from-orange-400 to-orange-600 border-b border-orange-500/30"></div>

              <div className="p-6 flex flex-col flex-grow items-center text-center">
                {/* Large Icon */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors duration-300 ${
                  darkMode ? 'bg-orange-900/30 text-orange-400' : 'bg-orange-100 text-orange-500'
                }`}>
                  <Award size={32} />
                </div>
                
                {/* Category Badge */}
                <span className={`text-xs px-3 py-1 rounded-full font-medium mb-3 transition-colors duration-300 ${
                  darkMode 
                    ? 'bg-orange-900/30 text-orange-400' 
                    : 'bg-orange-100 text-orange-600'
                }`}>
                  {cert.category}
                </span>

                {/* Title & Org */}
                <h2 className={`text-lg font-bold mb-1 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {cert.title}
                </h2>
                <p className="text-orange-500 font-medium text-sm mb-4">
                  {cert.organization}
                </p>
                
                {/* Space filler to push everything else down if titles have different lines */}
                <div className="flex-grow"></div>

                {/* Date */}
                <div className={`flex items-center gap-1.5 text-xs mb-5 font-medium transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  <Calendar size={14} />
                  <span>{cert.date}</span>
                </div>

                {/* Action CTA */}
                <button 
                  className="w-full py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  View Certificate
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Strip */}
        <div className="text-center mt-12" data-aos="fade-up">
          <p className={`text-sm italic transition-colors duration-300 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            More certificates coming soon...
          </p>
        </div>

      </div>
    </section>
  );
};

export default Certificates;
