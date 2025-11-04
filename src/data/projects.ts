// src/data/projects.ts - Enhanced with detailed metrics and case study data
// ✅ Adds comprehensive project information for ProjectDetailModal
// ✅ Includes business impact, architecture, and challenge-solution stories
// ✅ Preserves all existing functionality
// ✅ YouTube video embed support added

import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'ogmok-academy',
    title: 'OGMOK Jiu-Jitsu Academy - Membership System',
    description: 'Full-stack membership management system with 93% efficiency improvement and ₱21,200 monthly revenue tracking.',
    detailedDescription: 'Comprehensive membership management system for OGMOK Jiu-Jitsu Academy handling student enrollment, attendance tracking, payment processing, and automated SMS reminders. Built to solve real operational challenges faced by martial arts instructors managing 23 active students.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Prisma ORM', 'Vercel', 'Tailwind CSS', 'JWT Auth'],
    liveDemo: 'https://student-membership-tracking-raineer24s-projects.vercel.app/',
    github: 'https://github.com/raineer24/student-membership-tracking',
    image: '/images/ogmok-thumbnail.jpg',
    thumbnail: '/images/ogmok-thumbnail.jpg',
    videoUrl: 'https://www.youtube.com/embed/pZrBHT6r8JA',
    screenshots: [
      { url: '/images/ogmok-thumbnail.jpg', caption: 'Dashboard Overview with Real-time Statistics' },
      { url: '/images/ogmok-detail-1.jpg', caption: 'Bulk Attendance Modal - 30 Second Logging' },
      { url: '/images/ogmok-detail-2.jpg', caption: 'Student Profile with Payment History' }
    ],
    featured: true,
    status: 'Production',
    category: 'Full-Stack',
    
    // Business impact metrics
    features: [
      'Bulk Attendance Modal - Log 16+ students in under 30 seconds with smart search and duplicate prevention',
      'Real-time Dashboard - Live statistics with filter by payment status (paid/unpaid/overdue)',
      'Payment Management - Three-tier pricing system (₱1,200 Kids, ₱1,300 Teens, ₱1,400 Adults)',
      'Automated SMS Reminders - Semaphore API integration for payment notifications (₱42/month operational cost)',
      'Student Profiles - Individual attendance history and payment tracking with next due date calculations',
      'Mobile Responsive Design - Optimized for coaches using phones during training sessions',
      'Role-based Access Control - Admin and instructor permissions with secure JWT authentication',
      'Data Export Functionality - Generate reports for accounting and business analytics',
      'Search & Advanced Filtering - Quick student lookup with real-time results'
    ],
    
    businessImpact: [
      'Reduced attendance logging time by 93% (from 15 minutes to 30 seconds)',
      'Eliminated 100% of manual data entry errors through automated validation',
      'Enabled coaches to focus on training instead of administrative paperwork',
      'Cost-effective SMS automation at only ₱42/month for payment reminders',
      'Real-time revenue visibility enabling better business decisions'
    ],
    
    keyMetrics: {
      'Active Students': '23',
      'Monthly Revenue': '₱21,200',
      'Time Saved': '93%',
      'API Response': '<200ms',
      'SMS Cost': '₱42/month',
      'Error Rate': '0%'
    },
    
    architecture: {
      frontend: ['React 18', 'Context API for State', 'React Router v6', 'Tailwind CSS'],
      backend: ['Vercel Serverless Functions', 'Node.js Runtime', 'Prisma ORM', 'JWT Authentication'],
      database: ['PostgreSQL', 'Prisma Schema', 'Automated Migrations', 'ACID Transactions'],
      thirdParty: ['Semaphore SMS API', 'Vercel Deployment', 'Git Version Control']
    },
    
    challengesSolved: [
      {
        challenge: 'Manual attendance logging took 15 minutes for 16 students every weekend, causing training delays and coach frustration',
        solution: 'Built Bulk Attendance Modal with intelligent search, multi-select checkboxes, duplicate prevention, and single-click submission',
        result: 'Reduced logging time to 30 seconds (93% improvement), allowing coaches to start training immediately'
      },
      {
        challenge: 'Students frequently forgot payment due dates, causing cash flow issues and awkward collection conversations',
        solution: 'Integrated Semaphore SMS API to send automated reminders 3 days before payment due dates',
        result: 'Improved on-time payment rate and maintained steady cash flow at minimal cost (₱42/month for all notifications)'
      },
      {
        challenge: 'No visibility into individual student progress, attendance patterns, or payment history for coaching decisions',
        solution: 'Created comprehensive student profiles with attendance records, payment timeline, and training session history',
        result: 'Instructors can identify at-risk students, track progress over time, and make data-driven coaching decisions'
      }
    ]
  },
  {
    id: 'codebility',
    title: 'Codebility - Developer Hiring Platform',
    description: 'Enterprise-grade internship and team management platform with real-time collaboration features.',
    detailedDescription: 'Contributing to production enterprise platform for Codebility, handling developer internship applications, team management, project assignments, and real-time collaboration. Built with Next.js 14, TypeScript, and Supabase for scalability and performance at enterprise level.',
    technologies: ['Next.js 14', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Zustand', 'React Query', 'Vercel'],
    liveDemo: 'https://www.codebility.tech/',
    github: 'https://github.com/CodebilityDev/codebility-plus',
    image: '/images/codebility-thumbnail.jpg',
    thumbnail: '/images/codebility-thumbnail.jpg',
    screenshots: [
      { url: '/images/codebility-thumbnail.jpg', caption: 'Main Dashboard with Personalized Developer Metrics' },
      { url: '/images/codebility-detail-1.jpg', caption: 'Kanban Board with Sprint Management and Drag-Drop' },
      { url: '/images/codebility-detail-2.jpg', caption: 'Admin Dashboard with User Management Interface' }
    ],
    featured: true,
    status: 'Current Work',
    category: 'Full-Stack',
    
    features: [
      'Multi-step Application System - Public application flow with NDA signing and automated onboarding',
      'Intern Management Dashboard - Track onboarding progress, time logs, and certificate generation',
      'Project Management Module - Team assignment, task distribution, and status tracking',
      'Kanban Board System - Sprint-based task management with drag-and-drop functionality',
      'Real-time Collaboration - Social feed, notifications, and team communication features',
      'Admin Dashboard - Comprehensive user management, analytics, and system configuration',
      'Authentication System - Secure role-based access control with Supabase Auth',
      'RESTful API Integrations - Third-party service connections and webhook management',
      'Performance Monitoring - Real-time analytics and user behavior tracking'
    ],
    
    businessImpact: [
      'Streamlined developer onboarding process reducing administrative overhead',
      'Real-time collaboration features improving team productivity and communication',
      'Comprehensive analytics dashboard enabling data-driven hiring decisions',
      'Reduced HR team workload through automated application workflow'
    ],
    
    keyMetrics: {
      'Tech Stack': 'Next.js 14 + TypeScript',
      'Database': 'Supabase PostgreSQL',
      'State Management': 'Zustand + React Query',
      'Architecture': 'Server/Client Components',
      'Deployment': 'Vercel Edge Network'
    },
    
    architecture: {
      frontend: [
        'Next.js 14 (App Router)', 
        'TypeScript', 
        'Tailwind CSS', 
        'Zustand State Management', 
        'React Query for Data Fetching',
        'Server Components',
        'Client Components'
      ],
      backend: [
        'Supabase (PostgreSQL Database)', 
        'Supabase Auth', 
        'Supabase Realtime Subscriptions',
        'Serverless API Routes',
        'Redis Caching'
      ],
      thirdParty: [
        'jsPDF for Certificate Generation', 
        'Nodemailer for Email', 
        'Custom Analytics Integration',
        'Vercel Edge Functions'
      ]
    },
    
    challengesSolved: [
      {
        challenge: 'Complex multi-role system requiring sophisticated authentication and authorization for admins, interns, and applicants',
        solution: 'Implemented Row Level Security (RLS) with Supabase and role-based middleware for granular permission control',
        result: 'Secure system supporting multiple user roles with fine-grained permissions and zero unauthorized access incidents'
      },
      {
        challenge: 'Real-time updates needed across distributed team members without overwhelming the database with polling requests',
        solution: 'Leveraged Supabase Realtime subscriptions for live notifications and React Query for optimistic updates',
        result: 'Instant collaboration features with minimal server load and excellent user experience'
      },
      {
        challenge: 'Managing complex application state across multiple pages and components without prop drilling',
        solution: 'Implemented Zustand for global state and React Query for server state, keeping concerns separated',
        result: 'Clean, maintainable codebase with predictable state management and easy debugging'
      }
    ]
  }
];