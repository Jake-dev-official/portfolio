import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaPhp, FaBootstrap, FaPython } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTailwindcss, SiMui, SiMysql, SiMongodb, SiPostgresql, SiPrisma } from 'react-icons/si';

const frontendSkills = [
  { icon: <FaHtml5 />, name: 'HTML' },
  { icon: <FaCss3Alt />, name: 'CSS' },
  { icon: <IoLogoJavascript />, name: 'JavaScript' },
  { icon: <FaReact />, name: 'React' },
  { icon: <FaBootstrap />, name: 'Bootstrap' },
  { icon: <SiMui />, name: 'Material-UI' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
];

const backendSkills = [
  { icon: <FaPython />, name: 'Python' },
  { icon: <FaPhp />, name: 'PHP' },
  { icon: <SiMysql />, name: 'MySQL' },
  { icon: <SiPostgresql />, name: 'PostgreSQL' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <SiPrisma />, name: 'Prisma' },
];

const skillCategoryVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const skillItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const About = () => {
  return (
    <motion.section 
      id="about" 
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <div className="max-w-3xl mx-auto mb-12 text-lg text-gray-300 space-y-4">
            <p>
                I'm a passionate and results-driven web developer with a knack for creating dynamic, user-friendly applications. With a strong foundation in both front-end and back-end technologies, I enjoy bringing ideas to life in the browser.
            </p>
            <p>
                My journey in tech started with a fascination for how websites worked, which quickly evolved into a career. I thrive on challenges and am constantly learning to keep up with the ever-evolving landscape of web development. When I'm not coding, I enjoy exploring new technologies and contributing to open-source projects.
            </p>
        </div>
        <h3 className="text-3xl font-bold mb-12">My Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h4 className="text-2xl font-semibold mb-6">Frontend</h4>
            <motion.div 
              className="flex flex-wrap justify-center gap-8"
              variants={skillCategoryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {frontendSkills.map((skill, index) => (
                <motion.div key={index} className="flex flex-col items-center gap-2 p-4 bg-gray-800 rounded-lg" variants={skillItemVariants}>
                  <div className="text-5xl text-primary">{skill.icon}</div>
                  <span className="font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-6">Backend & Databases</h4>
            <motion.div 
              className="flex flex-wrap justify-center gap-8"
              variants={skillCategoryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {backendSkills.map((skill, index) => (
                <motion.div key={index} className="flex flex-col items-center gap-2 p-4 bg-gray-800 rounded-lg" variants={skillItemVariants}>
                  <div className="text-5xl text-secondary">{skill.icon}</div>
                  <span className="font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
