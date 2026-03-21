import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import firebase from '../assets/firebase.png';
import python from '../assets/python.png';
import vite from '../assets/vite.png';

const Skills = ({ darkMode }) => {

  const skills = [
    { name: 'React', icon: react },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'Tailwind CSS', icon: tailwind },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Python', icon: python },
    { name: 'Firebase', icon: firebase },
    { name: 'Vite', icon: vite },
  ];

  return (
    <section
      id="skills"
      style={{
        backgroundColor: darkMode ? '#111827' : '#f9fafb',
      }}
      className="py-14 relative overflow-hidden"
    >
      <div className="container px-5 py-14 mx-auto">

        {/* Title */}
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">
            My Skills
          </h1>
          <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Technologies I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className={`p-5 rounded-2xl shadow-md text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] border flex flex-col items-center justify-center ${darkMode
                ? 'bg-gray-800 border-gray-700 text-white'
                : 'bg-white border-gray-200 text-gray-800'
                }`}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className={`w-14 h-14 mb-3 mx-auto ${(darkMode && (skill.name === 'Express.js' || skill.name === 'GitHub')) ? 'bg-white rounded-full p-1' : ''}`}
              />
              <h2 className="font-semibold">{skill.name}</h2>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;