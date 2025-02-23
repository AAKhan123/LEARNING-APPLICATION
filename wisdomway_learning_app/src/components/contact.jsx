import { React, useState, useEffect } from "react";
import "./contact.css";
import Skcard from "./skcards";

function Contact() {
  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setSuccessMessage(""); // Reset message on new submission
    
    const formData = new FormData(event.target);
    formData.append("access_key", "70fac3c8-d1a5-4b36-8258-51e6b47eb160");
    
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());
    
    if (res.success) {
      setSuccessMessage("Your message has been sent successfully!");
      event.target.reset(); // Clear the form after successful submission
    } else {
      setSuccessMessage("Failed to send message. Please try again.");
    }
  };

  return (
    <>
      <br />
      {loading ? (
        <Skcard />
      ) : (
        <div className="contact-page">
          <div className="contact-container">
            {/* Contact Info Section */}
            <div className="contact-info">
              <h2>Contact Info</h2>
              <p><strong>Address:</strong> Basavanapura Gate Bangalore</p>
              <p><strong>Email:</strong> wisdomway@gmail.com</p>
              <p><strong>Phone:</strong> 91 8073471712</p>
              <div className="social-icons">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>

            {/* Send a Message Section */}
            <div className="message-form">
              <h2>SEND A MESSAGE</h2>
              <form onSubmit={onSubmit}>
                <div className="form-row">
                  <input type="text" name="first Name" placeholder="First Name" required />
                  <input type="text" name="Last Name" placeholder="Last Name" required />
                </div>
                <div className="form-row">
                  <input type="email" name="email" placeholder="Email Address" required />
                  <input type="tel" name="number" placeholder="Mobile Number" required />
                </div>
                <textarea name="message" placeholder="Write your message here..." required></textarea>
                <button type="submit">Send</button>
              </form>
              {successMessage && <p className="success-message">{successMessage}</p>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;