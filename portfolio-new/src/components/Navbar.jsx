import React, { useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "../constants";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar bg-gray-800 py-4 fixed w-full z-50">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-cyan-400">
          Akhileshwar
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`text-lg ${
                  active === link.id ? "text-cyan-400" : "text-gray-300"
                } hover:text-cyan-400 transition`}
                onClick={() => setActive(link.id)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Links */}
        <div className="hidden md:flex gap-4">
          <a
            href="https://linkedin.com/in/akhileshwar-anumula-8a2760252"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/Akhileshwar-2509"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="mailto:akhileshwaranumula2509@gmail.com"
            className="text-gray-300 hover:text-cyan-400 transition"
          >
            📧
          </a>
          <a
            href="tel:+917993066097"
            className="text-gray-300 hover:text-cyan-400 transition"
          >
            📞
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setToggle(!toggle)}>
            {toggle ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {toggle && (
            <motion.ul
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mobile-nav bg-gray-800 absolute top-16 right-0 w-full p-6 flex flex-col gap-4"
            >
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`block py-2 ${
                      active === link.id ? "text-cyan-400" : "text-gray-300"
                    } hover:text-cyan-400 transition`}
                    onClick={() => {
                      setActive(link.id);
                      setToggle(false);
                    }}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
