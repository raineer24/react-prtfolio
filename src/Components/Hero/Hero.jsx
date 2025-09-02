// src/components/Hero/Hero.jsx
import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const roles = ['Full-Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Tech Innovator'];
  const [currentRole, setCurrentRole] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero');
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const typeEffect = () => {
      const current = roles[currentRole];
      
      if (isDeleting) {
        setCurrentChar(prev => prev - 1);
      } else {
        setCurrentChar(prev => prev + 1);
      }

      if (currentChar > current.length) {
        setIsDeleting(true);
        setTimeout(() => {}, 2000);
        return;
      }

      if (currentChar === 0 && isDeleting) {
        setIsDeleting(false);
        setCurrentRole(prev => (prev + 1) % roles.length);
      }

      setDisplayText(current.substring(0, currentChar));
    };

    const timeout = setTimeout(typeEffect, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [currentChar, isDeleting, currentRole, roles]);

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
    <section id="home" className="hero">
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