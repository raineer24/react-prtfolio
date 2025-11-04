// src/components/Projects/Projects.jsx
import React, { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';  // ← IMPORT FROM FILE!
import './Projects.css';

const Projects = () => {
  const projectsRef = useRef();

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

    const fadeElements = projectsRef.current?.querySelectorAll('.fade-in');
    fadeElements?.forEach(el => observer.observe(el));

    return () => {
      fadeElements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A showcase of my recent work and creative solutions</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              className="fade-in"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;