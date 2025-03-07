import React, { useState } from "react";
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";
import { motion } from "framer-motion"; // Import animation library

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="services" id="services">
      {/* Section Title */}
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="theme" />
      </div>

      {/* Services Grid */}
      <div className="services-container">
        {Services_Data.map((service, index) => (
          <motion.div
            key={index}
            className="services-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{expandedIndex === index ? service.s_desc : `${service.s_desc.substring(0, 80)}...`}</p>

            <button onClick={() => toggleExpand(index)} className="read-more">
              {expandedIndex === index ? "Show Less" : "Read More"}
              <img src={arrow_icon} alt="arrow-icon" />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
