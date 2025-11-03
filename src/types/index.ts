// src/types/index.ts - Enhanced type definitions with case study support
// ✅ Adds Production status for live applications
// ✅ Includes detailed project data structure for case studies
// ✅ Backward compatible with existing components

export interface Project {
  // Core project information
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;           // Long-form description for case study
  technologies: string[];
  
  // Links and media
  liveDemo?: string;
  github?: string;
  githubLink?: string;                    // Backward compatibility
  image?: string;
  thumbnail?: string;
  screenshots?: ProjectScreenshot[];      // Gallery for modal
  
  // Classification
  featured?: boolean;
  status?: ProjectStatus;
  category?: ProjectCategory;
  
  // Enhanced case study data
  features?: string[];                    // Detailed feature descriptions
  businessImpact?: string[];              // Measurable outcomes and results
  keyMetrics?: ProjectMetrics;            // Quantifiable statistics
  architecture?: ProjectArchitecture;     // Technical stack breakdown
  challengesSolved?: ProjectChallenge[];  // Problem-solution stories
}

// Project screenshot for gallery display
export interface ProjectScreenshot {
  url: string;
  caption: string;
}

// Project status types
export type ProjectStatus = 
  | 'Current Work'    // Actively working on project
  | 'Production'      // Live with real users (NEW)
  | 'Completed'       // Finished but not necessarily live
  | 'In Progress';    // Under development

// Project category types
export type ProjectCategory = 
  | 'Full-Stack'
  | 'Frontend'
  | 'Backend'
  | 'Mobile'
  | 'Design';

// Key metrics for project impact
export interface ProjectMetrics {
  [key: string]: string | number;
  // Examples:
  // 'Active Students'?: string;
  // 'Monthly Revenue'?: string;
  // 'Time Saved'?: string;
  // 'API Response'?: string;
}

// Technical architecture breakdown
export interface ProjectArchitecture {
  frontend: string[];
  backend: string[];
  database?: string[];
  thirdParty: string[];
}

// Problem-solution-result story format
export interface ProjectChallenge {
  challenge: string;    // The problem that needed solving
  solution: string;     // How you approached and solved it
  result: string;       // Measurable outcome and impact
}

// Navigation item for header/footer
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
}

// Skill category for skills section
export interface SkillCategory {
  category: string;
  skills: string[];
  icon?: string;
}

// Contact form data
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Social media link
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

// Experience/Timeline item
export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string | 'Present';
  description: string;
  technologies?: string[];
  achievements?: string[];
}

// Education item
export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  startDate: string;
  endDate: string;
  description?: string;
  achievements?: string[];
}