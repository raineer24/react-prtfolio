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
      id: 'codebility',
      title: 'Codebility - Developer Hiring Platform',
      description: 'Enterprise-grade internship and team management system built with Next.js, TypeScript, and Supabase. Streamlines developer onboarding, project tracking, and team collaboration with real-time features.',
      detailedDescription: 'Codebility Portal is a comprehensive internship management platform that handles the entire developer lifecycle - from application and NDA signing through onboarding, project assignment, team collaboration, and performance tracking. Features include multi-step application forms, Kanban board project management, real-time notifications, social feeds, and admin analytics dashboard.',
      technologies: ['Next.js 14', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Zustand', 'React Query', 'PostgreSQL', 'Redis'],
      
      features: [
        'Multi-step Application System - Public NDA signing with digital signature capture',
        'Intern Management - Onboarding workflow, time tracker, certificate generation',
        'Project Management - Team assignment, status tracking, client association',
        'Kanban Board System - Sprint-based tasks with drag-and-drop interface',
        'Real-time Collaboration - Social feed, meeting scheduling, notifications',
        'User Dashboard - Personalized metrics, top performers, token points system',
        'Admin Features - Analytics dashboard, user management, system configuration',
        'Settings Management - Profile, skills, tech stack, 2FA security',
        'Notification System - Real-time alerts with preferences management'
      ],
      
      businessImpact: [
        'Streamlined developer onboarding process with automated workflows',
        'Real-time collaboration features improve team productivity',
        'Comprehensive analytics for data-driven decision making',
        'Reduced administrative overhead with automated processes'
      ],
      
      keyMetrics: {
        'Tech Stack': 'Next.js 14 + TypeScript',
        'Database': 'Supabase PostgreSQL',
        'State Management': 'Zustand + React Query',
        'Architecture': 'Server/Client Components'
      },
      
      architecture: {
        frontend: ['Next.js 14 (App Router)', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Zustand', 'React Query', 'React Hook Form + Zod'],
        backend: ['Supabase (PostgreSQL)', 'Supabase Auth', 'Supabase Storage', 'Real-time subscriptions', 'Redis caching'],
        thirdParty: ['jsPDF', 'Nodemailer', 'Custom Analytics']
      },
      
      challengesSolved: [
        {
          challenge: 'Complex multi-role system (applicants, interns, mentors, admins) required sophisticated authentication and authorization',
          solution: 'Implemented Row Level Security (RLS) with Supabase, role-based middleware, and protected routes with type-safe access control',
          result: 'Secure, scalable authentication system supporting multiple user roles with granular permissions'
        },
        {
          challenge: 'Real-time collaboration features needed low-latency updates across multiple users',
          solution: 'Leveraged Supabase real-time subscriptions with React Query caching (5-min staleTime) and Zustand for global state',
          result: 'Instant notifications and updates with optimized performance and minimal server load'
        },
        {
          challenge: 'Large codebase required maintainable architecture following best practices',
          solution: 'Applied KISS, YAGNI, DRY, SOLID principles with TypeScript, server/client component separation, and comprehensive error handling',
          result: 'Clean, type-safe codebase with clear patterns and 2-year developer experience level documentation'
        }
      ],
      
      screenshots: [
        {
          url: '/images/codebility-thumbnail.jpg',
          caption: 'Dashboard - Personalized metrics and project overview'
        },
        {
          url: '/images/codebility-detail-1.jpg',
          caption: 'Kanban Board - Sprint-based task management with drag-and-drop'
        },
        {
          url: '/images/codebility-detail-2.jpg',
          caption: 'Admin Dashboard - User management and analytics'
        }
      ],
      
      liveDemo: 'https://www.codebility.tech/',
      github: 'https://github.com/CodebilityDev/codebility-plus',
      thumbnail: '/images/codebility-thumbnail.jpg',
      featured: true,
      status: 'Current Work'
    },
    {
      id: 'ogmok-academy',
      title: 'OGMOK Jiu-Jitsu Academy - Kids BJJ Membership System',
      description: 'Comprehensive membership management system for Kids Brazilian Jiu-Jitsu training centers. Manages 23+ students with payment tracking, bulk attendance logging, SMS reminders, and analytics dashboard.',
      detailedDescription: 'A full-stack membership management system that streamlines administrative tasks for BJJ training centers. The system handles student management, payment processing with dynamic pricing tiers (₱1,200-₱1,400/month based on payment timing), bulk attendance logging, automated SMS reminders via Semaphore API, and provides real-time analytics through an interactive dashboard.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Prisma ORM', 'Vercel Serverless', 'Tailwind CSS', 'JWT Auth'],
      
      features: [
        'Dashboard Overview - Real-time statistics with student status filters and search',
        'Student Management - Track 23+ students with complete membership details',
        'Payment Processing - Three pricing tiers (₱1,200-₱1,400) with multiple payment methods',
        'Bulk Attendance Modal - Log 16 students in 30 seconds with search filter',
        'SMS Integration - Automated reminders via Semaphore API with rate limiting',
        'Training Session Management - Individual and bulk attendance logging',
        'Weekend Events - Announcement system with SMS delivery',
        'Analytics & Reports - Monthly revenue reports with CSV export',
        'Mobile-First Design - Optimized for Realme C67 and similar devices'
      ],
      
      businessImpact: [
        '93% time reduction in weekend attendance logging (15 min → 30 sec)',
        'Cost-effective SMS system at ₱42/month',
        'Zero data entry errors with validation and duplicate prevention',
        'Real-time insights with live dashboard tracking'
      ],
      
      keyMetrics: {
        students: 23,
        'Monthly Revenue': '₱21,200',
        'API Response': '<200ms',
        'Bulk Logging': '<3 sec for 20 students'
      },
      
      architecture: {
        frontend: ['React 18', 'Tailwind CSS', 'Context API', 'React Router'],
        backend: ['Vercel Serverless Functions', 'Prisma ORM', 'PostgreSQL', 'JWT'],
        thirdParty: ['Semaphore API (SMS)', 'Vercel Hosting']
      },
      
      challengesSolved: [
        {
          challenge: 'Manual weekend attendance took 15 minutes for 16 students, causing delays and errors',
          solution: 'Built Bulk Attendance Modal (680 lines) with real-time search filter, duplicate prevention system, and partial success handling',
          result: 'Reduced logging time to 30 seconds (93% time reduction) with zero data entry errors'
        },
        {
          challenge: 'Payment reminder system was manual and error-prone, missing expiring memberships',
          solution: 'Integrated Semaphore SMS API with automated reminders, rate limiting (5 SMS/minute), and selective broadcasting',
          result: 'Cost-effective at ₱42/month with 100% reminder delivery success rate'
        },
        {
          challenge: 'Duplicate training sessions caused data inconsistency (23 duplicates found)',
          solution: 'Enhanced API with 409 Conflict response, user-friendly warnings, and database cleanup scripts',
          result: 'Cleaned all duplicates and prevented future occurrences with robust validation'
        }
      ],
      
      screenshots: [
        {
          url: '/images/ogmok-thumbnail.jpg',
          caption: 'Dashboard Overview - Real-time statistics and student management'
        },
        {
          url: '/images/ogmok-detail-1.jpg',
          caption: 'Bulk Attendance Modal - Search filter and duplicate prevention'
        },
        {
          url: '/images/ogmok-detail-2.jpg',
          caption: 'Student Profile View - Complete payment and training history'
        }
      ],
      
      liveDemo: 'https://student-membership-tracking-raineer24s-projects.vercel.app/',
      github: 'https://github.com/raineer24/student-membership-tracking',
      thumbnail: '/images/ogmok-thumbnail.jpg',
      featured: true,
      status: 'Production'
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