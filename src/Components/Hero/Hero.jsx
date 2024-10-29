import React from 'react'
import './Hero.css'
import profile_img from '../../assets/face_co-svg.jpg'


const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Raineer Dela Rita,</span>frontend developer Cebu, PHI with 5 years of experience</h1>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My Resume</div>
        </div>

    </div>
  )
}

export default Hero