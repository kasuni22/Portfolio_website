import laravel from '../assets/laravel.png';
import framer_motion from '../assets/framer_motion.png';
import vue from '../assets/vue.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import firebase from '../assets/firebase.png';
import python from '../assets/python.png';
import vite from '../assets/vite.png';

const Skills = ({ darkMode }) => {

  const skills = [
    {
      name: 'Laravel',
      icon: laravel,
      level: 95,
      color: 'from-orange-500 to-amber-500',
    },
    {
      name: 'Framer Motion',
      icon: framer_motion,
      level: 90,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Vue',
      icon: vue,
      level: 88,
      color: 'from-yellow-500 to-amber-500',
    },
    {
      name: 'React',
      icon: react,
      level: 85,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      name: 'Tailwind CSS',
      icon: tailwind,
      level: 92,
      color: 'from-teal-500 to-cyan-500',
    },
    {
      name: 'Firebase',
      icon: firebase,
      level: 92,
      color: 'from-green-500 to-emerald-500',
    },
    {
      name: 'Python',
      icon: python,
      level: 75,
      color: 'from-blue-500 to-indigo-500',
    },
    {
      name: 'Vite',
      icon: vite,
      level: 85,
      color: 'from-red-500 to-orange-500',
    },
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
          <h1
            className="sm:text-4xl text-3xl font-bold mb-4"
            style={{
              color: darkMode ? 'white' : '#1f2937', // FIXED (white not while)
            }}
          >
            My Skills
          </h1>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Technologies I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`p-5 rounded-xl shadow-md text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] border ${
                darkMode
                  ? 'bg-gray-800 border-gray-700 text-white'
                  : 'bg-white border-gray-200 text-gray-800'
              }`}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 mx-auto mb-3"
              />
              <h2 className="font-semibold mb-4">{skill.name}</h2>
              
              <div className={`w-full rounded-full h-2.5 mb-1 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <div 
                  className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color} transition-[width] duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className={`text-xs text-right mt-1 font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {skill.level}%
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;