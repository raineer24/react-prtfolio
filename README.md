# 🚀 Portfolio - Raineer Dela Rita

A modern, responsive portfolio website built with React and TypeScript, showcasing my projects and skills as a Full-Stack Developer.

## 🌐 Live Demo

**[View Live Portfolio](https://raineer-portfolio.netlify.app/)**

## ✨ Features

- **TypeScript Integration** - Type-safe development with full TypeScript support
- **Atmospheric Design** - Colonial architecture and cafe interior backgrounds with glassmorphism effects
- **Responsive Layout** - Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations** - Floating elements, fade-in effects, and interactive hover states
- **Project Showcase** - Featured projects with status badges and technology tags
- **Contact Form** - Integrated contact section with form validation
- **Performance Optimized** - Image lazy loading and preloading for fast page loads

## 🛠️ Tech Stack

### Frontend
- React 18
- TypeScript
- Vite (Build tool)
- CSS3 with Custom Properties

### Development Tools
- ESLint
- Prettier
- Git

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/raineer24/portfolio-react.git

# Navigate to project directory
cd portfolio-react

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Available Scripts

```bash
# Development
npm run dev          # Start development server at http://localhost:5173

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run type-check   # TypeScript type checking
```

## 📁 Project Structure

```
portfolio-react/
├── public/
│   ├── images/              # Background images and project thumbnails
│   └── resume/              # Resume PDF
├── src/
│   ├── components/          # React components
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── MyWork/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── data/               # Centralized data (projects, skills)
│   │   └── projects.ts
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts
│   ├── styles/             # Global styles
│   │   └── globals.css
│   ├── App.tsx             # Main app component
│   └── main.tsx            # Entry point
├── index.html
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── package.json
```

## 🎨 Design Features

### Hero Section
- Colonial architecture background with atmospheric overlays
- Glassmorphism content card with backdrop blur
- Animated floating particles
- Gradient text effects on subtitle

### About Section
- Cafe interior background
- Skill categories with hover effects
- Profile image with gradient border

### Projects Section
- Card-based layout with hover animations
- Status badges (Current Work, Completed, In Progress)
- Featured project highlighting
- Technology tags with interactive hover states

### Contact Section
- Colonial background matching hero
- Form validation
- Glassmorphism form design

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url_here
```

### Customization

#### Update Projects
Edit `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 'your-project',
    title: 'Your Project Name',
    description: 'Project description',
    technologies: ['React', 'TypeScript', 'Node.js'],
    liveDemo: 'https://your-demo.com',
    githubLink: 'https://github.com/yourusername/repo',
    featured: true,
    status: 'Completed',
    category: 'Full-Stack'
  }
];
```

#### Update Skills
Edit skills in `src/components/About/About.tsx`:

```typescript
const skills = {
  frontend: ['React', 'TypeScript', 'Angular', 'Vue.js', 'Next.js'],
  backend: ['Node.js', 'NestJS', 'PostgreSQL', 'MongoDB'],
  tools: ['Docker', 'Git', 'Vite', 'Jest']
};
```

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🎯 Performance Optimizations

- Image preloading for background images
- Lazy loading for project images
- CSS animations with reduced motion support
- Optimized build with Vite
- Component-level code organization

## 🌐 Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

### Manual Deployment

```bash
# Build the project
npm run build

# The dist/ folder contains the production build
# Upload contents to your hosting service
```

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 👨‍💻 Author

**Raineer Dela Rita**
- Portfolio: [raineer-portfolio.netlify.app](https://raineer-portfolio.netlify.app/)
- GitHub: [@raineer24](https://github.com/raineer24)
- LinkedIn: [Raineer Dela Rita](https://linkedin.com/in/raineer-dela-rita)
- Email: raineer.delarita@example.com

## 🙏 Acknowledgments

- Background images from [Unsplash](https://unsplash.com)
- Icons and design inspiration from various sources
- Built with modern web technologies

---

⭐ If you found this portfolio helpful, please consider giving it a star!

**Last Updated**: October 2025