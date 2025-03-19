import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#" className="logo">DR.</a>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#experience" onClick={() => setIsMenuOpen(false)}>Resume</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 