import React from 'react'
import './Hero.css'
import profile_img from '../../assets/face_co-svg.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Raineer Dela Rita,</span>frontend developer Cebu, PHI with 5 years of experience</h1>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href="#contact">Connect with me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>

    </div>
  )
}

export default Hero