import React, { useState } from 'react';
import '../styles/ServicesSection.css';

// Import your icons here
import seoIcon from '../image/SEO.png';
import ppcIcon from '../image/PPC.png';
import contentIcon from '../image/content.png';
import emailIcon from '../image/email.png';
import socialMediaIcon from '../image/social.png';

const ServicesSection = () => {
  // Define state for active service
  const [activeService, setActiveService] = useState(null);

  // Service details, including icons
  const services = [
    { name: 'SEO Marketing', icon: seoIcon, details: 'SEO helps your website rank higher on search engines.' },
    { name: 'PPC', icon: ppcIcon, details: 'PPC allows you to pay for traffic through targeted ads.' },
    { name: 'Content Marketing', icon: contentIcon, details: 'Content marketing focuses on creating valuable content to engage audiences.' },
    { name: 'Email Marketing', icon: emailIcon, details: 'Email marketing nurtures leads and promotes customer engagement.' },
    { name: 'Social Media Management', icon: socialMediaIcon, details: 'Social media management ensures consistent presence across platforms.' },
  ];

  // Function to toggle the active service
  const handleServiceClick = (index) => {
    setActiveService(activeService === index ? null : index);
  };

  return (
    <section className="services-section">
      <h2>Services</h2>
      <p>Strategic services drive digital success with tailored, comprehensive approaches.</p>
      <div className="service-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-item ${activeService === index ? 'active' : ''}`}
            onClick={() => handleServiceClick(index)}
          >
            <div className="icon-placeholder" style={{ backgroundImage: `url(${service.icon})` }}></div>
            <h3>{service.name}</h3>
            {activeService === index && (
              <div className="service-details">
                <p>{service.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
