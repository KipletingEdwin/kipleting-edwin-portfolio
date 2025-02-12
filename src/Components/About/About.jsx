import React from 'react' 
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About Me</h1> 
            <img src={theme_pattern} alt="theme" /> 
        </div> 
        <div className="about-sections"> 
          <div className="about-left"> 
            <img src={profile_img} alt="profile-img" />
          </div>
          <div className="about-right"> 
            <div className="about-para">
              <p> I am experienced Frontend Developer with over </p>
              <p> My passion for frontend development is not only</p>
            </div>

          </div>
        </div>
    </div>
  )
}

export default About