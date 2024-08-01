import React from "react";
import RegistrationModal from "../components/Homepage/RegistrationModal";
import ContactUs from "../components/Homepage/ContactUs";
import EventsSlider from "../components/Homepage/EventsSlider";
import Banner1 from "../components/Homepage/banner/Banner";
import TimelineComponent from "../components/Homepage/timeline/TimeLine";
import TestimonialCarousel from "../components/Homepage/testimonialCarousel/TestimonialCarousel";
import Marquee from "../components/Homepage/Marquee/Marquee";
// import Orbit from "../components/Homepage/orbit/Orbit";



const HomePage = () => {
  return (
    <div className="bg-[]">
      <Banner1 />
      <RegistrationModal />
      <TimelineComponent />
      <TestimonialCarousel />
      {/* <Orbit /> */}
      <EventsSlider />
      <Marquee />
      <ContactUs />
    </div>
  );
};

export default HomePage;
