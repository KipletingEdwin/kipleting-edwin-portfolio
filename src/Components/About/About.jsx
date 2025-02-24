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
              <p> I am a passionate Frontend Developer with a strong foundation in building responsive and user-friendly web applications. Through my learning and hands-on projects, I have gained experience in modern frontend technologies and best practices. </p>
              <p> My enthusiasm for frontend development drives me to continuously improve my skills and stay updated with the latest trends. I am eager to collaborate with teams, contribute to meaningful projects, and grow as a developer.  </p>
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