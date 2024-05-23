import React from 'react'
import "./About.css"
import themepattern from '../../assets/theme_pattern.svg';
import profileImg from '../../assets/pic2.jpeg';

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img  className="patt" src={themepattern} alt="" />
        </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profileImg} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-pera">
                        <p>Enthusiastic and motivated Full Stack Web Developer with a strong foundation in frontend and backend technologies .</p>
                        <p>Proficient in HTML, CSS, JavaScript, and familiar with frameworks such as React.js and Node.js.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>PYTHON & DJANGO</p> <hr style={{width:'50%'}}/>
                        </div>
                        <div className="about-skill">
                            <p>REACT JS</p> <hr style={{width:'70%'}}/>
                        </div><div className="about-skill">
                            <p>EXPRESS JS</p> <hr style={{width:'50%'}}/>
                        </div><div className="about-skill">
                            <p>JAVASCRIPT</p> <hr style={{width:'60%'}}/>
                        </div>
                    
                </div>
            </div>
        </div>
        <div className="about-achivements">
            <div className="about-achivement">
                <h1>1+</h1>
                <p> YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>20+</h1>
                <p> REACT PROJECT COMPLETED.</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>30+</h1>
                <p> dJANGO & EXPRESS JS PROJECT COMPETED.</p>
            </div>
        </div>
    </div>
  )
}

export default About