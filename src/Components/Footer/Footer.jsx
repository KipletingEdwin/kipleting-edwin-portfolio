import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/edwin.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="footer-logo" />
          <p>
            I am a frontend developer from Hatfield,Hertfordshire, United
            Kingdom with 10 years experience in companies like Microsoft,Goggle
            and Tesla
          </p>
        </div>

        <div className="footer-top-right"></div>
      </div>
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &copy; 2025 Kipleting Edwin. All rights reserved.{" "}
        </p>
        <div className="footer-bottom-right">
          <p> Term of Services</p>
          <p> Privacy Policy</p>
          <p> Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
