import React from 'react';
import  './Footer.css';
import footer_logo from '../../assets/footer_logo.jpg';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>I am a frontend developer from, Philippines with 5 years of experience.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Footer