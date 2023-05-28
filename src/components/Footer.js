import React from 'react';
import { FaEnvelope, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="mailto:wmgrenaway@webuildweb3.org" className="social-icon">
          <FaEnvelope size={30} style={{ marginRight: '10px' }} />
        </a>
        <a href="https://twitter.com/WhitneyGrenaway" className="social-icon">
          <FaTwitter size={30} style={{ marginRight: '10px' }} />
        </a>
        <a href="https://www.linkedin.com/in/whitney-grenaway-8097a1251/" className="social-icon">
          <FaLinkedin size={30} style={{ marginRight: '10px' }} />
        </a>
        <a href="https://github.com/Grenaway2" className="social-icon">
          <FaGithub size={30} style={{ marginRight: '10px' }} />
        </a>
      </div>
      <div className="footer-text">
        <p>&copy;2023 Whitney Grenaway</p>
        <p></p>
      </div>
    </footer>
  );
}

export default Footer;
