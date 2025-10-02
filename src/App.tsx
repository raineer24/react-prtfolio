// src/App.tsx - TypeScript Conversion (Preserves all atmospheric effects)
import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/globals.css';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

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
            setTimeout(() => setIsLoading(false), 500);
          }
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            setTimeout(() => setIsLoading(false), 500);
          }
        };
        img.src = src;
      });
    };

    preloadImages();
  }, []);

  // Loading screen component
  const LoadingScreen: React.FC = () => (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-spinner"></div>
        <h2>Loading Portfolio...</h2>
        <p>Preparing your experience</p>
      </div>
    </div>
  );

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      
      <div className="section-transitions">
        <div className="transition-fade transition-1"></div>
        <div className="transition-fade transition-2"></div>
        <div className="transition-fade transition-3"></div>
      </div>
    </div>
  );
};

export default App;