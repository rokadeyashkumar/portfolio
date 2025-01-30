import React from "react";
import { RiTwitterXFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container">
      {/* Left Section */}
      <div className="footer-left">
        <div className="logo-container">
          <img className="img" src={process.env.PUBLIC_URL + "/logo.png"} alt="Logo" />
          <p className="slog">Every pixel tells a story.</p>
        </div>
      </div>
   
      {/* Right Section */}
      <div className="footer-right">
        <div className="menu-columns">
          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li><a href="#academy">Academy</a></li>
              <li><a href="#inspiration">Inspiration</a></li>
              <li><a href="#ui-marketplace">UI Marketplace</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Tool</h3>
            <ul>
              <li><a href="#figma">Figma</a></li>
              <li><a href="#html">HTML</a></li>
              <li><a href="#developer-kit">Developer Kit</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Highlights</h3>
            <ul>
              <li><a href="#case-studies">Case Studies</a></li>
              <li><a href="#client-work">Client Work</a></li>
              <li><a href="#explorations">Explorations</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="#career">Career</a></li>
              <li><a href="#event">Event</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Tool</h3>
            <ul>
              <li><a href="#figma">Figma</a></li>
            </ul>
          </div>
        </div>
  
        {/* Social Icons */}
        <div className="footer-socials">
          <a href="https://x.com/YashkumarRokade/?mx=2" target="_blank" rel="noopener noreferrer" className="social-icon">
            <RiTwitterXFill size={30} />
          </a>
          <a href="https://www.instagram.com/rokadeyashkumar/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <AiFillInstagram size={30} />
          </a>
          <a href="www.linkedin.com/in/yashkumar-rokade-004478225" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/rokadeyashkumar" target="_blank" rel="noopener noreferrer" className="social-icon">
            <IoLogoGithub size={30} />
          </a>
        </div>
      </div>
    </div>
  </footer>
  
  );
};

export default Footer;
