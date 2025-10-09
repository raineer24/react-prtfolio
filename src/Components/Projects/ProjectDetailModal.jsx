// src/components/Projects/ProjectDetailModal.jsx
import React, { useEffect } from 'react';
import './ProjectDetailModal.css';

const ProjectDetailModal = ({ project, isOpen, onClose }) => {
  // Close modal on ESC key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const {
    title,
    detailedDescription,
    technologies,
    features,
    businessImpact,
    keyMetrics,
    challengesSolved,
    architecture,
    liveDemo,
    github,
    screenshots = [],
    status
  } = project;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-section">
            <h2 className="modal-title">{title}</h2>
            {status && (
              <span className={`modal-status status-${status.toLowerCase().replace(' ', '-')}`}>
                {status}
              </span>
            )}
          </div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        {/* Modal Content */}
        <div className="modal-content">
          {/* Project Overview */}
          <section className="modal-section">
            <h3 className="section-title">📋 Project Overview</h3>
            <p className="section-text">{detailedDescription || project.description}</p>
          </section>

          {/* Screenshots Gallery */}
          {screenshots && screenshots.length > 0 && (
            <section className="modal-section">
              <h3 className="section-title">📸 Screenshots</h3>
              <div className="screenshots-grid">
                {screenshots.map((screenshot, index) => (
                  <div key={index} className="screenshot-item">
                    <img 
                      src={screenshot.url} 
                      alt={screenshot.caption || `Screenshot ${index + 1}`}
                      className="screenshot-image"
                    />
                    {screenshot.caption && (
                      <p className="screenshot-caption">{screenshot.caption}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Key Metrics */}
          {keyMetrics && Object.keys(keyMetrics).length > 0 && (
            <section className="modal-section">
              <h3 className="section-title">📊 Key Metrics</h3>
              <div className="metrics-grid">
                {Object.entries(keyMetrics).map(([key, value]) => (
                  <div key={key} className="metric-card">
                    <div className="metric-label">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    <div className="metric-value">{value}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Key Features */}
          {features && features.length > 0 && (
            <section className="modal-section">
              <h3 className="section-title">✨ Key Features</h3>
              <ul className="features-list">
                {features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span className="feature-text">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Business Impact */}
          {businessImpact && businessImpact.length > 0 && (
            <section className="modal-section">
              <h3 className="section-title">💼 Business Impact</h3>
              <div className="impact-grid">
                {businessImpact.map((impact, index) => (
                  <div key={index} className="impact-card">
                    <span className="impact-icon">🎯</span>
                    <span className="impact-text">{impact}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Technical Architecture */}
          {architecture && (
            <section className="modal-section">
              <h3 className="section-title">🏗️ Technical Architecture</h3>
              <div className="architecture-grid">
                {architecture.frontend && (
                  <div className="arch-category">
                    <h4 className="arch-title">Frontend</h4>
                    <div className="arch-tags">
                      {architecture.frontend.map((tech, index) => (
                        <span key={index} className="arch-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                )}
                {architecture.backend && (
                  <div className="arch-category">
                    <h4 className="arch-title">Backend</h4>
                    <div className="arch-tags">
                      {architecture.backend.map((tech, index) => (
                        <span key={index} className="arch-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                )}
                {architecture.thirdParty && (
                  <div className="arch-category">
                    <h4 className="arch-title">Third-Party Services</h4>
                    <div className="arch-tags">
                      {architecture.thirdParty.map((tech, index) => (
                        <span key={index} className="arch-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Challenges & Solutions */}
          {challengesSolved && challengesSolved.length > 0 && (
            <section className="modal-section">
              <h3 className="section-title">🎯 Challenges & Solutions</h3>
              <div className="challenges-list">
                {challengesSolved.map((item, index) => (
                  <div key={index} className="challenge-card">
                    <div className="challenge-section">
                      <h4 className="challenge-label">Challenge</h4>
                      <p className="challenge-text">{item.challenge}</p>
                    </div>
                    <div className="solution-section">
                      <h4 className="solution-label">Solution</h4>
                      <p className="solution-text">{item.solution}</p>
                    </div>
                    <div className="result-section">
                      <h4 className="result-label">Result</h4>
                      <p className="result-text">{item.result}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Technologies */}
          <section className="modal-section">
            <h3 className="section-title">🛠️ Technologies Used</h3>
            <div className="tech-tags-modal">
              {technologies.map((tech, index) => (
                <span key={index} className="tech-tag-modal">{tech}</span>
              ))}
            </div>
          </section>

          {/* Action Buttons */}
          <section className="modal-actions">
            {liveDemo && (
              <a 
                href={liveDemo}
                className="modal-btn modal-btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                🌐 View Live Demo
              </a>
            )}
            {github && (
              <a 
                href={github}
                className="modal-btn modal-btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                📁 View on GitHub
              </a>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;