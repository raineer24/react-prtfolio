import React, { useEffect } from 'react';
import './ProjectDetailModal.css';

const ProjectDetailModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
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
    description,
    technologies = [],
    features = [],
    businessImpact = [],
    keyMetrics,
    challengesSolved = [],
    architecture,
    liveDemo,
    github,
    screenshots = [],
    status
  } = project;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        
        <div className="modal-header" style={{paddingBottom: '1rem'}}>
          <div className="modal-title-section">
            <h2 className="modal-title">{title}</h2>
            {status && (
              <span className={`modal-status status-${status.toLowerCase().replace(/\s+/g, '-')}`}>
                {status}
              </span>
            )}
          </div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <div style={{padding: '0 2rem 1.5rem 2rem'}}>
          
          <section style={{marginBottom: '1rem', marginTop: '0', padding: '0 0'}}>
            <h3 style={{color: '#000000', fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.75rem', marginTop: '0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              📋 Project Overview
            </h3>
            <p style={{fontSize: '1.0625rem', lineHeight: '1.6', color: '#6b7280', margin: 0}}>
              {detailedDescription || description}
            </p>
          </section>

          {screenshots && screenshots.length > 0 && (
            <section style={{marginBottom: '1rem', marginTop: '0', padding: '0 0'}}>
              <h3 style={{color: '#000000', fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.75rem', marginTop: '0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                📸 Screenshots
              </h3>
              <div className="screenshots-grid">
                {screenshots.map((screenshot, index) => (
                  <div key={index} className="screenshot-item">
                    <img src={screenshot.url} alt={screenshot.caption || `Screenshot ${index + 1}`} className="screenshot-image" />
                    {screenshot.caption && <p className="screenshot-caption">{screenshot.caption}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {keyMetrics && Object.keys(keyMetrics).length > 0 && (
            <section style={{marginBottom: '1rem', marginTop: '0', padding: '0 0'}}>
              <h3 style={{color: '#000000', fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.75rem', marginTop: '0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                📊 Key Metrics
              </h3>
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

          {features && features.length > 0 && (
            <section style={{marginBottom: '1rem', marginTop: '0', padding: '0 0'}}>
              <h3 style={{color: '#000000', fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.75rem', marginTop: '0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                ✨ Key Features
              </h3>
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

          {businessImpact && businessImpact.length > 0 && (
            <section style={{marginBottom: '1rem', marginTop: '0', padding: '0 0'}}>
              <h3 style={{color: '#000000', fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.75rem', marginTop: '0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                💼 Business Impact
              </h3>
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

          {architecture && (
            <section style={{marginBottom: '1rem', marginTop: '0', padding: '0 0'}}>
              <h3 style={{color: '#000000', fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.75rem', marginTop: '0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                🏗️ Technical Architecture
              </h3>
              <div className="architecture-grid">
                {architecture.frontend && architecture.frontend.length > 0 && (
                  <div className="arch-category">
                    <h4 className="arch-title">Frontend</h4>
                    <div className="arch-tags">
                      {architecture.frontend.map((tech, index) => (
                        <span key={index} className="arch-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                )}
                {architecture.backend && architecture.backend.length > 0 && (
                  <div className="arch-category">
                    <h4 className="arch-title">Backend</h4>
                    <div className="arch-tags">
                      {architecture.backend.map((tech, index) => (
                        <span key={index} className="arch-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                )}
                {architecture.thirdParty && architecture.thirdParty.length > 0 && (
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

          {challengesSolved && challengesSolved.length > 0 && (
            <section style={{marginBottom: '1rem', marginTop: '0', padding: '0 0'}}>
              <h3 style={{color: '#000000', fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.75rem', marginTop: '0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                🎯 Challenges & Solutions
              </h3>
              <div className="challenges-list">
                {challengesSolved.map((item, index) => (
                  <div key={index} className="challenge-card">
                    <div style={{marginBottom: '1rem'}}>
                      <h4 className="challenge-label">⚠️ Challenge</h4>
                      <p className="challenge-text">{item.challenge}</p>
                    </div>
                    <div style={{marginBottom: '1rem'}}>
                      <h4 className="solution-label">💡 Solution</h4>
                      <p className="solution-text">{item.solution}</p>
                    </div>
                    <div>
                      <h4 className="result-label">✅ Result</h4>
                      <p className="result-text">{item.result}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {technologies && technologies.length > 0 && (
            <section style={{marginBottom: '1rem', marginTop: '0', padding: '0 0'}}>
              <h3 style={{color: '#000000', fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.75rem', marginTop: '0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                🛠️ Technologies Used
              </h3>
              <div className="tech-tags-modal">
                {technologies.map((tech, index) => (
                  <span key={index} className="tech-tag-modal">{tech}</span>
                ))}
              </div>
            </section>
          )}

          <section style={{marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e5e7eb', display: 'flex', gap: '1.5rem', flexWrap: 'wrap'}}>
            {liveDemo && (
              <a href={liveDemo} className="modal-btn modal-btn-primary" target="_blank" rel="noopener noreferrer" style={{flex: '1', minWidth: '200px'}}>
                🌐 View Live Demo
              </a>
            )}
            {github && (
              <a href={github} className="modal-btn modal-btn-secondary" target="_blank" rel="noopener noreferrer" style={{flex: '1', minWidth: '200px'}}>
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