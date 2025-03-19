import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <motion.h1 
          className="name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hamza Kanaan
        </motion.h1>
        <motion.p 
          className="title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Frontend Developer
        </motion.p>
        <motion.p 
          className="description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I build accessible, inclusive products and digital experiences for the web.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero; 