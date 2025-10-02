import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {currentYear} Raineer Dela Rita. All rights reserved.</p>
          
          <div className="social-links">
            <a href="mailto:raineer.delarita@example.com" aria-label="Email">
              Email
            </a>
            <a href="https://linkedin.com/in/raineer-dela-rita" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/raineer24" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;