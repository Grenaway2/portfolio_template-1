import React from 'react';
import { FaEnvelope, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Social = () => {
  return (
    <div className="social">
      <h2>Socials</h2>

      <a href="mailto:wmgrenaway@webuildweb3.org" className="button">
        <FaEnvelope />
      </a>

      <a href="https://twitter.com/WhitneyGrenaway" className="button">
        <FaTwitter />
      </a>

      <a href="https://www.linkedin.com/in/whitney-grenaway-8097a1251/" className="button">
        <FaLinkedin />
      </a>

      <a href="https://github.com/Grenaway2" className="button">
        <FaGithub />
      </a>
    </div>
  );
}

export default Social;


