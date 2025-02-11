import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'> 
        <img src={profile_img} alt="profile-image" /> 
        <h1>I'm Kipleting Edwin, frontend developer based in the United Kingdom</h1> 
        <p>I am a frontend developer from Hatfild,Hertfordshire, United Kingdom with 10 years of </p> 
        <div className="hero-action"> 
            <div className="hero-connect"> Connect with me</div> 
            <div className="hero-resume">My resume</div>


        </div>
    </div>
  )
}

export default Hero