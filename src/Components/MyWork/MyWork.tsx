import React from 'react';
import { projects } from '../../data/projects';
import './MyWork.css';

const MyWork: React.FC = () => {
  return (
    <section id="work" className="my-work">
      <div className="container">
        <h2 className="section-title">My Latest Work</h2>
        <p className="section-subtitle">
          Explore my recent projects and technical implementations
        </p>

        <div className="work-grid">
          {projects.map((project) => (
            <div key={project.id} className="work-card">
              {/* Status Badge */}
              {project.status && (
                <div className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </div>
              )}

              {/* Featured Badge */}
              {project.featured && (
                <div className="featured-badge">⭐ Featured</div>
              )}

              {/* Project Image */}
              <div className="work-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} loading="lazy" />
                ) : (
                  <div className="image-placeholder">🚀</div>
                )}
              </div>

              {/* Project Info */}
              <div className="work-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                {/* Technologies */}
                <div className="tech-stack">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="work-links">
                  {project.liveDemo && (
                    <a 
                      href={project.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWork;