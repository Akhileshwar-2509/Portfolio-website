import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../constants';
import { FaGraduationCap } from 'react-icons/fa';
import '../styles/Education.css';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline */}
          <div className="timeline-line absolute left-4 md:left-1/2 h-full w-1 bg-cyan-400"></div>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`education-item mb-12 ${index % 2 === 0 ? 'md:mr-auto md:pr-16 md:pl-0' : 'md:ml-auto md:pl-16 md:pr-0'} md:w-1/2 pl-12`}
            >
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg relative">
                <div className="timeline-dot absolute -left-10 md:-left-11 top-6 w-6 h-6 rounded-full bg-cyan-400 border-4 border-gray-800 flex items-center justify-center">
                  <FaGraduationCap className="text-gray-800" />
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">{edu.degree}</h3>
                <h4 className="text-lg font-medium mb-2">{edu.institution}</h4>
                <p className="text-gray-400 mb-2">{edu.date}</p>
                <p className="text-gray-300 font-medium">{edu.grade}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;