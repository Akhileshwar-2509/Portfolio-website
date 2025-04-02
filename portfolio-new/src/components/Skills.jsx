import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../constants';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="skill-card bg-gray-800 p-6 rounded-lg text-center shadow-md hover:shadow-cyan-400/20 transition"
            >
              <div className="text-4xl mb-3 text-cyan-400">
                {/* You can replace this with appropriate icons for each skill */}
                <span className="icon">{skill[0]}</span>
              </div>
              <h3 className="text-lg font-medium">{skill}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;