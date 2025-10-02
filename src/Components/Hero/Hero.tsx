import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const handleConnect = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResume = () => {
    const link = document.createElement('a');
    link.href = '/resume/Raineer_DelaRita.pdf';
    link.download = 'Raineer_DelaRita_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero bg-colonial atmospheric-overlay floating-elements">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-greeting">Hi, I'm Raineer Dela Rita</span>
          <span className="hero-subtitle">Full-Stack Developer</span>
        </h1>
        
        <p className="hero-description">
          Building modern web applications with React, TypeScript, and Node.js. 
          Based in Cebu, Philippines 🇵🇭
        </p>
        
        <div className="hero-buttons">
          <button onClick={handleConnect} className="btn btn-primary shimmer">
            Connect With Me
          </button>
          <button onClick={handleResume} className="btn btn-secondary">
            My Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;