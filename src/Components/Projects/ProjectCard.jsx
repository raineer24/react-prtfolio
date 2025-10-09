// src/components/Projects/ProjectCard.jsx
import React, { useState } from 'react';
import ProjectDetailModal from './ProjectDetailModal';

const ProjectCard = ({ project, className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    title,
    description,
    technologies,
    liveDemo,
    github,
    thumbnail,
    featured,
    status
  } = project;

  return (
    <>
      <div className={`project-card ${className} ${featured ? 'project-card-featured' : ''}`}>
        {/* Project Image */}
        <div className="project-image">
          {thumbnail ? (
            <img 
              src={thumbnail} 
              alt={`${title} screenshot`}
              className="project-thumbnail"
              loading="lazy"
            />
          ) : (
            <div className="project-placeholder">
              <span className="project-icon">🚀</span>
            </div>
          )}
          
          {/* Badges */}
          {(featured || status) && (
            <div className="project-badges">
              {featured && (
                <div className="featured-badge">
                  <span>✨ Featured</span>
                </div>
              )}
              {status && (
                <div className="status-badge">
                  <span>⚡ {status}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="project-content">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>

          {/* Technology Tags */}
          <div className="project-tech">
            {technologies.slice(0, 4).map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
            {technologies.length > 4 && (
              <span className="tech-tag tech-more">+{technologies.length - 4}</span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="project-actions">
            <div className="project-links">
              {liveDemo && (
                <a 
                  href={liveDemo} 
                  className="project-link project-link-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🌐 Live Demo
                </a>
              )}
              {github && (
                <a 
                  href={github} 
                  className="project-link project-link-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📁 GitHub
                </a>
              )}
            </div>
            
            {/* View Details Button */}
            <button 
              className="view-details-btn"
              onClick={() => setIsModalOpen(true)}
            >
              📖 View Full Details
            </button>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectDetailModal 
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProjectCard;