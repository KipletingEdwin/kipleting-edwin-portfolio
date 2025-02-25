import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import emailjs from "@emailjs/browser"; // ✅ Import EmailJS

// Import Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [result, setResult] = useState(""); // Stores the form result

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    // ✅ Prepare form data for EmailJS
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("All fields are required! 🚨", { position: "top-center" });
      return;
    }

    // Email format validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Invalid email format! ❌", { position: "top-center" });
      return;
    }

    try {
      console.log("Sending email...");
      const response = await emailjs.send(
        "service_nnixq4t", // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
        formData,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS Public Key
      );

      console.log("Response:", response);

      if (response.status === 200) {
        setResult("Form Submitted Successfully!");
        toast.success("✅ Message sent successfully!", { position: "top-center" });
        event.target.reset(); // ✅ Reset form after submission
      } else {
        throw new Error("Email sending failed");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("❌ Failed to send. Try again.", { position: "top-center" });
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="theme" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Email" />
              <p> kipletingedwin4@gmail.com </p>
            </div>

            <div className="contact-detail">
              <img src={call_icon} alt="Phone" />
              <p> +447521461628 </p>
            </div>

            <div className="contact-detail">
              <img src={location_icon} alt="Location" />
              <p> Hatfield, Hertfordshire, United Kingdom </p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />

          <label htmlFor="message">Write your message here</label>
          <textarea id="message" name="message" rows="8" placeholder="Enter your message" required></textarea>

          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>

      {/* Toast Notification Component */}
      <ToastContainer />
    </div>
  );
};

export default Contact;
