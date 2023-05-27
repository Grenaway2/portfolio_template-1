import React from 'react';
import profile from '../assets/profile.png';

const Header = () => {
  const handleButtonClick = () => {
    window.open('mailto:wmgrenaway@webuildweb3.org');
  };

  return (
    <section className="header">
      <img src={profile} alt="Whitney" />

      <div className="header__content">
        <h1>Hi, I'm Whitney</h1>
        <p>Aspiring Blockchain Developer</p>
        <button className="button" onClick={handleButtonClick}>
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default Header;

