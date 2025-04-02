import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../styles/SocialLinks.css';

const SocialLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="fixed left-4 bottom-0 hidden md:flex flex-col items-center space-y-6 z-50"
    >
      <div className="flex flex-col space-y-4">
        <a
          href="https://github.com/Akhileshwar-2509"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon bg-gray-800 p-3 rounded-full text-gray-300 hover:text-cyan-400 hover:bg-gray-700 transition"
          aria-label="GitHub"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://linkedin.com/in/akhileshwar-anumula-8a2760252"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon bg-gray-800 p-3 rounded-full text-gray-300 hover:text-cyan-400 hover:bg-gray-700 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="mailto:akhileshwaranumula2509@gmail.com"
          className="social-icon bg-gray-800 p-3 rounded-full text-gray-300 hover:text-cyan-400 hover:bg-gray-700 transition"
          aria-label="Email"
        >
          <FaEnvelope size={20} />
        </a>
        <a
          href="tel:+917993066097"
          className="social-icon bg-gray-800 p-3 rounded-full text-gray-300 hover:text-cyan-400 hover:bg-gray-700 transition"
          aria-label="Phone"
        >
          <FaPhone size={20} />
        </a>
      </div>
      <div className="w-1 h-24 bg-gray-600"></div>
    </motion.div>
  );
};

export default SocialLinks;