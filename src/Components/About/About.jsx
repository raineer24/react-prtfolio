// src/components/About/About.jsx
import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const aboutRef = useRef();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const fadeElements = aboutRef.current?.querySelectorAll('.fade-in');
    fadeElements?.forEach(el => observer.observe(el));

    return () => {
      fadeElements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  const skills = [
    'JavaScript', 'React', 'Node.js', 'Python', 'MongoDB', 'AWS'
  ];

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Crafting digital solutions with passion and precision</p>
        </div>
        <div className="about-content">
          <div className="about-image fade-in">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
              alt="Profile" 
            />
          </div>
          <div className="about-text fade-in">
            <h3>Hi, I'm Raineer</h3>
            <p>
              I'm a passionate full-stack developer with a love for creating innovative digital experiences. 
              With expertise in modern web technologies, I specialize in building scalable applications 
              that solve real-world problems.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>
            <div className="skills">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;