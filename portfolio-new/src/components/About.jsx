import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border-2 border-cyan-400">
              {/* Placeholder for your image - replace with your actual image */}
              <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                <span className="text-4xl">AA</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-6">Computer Science Engineer & Data Science Enthusiast</h3>
            <p className="text-gray-300 mb-4">
              I'm Akhileshwar Anumula, currently pursuing my Bachelor's in Computer Science and Engineering with a specialization in Data Science at VNR Vignana Jyothi Institute of Engineering and Technology.
            </p>
            <p className="text-gray-300 mb-4">
              With a strong academic background (CGPA: 9.1/10.0) and passion for technology, I specialize in building innovative solutions using cutting-edge technologies. My expertise spans across programming languages like JavaScript, Python, and Java, along with frameworks like React and Node.js.
            </p>
            <p className="text-gray-300 mb-6">
              Beyond coding, I'm actively involved in technical communities, currently serving as PR Head at VJ Dataquesters, and have contributed to Google Developer Student Clubs. My research paper on "The Impact of Parental Education on Student Academic Performance" has been published in Nanotechnology Perceptions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#skills"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition"
              >
                My Skills
              </a>
              <a
                href="#projects"
                className="border border-cyan-600 text-cyan-400 hover:bg-cyan-900 px-6 py-3 rounded-lg transition"
              >
                My Work
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;