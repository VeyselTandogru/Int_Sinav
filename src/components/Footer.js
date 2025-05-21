import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-icons">
          <a 
            href="https://x.com/tandogru_veysel" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
          >
            <FaXTwitter />
          </a>
          <a 
            href="https://github.com/VeyselTandogru" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/veyseltandogru/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
          >
            <FaLinkedinIn />
          </a>
        </div>
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Veysel Tandoğru. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 