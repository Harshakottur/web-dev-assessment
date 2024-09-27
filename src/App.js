import React from 'react';
import Header from './components/Header';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUsSection';
import TestimonialSection from './components/TestimonialSection';
import StatsSection from './components/StatsSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <ServicesSection />
      <WhyChooseUs />
      <StatsSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default App;
