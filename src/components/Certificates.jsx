import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award } from 'lucide-react';
import cert5 from '../assets/certificates/certificate (5).png';
import cert1a from '../assets/certificates/certificate (1a).png';
import cert2 from '../assets/certificates/certificate (2).png';
import cert3a from '../assets/certificates/certificate (3a).png';
import cert4a from '../assets/certificates/certificate (4a).png';

const Certificates = ({ darkMode }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web Development', 'API & Testing', 'AI & ML', 'Networking & OS'];

  const certificates = [
    {
      id: 1,
      title: "Postman API Fundamentals Student Expert",
      organization: "Postman",
      category: "API & Testing",
      date: "Feb 2026",
      url: "https://badges.parchment.com/public/assertions/oxBrl2IfRLSvxsdYtWY9uw",
      image: cert5,
    },
    {
      id: 2,
      title: "MERN Full-Stack Web Development",
      organization: "SKYREK",
      category: "Web Development",
      date: "Jul 2025",
      url: "https://certificate.skyrek.com/certifcates/completion/XFw09XPZaQbS",
      image: cert1a,
    },
    {
      id: 3,
      title: "Machine Learning I",
      organization: "Columbia+",
      category: "AI & ML",
      date: "Feb 2026",
      url: "https://badges.plus.columbia.edu/1d3a15d2-7316-4716-bba7-2c275d30dceb#acc.xehaBuRJ",
      image: cert2,
    },
    {
      id: 4,
      title: "Linux Essentials",
      organization: "Cisco Networking Academy",
      category: "Networking & OS",
      date: "Mar 2026",
      url: "https://www.credly.com/badges/60b8e5bb-f237-47b8-85e4-4763d20d16dd/linked_in_profile",
      image: cert3a,
    },
    {
      id: 5,
      title: "Linux Unhatched",
      organization: "Cisco Networking Academy",
      category: "Networking & OS",
      date: "Mar 2026",
      url: "https://www.credly.com/badges/9385885e-dadb-450c-b18a-c6186257a167/linked_in_profile",
      image: cert4a,
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
                {/* Image */}
                <div className="overflow-hidden rounded-xl mb-4 w-full">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Title */}
                <h2 className={`text-lg font-bold mb-3 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {cert.title}
                </h2>
                
                {/* Meta details (Org, Category, Date) */}
                <div className="flex items-center justify-center gap-2 flex-wrap mb-3">
                  <span className="text-orange-400 font-medium text-sm">{cert.organization}</span>
                  <span className="text-gray-400 text-sm">•</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${darkMode ? 'bg-orange-500/20 text-orange-300' : 'bg-orange-100 text-orange-600'}`}>
                    {cert.category}
                  </span>
                  <span className="text-gray-400 text-sm">•</span>
                  <span className={`text-xs flex items-center gap-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </span>
                </div>
                
                {/* Space filler to push everything else down if titles have different lines */}
                <div className="flex-grow"></div>

                {/* Action CTA */}
                <a 
                  href={cert.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium text-sm hover:opacity-90 transition-opacity inline-block"
                >
                  View Certificate
                </a>
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
