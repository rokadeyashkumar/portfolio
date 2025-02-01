import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close menu when clicking on a link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Logo" />
        </Link>
        <span>Yash.ui.dev</span>
      </div>

      {/* Hamburger Menu */}
      <div className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className={`bar1 ${isMenuOpen ? "change" : ""}`}></div>
        <div className={`bar3 ${isMenuOpen ? "change" : ""}`}></div>
      </div>

      {/* Menu */}
      <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/project" onClick={closeMenu}>Projects</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/skill" onClick={closeMenu}>Skills</Link></li>
        <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
        <li><Link to="/resource" onClick={closeMenu}>Resources</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>

      {/* Mail Button */}
      <div className={`menu open contact ${isMenuOpen ? "show" : ""}`}>
        <a href="mailto:your-email@example.com" className="mail-btn">
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
