import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../constants';
import { FaBriefcase } from 'react-icons/fa';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline */}
          <div className="timeline-line absolute left-4 md:left-1/2 h-full w-1 bg-cyan-400"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`experience-item mb-12 ${index % 2 === 0 ? 'md:mr-auto md:pr-16 md:pl-0' : 'md:ml-auto md:pl-16 md:pr-0'} md:w-1/2 pl-12`}
            >
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg relative">
                <div className="timeline-dot absolute -left-10 md:-left-11 top-6 w-6 h-6 rounded-full bg-cyan-400 border-4 border-gray-800 flex items-center justify-center">
                  <FaBriefcase className="text-gray-800" />
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">{exp.title}</h3>
                <h4 className="text-lg font-medium mb-2">{exp.company}</h4>
                <p className="text-gray-400 mb-4">{exp.date}</p>
                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span className="text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;