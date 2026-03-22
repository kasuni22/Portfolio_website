import about from "../assets/about.png";
import { Briefcase, GraduationCap, Mail, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const About = ({ darkMode }) => {
  const infoCards = [
    {
      icon: <Briefcase className="w-5 h-5" />,
      label: "Experience",
      value: "2+ Years"
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      label: "Degree",
      value: "B.Sc.(Hons) in Computer Science"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "kmkariyawasam4@gmail.com"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      label: "Availability",
      value: "Open To Work"
    },
  ];

  return (
    <section
      id="about"
      className={`min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Image */}
        <figure
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-wrap justify-center gap-4 relative order-2 lg:order-1"
        >
          <div className="relative w-72 h-72 lg:w-96 lg:h-96">
            {/* Image background shape */}
            <div
              className="absolute -inset-6 lg:-inset-20 bg-gradient-to-l 
              from-[#f97316] via-[#fb923c] to-[#f59e0b] 
              rotate-12 star-shape z-0"
              data-aos="zoom-in"
              data-aos-delay="600"
            ></div>

            {/* Image */}
            <img
              src={about}
              alt="About Image"
              className="absolute inset-0 w-full h-full object-cover z-10 transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="400"
            />
          </div>
        </figure>

        {/* Text Content */}
        <article
          data-aos="fade-left"
          data-aos-delay="300"
          className="text-center lg:text-left relative order-1 lg:order-2"
        >
          <header>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 
              text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              About Me
            </h1>
          </header>

          <p className={`text-sm sm:text-base lg:text-lg mb-4 leading-relaxed
            ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            I'm Kasuni Madeesha Kariyawasam, a third-year Computer Science undergraduate with 2+ years of hands-on coding experience. I specialize in full-stack web development using the MERN stack, PHP & MySQL, and API development.
          </p>

          <p className={`text-sm sm:text-base lg:text-lg mb-6 leading-relaxed
            ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            data-aos="fade-up"
            data-aos-delay="550"
          >
            I'm driven by a genuine passion for problem solving, logical thinking, and continuously learning new technologies — building real-world applications that are clean, scalable, and user-focused.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 sm:mb-8 text-left">
            {infoCards.map((card, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={600 + index * 50}
                whileHover={{ scale: 1.03 }}
                className={`flex items-center gap-3 p-3 rounded-xl border
                  ${darkMode
                    ? 'bg-gray-800/60 border-gray-700'
                    : 'bg-white border-gray-200 shadow-sm'
                  }`}
              >
                <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 shrink-0">
                  {card.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className={`text-xs mb-0.5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {card.label}
                  </p>
                  {card.label === 'Availability' ? (
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse inline-block shrink-0"></span>
                      <span className={`text-sm font-semibold truncate ${darkMode ? 'text-white' : 'text-gray-800'}`}>Open To Work</span>
                    </div>
                  ) : (
                    <p className={`text-sm font-semibold break-words ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      {card.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

        </article>
      </div>
    </section>
  );
};

export default About;
