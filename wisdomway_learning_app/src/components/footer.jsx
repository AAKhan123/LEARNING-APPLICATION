import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

function Footer() {
  const [isChatOpen, setIsChatOpen] = useState(false); // Track the chat state
  const navigate = useNavigate();
  const location = useLocation();

  const handleChatToggle = () => {
    if (isChatOpen) {
      // If chat is open, navigate back to the previous page
      navigate(-1);
    } else {
      // If chat is closed, navigate to the chat page
      navigate("/chat");
    }
    setIsChatOpen(!isChatOpen); // Toggle the chat state
  };

  return (
    <>
      <footer className="footer">
  <div className="footer-container">
  <img src='/images/WW1.png'className='flogo' title="Logo" ></img>
    <div className="footer-section">
      <h3 className='hh' title="Title">WISDOMWAY</h3>
      <p>WAY OF LEARNING</p>
    </div>
    <div className="footer-section">
      <ul>
       <Link to={'/'} title="Home" ><li>HOME</li></Link> 
       <Link to={'/login'} title="Profile"><li>PROFILE</li></Link> 
        <a href='#'><li>SETTINGS</li></a>
      </ul>
    </div>
    <div className="footer-section">
      <ul>
       <a href='#'><li>SERVICES</li></a> 
       <a href='#'><li>JOIN US</li></a> 
      </ul>
    </div>
    <div className="footer-section">
      <ul>
        <a href='#'><li>SHOWCASE</li></a>
        <a href='#'><li>HELPLINE</li></a>
        <a href='#'><li>SUPPORT</li></a>
      </ul>
    </div>
    <div className="footer-section">
      <ul>
       <Link to={'/about'} > <li>ABOUT US</li></Link>
        <Link to={'/contact'} ><li>CONTACT US</li></Link>
        <a href="#"><li>AFFILIATES</li></a>
        <a href='#'><li>RESOURCES</li></a>
      </ul>
    </div>
  </div>
  <div className="footer-social">
  <center><a href="#" className="top" title="Back to top">Back to Top <i class="fa-solid fa-arrow-up"></i></a></center> <br/>

    <ul>
      <li>
        <a href="#"><i className="fa-brands fa-instagram" />
        </a>
      </li>
      <li>
        <a href="#"><i className="fa-brands fa-facebook" />
        </a>
      </li>
      <li>
        <a href="#"><i className="fa-solid fa-x" />
        </a>
      </li>
      <li>
        <a href="#"><i className="fa-brands fa-linkedin" />
        </a>
      </li>
    </ul>
  </div><br/>
  <div className="footer-copyright">
    <p>© Copyright. All rights reserved by WisdomWay</p>
  </div>
</footer> 

      {/* Floating Chatbot Icon */}
      <div
        className="chatbot-icon"
        onClick={handleChatToggle}
        title={isChatOpen ? "Close Chat" : "Open Chat"}
      >
        <i className="fa-solid fa-robot"></i>
      </div>
    </>
  );
}

export default Footer;
