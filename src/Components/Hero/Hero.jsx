import "./Hero.css";
import profile_img from "../../assets/profile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion"; // Import animation library

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Profile Image with Smooth Animation */}
      <motion.img
        src={profile_img}
        alt="profile-image"
        className="hero-img"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Hero Text Content */}
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <span className="hero-highlight">I'm Kipleting Edwin,</span> 
        fullstack developer based in the United Kingdom
      </motion.h1>

      <motion.p
        className="hero-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        I am a frontend developer based in Hatfield, Hertfordshire, United Kingdom, with experience in JavaScript, React, Ruby on Rails, and Java. I am currently pursuing an MSc in Software Engineering.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="hero-action"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <AnchorLink className="hero-connect" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
        <a href="/resume.pdf" download className="hero-resume">
          My Resume
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
