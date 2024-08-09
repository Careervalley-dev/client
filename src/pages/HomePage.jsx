import React from "react";
import RegistrationModal from "../components/Homepage/RegistrationModal";
import ContactUs from "../components/Homepage/ContactUs";
import EventsSlider from "../components/Homepage/EventsSlider";
import Banner1 from "../components/Homepage/banner/Banner";
import TimelineComponent from "../components/Homepage/timeline/TimeLine";
import TestimonialCarousel from "../components/Homepage/testimonialCarousel/TestimonialCarousel";
import Marquee from "../components/Homepage/Marquee/Marquee";
// import Orbit from "../components/Homepage/orbit/Orbit";
import { useSelector, useDispatch } from "react-redux";
import Text2 from '../text';


const HomePage = () => {
  const { user, token, isLoggedIn } = useSelector((state) => state.auth);

  return (
    <div className="bg-[]">
      <Banner1 />
      {!isLoggedIn && <RegistrationModal />}
      <TimelineComponent />
      {/* <Orbit /> */}
      <EventsSlider />
      <TestimonialCarousel />
      <Marquee />
      {/* <Text2 /> */}
      {/* <ContactUs /> */}
    </div>
  );
};

export default HomePage;
