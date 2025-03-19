import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

interface Job {
  company: string;
  title: string;
  duration: string;
  location: string;
  description: string[];
}

const jobs: Job[] = [
  {
    company: 'Selfbook',
    title: 'Frontend Engineer (Remote)',
    duration: '2023 - Present',
    location: 'New York, USA',
    description: [
      'Developed and maintained responsive web applications using React and TypeScript',
      'Implemented new features and improved existing functionality',
      'Collaborated with the design team to ensure pixel-perfect implementation'
    ]
  },
  {
    company: 'Wevoz',
    title: 'Software Developer (Remote)',
    duration: '2022 - 2023',
    location: 'Paris, France',
    description: [
      'Built and optimized web applications using modern frontend technologies',
      'Worked on improving application performance and user experience',
      'Participated in code reviews and team meetings'
    ]
  }
];

const Experience: React.FC = () => {
  const [activeCompany, setActiveCompany] = useState(jobs[0].company);

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
                className={`company-tab ${activeCompany === job.company ? 'active' : ''}`}
                onClick={() => setActiveCompany(job.company)}
              >
                {job.company}
              </button>
            ))}
          </div>
          <div className="job-content">
            {jobs.map((job) => (
              <motion.div
                key={job.company}
                className={`job-details ${activeCompany === job.company ? 'active' : ''}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: activeCompany === job.company ? 1 : 0, x: activeCompany === job.company ? 0 : 20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="job-title">{job.title}</h3>
                <p className="job-company">{job.company}</p>
                <p className="job-duration">{job.duration} | {job.location}</p>
                <ul className="job-description">
                  {job.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 