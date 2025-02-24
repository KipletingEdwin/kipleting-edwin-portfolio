import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

// Import Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [result, setResult] = useState(""); // Stores the form result

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    // ✅ Ensure Web3Forms API Key is Set
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY || "b06ce295-6dd0-4c79-a7ee-9bf4baa29b99");


    // ✅ Prevent Web3Forms Redirection
    formData.append("redirect", "false");

    // ✅ Debug: Log Form Data Before Sending
    console.log("Form Data Entries:", [...formData.entries()]);

    // Basic validation
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const message = formData.get("message").trim();

    if (!name || !email || !message) {
      toast.error("All fields are required! 🚨", { position: "top-center" });
      return;
    }

    // Email format validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Invalid email format! ❌", { position: "top-center" });
      return;
    }

    try {
      console.log("Sending form data...");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST", // ✅ Ensure the method is POST
        body: formData,
        headers: { "Accept": "application/json" } // ✅ Ensure JSON response
      });

      console.log("Response received:", response);

      const data = await response.json();
      console.log("Response Data:", data);

      if (data.success) {
        setResult("Form Submitted Successfully!");
        toast.success("✅ Message sent!", { position: "top-center" });

        event.target.reset(); // ✅ Reset form after submission
      } else {
        console.log("Error:", data);
        toast.error(`❌ ${data.message}`, { position: "top-center" });
      }
    } catch (error) {
      console.error("Fetch Error:", error);
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

          {/* {result && <p className="form-result">{result}</p>} */}
        </form>
      </div>

      {/* Toast Notification Component */}
      <ToastContainer />
    </div>
  );
};

export default Contact;
