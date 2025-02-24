import React from 'react' 
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'


const About = () => {
  return (
    <div className='about' id='about'>
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
              <p> I am experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaboratimg with prestigious organizations, contributing to their success and growth. </p>
              <p> My passion for frontend development is not only reflected in my extensive experience but also in the enhusiasm and dedication I bring to each project.  </p>
            </div>
         

          <div className="about-skills"> 
            <div className="about-skill"><p> HTML & CSS </p> <hr style={{width: "50%"}}  /> </div> 
            <div className="about-skill"><p> React JS </p> <hr style={{width: "70%"}}  /> </div>
            <div className="about-skill"><p> JavaScript </p> <hr style={{width: "60%"}}  /> </div>
            <div className="about-skill"><p> Ruby on Rails </p> <hr style={{width: "75%"}}  /> </div>
            <div className="about-skill"><p> Java </p> <hr style={{width: "50%"}}  /> </div>
          </div>
          </div> 


        </div>

    </div>
  )
}

export default About