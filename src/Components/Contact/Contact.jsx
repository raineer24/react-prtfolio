// src/components/Contact/Contact.jsx
import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const contactRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const fadeElements = contactRef.current?.querySelectorAll('.fade-in');
    fadeElements?.forEach(el => observer.observe(el));

    return () => {
      fadeElements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      content: 'raineer@example.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      content: '+1 (555) 123-4567'
    },
    {
      icon: '📍',
      title: 'Location',
      content: 'Cebu City, Philippines'
    }
  ];

  return (
    <section id="contact" className="contac bg-colonial parallax-bg floating-elements" ref={contactRef}>
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle" style={{color: 'rgba(255,255,255,0.8)'}}>
            Ready to bring your ideas to life? Let's connect and create something amazing.
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-info fade-in">
            <h3>Get In Touch</h3>
            {contactInfo.map((item, index) => (
              <div key={index} className="contact-item">
                <div className="contact-icon">{item.icon}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="contact-form fade-in">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;