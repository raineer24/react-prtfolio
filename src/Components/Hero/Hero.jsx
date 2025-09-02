// src/components/Hero/Hero.jsx - Simplified to fix text issues
import React, { useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero');
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="hero bg-colonial high-contrast">
      <div className="hero-content">
        <h1>Building Digital Experiences</h1>
        <p>Full-stack developer passionate about creating innovative solutions that make a difference</p>
        <div className="cta-buttons">
          <a 
            href="#projects" 
            className="btn btn-primary"
            onClick={(e) => handleNavClick(e, '#projects')}
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="btn btn-secondary"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;