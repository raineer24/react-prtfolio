import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const MyWork = () => {
  return (
    <div className='myWork'>
        <div className="mywork-title">
            <h1>My latest work</h1>
            <img src={theme_pattern} alt="" />
        </div>
    </div>
  )
}

export default MyWork