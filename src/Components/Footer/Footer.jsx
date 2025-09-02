// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    { icon: '📧', href: 'mailto:raineer@example.com', label: 'Email' },
    { icon: '💼', href: 'https://linkedin.com/in/raineer', label: 'LinkedIn' },
    { icon: '🐙', href: 'https://github.com/raineer24', label: 'GitHub' },
    { icon: '🐦', href: 'https://twitter.com/raineer', label: 'Twitter' }
  ];

  return (
    <footer>
      <div className="container">
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p>&copy; 2025 Raineer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;