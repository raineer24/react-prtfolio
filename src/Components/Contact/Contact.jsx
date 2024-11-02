import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg'; 
import mail_icon from '../../assets/mail.svg';
import phone from '../../assets/phone.svg';
import loca from '../../assets/loca.svg';

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /><p>delaritaraineer81@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={phone} alt="" /><p>0923-212-212</p>
                    </div>
                    <div className="contact-detail">
                        <img src={loca} alt="" /><p>Cebu, PH</p>
                    </div>
                </div>
            </div>
            <form className="contact-right">
                <label htmlFor="">Your name</label>
                <input type="text" placeholder='Enter your name'name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact