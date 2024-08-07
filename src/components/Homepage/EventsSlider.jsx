import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import { SlCalender } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import {
  FiX,
  FiUser,
  FiPhone,
  FiMail,
  FiMapPin,
  FiBookOpen,
  FiKey,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Heading from "../common/Heading";

Modal.setAppElement("#root");

const NextArrow = ({ onClick }) => {
  return (
    <button
      className="absolute flex justify-center items-center right-[10px] top-[-30px] lg:top-4 lg:right-4 bg-[#235950] text-white p-2 rounded-md shadow-lg hover:bg-gray-700 focus:outline-none z-10"
      onClick={onClick}
    >
      <MdKeyboardArrowRight />
    </button>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <button
      className="absolute flex justify-center items-center top-[-30px] right-[60px] lg:top-4 lg:right-16 bg-[#235950] text-white p-2 rounded-md shadow-lg hover:bg-gray-700 focus:outline-none z-10"
      onClick={onClick}
    >
      <MdKeyboardArrowLeft />
    </button>
  );
};

const EventsSlider = () => {
  const [modal1IsOpen, setModal1IsOpen] = useState(false);
  const [modal2IsOpen, setModal2IsOpen] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: (i) => <div className="w-8 h-1 bg-[#235950] mx-1"></div>,
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center mt-4">{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const events = [
    {
      title: "Upcoming Event 1",
      city: "Kolkata",
      date: "2023-04-15",
      time: "09:00AM - 12:00PM",
      description: "Description of the upcoming event 1.",
    },
    {
      title: "Upcoming Event 2",
      city: "Hyderabad",
      date: "2023-04-20",
      time: "09:00AM - 12:00PM",
      description: "Description of the upcoming event 2.",
    },
    {
      title: "Upcoming Event 3",
      city: "Bangalore",
      date: "2023-04-20",
      time: "09:00AM - 12:00PM",
      description: "Description of the upcoming event 2.",
    },
    {
      title: "Upcoming Event 4",
      city: "Hyderabad",
      date: "2023-04-20",
      time: "09:00AM - 12:00PM",
      description: "Description of the upcoming event 2.",
    },
  ];

  const openModal1 = () => {
    setModal1IsOpen(true);
  };

  const closeModal1 = () => {
    setModal1IsOpen(false);
  };

  const openModal2 = () => {
    setModal2IsOpen(true);
  };

  const closeModal2 = () => {
    setModal2IsOpen(false);
  };

  const goToEventsPage = () => {
    navigate("/events");
  };

  return (
    <div>
      <Heading normalText="Our upcoming" highlightText="Events!"/>
      <div className="container h-[600px] flex justify-center items-center lg:mx-auto px-4 relative">
        <div className="flex justify-between items-center mt-8 absolute top-1 lg:top-1 right-[160px] lg:right-[110px]">
          <button
            onClick={goToEventsPage}
            className="flex justify-center items-center bg-[#235950] text-white p-2 rounded-md shadow-lg hover:bg-gray-700 focus:outline-none z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>

        <Slider
          ref={sliderRef}
          {...settings}
          className="lg:py-12 w-[400px] md:w-[768px] lg:w-[1300px]"
        >
          {events.map((event, index) => (
            <div key={index} className="flex justify-center items-center">
              <div className="flex justify-center items-center pt-9 z-99 h-[450px]">
                <div className="relative flex w-60 lg:w-80 flex-col justify-center rounded-xl bg-[#e8f1f0] bg-clip-border text-white shadow-xl">
                  <div className="relative mx-4 -mt-6 h-30 lg:h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-black shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                    <img src="https://i.postimg.cc/WzNBNPj1/IMG-0932.jpg" />
                  </div>
                  <div className="p-6 font-anta">
                    <h5 className="mb-2 text-black block font-dosis text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                      {event.title}
                    </h5>
                    <p className="flex items-center gap-x-2 text-black font-cat text-base font-light leading-relaxed antialiased">
                      <SlCalender /> {event.date}
                    </p>
                    <p className="flex items-center gap-x-2 text-black font-cat text-base font-light leading-relaxed antialiased">
                      <IoLocationOutline />
                      {event.city}
                    </p>
                    <p className="flex items-center gap-x-2 text-black font-cat text-base font-light leading-relaxed antialiased">
                      <FaRegClock />
                      {event.time}
                    </p>
                  </div>
                  <div className=" flex p-6 pt-0 gap-x-4">
                    <button
                      data-ripple-light="true"
                      type="button"
                      onClick={() => openModal1(event)}
                      className="select-none rounded-lg bg-[#235950] py-3 px-4 lg:px-6 text-center align-middle font-dosis text-xs font-bold uppercase text-white shadow-md shadow-[#235950]/20 transition-all hover:shadow-lg hover:shadow-[#235950]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                      Read More
                    </button>
                    <button
                      data-ripple-light="true"
                      type="button"
                      onClick={() => openModal2(event)}
                      className="select-none rounded-lg bg-[#235950] py-3 px-4 lg:px-6 text-center align-middle font-dosis text-xs font-bold uppercase text-white shadow-md shadow-[#235950]/20 transition-all hover:shadow-lg hover:shadow-[#235950]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                      Register now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <Modal
          isOpen={modal1IsOpen}
          onRequestClose={closeModal1}
          contentLabel="Event Details"
          className="modal-content-1"
          overlayClassName="modal-overlay-1"
        >
          <div></div>
          <div className="flex flex-row-reverse justify-between gap-x-10">
            <div>
              <img
                src="https://i.postimg.cc/WzNBNPj1/IMG-0932.jpg"
                alt="kkk"
                className="w-[300px]"
              />
            </div>

            <div className="flex flex-col justify-start">
              <h2 className="lg:text-2xl text-lg font-bold font-dosis">
                TITLE
              </h2>
              <p className="flex items-center gap-x-2 text-lg font-cat mb-4">
                <SlCalender className="text-[16px]" />
                31 DEC 2000
              </p>
              <p className="flex items-center gap-x-2 text-lg font-cat mb-4">
                <IoLocationOutline className="text-[16px]" />
                Bangalore
              </p>
              <p className="flex items-center gap-x-2 text-lg font-cat mb-4">
                <FaRegClock className="text-[16px]" />
                09:00AM - 12:00PM
              </p>
            </div>
          </div>

          <div>
            <p className="text-md text-justify my-4 font-cat">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus necessitatibus neque veniam impedit! Dolores est
              consequuntur reprehenderit error a placeat tempora eum assumenda
              impedit, necessitatibus voluptatibus mollitia, cum officiis nisi.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium vel delectus nesciunt iusto reprehenderit repellendus
              ex quam consequatur quas, quos quisquam consectetur tempora unde
              cum. Impedit blanditiis debitis possimus maxime.
            </p>
            <button
              onClick={closeModal1}
              className="select-none rounded-lg bg-red-600 py-3 px-6 text-center align-middle font-dosis text-xs font-bold uppercase text-white shadow-md shadow-[#235950]/20 transition-all hover:shadow-lg hover:shadow-[#235950]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Close
            </button>
          </div>
        </Modal>

        <Modal
          isOpen={modal2IsOpen}
          onRequestClose={closeModal2}
          contentLabel="Registration Modal"
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          <div className="modal-header">
            <h2 className="font-dosis font-bold text-[24px]">Register Now!</h2>
            <button onClick={closeModal2}>
              <FiX />
            </button>
          </div>
          <div className="modal-body">
            <form className="flex flex-col space-y-4">
              {/* Registration form fields */}
              <label className="flex items-center space-x-2">
                <FiUser />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name."
                  className="border-b-2 border-[#235950] p-2 w-full placeholder-font-anta"
                />
              </label>
              <label className="flex items-center space-x-2">
                <FiPhone />
                <input
                  type="number"
                  name="number"
                  placeholder="Mobile Number."
                  className="border-b-2 border-[#235950] p-2 w-full"
                />
              </label>
              <label className="flex items-center space-x-2">
                <FiMail />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address."
                  className="border-b-2 border-[#235950] p-2 w-full"
                />
              </label>
              <label className="flex items-center space-x-2">
                <FiKey />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your Password."
                  className="border-b-2 border-[#235950] p-2 w-full"
                />
              </label>
              <label className="flex items-center space-x-2">
                <FiMapPin />
                <input
                  type="text"
                  name="city"
                  placeholder="City You Live In."
                  className="border-b-2 border-[#235950] p-2 w-full"
                />
              </label>
              <label className="flex items-center space-x-2">
                <FiBookOpen />
                <input
                  type="text"
                  name="course"
                  placeholder="Event You wanna Register"
                  className="border-b-2 border-[#235950] p-2 w-full"
                />
              </label>
              <button
                type="submit"
                className="bg-[#235950] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Register
              </button>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default EventsSlider;
