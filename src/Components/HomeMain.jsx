import React from "react";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import Home2 from "./Home2";
import AppointmentSection from "./AppointmentSection";
import EmergencySection from "./EmergencySection";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";
import LatestBlogs from "./LatestBlogs";

const HomeMain = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <Home2 />
      <AppointmentSection />
      <EmergencySection />
      <Testimonials />
      <WhyChooseUs />
      <LatestBlogs />
    </div>
  );
};

export default HomeMain;
