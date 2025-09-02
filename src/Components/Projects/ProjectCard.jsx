// src/components/Projects/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project, className }) => {
  const { title, description, technologies, liveDemo, github } = project;

  return (
    <div className={`project-card ${className}`}>
      <div className="project-image"></div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tech">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={liveDemo} className="project-link">Live Demo</a>
          <a href={github} className="project-link">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;