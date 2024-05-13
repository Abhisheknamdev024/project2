import React from 'react'
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import profileimg from '../../assets/pic3.jpeg';
const Hero = () => {
  
  return (
    <div className='hero'>
        <img src={profileimg} alt="" />
        <h1><span>Hi I'm Abhishek Namdev,</span> FullStack Web App developer</h1>
        <p>Fullstack Web Developer | Crafting Dynamic Solutions with Frontend Finesse & Backend Brilliance</p>
        <div className='hero-action'>
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <a href='https://drive.google.com/file/d/1_rGY6Y7wBCLWjbHfRfdbPRSTkMu4f1sj/view' className="hero-resume">My Resume</a>
        </div>
    </div>
  )
}

export default Hero