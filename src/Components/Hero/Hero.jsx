import React from 'react'
import './Hero.css'
import profile_img from '../../assets/face_co-svg.jpg'


const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
    </div>
  )
}

export default Hero