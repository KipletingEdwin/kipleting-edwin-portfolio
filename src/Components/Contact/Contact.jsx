import { useState } from "react";
import "./Contact.css";
// import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion"; // Import animation library

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required!";
    if (!formData.email.trim()) newErrors.email = "Email is required!";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format!";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty!";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      toast.error("Please fix the errors before submitting! 🚨", { position: "top-center" });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await emailjs.send(
        "service_cxbqpxe", 
        "template_mbjhj3t", 
        formData,
        "4ujZMtpMTuQBs6Jtw" 
      );

      if (response.status === 200) {
        toast.success("✅ Message sent successfully!", { position: "top-center" });
        setFormData({ name: "", email: "", message: "" }); 
      } else {
        throw new Error("Email sending failed");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("❌ Failed to send. Try again.", { position: "top-center" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      {/* Section Title */}
      <motion.div
        className="contact-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1>Get in Touch</h1>
        {/* <img src={theme_pattern} alt="theme" /> */}
      </motion.div>

      <div className="contact-section">
        {/* Contact Details */}
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1>Let's Talk</h1>
          <p>
            I'm available for new projects! Feel free to reach out about anything.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Email" />
              <a href="mailto:kipletingedwin4@gmail.com">kipletingedwin4@gmail.com</a>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Phone" />
              <a href="tel:+447521461628">+447521461628</a>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location" />
              <p>Hatfield, Hertfordshire, UK</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="contact-right"
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <label>Your Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={errors.name ? "error" : ""}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}

          <label>Your Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={errors.email ? "error" : ""}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}

          <label>Message</label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={errors.message ? "error" : ""}
          />
          {errors.message && <span className="error-text">{errors.message}</span>}

          <button type="submit" className="contact-submit">
            {isSubmitting ? "Sending..." : "Submit Now"}
          </button>
        </motion.form>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contact;
