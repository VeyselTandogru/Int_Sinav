import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-text">VT</span>
        </a>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={closeMenu}>
              Ana Sayfa
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={closeMenu}>
              Ben Kimim
            </a>
          </li>
          <li className="nav-item">
            <a href="#experience" className="nav-link" onClick={closeMenu}>
              Deneyimlerim
            </a>
          </li>
          <li className="nav-item">
            <a href="#portfolio" className="nav-link" onClick={closeMenu}>
              Portfolyo
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={closeMenu}>
              İletişim
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 