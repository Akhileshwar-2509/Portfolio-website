import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section pt-32 pb-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-cyan-400">Akhileshwar</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6">Computer Science Engineer</h2>
          <p className="text-gray-400 mb-8 max-w-lg">
            Passionate about building innovative solutions with cutting-edge technologies.
            Currently pursuing B.Tech in CSE-Data Science at VNR VJIET.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="border border-cyan-600 text-cyan-400 hover:bg-cyan-900 px-6 py-3 rounded-lg transition"
            >
              View Projects
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex flex-col items-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-400 mb-6">
            {/* Placeholder for your image - replace with your actual image */}
            <div className="w-full h-full bg-gray-700 flex items-center justify-center">
              <span className="text-4xl">AA</span>
            </div>
          </div>
          <div className="contact-info">
            <div className="flex items-center mb-2">
              <FaPhone className="mr-2 text-cyan-400" />
              <span>+91 7993066097</span>
            </div>
            <div className="flex items-center mb-2">
              <FaEnvelope className="mr-2 text-cyan-400" />
              <span>akhileshwaranumula2509@gmail.com</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;