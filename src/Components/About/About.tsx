// src/components/About/About.tsx
import React from 'react';
import './About.css';

const About: React.FC = () => {
  const skills = {
    frontend: ['React', 'TypeScript', 'Angular', 'Vue.js', 'Next.js'],
    backend: ['Node.js', 'NestJS', 'PostgreSQL', 'MongoDB'],
    tools: ['Docker', 'Git', 'Vite', 'Jest']
  };

  return (
    <section id="about" className="about bg-cafe texture-overlay">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-image">
            <img 
              src="/images/raineer-profile.jpg" 
              alt="Raineer Dela Rita"
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/400x500?text=Profile';
              }}
            />
          </div>

          <div className="about-text">
            <p className="intro">
              Hi, I'm <strong>Raineer Dela Rita</strong>, a Full-Stack Developer 
              with 3+ years of experience building modern web applications.
            </p>
            
            <p>
              Based in <strong>Pakigne, Minglanilla, Cebu</strong>, I specialize 
              in creating efficient, scalable solutions using React, TypeScript, 
              and Node.js.
            </p>

            <p>
              I started my journey at <strong>Eos Chimera Technologies</strong> where 
              I developed an e-commerce admin dashboard using Angular and NestJS. 
              Currently, I'm contributing to <strong>Codebility</strong>, a developer 
              hiring platform.
            </p>

            <div className="skills-section">
              <div className="skill-category">
                <h3>Frontend</h3>
                <div className="skill-tags">
                  {skills.frontend.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3>Backend</h3>
                <div className="skill-tags">
                  {skills.backend.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3>Tools</h3>
                <div className="skill-tags">
                  {skills.tools.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;