import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'codebility',
    title: 'Codebility - Developer Hiring Platform',
    description: 'A comprehensive platform connecting developers with companies through skill-based matching and technical assessments.',
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    liveDemo: 'https://www.codebility.tech/',
    image: '/images/codebility-thumbnail.jpg',
    featured: true,
    status: 'Current Work',
    category: 'Full-Stack'
  },
  {
    id: 'ogmok-academy',
    title: 'OGMOK Jiu-Jitsu Academy',
    description: 'Student membership tracking system with attendance monitoring and progress tracking for martial arts academy.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    liveDemo: 'https://student-membership-tracking-raineer24s-projects.vercel.app/',
    githubLink: 'https://github.com/raineer24/student-membership-tracking',
    image: '/images/ogmok-thumbnail.jpg',
    featured: true,
    status: 'Completed',
    category: 'Full-Stack'
  }
  // Add other projects from your current mywork_data.js here
];