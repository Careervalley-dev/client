import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Banner from "../components/EventsPage/Banner";
import Modal from "react-modal";
import { SlCalender } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import {
  FiX,
  FiUser,
  FiPhone,
  FiMail,
  FiMapPin,
  FiBookOpen,
  FiKey,
} from "react-icons/fi";
import Heading from "../components/common/Heading";

Modal.setAppElement("#root");

const EventsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const initialTab = queryParams.get("tab") || "upcoming";

  const [activeTab, setActiveTab] = useState(initialTab);
  const [modal1IsOpen, setModal1IsOpen] = useState(false);
  const [modal2IsOpen, setModal2IsOpen] = useState(false);

  useEffect(() => {
    setActiveTab(queryParams.get("tab") || "upcoming");
  }, [location.search]);

  const upcomingEvents = [
    {
      title: "Upcoming Event 1",
      city: "Kolkata",
      date: "2023-04-15",
      time: "09:00AM - 12:00PM",
      description: "Description of the upcoming event 1.",
      type: "Open House",
    },
    {
      title: "Upcoming Event 2",
      city: "Hyderabad",
      date: "2023-04-20",
      time: "09:00AM - 12:00PM",
      description: "Description of the upcoming event 2.",
      type: "Education Fair",
    },
    {
      title: "Upcoming Event 3",
      city: "Bangalore",
      date: "2023-04-20",
      time: "09:00AM - 12:00PM",
      description: "Description of the upcoming event 2.",
      type: "Campus Visit",
    },
    {
      title: "Upcoming Event 4",
      city: "Hyderabad",
      date: "2023-04-20",
      time: "09:00AM - 12:00PM",
      description: "Description of the upcoming event 2.",
      type: "Campus Visit",
    },
    {
      title: "Upcoming Event 5",
      city: "Hyderabad",
      date: "2023-04-20",
      time: "09:00AM - 12:00PM",
      description: "Description of the upcoming event 2.",
      type: "Seminar",
    },
  ];

  const recentEvents = [
    {
      title: "Recent Event 1",
      city: "Kolkata",
      date: "2023-03-25",
      time: "09:00AM - 12:00PM",
      description: "Description of the recent event 1.",
      type: "Open House",
    },
    {
      title: "Recent Event 2",
      city: "Hyderabad",
      date: "2023-03-30",
      time: "09:00AM - 12:00PM",
      description: "Description of the recent event 2.",
      type: "Education Fair",
    },
    {
      title: "Recent Event 3",
      city: "Bangalore",
      date: "2023-03-30",
      time: "09:00AM - 12:00PM",
      description: "Description of the recent event 2.",
      type: "Classroom Session",
    },
    {
      title: "Recent Event 4",
      city: "Bangalore",
      date: "2023-03-30",
      time: "09:00AM - 12:00PM",
      description: "Description of the recent event 2.",
      type: "Campus Visit",
    },
    {
      title: "Recent Event 5",
      city: "Bangalore",
      date: "2023-03-30",
      time: "09:00AM - 12:00PM",
      description: "Description of the recent event 2.",
      type: "Seminar",
    },
  ];

  const events = activeTab === "upcoming" ? upcomingEvents : recentEvents;

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

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    navigate(`/events?tab=${tab}`);
  };

  return (
    <div className="relative">
      <Banner />
      <div className="container mx-auto px-4 py-12">
        <div className="p-4 bg-white flex flex-col justify-center items-center">
          <Heading normalText="Our" highlightText="Events" />
          {/* <h2 className="text-4xl font-bold font-dosis mb-4 bg-white">Events</h2> */}
          <p className="text-xl text-justify mb-4 px-8 mt-6 font-cat">
            At The Career Valley, each event and initiative is in the direction
            of empowering students. Whatever we do is outside the box and is
            centered around the idea of benefiting students in multifarious
            ways. Below is a summary of our signature events that reinforce our
            vision.
          </p>
        </div>

        <div className="flex justify-center my-12">
          <button
            className={`px-4 py-2 font-dosis rounded-lg ${
              activeTab === "upcoming"
                ? "bg-[#235950] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleTabChange("upcoming")}
          >
            Upcoming Events
          </button>
          <button
            className={`px-4 py-2 ml-4 font-dosis rounded-lg ${
              activeTab === "recent"
                ? "bg-[#235950] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleTabChange("recent")}
          >
            Recent Events
          </button>
        </div>

        <div className="flex justify-center items-center bg-white py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grids-col-3 gap-y-12 gap-x-10">
            {events.map((event, index) => (
              <div
                key={index}
                className="relative flex w-80 flex-col rounded-xl bg-[#e8f1f0] bg-clip-border text-white shadow-xl"
              >
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-black shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
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
                <div className="flex p-6 pt-0 gap-x-4">
                  <button
                    data-ripple-light="true"
                    type="button"
                    onClick={openModal1}
                    className="select-none rounded-lg bg-[#235950] py-3 px-6 text-center align-middle font-dosis text-xs font-bold uppercase text-white shadow-md shadow-[#235950]/20 transition-all hover:shadow-lg hover:shadow-[#235950]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  >
                    Read More
                  </button>
                  <button
                    data-ripple-light="true"
                    type="button"
                    onClick={openModal2}
                    className="select-none rounded-lg bg-[#235950] py-3 px-6 text-center align-middle font-dosis text-xs font-bold uppercase text-white shadow-md shadow-[#235950]/20 transition-all hover:shadow-lg hover:shadow-[#235950]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  >
                    Register now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Modal
          isOpen={modal1IsOpen}
          onRequestClose={closeModal1}
          contentLabel="Event Details"
          className="modal-content-1"
          overlayClassName="modal-overlay-1"
        >
          <div className="flex flex-col justify-between gap-x-10 overflow-y-auto">
            <div className="flex justify-center items-center">
              <img
                src="https://i.postimg.cc/WzNBNPj1/IMG-0932.jpg"
                alt="Event"
                className="w-[700px]"
              />
            </div>
            <div className="">
              <h2 className="lg:text-2xl text-lg font-bold font-dosis">
                TITLE
              </h2>
              <div className="flex flex-col lg:flex-row gap-x-6">
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
              <p className="flex items-center gap-x-2 text-lg font-cat mb-4">
                <FaRegClock className="text-[16px]" />
                Seminar
              </p>
              </div>
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
              <label className="flex items-center space-x-2">
                <FiUser />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="border-b-2 border-[#235950] p-2 w-full placeholder-font-anta"
                />
              </label>
              <label className="flex items-center space-x-2">
                <FiPhone />
                <input
                  type="number"
                  name="number"
                  placeholder="Mobile Number"
                  className="border-b-2 border-[#235950] p-2 w-full"
                />
              </label>
              <label className="flex items-center space-x-2">
                <FiMail />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="border-b-2 border-[#235950] p-2 w-full"
                />
              </label>
              <label className="flex items-center space-x-2">
                <FiKey />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  className="border-b-2 border-[#235950] p-2 w-full"
                />
              </label>
              <label className="flex items-center space-x-2">
                <FiMapPin />
                <input
                  type="text"
                  name="city"
                  placeholder="City You Live In"
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

export default EventsPage;
