import React from 'react'
import'./Footer.css'
import footer_logo from '../../assets/footer_logo.svg' 
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'> 
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="footer-logo" /> 
          <p> I am a frontend developer from Hatfield,Hertfordshire, United Kingdom</p>
        </div> 
        <div className='footer-top-right'> 
          <div className="footer-email-input">
            <img src={user_icon} alt="user_icon" /> 
            <input type="text" placeholder='Enter your email' />
          </div>
          <div className="footer-subscribe">Subscribe</div>

        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-bottom-left">&copy; 2025 Kipleting Edwin. All rights reserved. </p> 
        <div className="footer-bottom-right">
          <p> </p>
          <p> </p> 
          <p> </p>
        </div>
      </div>
    </div>
  )
}

export default Footer