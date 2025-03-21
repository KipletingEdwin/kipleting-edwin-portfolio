import "./Footer.css";
import footer_logo from "../../assets/edwin.svg";
import { motion } from "framer-motion"; // Import animation library
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Import social icons

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="footer-top">
        {/* Left Side - About */}
        <div className="footer-top-left">
          <img src={footer_logo} alt="footer-logo" />
          <p>
          I am a passionate frontend developer based in Hatfield, Hertfordshire, United Kingdom, eager to build
           modern and user-friendly web applications. I am continuously learning and working on projects to
            improve my skills in JavaScript, React,Java, Ruby on Rails and web technologies.
          </p>
        </div>

        {/* Right Side - Social Media Icons */}
        <div className="footer-socials">
          <a href="https://github.com/KipletingEdwin" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/kipleting-edwin/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://x.com/RotichKEdwin" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Footer Bottom - Links and Copyright */}
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &copy; 2025 Kipleting Edwin. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="#contact">Connect with Me</a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
