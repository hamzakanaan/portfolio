import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

interface Job {
  company: string;
  title: string;
  location: string;
  duration: string;
  responsibilities: string[];
}

const Experience: React.FC = () => {
  const [activeCompany, setActiveCompany] = useState('Selfbook');

  const jobs: Job[] = [
    {
      company: 'Selfbook',
      title: 'Software Developer (Remote)',
      location: 'US • New York',
      duration: 'Jun 2021 - Present',
      responsibilities: [
        'Developing screens and UI components for the web application using React and Tailwind',
        'Fixing UI issues and integrating backend APIs with Redux Saga'
      ]
    },
    {
      company: 'Wevoz',
      title: 'Frontend Developer (Remote)',
      location: 'Germany',
      duration: 'Apr 2021 - Jun 2021',
      responsibilities: [
        'Developed responsive web interfaces using React and Material-UI',
        'Implemented state management using Redux and Redux-Saga'
      ]
    },
    // Add more jobs here
  ];

  const currentJob = jobs.find(job => job.company === activeCompany);

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          EXPERIENCE
        </motion.h2>
        <div className="experience-content">
          <div className="company-tabs">
            {jobs.map((job) => (
              <button
                key={job.company}
                className={`company-tab ${job.company === activeCompany ? 'active' : ''}`}
                onClick={() => setActiveCompany(job.company)}
              >
                {job.company}
              </button>
            ))}
          </div>
          {currentJob && (
            <motion.div 
              className="job-content"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="job-title">{currentJob.title}</h3>
              <p className="job-company">{currentJob.company} • {currentJob.location}</p>
              <p className="job-duration">{currentJob.duration}</p>
              <ul className="job-description">
                {currentJob.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience; 