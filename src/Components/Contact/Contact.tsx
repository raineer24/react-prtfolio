import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact bg-colonial atmospheric-overlay">
      <div className="container">
        <h2 className="section-title">Let's Work Together</h2>
        <p className="contact-subtitle">
          Interested in discussing opportunities? Reach out directly:
        </p>
        
        <div className="contact-options">
          <a 
            href="mailto:delaritaraineer81@gmail.com" 
            className="contact-cta"
          >
            <span className="contact-icon">📧</span>
            <div className="contact-cta-content">
              <h3>Email Me</h3>
              <p>delaritaraineer81@gmail.com</p>
            </div>
          </a>
          
          <a 
            href="tel:+639956254691" 
            className="contact-cta"
          >
            <span className="contact-icon">📱</span>
            <div className="contact-cta-content">
              <h3>Call/Text</h3>
              <p>+63 995 625 4691</p>
            </div>
          </a>
        </div>

        <div className="contact-footer">
          <p>📍 Cebu City, Philippines</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;