import React from 'react';
import { Facebook, Instagram, Linkedin, Globe } from 'lucide-react';
import '../styles/Footer.css';
import headericon from '../image/headericon.png';
import { FaArrowAltCircleRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="landing-page">
      <main className="hero-footer">
        <div className="hero-content-footer">
          <h1>"Stand out online and make an impact"</h1>
          <p className="hero-subtitle-footer">David Smith - CEO of a Tech Startup</p>
          <p className="hero-cta-footer">Jump on a membership and start requesting designs right away!</p>
          <button className="cta-button">
            See Pricing <FaArrowAltCircleRight className="cta-icon" />
          </button>

        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-column">
            <div className="logo"><img src={headericon}/></div>
              <p>Click It - is a leading digital marketing agency dedicated to driving success for businesses online. With expertise in SEO, PPC, social media, content creation, and more, we offer tailored solutions to help businesses in the USA, UK, and Canada succeed with top-tier clients, from start-ups to enterprises.</p>
            </div>
            <div className="footer-column">
              <h3>Our Services</h3>
              <ul>
                <li>SEO Marketing</li>
                <li>Research Topic Trends</li>
                <li>Email Marketing</li>
                <li>Google PPC</li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Our Location</h3>
              <ul>
                <li>USA</li>
                <li>UK</li>
                <li>Canada</li>
                <li>Virtual</li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Contact us</h3>
              <p>info@clickit.com</p>
              <p>(001) 1231 3435</p>
              <div className="social-icons">
                <Facebook size={10} />
                <Instagram size={10} />
                <Linkedin size={10} />
                <Globe size={10} />
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <ul className="footer-nav">
              <li>Process</li>
              <li>Benefits</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>FAQ</li>
            </ul>
            <p className="copyright">&copy; 2024 RajaramanR3 - All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;