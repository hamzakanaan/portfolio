import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Portfolio Website",
      description: "Modern portfolio with dark/light theme and smooth animations",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
      tags: ["React", "TypeScript", "CSS"],
      demoLink: "#",
      githubLink: "#"
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          PROJECTS
        </motion.h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demoLink} className="project-link">🔗 Live demo</a>
                  <a href={project.githubLink} className="project-link">GitHub</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 