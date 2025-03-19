import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="about" className="hero">
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Hi, I'm <span className="highlight">Your Name</span></h1>
          <h2>Frontend Developer</h2>
          <p>
            I create beautiful and functional web experiences
            with modern technologies and best practices.
          </p>
          <div className="cta-buttons">
            <a href="#projects" className="cta-button primary">View My Work</a>
            <a href="#contact" className="cta-button secondary">Get In Touch</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 