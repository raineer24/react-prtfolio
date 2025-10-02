// Project Types
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveDemo?: string;
  githubLink?: string;
  image?: string;
  featured: boolean;
  status?: 'Current Work' | 'Completed' | 'In Progress';
  category: 'Frontend' | 'Full-Stack' | 'Backend';
}

// Contact Form Types
export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

// Navigation Types
export interface NavItem {
  id: string;
  label: string;
  href: string;
}

// Component Props
export interface ProjectCardProps {
  project: Project;
  className?: string;
}

export interface SectionProps {
  className?: string;
  children?: React.ReactNode;
}