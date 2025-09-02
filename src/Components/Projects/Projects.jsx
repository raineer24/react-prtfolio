// src/components/Projects/Projects.jsx
import React, { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
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

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with advanced features including real-time inventory, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration, and progress tracking.",
      technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Weather Analytics Dashboard",
      description: "An interactive dashboard for weather data visualization with predictive analytics and historical trend analysis.",
      technologies: ["Python", "Django", "D3.js", "Redis"],
      liveDemo: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A showcase of my recent work and creative solutions</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
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