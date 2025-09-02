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
      title: "Codebility - Developer Hiring Platform",
      description: "A cutting-edge platform connecting businesses with skilled developers. Features talent matching, project management, and seamless hiring workflows for modern development teams.",
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL"],
      liveDemo: "https://www.codebility.tech/",
      github: "#", // Private repository
      thumbnail: "/images/codebility-thumbnail.jpg",
      featured: true,
     
    },
    {
      title: "OGMOK Jiu-Jitsu Academy",
      description: "A modern website for OGMOK Jiu-Jitsu Academy featuring student portal integration, membership management, class scheduling, and family-oriented Brazilian Jiu-Jitsu programs in Cebu.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveDemo: "https://student-membership-tracking-raineer24s-projects.vercel.app/",
      github: "https://github.com/raineer24/student-membership-tracking",
      thumbnail: "/images/ogmok-thumbnail.jpg",
      featured: true
    },
    // {
    //   title: "E-Commerce Platform",
    //   description: "A full-stack e-commerce solution with advanced features including real-time inventory, payment processing, and admin dashboard.",
    //   technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    //   liveDemo: "#",
    //   github: "#",
    //   thumbnail: null
    // },
    // {
    //   title: "Weather Analytics Dashboard",
    //   description: "An interactive dashboard for weather data visualization with predictive analytics and historical trend analysis.",
    //   technologies: ["Python", "Django", "D3.js", "Redis"],
    //   liveDemo: "#",
    //   github: "#",
    //   thumbnail: null
    // }
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