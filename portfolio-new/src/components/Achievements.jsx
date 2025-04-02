import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../constants';
import { FaTrophy, FaCertificate, FaAward } from 'react-icons/fa';
import '../styles/Achievements.css';

const Achievements = () => {
  const getIcon = (index) => {
    const icons = [FaTrophy, FaCertificate, FaAward];
    return icons[index % icons.length];
  };

  return (
    <section id="achievements" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = getIcon(index);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="achievement-card bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <div className="text-4xl text-cyan-400 mb-4">
                  <Icon />
                </div>
                <h3 className="text-lg font-medium mb-4">{achievement}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
