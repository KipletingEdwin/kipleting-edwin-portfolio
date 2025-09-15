import "./About.css";
// import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile.jpg";
import { motion } from "framer-motion"; // Import animation library

const About = () => {
  return (
    <section className="about" id="about">
      {/* Section Title */}
      <div className="about-title">
        <h1>About Me</h1>
        {/* <img src={theme_pattern} alt="theme" /> */}
      </div>

      <div className="about-sections">
        {/* Profile Image with Scroll Animation */}
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img src={profile_img} alt="profile-img" />
        </motion.div>

        {/* Right Content - Bio and Skills */}
        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="about-para">
            <p>
              I am a passionate Frontend Developer with a strong foundation in
              building responsive and user-friendly web applications. Through my
              learning and hands-on projects, I have gained experience in modern
              frontend technologies and best practices.
            </p>
            <p>
              My enthusiasm for frontend development drives me to continuously
              improve my skills and stay updated with the latest trends. I am
              eager to collaborate with teams, contribute to meaningful
              projects, and grow as a developer.
            </p>
          </div>

          {/* Animated Skill Bars */}
          <div className="about-skills">
            {[
              { name: "HTML & CSS", level: 80 },
              { name: "JavaScript", level: 85 },
              { name: "TypeScript", level: 70 },
              { name: "React JS", level: 90 },
              { name: "Angular JS", level: 70 },
              { name: "Ionic Frameworks", level: 80 },
              { name: "Ruby on Rails", level: 75 },
            ].map((skill, index) => (
              <div key={index} className="about-skill">
                <p>{skill.name}</p>
                <motion.div
                  className="skill-bar"
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
