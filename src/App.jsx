// src/App.jsx - Enhanced with Atmospheric Backgrounds
import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/globals.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Preload background images for better performance
    const preloadImages = () => {
      const images = [
        '/images/colonial-architecture.jpg',
        '/images/cafe-interior.jpg',
        '/images/raineer-profile.jpg'
      ];

      let loadedCount = 0;
      const totalImages = images.length;

      images.forEach(src => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            setImagesLoaded(true);
            setTimeout(() => setIsLoading(false), 500); // Small delay for smooth transition
          }
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            setImagesLoaded(true);
            setTimeout(() => setIsLoading(false), 500);
          }
        };
        img.src = src;
      });
    };

    preloadImages();
  }, []);

  // Loading screen component
  const LoadingScreen = () => (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-spinner"></div>
        <h2>Loading Portfolio...</h2>
        <p>Preparing your experience</p>
      </div>
      <style jsx>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          transition: opacity 0.5s ease;
        }
        
        .loading-content {
          text-align: center;
          color: white;
        }
        
        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-top: 3px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 1rem;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .loading-content h2 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }
        
        .loading-content p {
          font-size: 1rem;
          opacity: 0.9;
        }
      `}</style>
    </div>
  );

  // Show loading screen while images are loading
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      {/* Navigation */}
      <Header />
      
      {/* Hero Section with Colonial Background */}
      <Hero className="bg-colonial atmospheric-overlay floating-elements" />
      
      {/* About Section with Cafe Background */}
      <About className="bg-cafe texture-overlay" />
      
      {/* Projects Section - Keep original gradient background */}
      <Projects />
      
      {/* Contact Section with Colonial Background */}
      <Contact className="bg-colonial atmospheric-overlay" />
      
      {/* Footer */}
      <Footer />
      
      {/* Background fade transitions */}
      <div className="section-transitions">
        <div className="transition-fade transition-1"></div>
        <div className="transition-fade transition-2"></div>
        <div className="transition-fade transition-3"></div>
      </div>
      
      <style jsx>{`
        .App {
          position: relative;
          overflow-x: hidden;
        }
        
        .section-transitions {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }
        
        .transition-fade {
          position: absolute;
          width: 100%;
          height: 150px;
          background: linear-gradient(to bottom, transparent, var(--bg-primary));
        }
        
        .transition-1 {
          top: calc(100vh - 100px);
        }
        
        .transition-2 {
          top: calc(200vh - 100px);
        }
        
        .transition-3 {
          top: calc(300vh - 100px);
        }
        
        @media (max-width: 768px) {
          .transition-fade {
            height: 100px;
          }
          
          .transition-1 {
            top: calc(100vh - 75px);
          }
          
          .transition-2 {
            top: calc(200vh - 75px);
          }
          
          .transition-3 {
            top: calc(300vh - 75px);
          }
        }
      `}</style>
    </div>
  );
}

export default App;