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
    'JavaScript', 'Angular', 'React', 'Node.js', 'NestJS', 'PostgreSQL',
    'HTML5', 'CSS3', 'Bootstrap', 'Git', 'Docker', 'REST API'
  ];

  const handleResumeDownload = () => {
    // This will trigger the download when you add your PDF file
    const link = document.createElement('a');
    link.href = '/resume/Raineer_DelaRita.pdf'; // You'll add this file to public/resume/
    link.download = 'Raineer_DelaRita.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="about bg-cafe atmospheric-overlay texture-overlay" ref={aboutRef}>
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Full-stack developer building modern web solutions</p>
        </div>
        <div className="about-content">
          <div className="about-image fade-in">
            <img 
              src="/images/raineer-profile.jpg" 
              alt="Raineer Dela Rita - Full Stack Developer" 
            />
          </div>
          <div className="about-text fade-in">
            <h3>Hi, I'm Raineer Dela Rita</h3>
            <p>
              Full-stack Web Developer with 3+ years of professional experience in Angular, 
              NestJS, and PostgreSQL. I specialize in building responsive applications, 
              REST APIs, and modern front-end interfaces.
            </p>
            <p>
              Previously worked as a Junior Web Developer at Eos Chimera Technologies, where I 
              maintained and improved E-Commerce platforms, optimized performance, and implemented 
              new features that enhanced user experience.
            </p>
            <p>
              I'm passionate about solving complex problems, learning new technologies, and 
              creating web solutions that make a difference.
            </p>
            
            <div className="about-actions">
              <button 
                onClick={handleResumeDownload}
                className="btn btn-primary download-resume-btn"
              >
                <span className="download-icon">📄</span>
                Download Resume
              </button>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-label">Location:</span>
                  <span>Pakigne, Minglanilla, Cebu</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Experience:</span>
                  <span>3+ Years Professional</span>
                </div>
              </div>
            </div>
            
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