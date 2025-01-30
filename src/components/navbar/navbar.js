import React, { useState } from 'react';
import './navbar.scss';
import { FaEnvelope } from 'react-icons/fa';  // Using react-icons for the menu and mail button

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
        <span>Yash.ui.dev</span>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className={`bar1 ${isMenuOpen ? 'change' : ''}`}></div>
        <div className={`bar3 ${isMenuOpen ? 'change' : ''}`}></div>
      </div>

      {/* Menu */}
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Mail button visible on Desktop, appears on Mobile after hamburger menu click */}
      <div className={` menu open contact ${isMenuOpen ? 'show'  : ''}`}>
        <a href="mailto:your-email@example.com" className="mail-btn">
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
