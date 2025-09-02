// src/components/Projects/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project, className }) => {
  const { title, description, technologies, liveDemo, github, thumbnail, featured, status } = project;

  return (
    <div className={`project-card ${className} ${featured ? 'project-card-featured' : ''}`}>
      <div className="project-image">
        {thumbnail ? (
          <img 
            src={thumbnail} 
            alt={`${title} thumbnail`}
            className="project-thumbnail"
          />
        ) : (
          <div className="project-placeholder">
            <span className="project-icon">🚀</span>
          </div>
        )}
        {(featured || status) && (
          <div className="project-badges">
            {featured && (
              <div className="featured-badge">
                <span>✨ Featured</span>
              </div>
            )}
            {status && (
              <div className="status-badge">
                <span>🚀 {status}</span>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tech">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a 
            href={liveDemo} 
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
          <a 
            href={github} 
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;