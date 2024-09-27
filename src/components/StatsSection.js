// components/StatsSection.js
import React from 'react';
import '../styles/StatsSection.css';
import { CiStar } from "react-icons/ci";
import { FcProcess } from "react-icons/fc";
import { TbUsersGroup } from "react-icons/tb";


const StatsSection = () => {
  const items = [
    { icon: <TbUsersGroup />, text: '10,000+ Happy Customers' },
    { icon: <FcProcess />, text: '20,000+ Success Processes' },
    { icon: <CiStar />, text: '10+ Years of Experience' }, 
  ];

  return (
    <section className="stats-section">
      <h2 className="stats-title">Work With New Tech</h2>
      <div className="stats-grid">
        {items.map((item, index) => (
          <div key={index} className="stat-item">
            <div className="stat-icon">
              {item.image ? (
                <div style={{ backgroundImage: `url(${item.image})` }} className="icon-image"></div>
              ) : (
                item.icon // Render the CiStar icon directly
              )}
            </div>
            <p className="stat-description">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
