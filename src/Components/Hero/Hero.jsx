import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'> 
        <img src={profile_img} alt="profile-image" /> 
        <h1><span> I'm Kipleting Edwin, </span> fullstack developer based in the United Kingdom</h1> 
        <p>I am a frontend developer based in Hatfield, Hertfordshire, United Kingdom, with experience in JavaScript, React, Ruby on Rails, and Java. I am currently pursuing an MSc in Software Engineering. </p> 
        <div className="hero-action"> 
            <div className="hero-connect"> Connect with me</div> 
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero