import React from 'react';
import '../styles/Header.css';
import iconUrl from '../image/headerBackground.png'; // Icon image import
import headericon from '../image/headericon.png';
import layerIcon from '../image/layer.png';
import quotientIcon from '../image/quotient.png';
import circoolesIcon from '../image/circle.png';
import hourglassIcon from '../image/hour.png';
import commandIcon from '../image/command.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        {/* Navigation Bar */}
        <nav className="nav">
          <div className="logo"><img src={headericon}/></div>
          <ul className="menu">
            <li>Process</li>
            <li>Benefits</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>FAQ</li>
          </ul>
          <button className="cta-button">Start Now</button>
        </nav>

        {/* Hero Section */}
        <div className="hero-content">
          {/* Smoke background on top of the icon */}
          <div className="icon-background"></div>

          {/* Icon */}
          <img src={iconUrl} alt="Icon" className="hero-icon" />

          {/* Heading */}
          <h1>
            <span className="highlight">Boost</span> Your Brand with Innovative
            <span className="break"><span className="highlight">Digital Marketing</span></span>
          </h1>

          {/* Subheading */}
          <p>
            <span>
              Drive Engagement and Conversions with Advanced Digital
              <span className="break">Marketing Strategies.</span>
            </span>
          </p>

          {/* Buttons */}
          <div className="buttons">
            <button className="start-btn">Start Now</button>
          </div>

          <h3 className="trusted-heading">Trusted By Thousand Companies</h3>
          <div className="icon-bar">
            <div className="icon-item">
              <img src={layerIcon} alt="Layer Icon" />
              <span>Layers</span>
            </div>
            <div className="icon-item">
              <img src={quotientIcon} alt="Quotient Icon" />
              <span>Quotient</span>
            </div>
            <div className="icon-item">
              <img src={circoolesIcon} alt="Circooles Icon" />
              <span>Circooles</span>
            </div>
            <div className="icon-item">
              <img src={hourglassIcon} alt="Hourglass Icon" />
              <span>Hourglass</span>
            </div>
            <div className="icon-item">
              <img src={commandIcon} alt="Command R Icon" />
              <span>Command + R</span>
            </div>
          </div>


        </div>
      </div>
    </header>
  );
};

export default Header;
