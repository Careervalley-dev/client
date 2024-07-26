import React from "react";
import Banner from "../components/Homepage/Banner";
import RegistrationModal from "../components/Homepage/RegistrationModal";
import StreamSlider from "../components/Homepage/streamSlider";
import WelcomeComponent from '../components/Homepage/WelcomeComponent';
import ExplorePrograms from "../components/Homepage/ExplorePrograms";
import TopUniversities from "../components/Homepage/TopUniversities";
import ContactUs from "../components/Homepage/ContactUs";
import ExploreByCity from "../components/Homepage/ExploreByCity";
import Card from "../components/Homepage/Card";
import EventsSlider from "../components/Homepage/EventsSlider";
import Banner1 from "../components/Homepage/banner/Banner";
import TimelineComponent from "../components/Homepage/timeline/TimeLine";
import TimeLine2 from "../components/Homepage/timeline/TimeLine2";
import TestimonialCarousel from "../components/Homepage/testimonialCarousel/TestimonialCarousel";
import OrbitalCircles from "../components/Homepage/orbit/OrbitalCircles";
import Orbit from "../components/Homepage/orbit/Orbit";


const data = [
    {
       stream: 'Management',
       colleges: 10,
       img:"https://i.postimg.cc/T2HwK8tj/Management.png",
       courses: ['MBA', 'BBA', 'Executive MBA'],
    },
    {
       stream: 'Engineering',
       colleges: 15,
       img:"https://i.postimg.cc/9Q2rhdxs/Engineering.png",
       courses: ['BTech/BE', 'Diploma', 'MTech/ME'],
    },
    {
       stream: 'Commerce',
       colleges: 8,
       img:"https://i.postimg.cc/gjpfJ2fc/Commerce.png",
       courses: ['BCom', 'MCOM'],
    },
    {
       stream: 'Arts',
       colleges: 12,
       img: "https://i.postimg.cc/bY6TdJX6/Arts.png",
       courses: ['BA', 'MA'],
    },
    {
       stream: 'Science',
       colleges: 14,
       img:"https://i.postimg.cc/NfmkDx9n/Science.png",
       courses: ['BSc', 'MSc'],
    },
   ];
const HomePage = () => {
  return (
    <div className="bg-[]">
      <Banner1 />
      <RegistrationModal />
      <TimelineComponent />
      <TestimonialCarousel />
      {/* <OrbitalCircles /> */}
      {/* <Orbit /> */}
      {/* <ExploreByCity />
      <ExplorePrograms />
      <StreamSlider data={data} />
      <TopUniversities /> */}
      <EventsSlider />
      <ContactUs />
    </div>
  );
};

export default HomePage;
