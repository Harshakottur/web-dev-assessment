// components/TestimonialSection.js
import React from 'react';
import '../styles/TestimonialSection.css';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

// Import testimonial image and logo
import gymstoryPhoto from '../image/gymstory.jpg';
import gymstoryLogo from '../image/gymstory-logo.png';

const TestimonialSection = () => {
  return (
    <section className="testimonial">
      <p>Testimonial</p>
      <h2 className="testimonial-title">Customer is Our Top <br />Priority</h2>
      <p className="testimonial-subtitle">We survey all of our clients, the results of which go directly<br /> to our CEO.</p>
      <div className="testimonial-content">
        <div className="testimonial-details">
          <div className="company-info">
            <img src={gymstoryLogo} alt="Gymstory logo" className="company-logo" />
            <h3>Gymstory</h3>
          </div>
          <h3 className="testimonial-text">Kornix Is The Best Digital Agency I Have Ever Seen! Highly Recommended!</h3>
          <p className="testimonial-quote">
            "I recently hired Ideapeel for a custom web development project and couldn't be happier with the results. The team was able to bring my unique ideas to life and create a website that truly stands out."
          </p>
          <p className="testimonial-author">Diana Loreza</p>
          <p>Director of GYMSTORY</p>
        </div>
        <div className="testimonial-photo" style={{ backgroundImage: `url(${gymstoryPhoto})` }}></div>
        <div className="arrows">
          <span className="arrow"><IoIosArrowBack /></span>
          <span className="arrow"><IoIosArrowForward /></span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;