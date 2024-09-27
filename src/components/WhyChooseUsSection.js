import React from 'react';
import '../styles/WhyChooseUsSection.css';

// Sample images
import image1 from '../image/image1.jpg';
import image2 from '../image/image2.jpg';
import image3 from '../image/image3.jpg';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Solutions Tailored Specifically to Your Business Needs',
      description: 'We provide customized solutions for your business needs, ensuring relevance and success.',
      image: image1,
    },
    {
      title: 'Creative Excellence Elevates Every Project',
      description: 'Creative excellence drives our work. From concept to execution, we aim for exceptional results.',
      image: image2,
    },
    {
      title: 'Client Satisfaction is Our Main Focus',
      description: 'Our main goal is your satisfaction, and we work tirelessly to ensure that you are pleased with the results we achieve together.',
      image: image3,
    },
  ];

  return (
    <section className="why-choose-us">
      <h2 className="section-title">Why Choose Us?</h2>
      <div className="reason-grid">
        {reasons.map((reason, index) => (
          <div key={index} className={`reason-item ${index % 2 === 0 ? 'row-reverse' : ''}`}>
            
            <div className="reason-details">
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>
              <a href="#" className="read-more">Read More</a>
            </div>
            <div className="icon" style={{ backgroundImage: `url(${reason.image})` }}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
